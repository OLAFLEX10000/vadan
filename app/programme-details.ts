import redeemerDurations from "./redeemer-durations.json";
import { admissionPolicies, normaliseCourse, type Source } from './admission-policies';

export type ProgrammeRule = { subjects: string; credits: string; directEntry?: string; years?: number; deYears?: number; source: Source };
const science = 'English, Mathematics, Biology, Chemistry, Physics';
const wellSource = admissionPolicies['Wellspring University'].source;
const well = (subjects: string, credits: string, years: number, directEntry?: string, deYears?: number): ProgrammeRule => ({ subjects, credits, years, directEntry, deYears, source: wellSource });
const wellComputing = well('English, Mathematics, Physics; one of Biology/Chemistry/Agricultural Science/Economics/Geography', 'English, Mathematics, Physics, Chemistry; one relevant science subject', 4, 'Two A-Levels including Mathematics and a science; relevant ND; or NCE Mathematics and science.', 3);
const wellBusiness = well('English, Economics; two Social Science/Commercial subjects', 'English, Mathematics, Economics; two approved subjects', 4, 'Relevant A-Levels, diploma, ND or professional intermediate qualification.', 3);
const wellPolitics = well('English, Mathematics, Economics; one Arts/Social Science subject', 'English, Mathematics, Economics; two approved subjects', 4, 'Relevant A-Levels, diploma, ND or NCE.', 3);
const rules: Record<string, Record<string, ProgrammeRule>> = {
  'Wellspring University': {
    'Accounting': well('English, Mathematics, Economics; one Social Science subject', 'English, Mathematics, Economics; two approved subjects', 4, 'Relevant A-Levels, university diploma or ND.', 3),
    'Economics': well('English, Mathematics, Economics; one Social Science subject', 'English, Mathematics, Economics; two approved subjects', 4, 'Relevant A-Levels, university diploma or ND.', 3),
    'Business Administration': wellBusiness, 'Human Resource Management': wellBusiness, 'Hospitality and Tourism Management': wellBusiness, 'Entrepreneurship': wellBusiness,
    'International Relations and Diplomacy': wellPolitics, 'Public Administration': wellPolitics, 'Criminology and Security Studies': wellPolitics,
    'Mass Communication': well('English, Literature; two Arts/Social Science subjects', 'English, Mathematics, Literature; two Arts/Social Science subjects', 4, 'Approved Mass Communication professional diploma or OND.', 3),
    'Computer Science': wellComputing, 'Cyber Security': wellComputing, 'Cybersecurity': wellComputing, 'Software Engineering': wellComputing, 'Information Technology': wellComputing,
    'Microbiology': well('English, Biology, Chemistry; Physics or Mathematics', science, 4, 'Relevant science A-Levels or diploma/ND.', 3),
    'Medical Laboratory Science': well('English, Physics, Chemistry, Biology', science, 5, 'Two relevant science A-Levels.', 4),
    'Nursing Science': well('English, Biology, Chemistry; Physics or Mathematics (as published by Wellspring)', science, 5, 'Licensed RN/RM applicants are considered subject to university requirements.'),
    'Medicine and Surgery': well('English, Biology, Chemistry; Physics or Mathematics (as published by Wellspring)', science, 6, 'Strong PCB A-Levels/JUPEB or a related medical science degree, minimum Second Class Upper.'),
  },
};

// Exceptions are keyed by institution AND exact programme, never a loose "science" match.
const augustine = admissionPolicies['St. Augustine University'].source;
const addAugustine = (names: string[], subjects: string, credits: string, directEntry: string) => names.forEach(name => {
  (rules['St. Augustine University'] ||= {})[name] = { subjects, credits, directEntry, source: augustine };
});
addAugustine(['English Language', 'English'], 'English, Literature; two Arts/Social Sciences', 'English, Literature; two Arts/Social Sciences. Mathematics: pass accepted', 'Two A-Levels including Literature; qualifying NCE/HND considered.');
addAugustine(['Philosophy'], 'English; three Arts subjects', 'English; four relevant subjects. Mathematics: pass accepted', 'Relevant A-Levels, NCE or diploma.');
addAugustine(['Mass Communication'], 'English, Government; two Arts/Social Sciences', 'English, Literature, Government; two relevant credits. Mathematics: pass accepted', 'Relevant A-Levels, NCE, ND or JUPEB.');
addAugustine(['Political Science'], 'English, Government; two Arts/Social Sciences', 'English, Government/History; other relevant credits. Mathematics: pass accepted', 'Relevant A-Levels, NCE, ND or JUPEB.');
addAugustine(['Accounting', 'Business Administration'], 'English, Mathematics, Economics; one Social Science', 'English, Mathematics, Economics; two relevant credits', 'Two A-Levels including Economics.');
addAugustine(['Computer Science', 'Information Technology'], 'English, Mathematics, Physics; Biology/Chemistry/Agricultural Science/Economics/Geography', 'English, Mathematics, Physics; two sciences', 'Relevant science A-Levels; consult the course table for diploma/NCE alternatives.');
addAugustine(['Cyber Security', 'Cybersecurity', 'Software Engineering'], 'English, Mathematics, Physics, Chemistry', 'English, Mathematics, Physics; two sciences', 'Two A-Levels from Mathematics, Physics, Chemistry.');
addAugustine(['Computer Engineering'], 'English, Mathematics, Physics, Chemistry', 'English, Mathematics, Physics, Chemistry; Further Mathematics or Technical Drawing', 'Two A-Levels including Mathematics and Physics.');

addAugustine(['Biology', 'Microbiology'], 'English, Biology, Chemistry; one science', science, 'Two relevant science A-Levels; qualifying NCE/OND considered.');
addAugustine(['Biochemistry', 'Biotechnology'], 'English, Biology, Chemistry; Physics or Mathematics', science, 'Relevant science A-Levels; consult the programme table for diploma alternatives.');
addAugustine(['Chemistry'], 'English, Chemistry; two of Physics/Mathematics/Biology', science, 'Chemistry A-Level plus Physics/Mathematics/Biology; qualifying HND considered.');
addAugustine(['Physics'], 'English, Physics, Mathematics; Chemistry or Biology', 'English, Chemistry, Physics, Mathematics; one relevant credit', 'Physics and Mathematics A-Levels.');
addAugustine(['Mathematics'], 'English, Mathematics, Physics; Chemistry/Biology/Geography/Economics', 'English, Mathematics, Physics; two approved science credits', 'Mathematics and Physics/Chemistry A-Levels; relevant NCE considered.');
addAugustine(['Fisheries and Aquaculture'], 'English, Chemistry, Biology/Agricultural Science; Physics/Mathematics', 'English, Mathematics, Chemistry, Biology/Agricultural Science; one science', 'Two relevant science A-Levels; qualifying NCE/ND considered.');
addAugustine(['Banking and Finance'], 'English, Mathematics; one Social Science and one other subject', 'English, Mathematics, Economics; two relevant credits', 'Relevant A-Levels, NCE Merit, or the professional foundation examinations listed by the university.');
addAugustine(['Economics'], 'English, Mathematics, Economics; Government/History/Literature/French/CRS/IRS. Commerce or Financial Accounting also accepted', 'English, Mathematics, Economics; two Arts/Social Science credits', 'Economics A-Level plus an approved second subject.');
rules['Wellspring University']['Hospitality and Tourism Studies'] = wellBusiness;

const edo = admissionPolicies['Edo University Iyamho'].source;
const addEdo = (names: string[], subjects: string, credits: string, directEntry?: string) => names.forEach(name => {
  (rules['Edo University Iyamho'] ||= {})[name] = { subjects, credits, directEntry, source: edo };
});
addEdo(['Nursing', 'Medical Laboratory Science', 'Anatomy', 'Physiology', 'Medicine and Surgery'], 'English, Biology, Chemistry, Physics', science);
addEdo(['Biochemistry', 'Microbiology', 'Science Laboratory Science'], 'English, Biology, Chemistry; Physics or Mathematics', science);
addEdo(['Chemical Engineering', 'Civil Engineering', 'Computer Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Mechatronics Engineering', 'Mining Engineering', 'Production Engineering'], 'English, Mathematics, Physics, Chemistry', 'English, Mathematics, Physics, Chemistry; one science');
addEdo(['Accounting', 'Business Administration', 'Banking and Finance'], 'English, Mathematics, Economics; one Social Science', 'English, Mathematics, Economics/Accounts/Commerce; two Social Sciences');
addEdo(['Economics'], 'English, Economics, Mathematics; Government/History/Geography/Literature/French/CRK/IRK', 'English, Mathematics, Economics; two relevant credits');
addEdo(['English'], 'English, Literature; one Arts subject and one Arts/Social Science', 'English, Mathematics, Literature; two Arts/Social Sciences');
addEdo(['Entrepreneurship'], 'English, Economics, Mathematics; one Social Science/Commercial subject', 'English, Mathematics, Economics; one science and one Social Science/Commercial subject');
addEdo(['History and International Studies'], 'English, History/Government; two Arts/Social Sciences', 'English, Mathematics, History/Government; two relevant credits');
addEdo(['Mass Communication'], 'English; three Arts/Social Sciences', 'English, Mathematics; three Social Sciences');
addEdo(['Peace Studies and Conflict Resolution'], 'English; three Arts/Social Sciences', 'English, Mathematics, Government/History; two Arts/Social Sciences');
addEdo(['Political Science and Public Administration'], 'English, Government/History; two Social Sciences/Arts', 'English, Mathematics, Government/History; two Arts/Social Sciences');
addEdo(['Computer Science', 'Software Engineering', 'Cyber Security'], 'English, Mathematics, Physics; Biology/Chemistry/Agricultural Science/Economics/Geography', 'English, Mathematics, Physics; two sciences');
addEdo(['Plant Biology and Biotechnology'], 'English, Biology, Chemistry; Agricultural Science or Physics', science);
addEdo(['Animal and Environmental Biology'], 'English, Biology; two of Physics/Chemistry/Mathematics/Agricultural Science', 'English, Mathematics, Biology, Chemistry; one science');
addEdo(['Physics with Electronics'], 'English, Physics, Mathematics; Chemistry/Biology/Agricultural Science', 'English, Physics, Chemistry, Mathematics; one science');
addEdo(['Industrial Chemistry'], 'English, Chemistry, Mathematics; Physics/Biology/Agricultural Science', 'English, Mathematics, Chemistry, Physics, Biology/Agricultural Science');
// Edo's Law row lists five UTME subjects; do not silently invent a corrected combination.
addEdo(['Law'], 'The official Law row lists more than four subjects. Confirm the valid four-subject combination with Admissions before registration.', 'English, Literature, Mathematics; two relevant credits');

const redeemer = admissionPolicies["Redeemer's University"].source;
for (const name of ['Biochemistry', 'Human Anatomy', 'Human Physiology']) {
  (rules["Redeemer's University"] ||= {})[name] = { subjects: 'English, Biology, Chemistry, Physics', credits: science, years: 4, directEntry: 'Three science A-Level passes in Biology, Chemistry and Physics at one sitting, in addition to the O’Level requirements.', source: redeemer };
}

export function getProgrammeRule(institution: string, course: string) {
  return Object.entries(rules[institution] || {}).find(([name]) => normaliseCourse(name) === normaliseCourse(course))?.[1];
}

const nuc = (file: string): Source => ({ title: 'NUC national curriculum — duration baseline', url: `https://www.nuc.edu.ng/wp-content/uploads/2026/03/${file}.pdf`, session: 'CCMAS 2023, hosted 2026' });
export function getProgrammeDuration(institution: string, course: string, faculty: string) {
  const rule = getProgrammeRule(institution, course);
  const redeemerYears = institution === "Redeemer's University" ? (redeemerDurations as Record<string, number>)[normaliseCourse(course).replace('nursing science', 'nursing').replace('electrical and electronics engineering', 'electrical and electronic engineering')] : undefined;
  if (redeemerYears) return { text: `${redeemerYears} academic years (UTME)`, note: course === 'Physiotherapy' ? 'The university’s page lists five years, while NUC’s DPT curriculum specifies six. Confirm the applicable cohort and curriculum with Admissions.' : 'Duration published in this university’s programme requirements.', source: redeemer };
  if (rule?.years) return { text: `${rule.years} academic years (UTME)${rule.deYears ? `; ${rule.deYears} years (Direct Entry)` : ''}`, note: 'Published university programme duration.', source: rule.source };
  const c = normaliseCourse(course);
  const national = (text: string, file: string) => ({ text, note: 'National curriculum baseline, not a confirmed duration for this university. Entry level and the university’s approved curriculum can change the duration. Internship, professional training and NYSC are additional where applicable.', source: nuc(file) });
  if (institution === 'Nigerian Defence Academy' || institution === 'Nigerian Police Academy' || institution === 'National Open University of Nigeria' || institution === 'Federal College of Education (Technical), Omoku') return { text: 'Confirm the duration for this admission route', note: 'The programme includes an institution-specific training or entry structure. Use the official prospectus; a conventional university duration is not assumed.', source: admissionPolicies[institution].source };
  if (/^(medicine and surgery|dentistry|dental science|dental surgery)$/.test(c)) return national('6 academic years (UTME)', 'Medicine-and-Dentistry-CCMAS-2023-FINAL');
  if (c === 'veterinary medicine') return national('6 academic years (UTME)', 'Veterinary-Medicine-CCMAS-2023-FINAL');
  if (/^(law|common and islamic law|common law|islamic law)$/.test(c)) return national('5 academic years (UTME)', 'Law-ALL');
  if (/^(nursing|nursing science)$/.test(c)) return national('5 academic years (UTME); 4 years at 200-level Direct Entry', 'Allied-Health-Sciences-2023');
  if (/optometry/.test(c)) return national('6 academic years for the OD degree (UTME)', 'Allied-Health-Sciences-2023');
  if (/physiotherapy/.test(c)) return national('6 academic years for the DPT degree; confirm the degree route offered', 'Allied-Health-Sciences-2023');
  if (c === 'pharmacy') return national('6 academic years for PharmD; confirm whether the university offers PharmD or B.Pharm', 'Pharmacy-and-Pharmaceutical-Sciences-CCMAS-2023-FINAL');
  if (/^(computer science|software engineering|cyber security|cybersecurity|information technology|information systems|data science)$/.test(c)) return national('4 academic years (UTME); 3 years at 200-level Direct Entry', 'Computing-CCMAS-2023-FINAL');
  if (/engineering/.test(c) && !/education/.test(c)) return { text: '5 academic years (UTME); 4 years at 200-level Direct Entry', note: 'National engineering curriculum baseline; confirm the institution’s entry route.', source: { title: 'NUC Engineering curriculum', url: 'https://www.nuc.edu.ng/wp-content/uploads/2022/12/Engineering-CCMAS.pdf' } };
  if (/^(architecture|architectural technology|landscape architecture)$/.test(c)) return national('4 academic years for the first degree; professional postgraduate training is separate', 'Architecture-CCMAS-2023-FINAL');
  if (/^(anatomy|human anatomy|physiology|human physiology)$/.test(c)) return national('4 academic years (UTME)', 'Basic-Medical-Sciences-CCMAS-FINAL-December-26-2022');
  if (/arts|humanities/i.test(faculty)) return national('Normally 4 academic years (UTME)', 'Arts-CCMAS-2023-FINAL');
  if (/social|management|administration|business/i.test(faculty)) return national('Normally 4 academic years (UTME)', /social/i.test(faculty) ? 'Social-Sciences-CCMAS-FINAL-2023-A' : 'Administration-and-Management');
  return { text: 'Programme duration awaiting university confirmation', note: 'A duration is not inferred from the course name. Consult this institution’s programme handbook for the applicable degree and entry route.', source: admissionPolicies[institution]?.source };
}
