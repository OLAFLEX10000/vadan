import { SourceLink } from './admission-panels';
import type { Source } from './admission-policies';
import records from './institution-guide-data.json';

type GuideFact = { text: string; source?: Source };
type InstitutionRecord = {
  fees: GuideFact;
  extras: GuideFact;
  aid?: GuideFact;
  books?: GuideFact;
  note?: GuideFact;
};

const guides: Record<string, InstitutionRecord> = records;

function GuideSection({ title, fact }: { title: string; fact: GuideFact }) {
  return <section className="requirement-block">
    <h3>{title}</h3>
    <p>{fact.text}</p>
    <SourceLink source={fact.source} />
  </section>;
}

export function InstitutionGuide({ institution, location }: { institution: string; location: string }) {
  const guide = guides[institution];
  if (!guide) return <article className="requirements-card programme-guide"><h2>{institution}</h2><p>Institution funding information has not yet been verified. Contact the institution’s Bursary or Student Affairs office.</p></article>;
  return <article className="requirements-card programme-requirements programme-guide institution-guide">
    <div className="requirements-header"><span>Costs & financial support</span><h2>{institution}</h2><span>{location}</span></div>
    <p className="verification-note">Reviewed 19 September 2026. Figures apply only to the stated session and student category. Confirm your current bill before payment.</p>
    <GuideSection title="Tuition & fees" fact={guide.fees} />
    <GuideSection title="Books & study materials" fact={guide.books || {
      text: 'A current complete textbook budget has not been verified for this institution. Ask your department for the required reading list, practical manuals and equipment, then check library access before buying. Do not assume a library fee covers personal textbooks.',
    }} />
    <GuideSection title="Scholarships, grants & financial aid" fact={guide.aid || {
      text: 'A current institution-specific scholarship or grant offer was not verified. Ask Student Affairs about merit awards, financial-need support, state bursaries and donor-funded opportunities, including eligibility and the next application dates.',
    }} />
    <div className="requirement-block">
      <h3>External funding opportunities</h3>
      <p>The Federal Scholarship Board publishes Nigerian Scholarship and Education Bursary awards. Check the current call for eligible institutions, courses, study levels and deadlines; availability at this school is not assumed.</p>
      <SourceLink source={{ title: 'Federal Scholarship Board: schemes and eligibility', url: 'https://education.gov.ng/federal-scholarships-board/' }} />
      <SourceLink source={{ title: 'Official scholarship application portal', url: 'https://scholarship.education.gov.ng/' }} />
    </div>
    <GuideSection title="Extra fees: labs, technology & activities" fact={guide.extras} />
    {guide.note && <GuideSection title="Also worth knowing" fact={guide.note} />}
  </article>;
}
