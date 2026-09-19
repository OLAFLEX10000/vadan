const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const cache = new Map();
function load(file) {
  const full = path.resolve(__dirname, '..', file);
  if (cache.has(full)) return cache.get(full).exports;
  const mod = new Module(full, module);
  mod.filename = full; mod.paths = Module._nodeModulePaths(path.dirname(full));
  cache.set(full, mod);
  const originalRequire = mod.require.bind(mod);
  mod.require = name => {
    if (name.startsWith('.') && !name.endsWith('.json')) {
      for (const ext of ['.ts', '.tsx']) {
        const target = path.resolve(path.dirname(full), name + ext);
        if (fs.existsSync(target)) return load(path.relative(path.resolve(__dirname, '..'), target));
      }
    }
    return originalRequire(name);
  };
  mod._compile(ts.transpileModule(fs.readFileSync(full, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText, full);
  return mod.exports;
}
const { admissionPolicies: policies, calculateVerifiedAggregate: aggregate, calculateFunaabOlevel: funaab, getSittingRequirement: sittings } = load('app/admission-policies.ts');
const { getProgrammeRule: programme, getProgrammeDuration: duration } = load('app/programme-details.ts');
test('all 51 listed institutions have an explicit source and no fallback formula', () => {
  const page = fs.readFileSync(path.resolve(__dirname, '../app/page.tsx'), 'utf8');
  const names = [...page.matchAll(/\{ name: "([^"]+)", location:/g)].map(m => m[1]);
  assert.equal(names.length, 51);
  names.forEach(name => { assert.ok(policies[name], name); assert.ok(new URL(policies[name].source.url).hostname); });
  assert.equal(aggregate(undefined, '300', '80', '20'), null);
});
test('verified formula maxima, zero and input validation', () => {
  for (const policy of Object.values(policies)) {
    const rule = policy.aggregate; if (!rule) continue;
    assert.equal(rule.utmeWeight + rule.postWeight + rule.olevelWeight, 100);
    assert.equal(aggregate(rule, '400', String(rule.postMax), String(rule.olevelWeight)), 100);
    assert.equal(aggregate(rule, '0', '0', '0'), 0);
    for (const score of ['-1', '401', 'NaN', 'Infinity']) assert.equal(aggregate(rule, score, '0', '0'), null);
    assert.equal(aggregate(rule, '', '', ''), 0);
    assert.equal(aggregate(rule, '300', '', ''), 300 / 400 * rule.utmeWeight);
    if (rule.postWeight) assert.equal(aggregate(rule, '', String(rule.postMax), ''), rule.postWeight);
    if (rule.olevelWeight) assert.equal(aggregate(rule, '', '', String(rule.olevelWeight)), rule.olevelWeight);
  }
  assert.equal(aggregate(policies['Kwara State University'].aggregate, '300', '', '24'), 76.5);
  assert.equal(aggregate(policies['University of Ilorin'].aggregate, '300', '80', '16'), 77.5);
  assert.equal(aggregate(policies['University of Lagos'].aggregate, '300', '24', '16'), 77.5);
  assert.equal(aggregate(policies['Obafemi Awolowo University'].aggregate, '280', '30', '8.8'), 73.8);
});
test('FUNAAB applies the combined-result deduction before weighting', () => {
  const a = Array(5).fill('A1');
  assert.equal(funaab(a, '1'), 50);
  assert.ok(Math.abs(funaab(a, '2') - 48.333333333333336) < 1e-10);
  assert.equal(funaab(['A1', 'A1', 'A1', 'A1', 'AGRIC'], '1'), 40);
  assert.equal(funaab(['A1', 'A1', '', 'A1', 'A1'], '1'), null);
  assert.equal(funaab(a, ''), null);
});
test('sitting exceptions remain institution and course specific', () => {
  assert.equal(sittings('University of Lagos', 'Accounting', '').maximum, 1);
  assert.equal(sittings('University of Ibadan', 'Biochemistry', '').maximum, 1);
  assert.equal(sittings('University of Ibadan', 'Political Science', '').maximum, 2);
  assert.match(sittings('University of Ibadan', 'Political Science', '').text, /six/);
  assert.equal(sittings('University of Benin', 'Medicine and Surgery', '').maximum, 1);
  assert.equal(sittings('University of Benin', 'Computer Science', '').maximum, 2);
  assert.equal(sittings('Osun State University', 'Nursing', '').maximum, 1);
  assert.equal(sittings('University of Ilorin', 'Pharmacy', '').maximum, null);
  assert.equal(sittings('Caritas University', 'Computer Science', '').maximum, 2);
});
test('programme details distinguish school exceptions and degree routes', () => {
  assert.match(programme('St. Augustine University', 'English').credits, /pass accepted/);
  assert.equal(programme('University of Lagos', 'English'), undefined);
  assert.match(duration('Wellspring University', 'Medicine and Surgery', '').text, /^6/);
  assert.match(duration('Wellspring University', 'Software Engineering', '').text, /^4/);
  assert.match(duration('University of Lagos', 'Computer Engineering', '').text, /^5/);
  assert.match(duration("Redeemer's University", 'Physiotherapy', '').note, /Confirm/);
  assert.doesNotMatch(duration('Example', 'Computer Science Education', '').text, /^4/);
});
test('requirement and calculator panels render source links without invented scores', () => {
  const React = require('react'); const { renderToStaticMarkup } = require('react-dom/server');
  const { ProgrammeRequirements, AggregateCalculator } = load('app/admission-panels.tsx');
  const html = renderToStaticMarkup(React.createElement(ProgrammeRequirements, { institution: 'Wellspring University', course: 'Medicine and Surgery', faculty: 'College of Medicine', showDuration: true }));
  assert.match(html, /6 academic years/); assert.match(html, /ONE sitting/); assert.match(html, /wellspringuniversity.edu.ng/);
  const unknown = renderToStaticMarkup(React.createElement(AggregateCalculator, { institution: 'Caritas University', course: 'Computer Science', faculty: '' }));
  assert.match(unknown, /not been verified/); assert.doesNotMatch(unknown, /does not offer Post/);
});

test('FUNAAB updates for partial grades and applies a selected sitting deduction', () => {
  assert.equal(funaab(['', '', '', '', ''], '', true), 0);
  assert.equal(funaab(['A1', '', '', '', ''], '', true), 10);
  assert.equal(funaab(['A1', '', '', '', ''], '2', true), 25 / 3);
  assert.equal(funaab(['', '', '', '', ''], '2', true), 0);
  assert.equal(funaab(['D7', 'E8', 'F9', '', ''], '', true), 0);
});
