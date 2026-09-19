// Official admissions sources reviewed on 18 September 2026.
// An absent formula, sitting rule or course detail means unverified, never a default policy.
export type Source = { title: string; url: string; session?: string };
export type AggregateRule = {
  utmeWeight: number;
  postWeight: number;
  postMax: number;
  olevelWeight: number;
  source: Source;
};
export type AdmissionPolicy = {
  source: Source;
  maxSittings?: 1 | 2;
  minimumCredits?: number;
  singleSittingCourses?: string[];
  singleSittingFaculties?: string[];
  sittingNote?: string;
  deNote?: string;
  screeningNote?: string;
  minimumUtme?: number;
  courseCutoffs?: Record<string, number>;
  aggregate?: AggregateRule;
};
export const normaliseCourse = (name: string) => {
  const value = name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
  const aliases: Record<string, string> = { nursing: 'nursing science', 'dental surgery': 'dentistry', 'dental science': 'dentistry' };
  return aliases[value] || value;
};
const source = (url: string, session?: string): Source => ({ title: "Official admission requirements", url, session });
const medicine = ["Medicine and Surgery"];

export const admissionPolicies: Record<string, AdmissionPolicy> = {
  "University of Lagos": {
    source: source("https://unilag.edu.ng/important-notice-on-2026-2027-post-utme-screening-exercise/", "2026/2027"),
    maxSittings: 1, minimumUtme: 200,
    aggregate: { utmeWeight: 50, postWeight: 30, postMax: 30, olevelWeight: 20, source: { title: "Official assessment weights", url: "https://admissions.unilag.edu.ng/notices.html", session: "2025/2026 (latest weights located)" } },
  },
  "University of Ibadan": {
    source: source("https://ui.edu.ng/news/post-utmedirect-entry-screening-prospective-candidates-20262027-admission-exercise", "2026/2027"),
    maxSittings: 2, minimumUtme: 200,
    aggregate: { utmeWeight: 50, postWeight: 50, postMax: 100, olevelWeight: 0, source: { title: "UI published explanation of selection", url: "https://repository.ui.edu.ng/server/api/core/bitstreams/1985d469-00be-4d1f-a51e-aa619c984e34/content", session: "2024/2025 basis, described in 2025; current-session confirmation required" } },
    singleSittingCourses: ["Medicine and Surgery", "Dentistry", "Biochemistry", "Physiology", "Human Nutrition and Dietetics", "Medical Laboratory Science", "Nursing Science", "Physiotherapy", "Environmental Health Science", "Pharmacy"],
    singleSittingFaculties: ["College of Medicine", "Faculty of Pharmacy", "Faculty of Basic Medical Sciences", "Faculty of Clinical Sciences", "Faculty of Dentistry", "Faculty of Public Health"],
    sittingNote: "Outside the College of Medicine and Faculty of Pharmacy, two-sitting applicants need at least six relevant credits; one-sitting applicants need at least five.",
    deNote: "The 2026/2027 notice does not accept IJMB or JUPEB for Direct Entry. Check the programme regulations for the accepted Cambridge A-Level, NCE, ND, HND or degree qualification.",
  },
  "University of Nigeria, Nsukka": { source: source("https://www.unn.edu.ng/2026-2027-screening-exercise-for-admission/", "2026/2027"), minimumUtme: 160, screeningNote: "The current notice requires UTME and O’Level screening. A current numerical weighting was not located; the old UTME/Post-UTME average is not applied." },
  "Federal University of Technology, Minna": { source: source("https://futminna.edu.ng/2026-2027-pre-admission-screening-exercise-2026-utme-de/", "2026/2027"), maxSittings: 2, deNote: "In addition to the relevant O’Level credits, the notice accepts a minimum of Lower Credit for ND/HND or Merit for NCE. Programme-specific conditions still apply." },
  "Benson Idahosa University": { source: source("https://biu.edu.ng/admissions/undergraduate-admission/"), maxSittings: 2, singleSittingCourses: medicine, screeningNote: "The undergraduate admissions page states that the university does not conduct a post-UTME screening exercise." },
  "Obafemi Awolowo University": {
    source: source("https://oauife.edu.ng/wp-content/uploads/2023/05/OAU-ILE-IFE-Admission-Requiremants-into-Part-1-and-DE-for-Faculties-1.pdf", "Published 2023 programme requirements"),
    aggregate: { utmeWeight: 50, postWeight: 40, postMax: 40, olevelWeight: 10, source: { title: "SmartJamb: OAU aggregate calculation (unofficial guide)", url: "https://smartjamb.com/oau-aggregate-calculation/" } },
  },
  "Covenant University": { source: source("https://backendrepo.covenantuniversity.edu.ng/server/api/core/bitstreams/9a8c0bfa-99cd-4278-b8e5-f576fa7ad748/content", "Student handbook"), maxSittings: 2, screeningNote: "Use the university’s CUSAS admission assessment. A public aggregate formula was not verified." },
  "Federal University of Agriculture, Abeokuta": { source: source("https://admission.funaab.edu.ng/2026/eligibility.php", "2026/2027"), maxSittings: 2, aggregate: { utmeWeight: 50, postWeight: 0, postMax: 0, olevelWeight: 50, source: { title: "FUNAAB official composite grading guidance", url: "https://helpdesk.funaab.edu.ng/knowledgebase.php?article=30", session: "Published guidance (article dated 2017); confirm for the current session" } }, screeningNote: "The helpdesk specifies a one-point deduction from the raw O’Level total when combining results. Agricultural Science used instead of Biology earns no O’Level points." },
  "Federal University of Technology, Akure": { source: source("https://css.futa.edu.ng/home/news/1399", "2026/2027"), maxSittings: 2, minimumUtme: 180 },
  "Ebonyi State University": { source: source("https://ebsu.edu.ng/2025-2026-post-utme-application-screening/", "2025/2026") },
  "Salem University": { source: source("https://salemuniversity.edu.ng/how-to-apply/"), maxSittings: 2 },
  "Crescent University": { source: source("https://cuab.edu.ng/undergraduate-degree/"), maxSittings: 2, sittingNote: "The published undergraduate page also requires the five credits to have been obtained within the last five years." },
  "Federal University of Petroleum Resources, Effurun": { source: source("https://fupre.edu.ng/fupre-announces-supplementary-post-utme-screening-for-2025-2026-academic-session/", "2025/2026"), maxSittings: 2 },
  "University of Abuja": { source: source("https://www.uniabuja.edu.ng/admission"), maxSittings: 2 },
  "Federal University of Technology, Owerri": { source: source("https://resources.futo.edu.ng/wp-content/uploads/2025/09/2025-2026-FUTO-Post-UTME-ADVERT-Supplementary.pdf", "2025/2026"), screeningNote: "FUTO’s historical 2020/2021 formula was 0.15 × UTME + 0.10 × Post-UTME (both out of 400), not 50:50. That historical formula is not assumed to apply to the current session." },
  "University of Ilorin": {
    source: source("https://www.unilorin.edu.ng/admissions_/undergraduate/general-requirements/"), maxSittings: 2,
    singleSittingCourses: ["Medicine and Surgery", "Nursing Science", "Physiotherapy"],
    sittingNote: "The general admissions page names Medicine, Nursing and Physiotherapy as one-sitting programmes. A separate 2025 admissions briefing also names Optometry, Pharmacy and Computer Engineering; those programmes need confirmation against the current course regulations.",
    aggregate: { utmeWeight: 50, postWeight: 30, postMax: 100, olevelWeight: 20, source: { title: "Official screening weights", url: "https://www.unilorin.edu.ng/wp-content/uploads/2026/06/Pre-admission-screening-2026.pdf", session: "2026/2027" } },
  },
  "Veritas University": { source: source("https://www.veritas.edu.ng/college-of-medicine") },
  "Kaduna State University": { source: source("https://kasu.edu.ng/apply-to-kasu/undergraduate/") },
  "Ajayi Crowther University": { source: source("https://acu.edu.ng/wp-content/uploads/2026/05/Student_Application_Guide.pdf", "2026/2027") },
  "Ekiti State University": { source: source("https://studentsaffairs.eksu.edu.ng/wp-content/uploads/2024/03/students-code-of-conduct2.pdf", "2024 handbook"), maxSittings: 2 },
  "University of Port Harcourt": { source: source("https://www.uniport.edu.ng/wp-content/uploads/2025/01/General_Regulations_and_Statement_of_Academic_Policies.pdf", "General academic regulations, hosted 2025"), maxSittings: 2 },
  "University of Calabar": { source: source("https://www.unical.edu.ng/news-item.php?id=7", "2026/2027"), singleSittingCourses: medicine },
  "Caritas University": { source: source("https://caritasuni.edu.ng/admission_info.pdf"), maxSittings: 2 },
  "Tai Solarin University of Education": { source: source("https://tasued.edu.ng/web/wp-content/uploads/2026/06/Final-Advert-for-2026-2027-Admission.pdf", "2026/2027"), maxSittings: 2, sittingNote: "The detailed programme table also lists six-credit requirements for some two-sitting applicants. Confirm your course-specific row at tasued.edu.ng/undergraduate-admission/. English and Mathematics credits are compulsory." },
  "Akwa Ibom State University": { source: source("https://aksu.edu.ng/web/") },
  "National Open University of Nigeria": { source: source("https://nou.edu.ng/admissions/"), screeningNote: "NOUN uses its own programme admission requirements. No UTME-based aggregate is calculated here." },
  "Enugu State University of Science and Technology": { source: source("https://portal.esut.edu.ng/supAdvert.pdf", "2025/2026"), minimumUtme: 160 },
  "Michael Okpara University of Agriculture": { source: source("https://portal.mouau.edu.ng/info/details", "2026/2027"), minimumUtme: 150, screeningNote: "MOUAU explicitly weights both O’Level results and the number of sittings. The notice does not disclose the numerical weights; a generic 50:50 formula would be misleading." },
  "Redeemer's University": { source: source("https://run.edu.ng/post-utme-criteria/"), maxSittings: 2 },
  "Wellspring University": { source: source("https://www.wellspringuniversity.edu.ng/admission-requirements"), maxSittings: 2, singleSittingCourses: medicine },
  "University of Agriculture, Makurdi": { source: source("https://ugadm.uam.edu.ng/admission_requirement.php", "2026/2027"), maxSittings: 2 },
  "Bayero University": { source: source("https://www.buk.edu.ng/application_requirements"), maxSittings: 2 },
  "Lagos State University": { source: source("https://services.lidc.lasu.edu.ng/admissionscreening/", "2026/2027"), minimumUtme: 195 },
  "Osun State University": { source: source("https://uniosun.edu.ng/news/2026-2027-admissions-exercise-post-utme-screening/", "2026/2027"), maxSittings: 2, singleSittingCourses: ["Medicine and Surgery", "Nursing Science", "Law", "Common and Islamic Law"], minimumUtme: 160, courseCutoffs: { "Medicine and Surgery": 200, "Nursing Science": 200, "Law": 200, "Common and Islamic Law": 200 } },
  "Ignatius Ajuru University of Education": { source: source("https://iaue.edu.ng/wp-content/uploads/2025/08/UTME_Screening_Modalities.pdf", "2025/2026") },
  "Paul University": { source: source("https://www.pauluniversity.edu.ng/study/undergraduate"), maxSittings: 2 },
  "Kwara State University": {
    source: source("https://kwasu.edu.ng/undergraduates-studies/", "2026/2027"), maxSittings: 2, singleSittingCourses: medicine,
    aggregate: { utmeWeight: 70, postWeight: 0, postMax: 0, olevelWeight: 30, source: { title: "Official 70:30 screening formula", url: "https://kwasu.edu.ng/undergraduates-studies/", session: "2026/2027" } },
  },
  "Federal College of Education (Technical), Omoku": { source: source("https://fcetomoku.edu.ng/2025-2026-admission/", "2026/2027 degree admission"), maxSittings: 2, screeningNote: "This is the college’s degree admission route, not its NCE route. The degree notice specifies UTME scores of 160/150; the old NCE score of 100 is not used." },
  "Nigerian Police Academy": { source: source("https://www.polac.edu.ng/RC-12_Admission", "2025/2026, Regular Course 12"), maxSittings: 2, minimumCredits: 6, minimumUtme: 180, screeningNote: "Selection includes the aptitude test, physical screening, medical screening and interview. An academic aggregate alone does not establish eligibility." },
  "Samuel Adegboyega University": { source: source("https://gvu.edu.ng/") },
  "Rhema University": { source: source("https://rhemauniversity.edu.ng/admissions") },
  "Ondo State University of Science and Technology": { source: source("https://eduportal.oaustech.edu.ng/index.php/item/496-oaustech-2026-2027-admissions-screening-exercise-for-utme-and-direct-entry-candidates.html", "2026/2027"), maxSittings: 2, singleSittingCourses: ["Nursing Science", "Medical Laboratory Science", "Public Health", "Public Health Science"], minimumUtme: 150 },
  "Federal University, Otuoke": { source: source("https://fuotuoke.edu.ng/wp-content/uploads/2024/12/FUO-UNDERGRADUATE-STUDENT-HANDBOOK-Revised-Edition-2024.pdf", "2024 handbook"), maxSittings: 2 },
  "Nigerian Defence Academy": { source: source("https://www.ndaapplications.net/", "78 Regular Course"), screeningNote: "Admission includes academic, physical and Armed Forces Selection Board requirements. A civilian university aggregate is not applicable." },
  "Delta State University": { source: source("https://portal.delsu.edu.ng/FAQ"), maxSittings: 2 },
  "Federal University, Lafia": { source: source("https://dmis.fulafia.edu.ng/2026/07/06/fulafia-commences-post-utme-screening-registration-for-2026-2027-admission/", "2026/2027"), maxSittings: 2, minimumUtme: 170, courseCutoffs: { "Human Anatomy": 200, "Human Physiology": 200, "Nursing Science": 210, "Radiography": 210, "Medical Laboratory Science": 220, "Pharmacy": 220, "Medicine and Surgery": 230 }, deNote: "The screening notice requires a minimum of Merit or Lower Credit for DE, subject to the chosen programme’s requirements." },
  "University of Jos": { source: source("https://www.unijos.edu.ng/registration-procedures-and-cut-marks-unijos-post-utmede-screening-exercise", "2025/2026") },
  "St. Augustine University": { source: source("https://www.augustineuniversity.edu.ng/Content?head=Admission+Instructions&read=10"), maxSittings: 2 },
  "University of Benin": { source: source("https://www.uniben.edu/admission_policy.html"), maxSittings: 2, singleSittingCourses: medicine },
  "Godfrey Okoye University": { source: source("https://gouni.edu.ng/fill-admission-form/") },
  "Edo University Iyamho": { source: source("https://edouniversity.edu.ng/admissions/undergraduate?trf=true", "2026/2027"), maxSittings: 2, singleSittingCourses: medicine, deNote: "IJMB/JUPEB: Medicine and Law require at least 16 points; Nursing requires at least 10 with no F grade; other programmes generally require at least 5 with no F grade. Check the course table for other accepted qualifications." },
};

export function getSittingRequirement(institution: string, course: string, faculty: string) {
  const policy = admissionPolicies[institution];
  const c = normaliseCourse(course);
  if (institution === 'Kaduna State University' && ['medical laboratory science', 'radiography'].includes(c)) return { maximum: 2, text: `UTME applicants need five credits in English, Mathematics, Biology, Chemistry and Physics, in up to two sittings.${c === 'radiography' ? ' The CBRS route has a separate one-sitting requirement.' : ''}`, source: source(c === 'radiography' ? 'https://kasu.edu.ng/wp-content/uploads/2026/02/B-RADIOGRAPHY-HANDBOOK-1.pdf' : 'https://kasu.edu.ng/wp-content/uploads/2024/11/BMLS-Student-Handbook-KASU-Updated-1.pdf') };
  if (institution === 'Ajayi Crowther University' && c === 'economics') return { maximum: 2, text: 'Five relevant credits at one sitting, or six at two sittings.', source: source('https://acu.edu.ng/faculty-of-social-sciences/') };
  if (institution === 'Ajayi Crowther University' && faculty === 'Faculty of Education') return { maximum: 2, text: 'Five relevant credits, including English and Mathematics, in up to two sittings.', source: source('https://acu.edu.ng/faculty-of-education/') };
  if (institution === 'Obafemi Awolowo University' && faculty === 'Faculty of Science') return { maximum: 2, text: 'At least five approved subject credits in up to two sittings.', source: source('https://science.oauife.edu.ng/undergraduate/') };
  if (institution === 'Godfrey Okoye University' && c === 'industrial chemistry') return { maximum: 2, text: 'Five required subject credits in up to two sittings.', source: source('https://gouni.edu.ng/wp-content/uploads/2025/09/BSc-Industrial-Chemistry.pdf') };
  if (institution === "University of Ilorin" && ["optometry and vision science", "optometry", "pharmacy", "computer engineering"].includes(normaliseCourse(course))) return { maximum: null, text: policy.sittingNote!, source: policy.source };
  const one = policy?.maxSittings === 1 || policy?.singleSittingCourses?.some(c => normaliseCourse(c) === normaliseCourse(course)) || policy?.singleSittingFaculties?.includes(faculty);
  if (one) return { maximum: 1, text: "The required O’Level credits must be obtained at ONE sitting.", source: policy.source };
  if (policy?.maxSittings === 2) return { maximum: 2, text: `Up to TWO sittings under the published general rule. At least ${policy.minimumCredits || 5} relevant credits are required. ${policy.sittingNote || "Programme-specific exceptions must also be satisfied."}`, source: policy.source };
  return { maximum: null, text: "A current sitting limit for this programme has not been verified. Check the linked official admission requirements before combining results.", source: policy?.source };
}

export function calculateVerifiedAggregate(rule: AggregateRule | undefined, jamb: string, post: string, olevel: string): number | null {
  if (!rule) return null;
  const inputs: [string, number][] = [[jamb, 400]];
  if (rule.postWeight) inputs.push([post, rule.postMax]);
  if (rule.olevelWeight) inputs.push([olevel, rule.olevelWeight]);
  if (inputs.some(([v, max]) => !Number.isFinite(Number(v)) || Number(v) < 0 || Number(v) > max)) return null;
  return Number(jamb) / 400 * rule.utmeWeight + (rule.postWeight ? Number(post) / rule.postMax * rule.postWeight : 0) + (rule.olevelWeight ? Number(olevel) : 0);
}

export function calculateFunaabOlevel(grades: string[], sittings: string, partial = false): number | null {
  const points: Record<string, number> = { A1: 6, B2: 5, B3: 4, C4: 3, C5: 2, C6: 1, AGRIC: 0 };
  if (partial) {
    if (grades.length !== 5 || !['', '1', '2'].includes(sittings) || grades.some(g => !(g in points) && !['', 'D7', 'E8', 'F9'].includes(g))) return null;
    return Math.max(0, grades.reduce((sum, grade) => sum + (points[grade] || 0), 0) - (sittings === '2' ? 1 : 0)) * 5 / 3;
  }
  if (grades.length !== 5 || !['1', '2'].includes(sittings) || grades.some(g => !(g in points))) return null;
  return (grades.reduce((sum, grade) => sum + points[grade], 0) - (sittings === '2' ? 1 : 0)) * 5 / 3;
}
