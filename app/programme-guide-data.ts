import { type Source, normaliseCourse } from './admission-policies';
import { getProgrammeRule } from './programme-details';
import guideMerit from './programme-guide-merit.json';
import redeemerDurations from './redeemer-durations.json';

// Research checked 19 September 2026. Degree-route durations are kept separate
// from university overrides: a national curriculum is not a university prospectus.
const curriculumFiles = {
  computing: 'Computing-CCMAS-2023-FINAL',
  engineering: 'Engineering-Technology-CCMAS-2023-FINAL',
  agriculture: 'Agriculture-2023',
  health: 'Allied-Health-Sciences-2023',
  medicine: 'Medicine-and-Dentistry-CCMAS-2023-FINAL',
  basicMedical: 'Basic-Medical-Sciences-CCMAS-FINAL-December-26-2022',
  pharmacy: 'Pharmacy-and-Pharmaceutical-Sciences-CCMAS-2023-FINAL',
  architecture: 'Architecture-CCMAS-2023-FINAL',
  environment: 'Environmental-Sciences-CCMAS-2023-FINAL',
  business: 'Administration-and-Management',
  arts: 'Arts-CCMAS-2023-FINAL',
  media: 'Communication-and-Media-Studies-CCMAS-2023-FINAL',
  science: 'Sciences-CCMAS-2023-FINAL',
  social: 'Social-Sciences-CCMAS-FINAL-2023-A',
  law: 'Law-ALL',
  veterinary: 'Veterinary-Medicine-CCMAS-2023-FINAL',
  education: 'Education-CCMAS-2023-New',
};
type Discipline = keyof typeof curriculumFiles;
export const curriculumSource = (discipline: Discipline): Source => ({
  title: `NUC ${discipline.replace(/([A-Z])/g, ' $1').toLowerCase()} curriculum`,
  url: `https://www.nuc.edu.ng/wp-content/uploads/2026/03/${curriculumFiles[discipline]}.pdf`,
  session: 'CCMAS 2023',
});
const jobberman: Source = { title: 'Jobberman: Nigerian employer skills priorities', url: 'https://www.jobberman.com/discover/student-job-market-trends-what-employers-are-looking-for-2025', session: '2025' };
const agricultureJobs: Source = { title: 'Jobberman: Nigeria’s informal economy', url: 'https://www.jobberman.com/discover/jobberman-report-on-nigeria-informal-sector', session: '2024' };
const digitalJobs: Source = { title: 'NITDA: 3 Million Technical Talent programme', url: 'https://3mtt.nitda.gov.ng/' };
const healthJobs: Source = { title: 'WHO: Nigeria health workforce profile', url: 'https://ahop.afro.who.int/download/health-workforce-nigeria-health-system-and-services-profile/', session: '2025' };
const futureJobs: Source = { title: 'World Economic Forum: global jobs outlook', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/', session: '2025–2030; global outlook' };
export const competitionSource: Source = { title: 'JAMB: programme demand and available places', url: 'https://jamb.gov.ng/PDFs/2024/POLICY_2024_Final_18_July_2024.pdf', session: '2024 policy meeting' };

type Profile = {
  id: string; match: RegExp; discipline: Discipline; years: number | null;
  meaning: string; study: string; careers: string[]; competition: string;
};
const profiles: Profile[] = [];
function add(id: string, match: RegExp, discipline: Discipline, years: number | null, meaning: string, study: string, careers: string, competition: string) {
  profiles.push({ id, match, discipline, years, meaning, study, careers: careers.split('; '), competition });
}

// Specific programmes precede broader families; education programmes are resolved separately.
add('medicine', /^(medicine and surgery|medicine surgery|community medicine|internal medicine|surgery)$/, 'medicine', 6,
  'Medicine studies how the human body works, how disease develops, and how clinicians diagnose, treat and prevent illness. Training combines biomedical science with supervised care of patients.',
  'Anatomy, physiology, pathology, pharmacology, clinical examination, medicine, surgery, paediatrics and obstetrics, followed by hospital rotations.',
  'Medical officer after internship and registration; Specialist doctor after residency; Clinical researcher; Public-health practitioner with further training',
  'JAMB identifies medicine among programmes attracting concentrated applicant demand. Clinical training places limit intake. After graduation, housemanship and residency are additional competitive stages.');
add('dentistry', /^(dentistry|dental science|dentistry and dental surgery|dentistry dental surgery)$/, 'medicine', 6,
  'Dentistry is the clinical study of the teeth, mouth, jaws and related tissues. It combines diagnosis and prevention with procedures that restore oral health and function.',
  'Oral anatomy, dental materials, oral pathology, restorative dentistry, periodontology, oral surgery and supervised patient treatment.',
  'Dentist after internship and registration; Community oral-health practitioner; Dental specialist after further training; Dental researcher',
  'Laboratory facilities and supervised clinical placements constrain training capacity. Practical dexterity, diagnostic skill and postgraduate training influence progression into specialist work.');
add('nursing', /^nursing( science)?$/, 'health', 5,
  'Nursing focuses on assessing patients, planning and delivering care, monitoring recovery, and supporting people and families through illness and health promotion.',
  'Human biology, adult and child nursing, maternal health, mental health, community care, clinical decision-making and supervised placements.',
  'Registered nurse following professional qualification; Community-health nurse; Occupational-health nurse with relevant training; Nurse educator after further study',
  'Nursing is one of the high-demand choices highlighted by JAMB. Clinical placements and professional training capacity affect intake. Registration, practical competence and specialty experience matter when competing for jobs.');
add('pharmacy', /pharmacy|pharmaceut|pharmacognosy|drug research/, 'pharmacy', null,
  'Pharmacy connects the science of medicines with their safe use. It covers drug discovery, formulation, quality, supply and the clinical decisions involved in treating patients with medicines.',
  'Medicinal chemistry, pharmaceutics, pharmacology, pharmacognosy, therapeutics, pharmacy law and clinical placements.',
  'Hospital pharmacist after internship and registration; Community pharmacist; Pharmaceutical production or quality officer; Regulatory-affairs associate',
  'Clinical and laboratory training make this a demanding professional route. Industrial and regulatory jobs also attract chemistry and life-science graduates; placements and relevant practical experience help distinguish applicants.');
add('physiotherapy', /physiotherapy|medical rehabilitation/, 'health', null,
  'Physiotherapy helps people recover movement and physical function affected by injury, disability or disease. Treatment uses assessment, exercise, education and physical rehabilitation techniques.',
  'Movement science, anatomy, therapeutic exercise, musculoskeletal and neurological rehabilitation, cardiorespiratory care and clinical placements.',
  'Physiotherapist after professional qualification; Rehabilitation practitioner; Sports physiotherapist with specialist experience; Rehabilitation researcher',
  'Training requires repeated practical assessment and patient contact. Hospital, sports and private-practice posts reward clinical experience and focused rehabilitation skills.');
add('optometry', /optometry/, 'health', 6,
  'Optometry concerns vision, eye examination and the detection and management of visual problems. It includes prescribing optical corrections and recognising conditions that need referral.',
  'Optics, ocular anatomy, vision science, contact lenses, binocular vision, low-vision care and supervised clinical work.',
  'Optometrist after professional qualification; Community eye-care practitioner; Low-vision practitioner; Optical-industry specialist',
  'Clinical accuracy and practical patient-care skills are central. Opportunities span clinics and optical businesses; specialist training and access to equipment influence career progression.');
add('medical-lab', /medical laboratory/, 'health', 5,
  'Medical Laboratory Science uses tests on blood, tissue and other patient samples to support diagnosis, treatment and disease monitoring.',
  'Clinical chemistry, haematology, medical microbiology, histopathology, blood transfusion, quality control and clinical laboratory practice.',
  'Medical laboratory scientist after registration; Diagnostic-laboratory quality officer; Blood-bank scientist; Clinical research laboratory associate',
  'This professional laboratory route requires reliable practical performance and quality assurance. Employment depends on registered practice, laboratory experience and the tests an employer provides.');
add('radiography', /radiography|medical radiography/, 'health', 5,
  'Radiography produces and evaluates medical images used to diagnose illness and injury; radiation science also underpins radiotherapy and radiation protection.',
  'Imaging physics, anatomy, patient positioning, radiation safety, radiographic techniques and supervised clinical imaging.',
  'Diagnostic radiographer after registration; Radiotherapy radiographer with relevant training; Imaging applications specialist; Imaging research associate',
  'Clinical placements and access to imaging equipment shape training capacity. Experience with specific imaging systems and careful patient-safety practice help in specialist job applications.');
add('dental-tech', /dental technology/, 'health', 5,
  'Dental Technology designs and manufactures dental appliances, including dentures, crowns and orthodontic devices, from a clinician’s prescription.',
  'Dental anatomy, materials, prosthodontic techniques, laboratory design, digital fabrication and quality control.',
  'Dental technologist after professional qualification; Dental laboratory technician; Digital dental design specialist; Dental materials sales specialist',
  'Employers value precision and a portfolio of practical laboratory work. Digital design and fabrication skills help with competition for specialist laboratory posts.');
add('prosthetics', /prosthetics|orthotics/, 'health', 5,
  'Prosthetics and Orthotics develops artificial limbs and supportive devices that help people move, recover function or manage physical impairments.',
  'Biomechanics, anatomy, materials, device design, fabrication, fitting and rehabilitation teamwork.',
  'Prosthetics and orthotics practitioner after qualification; Rehabilitation-device technologist; Assistive-technology designer; Clinical fabrication specialist',
  'This is a specialised market centred on rehabilitation services and device manufacture. Practical fabrication, patient assessment and supervised experience are particularly valuable.');
add('public-health', /public health|community health/, 'health', 4,
  'Public Health studies how to prevent disease and improve health across whole communities. It uses population data, prevention programmes and health policy rather than focusing only on individual treatment.',
  'Epidemiology, biostatistics, disease prevention, health promotion, programme evaluation and community fieldwork.',
  'Public-health programme assistant; Monitoring and evaluation officer; Health-promotion officer; Epidemiology researcher after further training',
  'NGO and public-health posts also attract statistics, nursing and social-science graduates. Data analysis, fieldwork and programme reporting help applicants compete; advanced epidemiology roles often require postgraduate study.');
add('environmental-health', /environmental health/, 'health', 5,
  'Environmental Health examines how water, food, waste, housing and workplace conditions affect human health and how those risks can be controlled.',
  'Sanitation, food hygiene, water quality, environmental toxicology, occupational health, inspections and public-health legislation.',
  'Environmental-health officer after professional qualification; Food-safety officer; Water and sanitation project officer; Workplace health and safety practitioner',
  'Practical inspection and risk-assessment experience matter. Government recruitment, consultancy projects and industrial compliance work have different entry processes and funding cycles.');
add('nutrition', /nutrition|dietetics/, 'health', null,
  'Nutrition studies how food and nutrients affect health. Dietetics applies nutritional assessment and dietary planning to the management of health conditions.',
  'Human metabolism, food composition, nutritional assessment, community nutrition, diet therapy and practical placements.',
  'Nutrition programme officer; Food-industry nutrition associate; Clinical dietitian after required professional training; Nutrition researcher',
  'Clinical dietetic practice requires the appropriate professional route. Community and industry posts reward field experience, clear communication and evidence-based nutritional assessment.');
add('anatomy', /^(human )?anatomy( and cell biology)?$/, 'basicMedical', 4,
  'Anatomy studies the structure of the human body, from cells and tissues to organs and body systems. It is a foundation for biomedical teaching and research.',
  'Gross anatomy, histology, embryology, neuroanatomy, microscopy and research methods.',
  'Biomedical research assistant; Anatomy laboratory demonstrator; Histology research technician; Academic anatomist after postgraduate study',
  'Research and university teaching roles commonly require postgraduate qualifications. This degree alone does not qualify a graduate to practise as a medical doctor.');
add('physiology', /^(human )?physiology$/, 'basicMedical', 4,
  'Physiology investigates how the body’s organs and systems function and how they respond to exercise, illness and changes in the environment.',
  'Cardiovascular, respiratory, renal, endocrine and nervous-system function, laboratory measurement and experimental design.',
  'Biomedical research assistant; Clinical research coordinator; Laboratory technical officer; Physiology lecturer after postgraduate study',
  'Specialist research roles favour postgraduate study and laboratory experience. Clinical careers require their own professional qualifications.');
add('pharmacology', /^pharmacology$/, 'health', 4,
  'Pharmacology investigates how drugs act on living systems, including their useful effects, unwanted effects and the relationship between dose and response.',
  'Receptor biology, pharmacokinetics, toxicology, experimental methods and drug evaluation.',
  'Drug research assistant; Clinical-trial associate; Pharmacovigilance associate; Pharmaceutical scientific representative',
  'Research jobs often require advanced laboratory training. Pharmacology is a scientific degree; registration as a pharmacist requires a pharmacy qualification.');
add('veterinary', /veterinary/, 'veterinary', 6,
  'Veterinary Medicine covers animal health, disease prevention and treatment, and the links between animal, human and environmental health.',
  'Animal anatomy, pathology, microbiology, surgery, medicine, herd health, food hygiene and clinical placements.',
  'Veterinary surgeon after registration; Livestock-health practitioner; Veterinary public-health officer; Veterinary research scientist',
  'Clinical training is intensive. Companion-animal practice, livestock work and public veterinary services require different practical strengths; specialist roles need further training.');
add('biomedical', /biomedical technology|health information|health science$/, 'health', null,
  'This field applies scientific and technical methods to healthcare services, including clinical equipment, health information or laboratory support according to the named degree route.',
  'Health science foundations, healthcare systems, relevant technical methods, ethics and practical placements.',
  'Healthcare technical support officer; Health-data or equipment support associate; Hospital project assistant; Research support officer',
  'These titles cover distinct qualifications. Employers assess the specific technical training and professional registration attached to the degree, rather than the broad health-science label.');

add('cybersecurity', /cyber|data security/, 'computing', 4,
  'Cybersecurity protects computer systems, networks and information against unauthorised access, disruption and misuse. It combines technical investigation with risk management.',
  'Networks, operating systems, secure coding, cryptography, digital forensics, incident response and security governance.',
  'Security operations analyst; Cybersecurity risk analyst; Digital forensics assistant; Penetration tester with demonstrated practical skills',
  'Applicants compete on practical ability as well as qualifications. Documented lab work, networking knowledge and supervised security experience help; many security roles expect prior IT experience.');
add('software', /^software engineering$/, 'computing', 4,
  'Software Engineering is the disciplined design, construction, testing and maintenance of software systems. It focuses on making software reliable and usable over its lifetime.',
  'Programming, requirements analysis, software architecture, databases, testing, version control and team development projects.',
  'Software developer; Quality assurance engineer; Application support engineer; DevOps engineer after relevant experience',
  'Entry-level developers compete with computing graduates and self-taught candidates. Working applications, readable code, testing and teamwork provide stronger evidence than a degree title alone.');
add('data', /data science|artificial intelligence|biostatistics|statistics and data/, 'computing', 4,
  'This field turns data into explanations, predictions and decisions. Data science combines statistics and programming; artificial intelligence develops systems that perform tasks such as recognition, prediction and language processing.',
  'Probability, statistics, linear algebra, programming, data management, machine learning, evaluation and responsible use of data.',
  'Data analyst; Business intelligence analyst; Junior data scientist; Machine-learning engineer with strong software skills',
  'Employers need evidence of statistical reasoning, clean data workflows and useful projects. Entry-level analyst roles are a more direct starting point than specialised AI research jobs.');
add('information-systems', /information systems?|management information/, 'computing', 4,
  'Information Systems connects organisational needs with technology. It studies how people, processes, data and software work together in businesses and public services.',
  'Systems analysis, databases, business processes, information management, project delivery and enterprise applications.',
  'Business systems analyst; ERP support analyst; Database support officer; Technology project coordinator',
  'Applicants compete with both business and computing graduates. Clear requirements documents, SQL, process modelling and practical knowledge of enterprise software are useful differentiators.');
add('it', /information technology|information.*communication (technology|science)|communication technology|telecommunication science/, 'computing', 4,
  'Information and communication technology concerns installing, operating and supporting the systems people use to store information and communicate.',
  'Networking, operating systems, databases, cloud services, web technologies, service management and information security.',
  'IT support specialist; Network administrator; Cloud support associate; Systems administrator',
  'Practical troubleshooting and service experience matter at entry level. Certifications can support an application when they are backed by real networking and systems skills.');
add('computer-science', /computer science|computer statistics|computer\/statistics|computer science and informatics/, 'computing', 4,
  'Computer Science studies computation: how problems can be expressed as algorithms, how computers execute them, and how reliable systems can be built.',
  'Algorithms, programming, discrete mathematics, computer architecture, operating systems, databases, networks and software projects.',
  'Software developer; Data analyst with statistical skills; Systems analyst; Computing researcher after further study',
  'The job market extends beyond one degree title. Projects, internships, problem solving and communication help graduates compete for software and data roles.');

add('biomedical-engineering', /biomedical engineering/, 'engineering', 5,
  'Biomedical Engineering uses engineering to develop and maintain technology for diagnosis, treatment and rehabilitation.',
  'Electronics, mechanics, physiology, biomaterials, medical instrumentation, device design and safety.',
  'Biomedical equipment engineer; Clinical engineering associate; Medical-device design engineer; Equipment applications specialist',
  'Hospitals and equipment suppliers value hands-on maintenance and safety knowledge. Product development may require specialist postgraduate work and experience with regulated devices.');
add('computer-engineering', /computer engineering|electronics and computer engineering|computer science and engineering/, 'engineering', 5,
  'Computer Engineering designs the hardware and embedded software inside digital devices, connecting electronic circuits with computing systems.',
  'Digital logic, electronics, microprocessors, embedded programming, computer architecture and networking.',
  'Embedded systems engineer; Hardware design engineer; Network systems engineer; Robotics or IoT developer',
  'A portfolio of working hardware and embedded projects is valuable. Local equipment support and automation roles differ from the smaller market for advanced chip design.');
add('civil-engineering', /civil.*engineering|structural engineering|water resources and environmental engineering|^environmental engineering$/, 'engineering', 5,
  'Civil Engineering designs and manages infrastructure such as buildings, roads, bridges, drainage and water systems, with attention to safety and long-term performance.',
  'Structures, geotechnics, surveying, hydraulics, transportation, construction materials and engineering design.',
  'Graduate civil engineer; Site engineer; Structural design assistant; Water or transport engineering consultant',
  'Recruitment follows construction and infrastructure spending. Site experience, design software and the professional registration pathway matter for progression and independent responsibility.');
add('electrical-engineering', /electrical|electronic engineering|telecommunication.*engineering|information and communication engineering/, 'engineering', 5,
  'This engineering field develops electrical power, electronic circuits and communication systems, from energy conversion to the transmission of information.',
  'Circuit analysis, electronics, signals, control, power systems, communications and laboratory design projects.',
  'Electrical design engineer; Power systems engineer; Telecommunications engineer; Industrial maintenance engineer',
  'Power, telecoms and industrial roles require different specialisms. Practical fault finding, technical design and relevant industrial placements help graduates compete.');
add('mechatronics', /mechatron|systems engineering/, 'engineering', 5,
  'Mechatronics and systems engineering combine mechanical components, electronics, control and software to make complex systems work together.',
  'Control theory, sensors, actuators, robotics, embedded programming, modelling and system integration.',
  'Automation engineer; Control systems engineer; Robotics developer; Industrial maintenance engineer',
  'Employers look for integrated practical skills. PLC programming, instrumentation and a working automation project help demonstrate readiness for industrial work.');
add('mechanical-engineering', /mechanical engineering|automotive engineering|railway engineering/, 'engineering', 5,
  'Mechanical Engineering designs and analyses machines, energy systems and moving structures. Automotive and railway routes apply these principles to transport technology.',
  'Mechanics, thermodynamics, fluid flow, materials, manufacturing, machine design and computer-aided engineering.',
  'Mechanical design engineer; Maintenance engineer; Manufacturing engineer; Energy or vehicle systems engineer',
  'Graduate opportunities span maintenance, production and design. Industrial experience, CAD and the ability to diagnose equipment problems strengthen applications.');
add('chemical-engineering', /chemical.*engineering|petrochemical engineering|food engineering/, 'engineering', 5,
  'Chemical and process engineering scales up physical, chemical and biological transformations into safe, economical production systems.',
  'Mass and energy balances, thermodynamics, reaction engineering, separation, process control and plant design.',
  'Process engineer; Production engineer; Plant safety associate; Food or pharmaceutical manufacturing engineer',
  'Large plants recruit selectively and hiring follows industrial investment. Process simulation, safety knowledge and plant placements provide useful evidence of capability.');
add('petroleum-engineering', /petroleum.*engineering|natural gas engineering/, 'engineering', 5,
  'Petroleum and gas engineering studies how hydrocarbon reservoirs are evaluated, developed and operated, including drilling, production and reservoir performance.',
  'Reservoir engineering, drilling, well completion, production systems, fluid properties and field development.',
  'Graduate reservoir engineer; Drilling engineer; Production engineer; Energy services technical specialist',
  'Graduate recruitment is concentrated among operators and service companies and is sensitive to project cycles. Strong technical results and placements matter; broader energy skills improve flexibility.');
add('aerospace', /aeronaut/, 'engineering', 5,
  'Aerospace Engineering applies mechanics, materials, propulsion and control to aircraft and spacecraft.',
  'Aerodynamics, aircraft structures, flight mechanics, propulsion, avionics and engineering design.',
  'Aerospace design engineer; Aviation engineering analyst; Manufacturing engineer; Aircraft maintenance engineer after the separate licensing route',
  'Specialist aviation posts are relatively narrow and location-dependent. An engineering degree is distinct from the licences needed to certify aircraft maintenance.');
add('marine-engineering', /marine engineering/, 'engineering', 5,
  'Marine Engineering focuses on the machinery, propulsion, electrical systems and supporting equipment used on ships and offshore installations.',
  'Marine propulsion, thermodynamics, power systems, fluid machinery, vessel systems and maintenance.',
  'Marine systems engineer; Shipyard engineer; Offshore maintenance engineer; Seagoing engineer after required maritime certification',
  'Seagoing work requires maritime certification and sea-time in addition to academic study. Shipyard and offshore jobs also depend on projects and practical equipment experience.');
add('materials-engineering', /metallurg|materials.*engineering|material.*engineering|polymer.*engineering|wood products engineering|glass and silicate/, 'engineering', 5,
  'Materials engineering studies how the structure and processing of metals, polymers, ceramics, timber and other materials determine their useful properties.',
  'Materials characterisation, processing, manufacturing, corrosion, mechanical testing and failure analysis.',
  'Materials engineer; Quality-control engineer; Metallurgical process engineer; Product testing or failure-analysis associate',
  'Manufacturing employers value practical testing and production experience. Specialisation in an industrial material or process helps distinguish graduates from general engineering applicants.');
add('mining-engineering', /mining engineering/, 'engineering', 5,
  'Mining Engineering plans the safe extraction and processing of mineral resources, balancing technical feasibility, cost and environmental responsibility.',
  'Mine design, rock mechanics, mineral processing, ventilation, surveying, safety and mine economics.',
  'Graduate mining engineer; Mineral-processing engineer; Quarry engineer; Mine planning assistant',
  'Jobs depend on mineral projects and may require work in remote locations. Field placements, safety skills and mine-planning software strengthen entry-level applications.');
add('agric-engineering', /agric.*engineering|bioresources engineering|biosystems engineering/, 'engineering', 5,
  'Agricultural and biosystems engineering develops machinery, water systems and processing technologies for farming, food production and biological resources.',
  'Farm machinery, irrigation, soil and water engineering, processing, structures and engineering design.',
  'Agricultural engineer; Irrigation design engineer; Farm mechanisation specialist; Food-processing equipment engineer',
  'Practical machinery and field experience are valuable. Employers range from equipment suppliers to farms and processing businesses, with opportunities linked to investment and local production needs.');
add('industrial-engineering', /industrial.*engineering|production engineering|nuclear engineering|engineering programmes/, 'engineering', 5,
  'Engineering applies mathematics and science to the design, operation and improvement of technical systems. Industrial and production routes focus on efficient manufacturing and operations.',
  'Engineering analysis, design, manufacturing systems, optimisation, quality, safety and industrial projects; specialist options depend on the named route.',
  'Graduate engineer; Production planning engineer; Quality engineer; Operations improvement analyst',
  'Employers recruit for specific technical competence. Industrial placements and projects aligned with the chosen engineering specialism help applicants compete.');

add('architecture', /^architecture$|interior architecture|landscap.*architecture|furniture design architecture/, 'architecture', 4,
  'Architecture shapes buildings and spaces around people’s needs, environmental conditions and construction methods. Related interior, landscape and furniture routes focus on different scales of design.',
  'Design studio, drawing, spatial planning, building technology, environmental design, architectural history and digital modelling.',
  'Architectural design assistant; BIM modeller; Landscape or interior designer in the relevant route; Architect after the required professional training and registration',
  'A strong design portfolio is central to internships and employment. The first degree is one stage of the professional architecture route; studio work demands sustained time and practical resources.');
add('building', /^building( technology)?$/, 'environment', 5,
  'Building studies the technical organisation and delivery of construction, including how materials, people and site operations produce safe and durable buildings.',
  'Construction technology, building services, project planning, materials, site management and building maintenance.',
  'Construction supervisor; Graduate builder; Construction project coordinator; Facilities maintenance officer',
  'Site experience and the ability to coordinate work are particularly important. Hiring depends on construction activity, and professional registration supports progression.');
add('quantity-surveying', /quantity surveying/, 'environment', 5,
  'Quantity Surveying manages the cost and commercial aspects of construction projects, from early estimates to procurement, valuations and final accounts.',
  'Measurement, estimating, construction economics, contracts, procurement, cost planning and project financial control.',
  'Graduate quantity surveyor; Cost consultant; Contract administrator; Construction commercial analyst',
  'Employers value accurate measurement, contract knowledge and cost software. Professional qualification and project experience help with competition for consultancy and contractor roles.');
add('estate', /estate management/, 'environment', 5,
  'Estate Management studies land and property as assets: their valuation, development, use, management and investment performance.',
  'Property valuation, land economics, real-estate law, development appraisal, agency and facilities management.',
  'Graduate estate surveyor; Property manager; Real-estate research analyst; Valuation assistant',
  'Professional valuation work follows a registration pathway. Internships, local market knowledge and financial analysis strengthen prospects in property firms and institutional real estate.');
add('surveying', /surveying|geoinformatics|geomatics|remote sensing/, 'environment', 5,
  'Surveying and geoinformatics measures and represents the Earth’s surface and the positions of natural and built features, producing spatial information for land and infrastructure decisions.',
  'Land surveying, geodesy, GIS, satellite positioning, photogrammetry, remote sensing and mapping.',
  'Graduate surveyor; GIS analyst; Geospatial data technician; Mapping and remote-sensing analyst',
  'Field skills and accurate spatial data work are important. GIS and remote-sensing portfolios broaden opportunities beyond conventional land-surveying practice.');
add('planning', /urban.*regional planning/, 'environment', 5,
  'Urban and Regional Planning organises the use of land, transport, housing and services to guide the development of towns, cities and regions.',
  'Planning theory, land-use policy, housing, transport, spatial analysis, urban design and planning studios.',
  'Graduate town planner; Urban research analyst; Development-control officer; GIS or transport planning assistant',
  'Government and consultancy opportunities depend on planning projects and recruitment cycles. GIS, report writing and community engagement are useful practical strengths.');
add('environment', /environmental|sustainable environment/, 'environment', null,
  'Environmental study examines how human activity affects land, water, air and ecosystems, and develops ways to manage pollution, resources and environmental risks.',
  'Ecology, environmental chemistry, impact assessment, resource management, GIS, standards and field sampling.',
  'Environmental project officer; Sustainability analyst; Environmental monitoring technician; Impact-assessment consultant with experience',
  'Consultancy and compliance roles draw applicants from several science and engineering degrees. Field sampling, GIS and evidence-based reporting help graduates compete.');

add('law', /\blaw\b|laws|jurisprudence|sharia/, 'law', 5,
  'Law studies the rules and institutions that govern rights, duties, disputes and public power. Different legal departments contribute to the wider law degree.',
  'Legal methods, constitutional law, contracts, torts, criminal law, property, evidence and legal research.',
  'Lawyer after Law School and professional qualification; Legal research assistant; Compliance associate; Policy or governance officer',
  'JAMB identifies law as a heavily demanded programme. Legal employment also rewards research, drafting and practical experience; corporate and specialist practice can be particularly selective.');
add('accounting', /accountancy|accounting|taxation/, 'business', 4,
  'Accounting measures, records and explains financial activity so organisations can report performance, control costs and meet their obligations. Taxation focuses on tax computation, compliance and planning.',
  'Financial reporting, management accounting, audit, taxation, business law, accounting systems and analysis.',
  'Graduate accountant; Audit associate; Tax associate; Financial reporting analyst',
  'Graduate schemes attract many applicants. Spreadsheet skills, accounting software, internships and progress towards relevant professional examinations help distinguish candidates.');
add('actuarial', /actuarial/, 'business', 4,
  'Actuarial Science uses probability, statistics and financial mathematics to measure uncertainty and price long-term risks such as insurance claims and pension liabilities.',
  'Probability, statistical modelling, life contingencies, financial mathematics, risk theory and computing.',
  'Actuarial analyst; Insurance pricing analyst; Pension analyst; Risk modelling analyst',
  'This is a small, technically demanding market. Professional actuarial examinations and strong programming and quantitative skills are important for progression.');
add('finance', /banking|finance|financial technology|petroleum economics/, 'business', 4,
  'Finance studies how money is raised, invested and managed, including banking, financial markets, credit and risk. Financial technology applies digital systems to these services.',
  'Corporate finance, investment analysis, banking operations, risk management, economics and financial modelling.',
  'Credit analyst; Banking graduate trainee; Financial analyst; Financial operations or fintech analyst',
  'Banking and investment graduate roles attract applicants from many disciplines. Financial modelling, commercial awareness and relevant placements help; specialised investment roles are more selective.');
add('insurance', /insurance/, 'business', 4,
  'Insurance and risk management studies how individuals and organisations identify, transfer and finance the financial consequences of uncertain events.',
  'Insurance principles, underwriting, claims, risk assessment, finance and insurance regulation.',
  'Underwriting assistant; Claims analyst; Insurance broker trainee; Risk-management associate',
  'Product knowledge, numerical accuracy and communication matter. Professional insurance qualifications and experience support movement into technical underwriting and risk roles.');
add('marketing', /marketing/, 'business', 4,
  'Marketing examines customers and markets and develops products, pricing, communication and distribution strategies that create value for a business and its customers.',
  'Consumer behaviour, market research, branding, sales, digital marketing, pricing and campaign analysis.',
  'Marketing executive; Market research analyst; Digital marketing associate; Sales or account executive',
  'Employers can compare applicants through campaign results and portfolios. Research skills, analytics and evidence of understanding customers matter alongside academic results.');
add('human-resources', /human resource|employment relations|industrial relations|irpm/, 'business', 4,
  'Human resource and employment relations programmes study how organisations recruit, develop, reward and manage people, including relationships between employees, employers and trade unions.',
  'Recruitment, learning and development, labour relations, organisational behaviour, employment law and HR analytics.',
  'HR assistant; Recruitment associate; Learning and development coordinator; Employee-relations officer',
  'HR roles draw applicants from business, psychology and social sciences. Practical HR systems, confidentiality, communication and workplace experience strengthen applications.');
add('procurement', /procurement|supply chain|logistics|transport|maritime/, 'business', 4,
  'This field plans how goods, services and people move through supply networks. Procurement focuses on sourcing and contracts; logistics and transport focus on storage, scheduling and delivery.',
  'Supply-chain planning, purchasing, inventory, transport economics, contracts, logistics systems and operations analysis.',
  'Procurement assistant; Supply-chain analyst; Logistics coordinator; Transport or maritime operations officer',
  'Employers value analytical and operational experience. Spreadsheets, planning systems, contract knowledge and internships support entry into logistics and procurement teams.');
add('project-management', /project management/, 'business', 4,
  'Project Management organises temporary work to deliver a defined result within constraints such as time, cost, scope and quality.',
  'Planning, scheduling, budgeting, risk, procurement, stakeholder communication and project monitoring.',
  'Project coordinator; Planning assistant; Project controls analyst; Monitoring and evaluation assistant',
  'A new graduate usually enters through support or coordination roles. Responsibility grows with delivery experience; a degree alone does not establish experience as a project manager.');
add('entrepreneurship', /entrepreneur/, 'business', 4,
  'Entrepreneurship studies how to identify a business opportunity, test demand, build an organisation and manage the risks of starting or expanding an enterprise.',
  'Business models, customer research, venture finance, operations, innovation and small-business management.',
  'Business development associate; Startup operations associate; Enterprise support officer; Founder or small-business owner',
  'Success depends on execution and customer demand. Practical venture projects, sales experience and financial discipline provide more evidence than a business idea alone.');
add('public-administration', /public administration|local government|policy and strategic/, 'business', 4,
  'Public Administration studies how government policies and public services are organised, financed, implemented and evaluated.',
  'Public policy, budgeting, administrative law, local government, public-sector management and research methods.',
  'Administrative officer; Policy research assistant; Programme officer; Public-service or NGO project coordinator',
  'Public-sector recruitment is vacancy-dependent and attracts applicants from several disciplines. Policy writing, data skills and programme experience also support work outside government.');
add('cooperatives', /cooperative/, 'business', 4,
  'Cooperative studies examine member-owned enterprises and collective approaches to finance, production, marketing and rural development.',
  'Cooperative governance, accounting, rural finance, enterprise management, development and project appraisal.',
  'Cooperative development officer; Rural finance associate; Enterprise support officer; Community project coordinator',
  'Work is concentrated in cooperative organisations, finance and development projects. Field experience, bookkeeping and the ability to support member-owned businesses are useful strengths.');
add('business', /business|management|office and information|secretarial administration|other related programmes/, 'business', 4,
  'Business and management study how organisations coordinate people, money, information and operations to achieve their objectives.',
  'Organisational behaviour, finance, marketing, operations, strategy, business analysis and enterprise projects.',
  'Management trainee; Operations associate; Business analyst with data skills; Administrative or customer-success officer',
  'This broad degree leads into roles open to many disciplines. A clear specialism, practical experience and measurable results from projects help graduates compete.');

add('agric-economics', /agribusiness|agric.*(economic|administration|marketing)/, 'agriculture', null,
  'Agricultural economics and agribusiness apply economics and business analysis to farming, food markets and agricultural supply chains.',
  'Farm management, production economics, agricultural finance, commodity marketing, statistics and value-chain analysis.',
  'Agribusiness analyst; Agricultural finance associate; Farm business manager; Agricultural policy research assistant',
  'Commercial and development roles reward field knowledge and data skills. Production experience, budgeting and familiarity with commodity markets can strengthen applications.');
add('agric-extension', /agric.*extension/, 'agriculture', null,
  'Agricultural Extension connects research and practical farming through training, advisory work and communication with farmers and rural communities.',
  'Rural sociology, extension methods, agricultural communication, programme planning, farm practice and evaluation.',
  'Extension officer; Farmer-training coordinator; Agricultural project officer; Rural development facilitator',
  'Many opportunities involve fieldwork and programme funding. Communication in local contexts, farmer engagement and monitoring skills are valuable.');
add('animal-science', /animal (science|sciences|production|breeding|nutrition|physiology)|dairy|pasture/, 'agriculture', null,
  'Animal Science studies livestock breeding, nutrition, physiology and production systems to improve animal performance and sustainable food production.',
  'Animal genetics, feed formulation, reproduction, husbandry, livestock management and practical farm work.',
  'Livestock production officer; Feed formulation assistant; Farm manager; Animal breeding or research assistant',
  'Employers value farm experience and production records. Commercial livestock and feed businesses offer a different career route from veterinary clinical practice.');
add('soil', /soil/, 'agriculture', null,
  'Soil Science studies the physical, chemical and biological properties of soils and their role in crop growth, land management and environmental quality.',
  'Soil fertility, soil chemistry, classification, conservation, land evaluation, sampling and laboratory analysis.',
  'Soil testing officer; Land evaluation assistant; Agricultural advisory officer; Environmental field technician',
  'Field sampling, laboratory quality and spatial analysis help graduates compete. Opportunities span agriculture, environmental consultancy and research.');
add('crop', /crop|agronomy|horticulture|plant (breeding|protection|health)|plant physiology/, 'agriculture', null,
  'Crop and plant-production programmes study how to grow, improve and protect crops, including seed systems, pests, soils and field management.',
  'Crop physiology, breeding, pest and disease control, agronomy, seed science, horticulture and field experiments.',
  'Crop production officer; Seed production associate; Agronomy adviser; Plant-protection or research assistant',
  'Practical growing experience and measurable field results matter. Employers include farms, seed and input companies, research institutes and development programmes.');
add('fisheries', /fisheries|aquaculture|mariculture/, 'agriculture', null,
  'Fisheries and Aquaculture study fish and other aquatic resources, combining the management of natural populations with the controlled production of aquatic organisms.',
  'Fish biology, hatcheries, nutrition, water quality, aquatic ecology, production economics and field practice.',
  'Aquaculture production officer; Hatchery technician; Fisheries management assistant; Fish-feed technical representative',
  'Water-quality management and production experience are valuable. Self-employment requires capital, biosecurity and dependable markets, as well as technical knowledge.');
add('forestry', /forestry|forest|wildlife|ecotourism/, 'agriculture', null,
  'Forestry and wildlife programmes study forests, wild animals and their habitats, including how to conserve ecosystems and manage natural resources and nature-based tourism.',
  'Forest ecology, wildlife biology, conservation, resource inventories, silviculture, GIS and field surveys.',
  'Forestry officer; Conservation project assistant; Wildlife survey technician; Ecotourism operations officer',
  'Field experience and ecological survey skills are important. Conservation jobs can be project-funded, while commercial forestry follows production and land-management needs.');
add('food-science', /food (science|technology)/, 'agriculture', 5,
  'Food Science and Technology studies how food is processed, preserved, tested and made safe and acceptable for consumers.',
  'Food chemistry, microbiology, processing, preservation, sensory testing, quality assurance and plant practice.',
  'Food quality-control analyst; Production supervisor; Food safety officer; Product development assistant',
  'Food manufacturers value laboratory competence and food-safety practice. Industrial placements and familiarity with quality systems help at entry level.');
add('agriculture', /^agricultur|^agric /, 'agriculture', 5,
  'Agriculture integrates crop and livestock production with soil, water, business and rural development to produce food and other biological resources.',
  'Crop and animal production, soils, agricultural economics, extension, practical farm training and research.',
  'Agricultural officer; Farm production manager; Agribusiness associate; Agricultural research assistant',
  'JAMB has highlighted unused places in agriculture nationally, but this does not establish a particular university’s acceptance rate. Field capability and commercial experience matter in the job market.');
add('home-science', /home (science|economics)|consumer science|family,? nutrition/, 'agriculture', 4,
  'Home and consumer sciences study the resources, food, relationships and living conditions that shape household and community wellbeing.',
  'Family resource management, food and nutrition, textiles, consumer behaviour, enterprise and community practice.',
  'Consumer services officer; Community programme assistant; Food or hospitality operations associate; Textile or household-product entrepreneur',
  'A practical specialism makes this broad field more marketable. Work samples, enterprise experience and relevant professional training can support a chosen career route.');

add('biochemistry', /biochemistry/, 'science', 4,
  'Biochemistry studies the chemical processes of living organisms, explaining how molecules such as proteins, enzymes and DNA support life and disease processes.',
  'Metabolism, enzymology, molecular biology, biochemical analysis, genetics and laboratory research.',
  'Biochemical research assistant; Food or pharmaceutical quality analyst; Biotechnology laboratory associate; Clinical-trial support associate',
  'Laboratory posts attract applicants from related sciences. Practical analytical skills and postgraduate study matter for specialist research; the degree does not confer medical laboratory registration by itself.');
add('microbiology', /microbiology/, 'science', 4,
  'Microbiology studies microorganisms and their roles in health, food, industry and ecosystems, including how they are identified, controlled and used.',
  'Bacteriology, virology, mycology, microbial genetics, immunology, fermentation and laboratory methods.',
  'Industrial microbiology analyst; Food or water quality analyst; Research assistant; Fermentation production associate',
  'Employers value aseptic technique, testing and laboratory documentation. Clinical diagnostic practice has a separate professional qualification and registration route.');
add('biotechnology', /biotechnology|cell biology|genetics/, 'science', 4,
  'Biotechnology applies cells, organisms and biological molecules to useful products and processes. Genetics and cell biology explain the biological mechanisms behind these applications.',
  'Molecular biology, genetics, cell culture, bioprocessing, bioinformatics and experimental methods.',
  'Biotechnology research assistant; Molecular laboratory associate; Bioprocess production assistant; Bioinformatics analyst with computing skills',
  'Advanced research roles often require postgraduate training. Laboratory experience and computational skills can widen opportunities beyond a narrow research specialism.');
add('botany', /botany|plant (biology|science|and environmental biology)/, 'science', 4,
  'Plant biology studies how plants function, develop, reproduce and interact with their environment, from cells to whole ecosystems.',
  'Plant physiology, taxonomy, ecology, genetics, pathology, microscopy and field studies.',
  'Plant research assistant; Nursery or seed-production associate; Conservation field officer; Botanical survey technician',
  'Practical plant identification, fieldwork and laboratory skills help graduates compete. Scientific research and university teaching commonly require further study.');
add('zoology', /zoology|animal biology|animal and environmental biology/, 'science', 4,
  'Zoology studies animals, including their structure, behaviour, evolution and relationships with the environment.',
  'Animal diversity, ecology, physiology, genetics, parasitology and laboratory and field research.',
  'Wildlife research assistant; Ecology field technician; Conservation officer; Pest-management technical associate',
  'Field survey, data analysis and an applied specialism are useful. Research positions often need postgraduate qualifications, and this degree is distinct from veterinary medicine.');
add('biology', /biology|biological science/, 'science', 4,
  'Biology studies living organisms and the processes connecting cells, organisms and ecosystems.',
  'Cell biology, genetics, evolution, ecology, physiology, laboratory methods and fieldwork.',
  'Biological research assistant; Environmental field technician; Laboratory support officer; Science educator after appropriate training',
  'Broad science graduates benefit from developing an applied laboratory, field or data specialism. Specialist research work often requires postgraduate training.');
add('forensic', /forensic/, 'science', 4,
  'Forensic Science applies scientific analysis to evidence used in investigations and legal proceedings.',
  'Analytical chemistry, biology, toxicology, evidence handling, laboratory quality and scientific reporting.',
  'Forensic laboratory assistant; Analytical laboratory scientist; Evidence processing officer; Scientific investigation support officer',
  'Dedicated forensic posts are specialised and recruitment can be limited. Strong analytical laboratory skills also support work outside criminal investigation.');
add('chemistry', /chemistry/, 'science', 4,
  'Chemistry studies the composition, properties and transformations of matter. Applied and industrial routes focus on analysis, manufacturing and useful chemical products.',
  'Organic, inorganic, physical and analytical chemistry, spectroscopy, synthesis and practical laboratory work.',
  'Quality-control chemist; Analytical laboratory scientist; Production chemist; Research and development assistant',
  'Employers value accurate analysis, laboratory safety and instrument experience. Industrial placements and a clear applied specialism strengthen graduate applications.');
add('geophysics', /geophysics/, 'science', 4,
  'Geophysics uses physical measurements to investigate the Earth below its surface, including rocks, groundwater, mineral resources and geological structures.',
  'Seismic, electrical, gravity and magnetic methods, mathematics, geology, data processing and field surveys.',
  'Geophysical field assistant; Exploration data analyst; Groundwater investigation associate; Geotechnical survey assistant',
  'Exploration hiring follows projects and commodity investment. Field experience, numerical skills and geophysical software support both resource and environmental applications.');
add('geology', /geolog/, 'science', 4,
  'Geology studies the Earth’s materials, structures and history and applies that understanding to resources, groundwater, construction and environmental problems.',
  'Mineralogy, petrology, structural geology, sedimentology, mapping, hydrogeology and fieldwork.',
  'Graduate geologist; Hydrogeology assistant; Exploration geologist; Geotechnical or environmental field officer',
  'Field mapping and interpretation are important entry skills. Mineral and energy exploration are project-dependent, so groundwater, geotechnical and environmental skills broaden options.');
add('meteorology', /meteorolog|climate science|agrometeorology|agro meteorology/, 'science', 4,
  'Meteorology and climate science study atmospheric processes, weather and longer-term climate patterns, including their effects on agriculture, transport and communities.',
  'Atmospheric physics, weather observation, forecasting, climate data, numerical methods and remote sensing.',
  'Weather observation officer; Forecasting analyst with specialist training; Climate-data analyst; Agricultural climate adviser',
  'Forecasting and research posts require strong quantitative skills. Data analysis, coding and GIS improve access to climate, agricultural and environmental projects.');
add('hydrology', /hydrology|water resources management/, 'agriculture', 4,
  'Hydrology studies how water moves through the atmosphere, land and rivers and how water resources can be assessed and managed.',
  'Hydrological measurement, catchments, groundwater, water quality, modelling, GIS and resource planning.',
  'Water resources analyst; Hydrological field technician; Flood-risk project assistant; Water and sanitation project officer',
  'Field measurement and modelling experience are valuable. Opportunities depend on water infrastructure, environmental studies and public or development-sector projects.');
add('oceanography', /oceanography|marine biology|marine science/, 'science', 4,
  'Marine science and oceanography investigate the ocean’s physical, chemical and biological processes and the resources and ecosystems they support.',
  'Ocean circulation, marine ecology, coastal processes, water chemistry, sampling and spatial data analysis.',
  'Marine research assistant; Coastal monitoring officer; Environmental survey technician; Aquatic-resource project assistant',
  'Specialist jobs often depend on research institutes, coastal projects or industry surveys. Field experience, safety training and data analysis can distinguish applicants.');
add('physics', /physics|electronics with physics|electronics and computer technology/, 'science', 4,
  'Physics explains matter, energy, motion and forces through mathematical models and experiments. Applied routes connect these principles to electronics, materials and energy systems.',
  'Mechanics, electromagnetism, waves, thermodynamics, quantum physics, electronics and experimental measurement.',
  'Instrumentation technician; Technical analyst; Energy or electronics support associate; Physics researcher after postgraduate study',
  'A practical electronics, coding or data specialism improves the transition into industry. Research careers commonly require advanced degrees.');
add('statistics', /statistics|demography/, 'science', 4,
  'Statistics designs ways to collect and analyse data and quantify uncertainty. Demography applies population data to questions such as migration, fertility and social change.',
  'Probability, statistical inference, regression, survey design, experimental design and statistical computing.',
  'Data analyst; Statistical officer; Research analyst; Monitoring and evaluation analyst',
  'Analytical roles attract applicants from several degrees. SQL, statistical software, clear reporting and a portfolio of real data projects are useful differentiators.');
add('mathematics', /mathematic/, 'science', 4,
  'Mathematics develops logical structures and quantitative methods for understanding patterns and solving abstract and practical problems.',
  'Calculus, algebra, analysis, differential equations, numerical methods, probability and mathematical modelling.',
  'Quantitative analyst with finance training; Data analyst; Operations research assistant; Mathematics educator after professional training',
  'Many roles require an applied specialism beyond the degree. Programming, statistics or finance experience helps connect mathematical ability to an employer’s needs.');
add('science-lab', /science laboratory/, 'science', null,
  'Science Laboratory Technology develops the practical skills used to operate laboratories, prepare experiments, analyse samples and maintain reliable scientific measurements.',
  'Laboratory techniques, instrumentation, safety, quality assurance and a scientific specialisation such as chemistry, microbiology or physics.',
  'Laboratory technologist; Quality-control laboratory assistant; Instrumentation support officer; Research laboratory technical officer',
  'Employers look for competence with their tests and equipment. This qualification is distinct from Medical Laboratory Science and does not automatically permit clinical diagnostic practice.');

add('economics', /economics/, 'social', 4,
  'Economics studies how people, firms and governments allocate scarce resources and how markets, policies and institutions affect living standards.',
  'Microeconomics, macroeconomics, econometrics, development, public finance and research using economic data.',
  'Economic research assistant; Policy analyst; Business research analyst; Banking or development-sector analyst',
  'Quantitative and policy roles reward statistics, clear writing and software skills. Specialist economist positions often require postgraduate training.');
add('psychology', /psychology/, 'social', 4,
  'Psychology studies behaviour and mental processes through scientific observation, experiments and psychological theory.',
  'Cognitive, developmental, social and biological psychology, research methods, statistics and psychological assessment.',
  'Research assistant; HR or learning associate; Behavioural research analyst; Clinical psychologist after required postgraduate professional training',
  'Professional clinical work requires additional training. For broader graduate jobs, research, data analysis and communication skills help candidates compete across disciplines.');
add('social-work', /social work/, 'social', 4,
  'Social Work supports people, families and communities dealing with social difficulties and connects them with services, protection and practical support.',
  'Social policy, human development, casework, community practice, safeguarding, research and supervised field placements.',
  'Social services officer; Child-protection project assistant; Community support worker; Case-management officer',
  'Field placements, safeguarding practice and documentation are important. NGO jobs may be tied to project funding, while government and hospital roles follow formal recruitment.');
add('sociology', /sociolog|anthropolog|social studies/, 'social', 4,
  'Sociology studies social relationships, institutions and inequality; anthropology investigates human cultures and ways of life through comparative and field-based research.',
  'Social theory, social change, culture, research methods, survey design, interviews and qualitative analysis.',
  'Social research assistant; Community development officer; Monitoring and evaluation associate; Consumer or policy research analyst',
  'These are broad graduate routes. Field research, quantitative analysis and clear reporting help translate the degree into work in development, research or organisations.');
add('politics', /political|international relations|diplomacy|peace|conflict|intelligence|security studies|criminolog|military science/, 'social', 4,
  'This field examines power, institutions, international affairs and the management of conflict and security. The chosen programme determines whether the emphasis is government, diplomacy, crime or peacebuilding.',
  'Political and social theory, governance, international affairs, conflict analysis, research methods and policy writing.',
  'Policy research assistant; Programme officer; Governance or security analyst; Diplomatic service officer through its recruitment process',
  'Government and international-organisation roles are selective and vacancy-dependent. Strong writing, research, languages and relevant placements are useful; the degree does not guarantee a diplomatic or security appointment.');
add('development', /development studies|social standard|social development/, 'social', 4,
  'Development studies examines how economic, political and social change affects people’s wellbeing, including poverty, inclusion and the social effects of projects.',
  'Development theory, social policy, project appraisal, community engagement, social safeguards and research methods.',
  'Development programme assistant; Social safeguards associate; Monitoring and evaluation officer; Community liaison officer',
  'Development-sector jobs often require field experience and project reporting. Data skills and practical understanding of social safeguards improve competitiveness.');
add('geography', /geography/, 'social', 4,
  'Geography explains spatial patterns in the natural environment and human activity, including settlement, resources, climate and regional development.',
  'Physical and human geography, GIS, mapping, spatial analysis, environmental processes and field surveys.',
  'GIS analyst; Environmental field officer; Spatial research assistant; Planning or development project assistant',
  'GIS, remote sensing and data analysis help graduates compete for applied roles. Many employers hire for these practical skills rather than the degree title alone.');
add('history', /history|historical/, 'arts', 4,
  'History investigates past societies and events by evaluating sources and constructing evidence-based explanations. International and strategic studies options connect this work to diplomacy and conflict.',
  'African and world history, historiography, archival research, source criticism and extended analytical writing.',
  'Research assistant; Archives assistant; Heritage project officer; Policy or communications associate',
  'Direct historical research jobs are specialised and can require postgraduate study. Writing, archival work and digital research skills support broader careers.');
add('archaeology', /archaeolog|archeolog/, 'arts', 4,
  'Archaeology reconstructs past human life through material remains, sites and landscapes and contributes to the conservation of cultural heritage.',
  'Excavation, material analysis, dating methods, archaeological theory, conservation and field recording.',
  'Archaeological field assistant; Heritage officer; Museum collections assistant; Cultural-resource researcher',
  'Specialist work depends on research, museums and heritage projects. Field-school experience, careful documentation and GIS are useful; academic careers require further study.');
add('english', /english|literature/, 'arts', 4,
  'English and literary studies examine language, writing and literary texts, developing close reading, interpretation and effective communication.',
  'Language structure, literary criticism, African and world literature, writing, discourse and research.',
  'Editor or publishing assistant; Content writer; Communications associate; Language educator after appropriate professional training',
  'Writing and media roles often use practical tests and portfolios. Editing, digital publishing and a clear subject specialism help graduates compete.');
add('linguistics', /linguistic/, 'arts', 4,
  'Linguistics studies the structure, use and development of language, including sounds, grammar, meaning and the relationship between language and society.',
  'Phonetics, phonology, syntax, semantics, sociolinguistics, field methods and language documentation.',
  'Language researcher; Localisation associate; Language-data annotator; Publishing or language-education associate',
  'Practical language proficiency and research skills matter. Computing or translation skills can broaden options; specialist academic work requires further training.');
add('languages', /french|german|russian|russia|chinese|arabic|hausa|igbo|yoruba|nigerian languages|foreign languages|modern languages/, 'arts', 4,
  'Language programmes develop proficiency in a named language alongside the literature, culture and societies in which it is used.',
  'Speaking, listening, reading, translation, grammar, literature, cultural studies and intercultural communication.',
  'Translator after developing professional proficiency; Localisation associate; International customer-support associate; Language teacher after professional training',
  'Employers assess real fluency and translation quality. A business, legal or technical specialism can strengthen prospects, while automated translation increases the value of expert editing.');
add('philosophy', /philosophy/, 'arts', 4,
  'Philosophy examines fundamental questions about knowledge, reality, ethics and reasoning through careful argument and critical analysis.',
  'Logic, ethics, epistemology, metaphysics, political philosophy, African philosophy and analytical writing.',
  'Research or policy assistant; Ethics and compliance support associate; Writer or editor; Academic philosopher after postgraduate study',
  'Most opportunities are broader graduate roles rather than jobs titled philosopher. Clear writing, research and an applied policy or business skill help translate the degree into work.');
add('religion', /religio|theology|christian|islamic studies/, 'arts', 4,
  'Religious studies and theology examine beliefs, texts, practices and institutions, including their historical development and influence on communities and ethical life.',
  'Religious texts, history, ethics, philosophy of religion, comparative study and research methods.',
  'Community programme associate; Religious organisation administrator; Research or publishing assistant; Religious educator after relevant training',
  'Faith-based work may require formation within a particular tradition. Research, teaching and community roles depend on additional practical skills and, for academic work, postgraduate qualifications.');
add('media', /communication|journalism|broadcast|public relations|advertising|book publishing|photojournalism|information.*media studies/, 'media', 4,
  'Communication and media programmes study how information is created, distributed and understood, with routes in journalism, broadcasting, advertising, public relations and publishing.',
  'Reporting, writing, media ethics, audience research, digital production, campaign planning and media practice.',
  'Reporter or editorial assistant; Communications officer; Broadcast production assistant; Public relations or advertising executive',
  'Employers and clients assess published work and production skills. A portfolio, verification skills, digital analytics and practical placement experience help graduates compete.');
add('film', /film|cinematograph/, 'media', 4,
  'Film studies and production combine screen storytelling with the technical and creative work of developing, shooting, editing and distributing moving-image content.',
  'Screenwriting, cinematography, sound, editing, directing, production management and film analysis.',
  'Production assistant; Video editor; Camera assistant; Screenwriter or filmmaker with a portfolio',
  'Work is frequently organised around projects. A showreel, collaborative credits, reliable delivery and industry contacts are important in winning paid work.');
add('theatre', /theatre|theater|dramatic|performing arts/, 'arts', 4,
  'Theatre and performing arts explore live performance and dramatic storytelling through acting, directing, writing, design and critical study.',
  'Acting, directing, dramaturgy, theatre history, stage design, production and performance projects.',
  'Performer; Theatre production assistant; Stage manager; Drama facilitator or arts administrator',
  'Auditions and production experience are central to employment. Many practitioners combine performance, media, teaching and project work rather than relying on one permanent role.');
add('music', /^music$/, 'arts', 4,
  'Music combines performance and composition with the study of musical structures, histories and cultural contexts.',
  'Performance, theory, aural skills, composition, music history, African music and ensemble practice.',
  'Performer or session musician; Music producer with technical skills; Music educator after relevant training; Arts programme coordinator',
  'Auditions, recordings and performance quality demonstrate capability. Income can involve teaching, events and freelance production as well as formal employment.');
add('design', /fine|creative art|industrial design|visual|fashion/, 'arts', 4,
  'Art and design programmes develop visual ideas into images, objects and experiences. Studio practice is supported by material knowledge, design thinking and critical study.',
  'Drawing, visual communication, design development, studio techniques, art history and practical projects.',
  'Visual artist; Graphic or product designer with relevant skills; Studio assistant; Creative production associate',
  'A coherent portfolio matters more than the degree title alone. Digital tools, client communication and practical production skills help in a project-based creative market.');
add('tourism', /tourism|hospitality/, 'business', 4,
  'Tourism and hospitality study the planning and delivery of travel, accommodation, food service and visitor experiences.',
  'Hospitality operations, tourism planning, service quality, marketing, events, finance and industry placements.',
  'Hotel operations trainee; Tourism operations officer; Events coordinator; Guest-services supervisor',
  'Customer service and practical work experience are especially important. Opportunities depend on location, travel demand and hospitality investment; shift work is common.');
add('sport', /human kinetics|sports science|physical education|physical and health/, 'education', 4,
  'Human kinetics and physical education study movement, exercise and sport and how they support health, learning and performance.',
  'Exercise physiology, biomechanics, coaching, motor learning, sport management and practical activities.',
  'Sports development officer; Fitness instructor with appropriate certification; Coaching assistant; Physical education teacher after professional qualification',
  'Practical coaching and fitness experience help build credibility. Clinical rehabilitation is a separate professional route, while sport and fitness work can involve freelance and school-based roles.');
add('library', /library|archival/, 'education', 4,
  'Library and information science organises, preserves and provides access to information in print and digital form.',
  'Cataloguing, information retrieval, digital libraries, archives, records management and user services.',
  'Library officer; Records management assistant; Digital collections associate; Information services officer',
  'Digital information systems and records skills widen options beyond libraries. Public and academic appointments follow institutional recruitment, and senior roles may require further qualifications.');
add('classics', /classical|combined arts/, 'arts', 4,
  'Arts and classical studies examine texts, ideas, histories and cultures through interpretation, language and evidence-based argument.',
  'Literary and cultural analysis, historical sources, philosophical ideas, language study and research writing.',
  'Research assistant; Editorial assistant; Heritage programme associate; Communications officer',
  'Direct specialist posts are limited and often require postgraduate study. Writing, languages and digital research help graduates compete for broader professional roles.');

const education: Profile = {
  id: 'education', match: /education|educational|curriculum|counsell|guidance/,
  discipline: 'education', years: 4,
  meaning: 'Education programmes prepare graduates to support learning, design teaching and evaluate how learners develop. Subject-education routes combine a teaching subject with professional education.',
  study: 'Subject knowledge, learning theory, teaching methods, assessment, educational technology, classroom management and supervised teaching practice.',
  careers: ['Teacher after professional qualification', 'Learning content developer', 'Education programme officer', 'School or training administrator with experience'],
  competition: 'JAMB has reported available places in education nationally, but individual programmes have their own demand. Teaching practice, subject mastery and professional registration strengthen employment prospects.',
};

// Resolve by academic discipline before broad labels such as "management" or "environmental".
export function getGuideProfile(course: string, faculty = ''): Profile | undefined {
  const c = normaliseCourse(course);
  if (education.match.test(c) && !/^physical education$/.test(c)) {
    const specialist = /early|primary|childhood/.test(c) ? 'early learning and children’s development'
      : /special|rehabilitation/.test(c) ? 'inclusive teaching and support for learners with additional needs'
      : /counsell|guidance/.test(c) ? 'educational guidance, learner wellbeing and counselling methods'
      : /management|administration|foundation/.test(c) ? 'school organisation, educational policy and leadership'
      : /technical|vocational|industrial|woodwork|metalwork/.test(c) ? 'practical and vocational learning for technical occupations'
      : /technology/.test(c) ? 'the design and use of learning technologies'
      : course.replace(/education(al)?|programmes|^and\s/gi, '').trim();
    return { ...education, meaning: `${course} focuses on ${specialist || 'teaching and learning'}. ${education.meaning}` };
  }
  if (/engineering/.test(c) && c !== 'software engineering') {
    const engineer = profiles.find(p => p.discipline === 'engineering' && p.match.test(c));
    if (engineer) return engineer;
  }
  if (/^(human )?anatomy/.test(c)) return profiles.find(p => p.id === 'anatomy');
  if (/^marine biology$/.test(c)) return profiles.find(p => p.id === 'oceanography');
  if (/linguistic/.test(c)) return profiles.find(p => p.id === 'linguistics');
  if (/arabic|french|german|russian|chinese|portuguese/.test(c)) return profiles.find(p => p.id === 'languages');
  if (/archeolog|archaeolog/.test(c)) return profiles.find(p => p.id === 'archaeology');
  if (/remote sensing/.test(c)) return profiles.find(p => p.id === 'surveying');
  const specialistIds = ['science-lab', 'agric-economics', 'agric-extension', 'soil', 'crop', 'animal-science', 'fisheries', 'forestry', 'home-science', 'food-science', 'hydrology', 'geography', 'zoology', 'botany', 'biotechnology', 'tourism', 'film', 'theatre', 'library', 'sport'];
  const specialist = profiles.find(p => specialistIds.includes(p.id) && p.match.test(c));
  if (specialist) return specialist;
  // Health subjects must not be mistaken for a general science or management degree.
  const health = profiles.find(p => ['health', 'medicine', 'basicMedical', 'pharmacy', 'veterinary'].includes(p.discipline) && p.match.test(c));
  if (health) return health;
  const profile = profiles.find(p => p.id !== 'business' && p.id !== 'environment' && p.match.test(c));
  if (profile) return profile;
  if (/education/i.test(faculty) && c === 'health science') return education;
  return profiles.find(p => ['business', 'environment'].includes(p.id) && p.match.test(c));
}

const markets: Partial<Record<Discipline, { text: string; source: Source }>> = {
  computing: { text: 'Nigeria’s 3MTT initiative targets practical digital skills, including software, data and cybersecurity. Relevant work spans technology firms and the digital teams of other organisations. Training targets indicate investment in skills, not a guarantee of graduate vacancies.', source: digitalJobs },
  health: { text: 'Nigeria’s health-workforce needs support the relevance of clinical and public-health skills, but unmet healthcare need is not the same as funded jobs. Opportunities depend on professional eligibility, employer budgets, location and practical experience.', source: healthJobs },
  medicine: { text: 'Clinical work spans public and private healthcare. Nigeria’s workforce gaps coexist with uneven distribution and funding constraints, so training places and vacancies do not automatically track population need.', source: healthJobs },
  pharmacy: { text: 'Potential employers include hospitals, community pharmacies, manufacturers, distributors and regulatory services. Clinical practice requires professional qualification; industry roles also depend on production, quality and commercial skills.', source: { title: 'UNN: pharmacy careers and training', url: 'https://www.unn.edu.ng/academics/faculties/pharmaceutical-sciences/pharmaceutics/' } },
  agriculture: { text: 'Nigerian agriculture offers work across production, processing, distribution and advisory services, including small enterprises. Access to land, finance, equipment and buyers affects self-employment; field experience matters for salaried and project work.', source: agricultureJobs },
  arts: { text: 'Creative and communication work includes employment, freelance projects and small businesses. A portfolio and a practical specialism help turn the degree into paid work; earnings and continuity depend on clients and the chosen sector.', source: agricultureJobs },
  media: { text: 'Digital publishing and production create routes into media, marketing and independent content work. Freelance and project work sit alongside salaried jobs, so a portfolio and client-management skills are valuable.', source: agricultureJobs },
  education: { text: 'Education is among the areas where the World Economic Forum expects global job growth. This is international context, not a Nigerian vacancy forecast. Locally, opportunities depend on subject needs, school funding and professional preparation.', source: futureJobs },
};
export function getGuideMarket(profile: Profile) {
  return markets[profile.discipline] || {
    text: 'In Nigeria, employers assess practical capability, digital skills and communication alongside qualifications. The career paths above are options to prepare for, rather than guaranteed vacancies; placements and projects help demonstrate relevant experience.',
    source: jobberman,
  };
}

export type GuideDuration = { text: string; route: string; source: Source; verifiedInstitution: boolean };
const duration = (years: number, route: string, source: Source, verifiedInstitution = false): GuideDuration => ({ text: `${years} years`, route, source, verifiedInstitution });
const namedSource = (title: string, url: string): Source => ({ title, url });

export function getGuideDuration(institution: string, course: string, faculty: string, profile = getGuideProfile(course, faculty)): GuideDuration {
  const c = normaliseCourse(course);
  const rule = getProgrammeRule(institution, course);
  const redeemerName = c.replace('nursing science', 'nursing').replace('electrical and electronics engineering', 'electrical and electronic engineering');
  const redeemerYears = institution === "Redeemer's University" ? (redeemerDurations as Record<string, number>)[redeemerName] : undefined;
  if (redeemerYears) return duration(redeemerYears, 'Undergraduate degree, as listed by the university.', namedSource('Redeemer’s University: programmes and durations', 'https://run.edu.ng/post-utme-criteria/'), true);
  if (rule?.years) return duration(rule.years, 'Full-time undergraduate degree from 100 level.', rule.source, true);
  if (institution === 'Nigerian Police Academy') return duration(5, 'Combined degree and police training, Regular Course.', namedSource('Police Academy: Regular Course duration', 'https://www.polac.edu.ng/RC-12_Admission'), true);
  if (institution === 'Nigerian Defence Academy') return duration(5, 'Regular Course: combined military and academic training.', namedSource('NDA: Regular Course training', 'https://mail.nda.edu.ng/Application%20for%20admission%20into%20the%20NDA%2069%20RC%202016.pdf'), true);
  if (institution === 'Federal College of Education (Technical), Omoku') return {
    text: /Directorate of Degree/i.test(faculty) ? '4 years' : '3 years (NCE) · 4 years (degree)',
    route: 'Full-time study. This catalogue includes both NCE and degree routes; the qualification determines the duration.',
    source: namedSource('FCET Omoku: qualifications offered', 'https://fcetomoku.edu.ng/history-overview/'), verifiedInstitution: false,
  };
  if (institution === 'National Open University of Nigeria' && profile?.id === 'nursing') return duration(4, 'BNSc direct-entry route for qualified nurses; eight semesters in the university’s health-sciences handbook.', namedSource('NOUN: Nursing programme handbook', 'https://nou.edu.ng/wp-content/uploads/sites/19/2021/06/FHS-Student-Hand-Book-Edited-2021.pdf'), true);
  // The Minna handbook covers the established schools; its newly introduced medical
  // programmes must retain their own professional degree lengths.
  if (institution === 'Federal University of Technology, Minna' && !/basic medical/i.test(faculty)) return duration(5, 'UTME entry, 100–500 level, in the university’s 2024/2025 handbook.', namedSource('FUTMINNA: undergraduate handbook', 'https://futminna.edu.ng/wp-content/uploads/2025/05/2024_2025-Students-Handbook.pdf#page=51'), true);
  if (institution === 'Federal University of Technology, Akure' && c === 'human anatomy') return duration(4, 'BSc Human Anatomy, full-time undergraduate entry.', namedSource('FUTA: Human Anatomy duration', 'https://ana.futa.edu.ng/home/2258'), true);
  if (institution === 'Federal University of Technology, Akure' && c === 'software engineering') return duration(5, 'Full-time programme, ten semesters from UTME entry.', namedSource('FUTA: Software Engineering duration', 'https://sen.futa.edu.ng/home/2339'), true);
  if (institution === 'Federal University of Technology, Akure' && c === 'industrial chemistry') return duration(5, 'BTech Industrial Chemistry.', namedSource('FUTA: Industrial Chemistry programme', 'https://che.futa.edu.ng/home/708'), true);
  if (institution === 'University of Port Harcourt' && c === 'science laboratory technology') return duration(5, 'Full-time Science Laboratory Technology degree.', namedSource('UNIPORT: Science Laboratory Technology', 'https://sslt.uniport.edu.ng/about/'), true);
  if (institution === 'Federal University of Technology, Akure' && c === 'information technology') return duration(5, 'BTech, ten semesters from UTME entry.', namedSource('FUTA: Information Technology duration', 'https://ift.futa.edu.ng/home/2373'), true);
  if (institution === 'Federal University of Technology, Akure' && c === 'microbiology') return duration(5, 'Full-time undergraduate programme from 100 level.', namedSource('FUTA: Microbiology programme', 'https://mcb.futa.edu.ng/home/2554'), true);
  if (institution === 'Federal University of Technology, Owerri' && /agricultur/i.test(faculty)) return duration(5, 'Bachelor of Agricultural Technology.', namedSource('FUTO: School of Agriculture', 'https://legacy.futo.edu.ng/saat/'), true);
  if (institution === 'Federal University of Agriculture, Abeokuta' && profile?.discipline === 'agriculture' && !['home-science', 'food-science', 'hydrology'].includes(profile.id)) return duration(5, 'Bachelor of Agriculture route described in the university’s prospectus.', namedSource('FUNAAB: undergraduate agriculture prospectus', 'https://funaab.edu.ng/wp-content/uploads/second.pdf'), true);
  if (institution === 'University of Ilorin' && profile?.id === 'physiotherapy') return duration(5, 'Bachelor of Physiotherapy, UTME entry.', namedSource('UNILORIN: Physiotherapy curriculum', 'https://physiotherapy.basicclinical.unilorin.edu.ng/about/curriculum-program/'), true);
  if (institution === 'University of Nigeria, Nsukka' && profile?.id === 'physiotherapy') return duration(5, 'Bachelor of Medical Rehabilitation in Physiotherapy.', namedSource('UNN: Medical Rehabilitation', 'https://healthscs.unn.edu.ng/medical-rehabilitation-history/'), true);
  if (profile?.id === 'pharmacy' && institution === 'University of Ibadan') return duration(6, 'Doctor of Pharmacy, UTME entry.', namedSource('UI: PharmD degree regulations', 'https://pharm.ui.edu.ng/regulations-governing-degree-pharmd'), true);
  const source = curriculumSource(profile?.discipline || 'science');
  const standard = 'Full-time entry at 100 level; duration of the degree route in the linked NUC curriculum. Internship, professional training and NYSC are separate.';
  if (profile?.id === 'pharmacy') {
    if (/doctor/.test(c)) return duration(6, 'Doctor of Pharmacy (PharmD), 100-level entry.', source);
    return { text: '5 years (BPharm) · 6 years (PharmD)', route: 'The qualification determines the duration. The catalogue title “Pharmacy” does not distinguish these routes.', source, verifiedInstitution: false };
  }
  if (profile?.id === 'physiotherapy') return { text: '5 years (bachelor’s) · 6 years (DPT)', route: 'Bachelor of Physiotherapy/Medical Rehabilitation and Doctor of Physiotherapy are different degree routes. The institution’s current award determines the duration.', source, verifiedInstitution: false };
  if (profile?.discipline === 'agriculture' && profile.years === null) return { text: '4 years (BSc) · 5 years (BAgric/BTech)', route: 'NUC provides distinct specialist BSc and agricultural degree routes; use the award stated in the university’s offer.', source, verifiedInstitution: false };
  if (profile?.id === 'nutrition') return { text: '4 years (BSc) · 5 years (BNSc)', route: 'Human Nutrition and Nutrition & Dietetics have different degree structures. Check the university’s award, rather than treating the titles as interchangeable.', source, verifiedInstitution: false };
  if (profile?.id === 'science-lab') return { text: '4 years (BSc) · 5 years (BTech)', route: 'The science laboratory qualification and university curriculum determine the route.', source, verifiedInstitution: false };
  if (profile?.id === 'environment') return { text: '4 years (BSc route) · 5 years (technology route)', route: 'Environmental Standards has a four-year NUC route. Environmental Management technology programmes can follow a five-year route; the university’s award is needed to distinguish them.', source, verifiedInstitution: false };
  if (['Federal University of Technology, Akure', 'Federal University of Technology, Owerri'].includes(institution) && profile?.years === 4 && !['anatomy', 'physiology'].includes(profile.id)) return { text: 'University duration unconfirmed', route: 'This university offers technology degrees whose length can differ from the four-year BSc route. A programme-specific duration has not been established from the available official material.', source, verifiedInstitution: false };
  if (profile?.years) return duration(profile.years, standard, source);
  return { text: 'Qualification must be specified', route: 'This catalogue label does not identify a single degree with a verifiable duration.', source, verifiedInstitution: false };
}

const meritAliases: Record<string, string> = {
  'english language': 'english', 'medicine and surgery': 'medicine & surgery',
  'dental science': 'dentistry', 'nursing science': 'nursing sciences',
  'medical laboratory science': 'medical & laboratory science',
  'electrical and electronics engineering': 'electrical engineering',
  'metallurgical & materials engineering': 'metallurgical & material engineering',
  'surveying & geoinformatics engineering': 'surveying & geoformatics engineering',
  'business administration': 'business admin.', 'irpm': 'erhrm',
  'business education': 'education business', 'education islamic religious studies': 'education irs',
  'education christian religious studies': 'education crs', 'early childhood education': 'education early childhood',
  'human kinetics education': 'human kinetics', 'integrated science education': 'education integrated science',
  'technology education': 'education technology', 'social standard': 'social standards',
};
export function getGuideCompetition(institution: string, course: string) {
  const table = (guideMerit as Record<string, { session: string; url: string; scores: Record<string, number> }>)[institution];
  const key = course.toLowerCase();
  const score = table?.scores[key] ?? (institution === 'University of Lagos' ? table?.scores[meritAliases[key]] : undefined);
  if (score !== undefined) return {
    score,
    text: `The published ${table.session} merit aggregate for this programme was ${score}/100. It shows the score needed for that session’s merit list, rather than an acceptance rate or a guaranteed future threshold.`,
    source: { title: `${institution}: published merit scores`, url: table.url, session: table.session },
  };
  return { text: 'Admission competitiveness depends on demand and the places available at this university. A programme-specific applicant-to-place ratio has not been verified, so no acceptance percentage is assigned.', source: competitionSource };
}
