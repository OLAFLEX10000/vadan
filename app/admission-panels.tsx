'use client';
import { useState } from 'react';
import { admissionPolicies, calculateVerifiedAggregate, calculateFunaabOlevel, getSittingRequirement, type Source } from './admission-policies';
import { getProgrammeDuration, getProgrammeRule } from './programme-details';
import { getPreviousSubjectCombination } from './previous-subject-combinations';
import { getGuideCompetition } from './programme-guide-data';

export function SourceLink({ source }: { source?: Source }) {
  return source ? <a className="admission-source" href={source.url} target="_blank" rel="noopener noreferrer">{source.title}{source.session ? ` · ${source.session}` : ''} ↗</a> : null;
}
export function ProgrammeRequirements({ institution, course, faculty, showDuration = false }: { institution: string; course: string; faculty: string; showDuration?: boolean }) {
  const policy = admissionPolicies[institution];
  const rule = getProgrammeRule(institution, course);
  const previousSubjects = getPreviousSubjectCombination(institution, course);
  const sitting = getSittingRequirement(institution, course, faculty);
  const duration = getProgrammeDuration(institution, course, faculty);
  return <div className="requirements-card programme-requirements">
    <div className="requirements-header"><span>{institution}</span><strong>{course}</strong>{faculty && <span>{faculty}</span>}</div>
    {showDuration && <div className="requirement-block duration-block"><span className="requirement-label">Study duration in Nigeria</span><strong>{duration.text}</strong><p>{duration.note}</p><SourceLink source={duration.source} /></div>}
    <div className="requirement-block"><span className="requirement-label">O’Level sittings</span><p>{sitting.text}</p><SourceLink source={sitting.source} /></div>
    <div className="requirement-block"><span className="requirement-label">Required O’Level subjects</span><p>{rule ? `Credit passes: ${rule.credits}. See the official course table for accepted alternatives and waivers.` : previousSubjects.oLevel}</p></div>
    <div className="requirement-block"><span className="requirement-label">UTME subjects</span><p>{rule?.subjects || previousSubjects.jambSubjects.join(', ')}</p></div>
    <div className="requirement-block"><span className="requirement-label">Direct Entry</span><p>{rule?.directEntry || policy?.deNote || 'Accepted qualifications, grades and entry level must be confirmed in the university’s regulations for this programme.'}</p>{rule?.directEntry && policy?.deNote && <p>{policy.deNote}</p>}</div>
    {policy?.screeningNote && <div className="requirement-block"><span className="requirement-label">Screening</span><p>{policy.screeningNote}</p></div>}
    <SourceLink source={rule?.source || policy?.source} />
  </div>;
}

export function AggregateCalculator({ institution, course, faculty }: { institution: string; course: string; faculty: string }) {
  const [jamb, setJamb] = useState('');
  const [post, setPost] = useState('');
  const [grades, setGrades] = useState(['', '', '', '', '']);
  const [sittings, setSittings] = useState('');
  const isFunaab = institution === 'Federal University of Agriculture, Abeokuta';
  const isOau = institution === 'Obafemi Awolowo University';
  const funaabSubjects = /management/i.test(faculty) ? ['English', 'Mathematics', 'Economics', 'Best approved relevant subject 1', 'Best approved relevant subject 2'] : ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];
  const policy = admissionPolicies[institution];
  const rule = policy?.aggregate;
  const subjects = isOau ? ['English Language', 'Relevant subject 2', 'Relevant subject 3', 'Relevant subject 4', 'Relevant subject 5'] : isFunaab ? funaabSubjects : course === 'Accounting'
    ? ['English Language', 'Mathematics', 'Economics', 'Government', 'Commerce']
    : ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];
  // Restore the previous grade-entry scale while retaining the researched aggregate weights.
  const gradePoints: Record<string, number> = institution === 'Kwara State University' || isOau
    ? { A1: 10, B2: 9, B3: 8, C4: 7, C5: 6, C6: 5 }
    : { A1: 4, B2: 3.6, B3: 3.2, C4: 2.8, C5: 2.4, C6: 2 };
  const computedOlevel = isFunaab ? calculateFunaabOlevel(grades, sittings, true)
    : grades.reduce((sum, grade) => sum + (gradePoints[grade] || 0), 0) / (5 * gradePoints.A1) * (rule?.olevelWeight || 0);
  const total = calculateVerifiedAggregate(rule, jamb, post, computedOlevel === null ? '' : String(computedOlevel));
  const cutoff = policy?.courseCutoffs?.[course] ?? policy?.minimumUtme;
  const merit = getGuideCompetition(institution, course);
  if (!rule) return <div className="requirements-card"><div className="score-title">{institution} screening</div><p>{policy?.screeningNote || 'A numerical aggregate formula for the current admission session has not been verified on the university’s public pages. Check your official screening portal for the assessed score.'}</p><p className="verification-note">No estimated score is shown using an assumed formula.</p><SourceLink source={policy?.source} /></div>;
  const field = (label: string, max: number, value: string, set: (value: string) => void) => <label>{label} / {max}<input type="text" inputMode="decimal" placeholder="Enter score" value={value} aria-invalid={value !== '' && (!Number.isFinite(Number(value)) || Number(value) < 0 || Number(value) > max)} onChange={event => {
    const next = event.target.value;
    if (next === '' || /^\d+(\.\d*)?$/.test(next)) set(next === '' ? '' : Number(next) > max ? String(max) : next);
  }} /></label>;
  return <div className="verified-calculator">
    <div className="score-title">{institution} aggregate calculator</div>
    <p className="verification-note">UTME {rule.utmeWeight}%{rule.postWeight ? ` + Post-UTME ${rule.postWeight}%` : ''}{rule.olevelWeight ? ` + O’Level ${rule.olevelWeight}%` : ''}. Applies to {rule.source.session || 'the linked assessment rules'}.</p>
    <div className="score-grid">{field('UTME', 400, jamb, setJamb)}{rule.postWeight > 0 && field('Post-UTME', rule.postMax, post, setPost)}</div>
    {isOau && <p className="verification-note">Use your best five relevant O’Level subjects for {course}. A1=10, B2=9, B3=8, C4=7, C5=6, C6=5; total points ÷ 5 gives up to 10 marks. Aggregate = UTME ÷ 8 + Post-UTME (out of 40) + O’Level points ÷ 5.</p>}
    {rule.olevelWeight > 0 && <><div className="waec-heading"><span>WAEC / O&apos;Level subjects</span><small>Select your grade.</small></div><div className="waec-grid">{subjects.map((subject, index) => <label key={subject}>{subject}<select value={grades[index]} onChange={event => setGrades(grades.map((grade, i) => i === index ? event.target.value : grade))}><option value="">Grade</option>{['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9'].map(grade => <option key={grade}>{grade}</option>)}{isFunaab && subject === 'Biology' && <option value="AGRIC">Agriculture substitution (0 points, only where accepted)</option>}</select></label>)}</div>{isFunaab && <><label className="verification-note">Number of O’Level sittings<select className="entry-mode-select" value={sittings} onChange={event => setSittings(event.target.value)}><option value="">Select sittings</option><option value="1">One</option><option value="2">Two</option></select></label><p className="verification-note">A1=6, B2=5, B3=4, C4=3, C5=2, C6=1. For combined results, select the better grade in each required subject; one point is deducted before multiplying by 5/3. Only use an Agriculture substitution where the programme permits it.</p></>}</>}
    <div className="comparison" aria-live="polite"><div><span>Aggregate / 100</span><strong>{total === null ? '—' : total.toFixed(2)}</strong></div>{cutoff !== undefined && <div><span>Screening UTME minimum</span><strong>{cutoff}</strong></div>}{total === null ? <p>Enter scores within the stated range.</p> : merit.score !== undefined ? <p>{course} merit cutoff ({merit.source.session}): {merit.score}/100. <SourceLink source={merit.source} /></p> : null}</div>
    <SourceLink source={rule.source} />
  </div>;
}
