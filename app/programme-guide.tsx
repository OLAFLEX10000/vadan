import { SourceLink } from './admission-panels';
import { curriculumSource, getGuideCompetition, getGuideDuration, getGuideMarket, getGuideProfile } from './programme-guide-data';

export function ProgrammeGuide({ institution, course, faculty }: { institution: string; course: string; faculty: string }) {
  const profile = getGuideProfile(course, faculty);
  const duration = getGuideDuration(institution, course, faculty, profile);
  const competition = getGuideCompetition(institution, course);
  const market = profile ? getGuideMarket(profile) : undefined;
  return <article className="requirements-card programme-requirements programme-guide">
    <div className="requirements-header"><span>{institution}</span><h2>{course}</h2>{faculty && <span>{faculty}</span>}</div>
    <div className="requirement-block"><h3>What this course is about</h3><p>{profile?.meaning || 'This is a group of programmes rather than a single named degree. Its subjects, careers and duration depend on the individual programme offered by the university.'}</p></div>
    <div className="requirement-block duration-block"><h3>Duration</h3><strong>{duration.text}</strong><p>{duration.route}</p><SourceLink source={duration.source} /></div>
    {profile && <>
      <div className="requirement-block"><h3>What you’ll study</h3><p>{profile.study}</p><SourceLink source={curriculumSource(profile.discipline)} /></div>
      <div className="requirement-block"><h3>Career paths</h3><ul>{profile.careers.map(career => <li key={career}>{career}</li>)}</ul></div>
      <div className="requirement-block"><h3>Job market</h3><p>{market?.text}</p><SourceLink source={market?.source} /></div>
      <div className="requirement-block"><h3>How competitive is it?</h3><p>{profile.competition}</p><p>{competition.text}</p><SourceLink source={competition.source} /></div>
    </>}
  </article>;
}
