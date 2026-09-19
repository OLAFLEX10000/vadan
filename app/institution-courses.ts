// Undergraduate faculty/college and programme data checked against official university websites.
// Research date: 18 September 2026. Source URLs accompany each institution.
export const researchedInstitutionCourses: Record<string, { group: string; items: string[] }[]> = {
  // https://cuab.edu.ng/undergraduate-degree/ and the six college pages linked from https://cuab.edu.ng/
  "Crescent University": [
    { group: "Bola Ajibola College of Law", items: ["Law"] },
    { group: "College of Health Sciences", items: ["Anatomy", "Nursing Science", "Physiology"] },
    { group: "College of Environmental Sciences", items: ["Architecture"] },
    { group: "College of Arts, Social and Management Sciences", items: ["Accounting", "Business Administration", "Economics", "Political Science and International Relations", "Mass Communication", "Islamic Studies"] },
    { group: "College of Information and Communication Technology", items: ["Computer Science"] },
    { group: "College of Natural and Applied Sciences", items: ["Biochemistry", "Microbiology"] },
  ],
  // https://fupre.edu.ng/fupre-announces-supplementary-post-utme-screening-for-2025-2026-academic-session/
  "Federal University of Petroleum Resources, Effurun": [
    { group: "College of Science", items: ["Chemistry", "Industrial Chemistry", "Mathematics", "Physics", "Statistics", "Geology", "Applied Geophysics", "Science Laboratory Technology", "Petroleum Chemistry", "Biochemistry", "Microbiology", "Environmental Management and Toxicology"] },
    { group: "College of Engineering and Technology", items: ["Petroleum Engineering", "Chemical Engineering", "Mechanical Engineering", "Marine Engineering", "Civil Engineering", "Electrical and Electronics Engineering", "Computer Engineering", "Petrochemical Engineering", "Natural Gas Engineering"] },
    { group: "College of Maritime and Offshore Studies", items: ["Maritime Transport and Logistics", "Maritime Economics and Finance"] },
    { group: "College of Computing", items: ["Computer Science", "Software Engineering", "Cybersecurity", "Information Technology", "Data Science"] },
    { group: "College of Petroleum Administration and Management", items: ["Logistics and Supply Chain Management", "Procurement Management", "Petroleum Information Management", "Entrepreneurship"] },
  ],
  // https://cie.unilorin.edu.ng/undergraduates/
  "University of Ilorin": [
    { group: "Faculty of Agriculture", items: ["Agriculture", "Agricultural Extension and Rural Development", "Aquaculture and Fisheries", "Forestry and Wildlife Management", "Home Economics", "Food Science"] },
    { group: "Faculty of Arts", items: ["Arabic", "English", "French", "History and International Studies", "Linguistics", "Hausa", "Igbo", "Yoruba", "Performing Arts", "Christian Studies", "Comparative Religious Studies", "Islamic Studies"] },
    { group: "Faculty of Basic Clinical Sciences", items: ["Medical Laboratory Science", "Physiotherapy"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Anatomy", "Physiology"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery", "Nursing Science"] },
    { group: "Faculty of Communication and Information Sciences", items: ["Computer Science", "Information and Communication Science", "Library and Information Science", "Mass Communication", "Telecommunication Science"] },
    { group: "Faculty of Education", items: ["Adult Education", "Primary Education Studies", "Arabic Education", "Christian Studies Education", "English Education", "French Education", "History Education", "Islamic Studies Education", "Yoruba Education", "Counsellor Education", "Business Education", "Educational Management", "Computer Science Education", "Educational Technology", "Building Technology Education", "Electrical and Electronic Technology Education", "Metalwork Technology Education", "Woodwork Technology Education", "Health Education", "Human Kinetics Education", "Agricultural Science Education", "Biology Education", "Chemistry Education", "Mathematics Education", "Physics Education", "Economics Education", "Geography Education", "Social Studies Education"] },
    { group: "Faculty of Engineering and Technology", items: ["Agricultural and Biosystems Engineering", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering", "Electrical Engineering", "Food Engineering", "Metallurgical Engineering", "Mechanical Engineering", "Water Resources and Environmental Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Estate Management", "Quantity Surveying", "Surveying and Geoinformatics", "Urban and Regional Planning"] },
    { group: "Faculty of Law", items: ["Law", "Combined Law"] },
    { group: "Faculty of Life Sciences", items: ["Biochemistry", "Microbiology", "Optometry", "Plant Biology", "Zoology"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Business Administration", "Finance", "Industrial Relations and Personnel Management", "Marketing", "Public Administration"] },
    { group: "Faculty of Physical Sciences", items: ["Chemistry", "Geology and Mineral Science", "Applied Geophysics", "Industrial Chemistry", "Mathematics", "Physics", "Statistics"] },
    { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
    { group: "Faculty of Social Sciences", items: ["Criminology and Security Studies", "Economics", "Geography", "Political Science", "Psychology", "Social Work", "Sociology"] },
    { group: "Faculty of Veterinary Medicine", items: ["Veterinary Medicine"] },
  ],
  // https://www.veritas.edu.ng/admissions
  "Veritas University": [
    { group: "Faculty of Education", items: ["Educational Management", "Guidance and Counselling", "English Education", "Economics Education", "Religious Education", "Physics Education", "Chemistry Education", "Computer Science Education"] },
    { group: "Faculty of Humanities", items: ["Theatre Arts", "Religion and Development Studies", "English and Literary Studies", "History and International Relations"] },
    { group: "Faculty of Management Sciences", items: ["Banking and Finance", "Accounting", "Entrepreneurship", "Business Administration", "Marketing", "Public Administration"] },
    { group: "Faculty of Engineering", items: ["Computer Engineering", "Electrical and Electronic Engineering"] },
    { group: "Faculty of Theology", items: ["Theology", "Sacred Theology"] },
    { group: "Faculty of Philosophy", items: ["Philosophy (B.A.)", "Philosophy (B.Phil.)"] },
    { group: "Faculty of Social Sciences", items: ["Mass Communication", "Political Science and Diplomacy", "Peace and Conflict Studies", "Economics"] },
    { group: "Faculty of Natural and Applied Sciences", items: ["Physics with Electronics", "Biochemistry", "Industrial Chemistry", "Microbiology"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "College of Medicine", items: ["Medicine and Surgery"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Physiology", "Anatomy"] },
    { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
    { group: "Faculty of Health Sciences", items: ["Nursing Science", "Medical Laboratory Science"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Software Engineering", "Information Systems", "Data Science", "Artificial Intelligence", "Cyber Security"] },
  ],
  // https://acu.edu.ng/courses/ (2026/2027 course table)
  "Ajayi Crowther University": [
    { group: "Faculty of Agricultural Science", items: ["Agricultural Economics and Extension", "Animal and Crop Science"] },
    { group: "Faculty of Basic Medical Science", items: ["Environmental Health Science", "Medical Laboratory Science", "Radiography and Radiation Science"] },
    { group: "Faculty of Communication and Media Studies", items: ["Mass Communication", "Information and Media Studies", "Broadcasting", "Journalism and Media Studies"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Computer Science (ICT Option)", "Cybersecurity", "Data Security"] },
    { group: "Faculty of Education", items: ["Business Education", "English Education", "Guidance and Counselling", "Social Studies Education", "Political Science Education", "Educational Management", "Early Childhood Education"] },
    { group: "Faculty of Engineering", items: ["Computer Engineering", "Electrical and Electronics Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building", "Estate Management", "Urban and Regional Planning"] },
    { group: "Faculty of Humanities", items: ["English", "History and International Studies", "Music", "Performing Arts", "Christian Religious Studies"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Finance", "Business Administration", "Entrepreneurship", "Employment Relations and Human Resources Management"] },
    { group: "Faculty of Natural Science", items: ["Biochemistry", "Biotechnology", "Geological Sciences", "Industrial Chemistry", "Mathematics", "Microbiology", "Physics", "Physics Electronics", "Statistics"] },
    { group: "Faculty of Social Science", items: ["Criminology and Security Studies", "Economics", "Political Science", "Psychology", "Sociology", "Peace and Conflict Studies"] },
  ],
  // https://tasued.edu.ng/post-utme-de-admission-screening-exercise-for-the-2026-2027-academic-session/
  "Tai Solarin University of Education": [
    { group: "College of Humanities", items: ["Fine and Applied Arts", "Fine and Applied Arts Education", "Creative Arts", "Creative Arts Education", "English", "English Education", "French", "French Education", "History and Diplomatic Studies", "History and Diplomatic Studies Education", "Christian Religious Studies", "Christian Religious Studies Education", "Islamic Studies", "Islamic Studies Education", "Yoruba", "Yoruba Education"] },
    { group: "College of Science and Information Technology", items: ["Biology", "Biology Education", "Chemistry", "Chemistry Education", "Computer Science", "Computer Science Education", "Health Education", "Human Kinetics", "Mathematics", "Mathematics Education", "Physics", "Physics Education", "Physics and Electronics", "Cyber Security", "Software Engineering", "Data Science"] },
    { group: "College of Social and Management Sciences", items: ["Economics", "Economics Education", "Accounting", "Accounting Education", "Geography and Environmental Management", "Geography and Environmental Management Education", "Transport Planning and Management", "Transport Planning and Management Education", "Political Science", "Political Science Education", "Social Studies Education", "Social Work", "Sociology"] },
    { group: "College of Specialized and Professional Education", items: ["Adult Education", "Childhood Education", "Counselling Psychology", "Educational Management", "Educational Technology", "Library and Information Science"] },
    { group: "College of Vocational and Technology Education", items: ["Business Education", "Secretarial Administration", "Home Economics and Hotel Management Education", "Technical Education", "Entrepreneurship", "Entrepreneurship Education"] },
    { group: "College of Agriculture and Hospitality Management", items: ["Agricultural Science Education", "Agricultural Extension", "Fisheries and Aquaculture", "Animal Science", "Tourism and Hospitality Management", "Agricultural Economics"] },
  ],
  // https://nou.edu.ng/programmes/ (current faculty/programme directory)
  "National Open University of Nigeria": [
    { group: "Faculty of Agricultural Sciences", items: ["Agricultural Economics and Agro-Business", "Agricultural Extension and Rural Development", "Animal Science", "Crop Science", "Soil and Land Resources Management"] },
    { group: "Faculty of Arts", items: ["English", "Arabic", "French", "Hausa", "Igbo", "Yoruba", "Philosophy", "Christian Theology", "Islamic Studies"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Information Technology"] },
    { group: "Faculty of Education", items: ["English Education", "French Education", "Business Education", "Early Childhood Education", "Primary Education", "Health Education", "Human Kinetics", "Library and Information Science", "Agricultural Science Education", "Biology Education", "Chemistry Education", "Computer Science Education", "Integrated Science Education", "Mathematics Education", "Physics Education"] },
    { group: "Faculty of Health Sciences", items: ["Environmental Health Science", "Nursing Science", "Public Health"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Business Administration", "Marketing", "Cooperative and Rural Development", "Entrepreneurship", "Accounting", "Banking and Finance", "Public Administration"] },
    { group: "Faculty of Science", items: ["Biology", "Chemistry", "Environmental Science and Resource Management", "Mathematics", "Mathematics and Computer Science", "Physics"] },
    { group: "Faculty of Social Sciences", items: ["Criminology and Security Studies", "Development Studies", "Economics", "Broadcast Journalism", "Film Production", "Mass Communication", "Peace Studies and Conflict Resolution", "International Relations", "Political Science", "Tourism Studies"] },
  ],
  // https://wellspringuniversity.edu.ng/undergraduate
  "Wellspring University": [
    { group: "College of Health Sciences", items: ["Nursing Science", "Medical Laboratory Science", "Public Health", "Community Health Science", "Health Information Management"] },
    { group: "College of Medicine", items: ["Medicine and Surgery", "Human Anatomy", "Human Physiology"] },
    { group: "College of Science and Computing", items: ["Computer Science", "Cyber Security", "Data Science", "Information Technology", "Software Engineering", "Biochemistry", "Microbiology"] },
    { group: "College of Social and Management Sciences", items: ["Accounting", "Business Administration", "Economics", "Entrepreneurship", "Hospitality and Tourism Studies", "Human Resource Management", "International Relations and Diplomacy", "Mass Communication", "Public Administration", "Criminology and Security Studies", "Intelligence and Security Studies"] },
  ],
  // https://www.rhemauniversity.edu.ng/degree_program and its linked college pages
  "Rhema University": [
    { group: "College of Medicine and Health Sciences", items: ["Human Anatomy", "Human Physiology", "Medical Laboratory Science", "Medicine and Surgery", "Nursing Science"] },
    { group: "College of Basic and Applied Sciences", items: ["Biochemistry", "Chemistry (Pure and Applied)", "Computer Science", "Microbiology"] },
    { group: "College of Management and Social Sciences", items: ["Accounting", "Banking and Finance", "Economics", "Marketing", "Mass Communication", "Political Science"] },
  ],
  // https://www.dcp.oaustech.edu.ng/index.php/item/442-2025-2026-admissions-screening-exercise-for-utme-and-direct-entry-candidates.html
  // Current official name: Olusegun Agagu University of Science and Technology.
  "Ondo State University of Science and Technology": [
    { group: "School of Agriculture, Food and Natural Resources", items: ["Agricultural Economics and Extension", "Animal Production and Health", "Crop, Soil and Pest Management", "Fisheries and Aquaculture Technology", "Forestry, Wildlife and Environmental Management", "Food Science and Technology"] },
    { group: "School of Nursing and Allied Health Sciences", items: ["Medical Laboratory Science", "Nursing Science", "Public Health Science"] },
    { group: "School of Earth Sciences", items: ["Applied Geology", "Applied Geophysics"] },
    { group: "School of Engineering and Engineering Technology", items: ["Chemical Engineering", "Civil Engineering", "Electrical and Electronics Engineering", "Mechanical Engineering", "Petroleum and Gas Engineering"] },
    { group: "School of Information and Communication Technology", items: ["Computer Science"] },
    { group: "School of Management Sciences", items: ["Accounting", "Business Management", "Economics", "Entrepreneurship", "Project Management", "Public Administration"] },
    { group: "School of Science", items: ["Biochemistry", "Botany", "Industrial Chemistry", "Mathematics", "Microbiology", "Physics", "Statistics", "Zoology"] },
  ],
  // https://fuotuoke.edu.ng/post-utme-screening-of-candidates-for-admission-into-the-federal-university-otuoke-for-the-2025-2026-academic-session/
  "Federal University, Otuoke": [
    { group: "Faculty of Basic Medical Science", items: ["Anatomy", "Physiology"] },
    { group: "Faculty of Education", items: ["Biology Education", "Business Education", "Chemistry Education", "Computer Science Education", "Economics Education", "English Education", "History Education", "Mathematics Education", "Physics Education"] },
    { group: "Faculty of Engineering", items: ["Chemical Engineering", "Civil Engineering", "Electrical and Electronic Engineering", "Mechatronic Engineering", "Mechanical Engineering", "Petroleum and Gas Engineering"] },
    { group: "Faculty of Humanities", items: ["English and Communication Studies", "History and International Studies", "Journalism and Media Studies", "Linguistics", "Philosophy", "Theatre and Film Studies"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Entrepreneurship", "Marketing", "Procurement and Logistics Management", "Tourism and Hospitality Management"] },
    { group: "Faculty of Medical Laboratory Science", items: ["Medical Laboratory Science"] },
    { group: "Faculty of Nursing Science", items: ["Nursing Science"] },
    { group: "Faculty of Social Sciences", items: ["Criminology and Security Studies", "Economics and Development Studies", "Library and Information Science", "Political Science", "Public Administration", "Social Work", "Sociology and Anthropology"] },
    { group: "Faculty of Science", items: ["Biochemistry", "Biology", "Chemistry", "Computer Science and Informatics", "Cybersecurity", "Environmental Management and Toxicology", "Geology", "Mathematics", "Microbiology", "Physics", "Statistics"] },
  ],
  // https://unijos.edu.ng/freedom-information-request (Academic Programmes table)
  "University of Jos": [
    { group: "Faculty of Arts", items: ["Archaeology and Heritage Studies", "Theatre and Film Arts", "Linguistics", "Arabic Studies", "Islamic Studies", "History and International Studies", "French", "English and Literature", "Music", "Mass Communication", "Religious Studies", "Christian Religious Studies"] },
    { group: "Faculty of Education", items: ["History Education", "French Education", "Adult Education", "English Education", "Religion Education", "Economics Education", "Biology Education", "Chemistry Education", "Geography Education", "Mathematics Education", "Physics Education", "Library and Information Science", "Early Childhood Education", "Physical and Health Education", "Integrated Science Education", "Social Studies Education", "Educational Administration and Planning", "Guidance and Counselling", "Special Education", "Technology Education"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building", "Quantity Surveying", "Estate Management", "Geography and Planning", "Urban and Regional Planning", "Fine and Applied Arts"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Anatomy", "Biochemistry"] },
    { group: "Faculty of Health Sciences and Technology", items: ["Nursing Science", "Medical Laboratory Science"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Dental Sciences", items: ["Dentistry"] },
    { group: "Faculty of Natural Sciences", items: ["Geology", "Microbiology", "Industrial Chemistry", "Pure and Applied Chemistry", "Physics", "Statistics", "Mathematics", "Computer Science", "Plant Science and Biotechnology", "Science Laboratory Technology", "Zoology"] },
    { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Political Science", "Psychology", "Sociology", "Criminology and Security Studies"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Business Administration", "Banking and Finance", "Marketing", "Insurance", "Actuarial Science"] },
    { group: "Faculty of Engineering", items: ["Civil Engineering", "Mechanical Engineering", "Electrical and Electronics Engineering", "Mining Engineering"] },
    { group: "Faculty of Veterinary Medicine", items: ["Veterinary Medicine"] },
    { group: "Faculty of Agriculture", items: ["Agriculture"] },
  ],
  // https://mybuk2.buk.edu.ng/bukat2024/eligibility.php
  "Bayero University": [
    {
      "group": "Faculty of Agriculture",
      "items": [
        "Agric Economics and Extension",
        "Agriculture",
        "Fisheries and Aquaculture",
        "Food Science and Technology",
        "Forestry and Wildlife Management"
      ]
    },
    {
      "group": "Faculty of Allied Health Sciences",
      "items": [
        "Environmental Health Science",
        "Medical Laboratory Science",
        "Nursing",
        "Physiotherapy",
        "Radiography",
        "Doctor of Optometry"
      ]
    },
    {
      "group": "Faculty of Arts and Islamic Studies",
      "items": [
        "Arabic",
        "English",
        "French",
        "Hausa",
        "History",
        "Islamic Studies",
        "Linguistics",
        "Sharia"
      ]
    },
    {
      "group": "Faculty of Basic Medical Sciences",
      "items": [
        "Anatomy",
        "Biochemistry",
        "Human Physiology",
        "Nutrition and Dietetics"
      ]
    },
    {
      "group": "Faculty of Clinical Sciences",
      "items": [
        "Medicine and Surgery"
      ]
    },
    {
      "group": "Faculty of Communication",
      "items": [
        "Theatre and Performing Arts",
        "Information and Media Studies",
        "Mass Communication"
      ]
    },
    {
      "group": "Faculty of Computer Science and Information Technology",
      "items": [
        "Computer Science",
        "Cyber Security",
        "Information Technology",
        "Software Engineering"
      ]
    },
    {
      "group": "Faculty of Dentistry",
      "items": [
        "Dentistry/Dental Surgery"
      ]
    },
    {
      "group": "Faculty of Earth and Environmental Sciences",
      "items": [
        "Urban and Regional Planning",
        "Architecture",
        "Environmental Management",
        "Estate Management",
        "Geography",
        "Geology",
        "Meteorology",
        "Quantity Surveying"
      ]
    },
    {
      "group": "Faculty of Education",
      "items": [
        "Adult Education and Community Services",
        "Arabic Education",
        "Early Childhood Education",
        "Economics Education",
        "English Education",
        "French Education",
        "Hausa Education",
        "History Education",
        "Islamic Studies Education",
        "Primary Education",
        "Special Education",
        "Agriculture Education",
        "Biology Education",
        "Chemistry Education",
        "Geography Education",
        "Health Education",
        "Mathematics Education",
        "Physical and Health Education",
        "Physical Education",
        "Physics Education",
        "Library and Information Science"
      ]
    },
    {
      "group": "Faculty of Engineering",
      "items": [
        "Agricultural Engineering",
        "Automotive Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Mechatronics Engineering",
        "Petroleum Engineering",
        "Telecommunication Engineering"
      ]
    },
    {
      "group": "Faculty of Law",
      "items": [
        "Law"
      ]
    },
    {
      "group": "Faculty of Life Sciences",
      "items": [
        "Applied Biology",
        "Botany",
        "Microbiology",
        "Zoology"
      ]
    },
    {
      "group": "Faculty of Management Sciences",
      "items": [
        "Accounting",
        "Banking and Finance",
        "Business Administration",
        "Entrepreneurship",
        "Public Administration",
        "Taxation"
      ]
    },
    {
      "group": "Faculty of Pharmaceutical Sciences",
      "items": [
        "Doctor of Pharmacy"
      ]
    },
    {
      "group": "Faculty of Physical Sciences",
      "items": [
        "Chemistry",
        "Electronics with Physics",
        "Forensic Science",
        "Industrial Chemistry",
        "Mathematics",
        "Physics",
        "Statistics"
      ]
    },
    {
      "group": "Faculty of Social Sciences",
      "items": [
        "Criminology",
        "Economics",
        "International Relations",
        "Political Science",
        "Sociology"
      ]
    },
    {
      "group": "Faculty of Veterinary Medicine",
      "items": [
        "Doctor of Veterinary Medicine"
      ]
    }
  ],
  // https://edouniversity.edu.ng/admissions/undergraduate?trf=true
  "Edo University Iyamho": [
    {
      "group": "Faculty of Arts and Communication",
      "items": [
        "Broadcasting",
        "English",
        "History and International Studies",
        "Journalism and Media Studies",
        "Mass Communication"
      ]
    },
    {
      "group": "Faculty of Applied Health Sciences",
      "items": [
        "Medical Laboratory Science",
        "Nursing"
      ]
    },
    {
      "group": "Faculty of Basic Medical Sciences",
      "items": [
        "Biochemistry",
        "Anatomy",
        "Physiology"
      ]
    },
    {
      "group": "Faculty of Clinical Science",
      "items": [
        "Medicine and Surgery"
      ]
    },
    {
      "group": "Faculty of Engineering",
      "items": [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Electrical/Electronic Engineering",
        "Mechanical Engineering",
        "Mechatronics Engineering",
        "Mining Engineering",
        "Production Engineering"
      ]
    },
    {
      "group": "Faculty of Law",
      "items": [
        "Law"
      ]
    },
    {
      "group": "Faculty of Management and Social Sciences",
      "items": [
        "Accounting",
        "Banking and Finance",
        "Business Administration",
        "Economics",
        "Entrepreneurship",
        "Political Science",
        "Public Administration",
        "Peace and Conflict Studies",
        "Sociology"
      ]
    },
    {
      "group": "Faculty of Science",
      "items": [
        "Animal and Environmental Biology",
        "Computer Science",
        "Cyber Security",
        "Industrial Chemistry",
        "Microbiology",
        "Plant Biology and Biotechnology",
        "Physics with Electronics",
        "Software Engineering",
        "Science Laboratory Technology",
        "Mathematics"
      ]
    }
  ],
  // https://run.edu.ng/full-time-undergraduate-programmes/
  "Redeemer's University": [
    { group: "Faculty of Basic Medical Sciences", items: ["Biochemistry", "Human Anatomy", "Human Physiology", "Public Health", "Nursing Science", "Physiotherapy", "Medical Laboratory Science"] },
    { group: "Faculty of Education", items: ["Educational Technology", "Technical Education", "Industrial Technology Education", "Educational Management"] },
    { group: "Faculty of Engineering", items: ["Civil Engineering", "Computer Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering"] },
    { group: "Faculty of Built Environment Studies", items: ["Architecture", "Building Technology", "Estate Management", "Quantity Surveying", "Urban and Regional Planning"] },
    { group: "Faculty of Humanities", items: ["Christian Religious Studies", "English", "French", "History and International Studies", "Philosophy", "Theatre Arts"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Public Administration", "Hospitality and Tourism Management", "Insurance", "Marketing", "Transport Management", "Actuarial Science"] },
    { group: "Faculty of Natural Sciences", items: ["Environmental Management and Toxicology", "Geology", "Industrial Chemistry", "Industrial Mathematics", "Industrial Mathematics and Computer Science", "Microbiology", "Petroleum Chemistry", "Physics with Electronics", "Statistics", "Statistics and Data Science"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Mass Communication", "Political Science", "Psychology", "Sociology", "Social Work"] },
    { group: "Faculty of Computing and Digital Technology", items: ["Computer Science", "Cyber Security", "Information Technology"] },
  ],
  // https://pauluniversity.edu.ng/study/undergraduate and https://www.utme.pauluniversity.edu.ng/index.php
  "Paul University": [
    { group: "Faculty of Allied Health Sciences", items: ["Physiotherapy", "Health Information Management", "Medical Laboratory Science", "Nursing Science", "Public Health", "Radiography"] },
    { group: "Faculty of Arts and Humanities", items: ["English and Literary Studies", "English Language", "History and International Relations", "Literature in English", "Religion", "Theology", "Theatre Arts"] },
    { group: "Faculty of Computing Sciences", items: ["Artificial Intelligence", "Cybersecurity", "Software Engineering"] },
    { group: "Faculty of Education", items: ["Library and Information Science", "Integrated Science Education", "English and Literary Studies Education"] },
    { group: "Faculty of Engineering", items: ["Computer Engineering", "Electrical and Electronic Engineering"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Business Administration", "Management and Entrepreneurial Studies", "Public Administration"] },
    { group: "Faculty of Natural and Applied Sciences", items: ["Biochemistry", "Pure and Industrial Chemistry", "Computer Science and Information Technology", "Management Information System", "Mathematics", "Microbiology", "Physics"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Mass Communication", "Political Science", "Psychology", "Sociology"] },
  ],
  // https://gouni.edu.ng/all-courses/ and https://gouni.edu.ng/fill-admission-form/
  "Godfrey Okoye University": [
    { group: "College of Medicine", items: ["Medicine and Surgery"] },
    { group: "Faculty of Allied Health Sciences", items: ["Nursing Science"] },
    { group: "Faculty of Arts", items: ["English and Literary Studies", "History and International Studies", "Philosophy", "Music", "Religious Studies"] },
    { group: "Faculty of Education", items: ["Biology Education", "Business Education", "Chemistry Education", "Computer Science Education", "Economics Education", "Educational Management", "English and Literary Studies Education", "Guidance and Counselling", "History and International Studies Education", "Mathematics Education", "Physics Education", "Political Science Education", "Primary Education", "Social Studies Education"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management and Social Sciences", items: ["Accounting", "Business Management", "Economics", "International Relations", "Mass Communication", "Political Science", "Psychology", "Public Administration", "Sociology"] },
    { group: "Faculty of Natural Sciences and Environmental Studies", items: ["Applied Biology", "Biotechnology", "Microbiology", "Chemistry", "Biochemistry", "Industrial Chemistry", "Mathematics", "Physics", "Architecture"] },
    { group: "Faculty of Computing and Information Technology", items: ["Computer Science", "Software Engineering", "Cybersecurity", "Data Science"] },
  ],
  // https://iaue.edu.ng/wp-content/uploads/2026/05/updated2026-2027-UNIVERSITY-APPROVED-COURSES-_IAUE-PHC.pdf
  "Ignatius Ajuru University of Education": [
    {
      "group": "Faculty of Agriculture",
      "items": [
        "Agriculture",
        "Agricultural Economics",
        "Agricultural Extension",
        "Animal Science",
        "Fisheries and Aquaculture",
        "Crop Science",
        "Soil Science"
      ]
    },
    {
      "group": "Faculty of Vocational and Technical Education",
      "items": [
        "Agricultural Education",
        "Technical Education",
        "Home Economics, Hospitality and Tourism"
      ]
    },
    {
      "group": "Faculty of Social Sciences",
      "items": [
        "Political Science",
        "Economics",
        "Sociology",
        "Social Work",
        "Geography and Environmental Studies",
        "Petroleum Economics and Policy Studies",
        "Public Administration",
        "Library and Information Science (B.Sc.)",
        "Environmental Management"
      ]
    },
    {
      "group": "Faculty of Education",
      "items": [
        "Educational Management",
        "Library and Information Science (B.LIS.)",
        "Primary Education Studies",
        "Early Childhood Education",
        "Special Education",
        "Guidance and Counselling",
        "Adult Education and Community Development",
        "Educational Technology",
        "Education and Political Science",
        "Education and Economics",
        "Education and Social Studies",
        "Education and Geography",
        "Education and French",
        "Education and Religious Studies",
        "Education Fine and Applied Arts",
        "Education and History",
        "Education and Music",
        "Education and English",
        "Accounting Education",
        "Secretarial Education",
        "Marketing Education",
        "Management Education",
        "Education and Biology",
        "Computer Education",
        "Education and Mathematics",
        "Health and Safety Education",
        "Education and Physics",
        "Education and Chemistry",
        "Education and Integrated Science",
        "Human Kinetics and Sports Science"
      ]
    },
    {
      "group": "Faculty of Humanities",
      "items": [
        "Foreign Languages and International Studies",
        "Religious Studies",
        "Theatre Arts, Film and Theater Studies",
        "Fine and Applied Arts",
        "History and Diplomatic Studies",
        "Music",
        "English and Communication Arts",
        "Linguistics",
        "Philosophy",
        "Mass Communication",
        "Peace and Conflict Studies"
      ]
    },
    {
      "group": "Faculty of Administration and Management",
      "items": [
        "Accounting",
        "Office and Information Management",
        "Marketing",
        "Business Management",
        "Employment and Human Resources Management",
        "Entrepreneurship",
        "Banking and Finance",
        "Hospitality and Tourism Management"
      ]
    },
    {
      "group": "Faculty of Natural and Applied Sciences",
      "items": [
        "Biology",
        "Computer Science",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Geophysics",
        "Industrial Chemistry",
        "Statistics",
        "Software Engineering",
        "Information Technology",
        "Microbiology",
        "Zoology"
      ]
    }
  ],
  // https://caritasuni.edu.ng/admission_info.pdf and https://caritasuni.edu.ng/documents/CARITAS%20UNIVERSITY%20FEE%20SCHEDULE-.pdf
  "Caritas University": [
    { group: "Faculty of Engineering", items: ["Chemical Engineering", "Computer Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Urban and Regional Planning", "Estate Management"] },
    { group: "Faculty of Health Sciences", items: ["Nursing Science", "Medical Laboratory Science", "Radiography and Radiation Science"] },
    { group: "Faculty of Management and Social Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Economics", "English", "Industrial Relations and Personnel Management", "Marketing", "Mass Communication", "Political Science", "Psychology", "Public Administration", "Sociology"] },
    { group: "Faculty of Natural Sciences", items: ["Biochemistry", "Computer Science", "Industrial Chemistry", "Microbiology", "Mathematics and Statistics"] },
  ],
  // Augustine University, Ilara-Epe: https://www.augustineuniversity.edu.ng/Content?head=Admission+Instructions&read=10
  "St. Augustine University": [
    { group: "Faculty of Humanities, Management and Social Sciences", items: ["English", "Philosophy", "Religious Studies", "Accounting", "Banking and Finance", "Business Administration", "Economics", "Mass Communication", "Political Science"] },
    { group: "Faculty of Science", items: ["Mathematics", "Biology", "Microbiology", "Physics", "Computer Science", "Chemistry", "Biochemistry", "Biotechnology", "Fisheries and Aquaculture", "Cyber Security", "Information Technology", "Software Engineering"] },
    { group: "Faculty of Engineering", items: ["Computer Engineering"] },
    { group: "Faculty of Basic Medical Health Science", items: ["Nursing Science"] },
  ],
  // https://www.delsu.edu.ng/programmes/FACULTIES%20AND%20DEPARTMENTS.pdf and https://portal2.delsu.edu.ng/programmes/JUPEB_2025_2026.pdf
  "Delta State University": [
    {
      "group": "Faculty of Agriculture",
      "items": [
        "Agricultural Economics",
        "Agricultural Extension",
        "Soil Science",
        "Crop Science",
        "Animal Science",
        "Fisheries and Aquaculture",
        "Forestry and Wildlife",
        "Agribusiness Management"
      ]
    },
    {
      "group": "Faculty of Arts",
      "items": [
        "English and Literary Studies",
        "Fine and Applied Arts",
        "History and International Studies",
        "French",
        "Linguistics",
        "Linguistics/Urhobo",
        "Music",
        "Religious Studies",
        "Philosophy",
        "Theatre Arts"
      ]
    },
    {
      "group": "Faculty of Basic Medical Sciences",
      "items": [
        "Anatomy and Cell Biology",
        "Medical Biochemistry",
        "Nursing Science",
        "Pharmacology",
        "Physiology"
      ]
    },
    {
      "group": "Faculty of Clinical Medicine",
      "items": [
        "Medicine and Surgery"
      ]
    },
    {
      "group": "Faculty of Education",
      "items": [
        "Business Education",
        "English Education",
        "History Education",
        "Early Childhood Education",
        "Educational Management",
        "Guidance and Counselling",
        "Health and Safety Education",
        "Human Kinetics",
        "Library and Information Science",
        "Biology Education",
        "Chemistry Education",
        "Computer Science Education",
        "Integrated Science Education",
        "Mathematics Education",
        "Physics Education",
        "Economics Education",
        "Geography Education",
        "Political Science Education",
        "Social Studies",
        "Technical Education",
        "Agricultural Science Education",
        "Home Economics",
        "Fine Arts Education",
        "Music Education"
      ]
    },
    {
      "group": "Faculty of Engineering",
      "items": [
        "Chemical Engineering",
        "Civil and Environmental Engineering",
        "Electrical and Electronic Engineering",
        "Mechanical Engineering",
        "Petroleum Engineering"
      ]
    },
    {
      "group": "Faculty of Law",
      "items": [
        "Law"
      ]
    },
    {
      "group": "Faculty of Management Sciences",
      "items": [
        "Accounting",
        "Banking and Finance",
        "Business Administration",
        "Public Administration",
        "Office and Information Management",
        "Marketing",
        "Entrepreneurship"
      ]
    },
    {
      "group": "Faculty of Pharmacy",
      "items": [
        "Pharmacy"
      ]
    },
    {
      "group": "Faculty of Science",
      "items": [
        "Animal and Environmental Biology",
        "Biochemistry",
        "Botany",
        "Chemistry",
        "Industrial Chemistry",
        "Computer Science",
        "Geology",
        "Mathematics",
        "Industrial Mathematics",
        "Medical Laboratory Science",
        "Microbiology",
        "Biotechnology",
        "Physics",
        "Science Laboratory Technology"
      ]
    },
    {
      "group": "Faculty of the Social Sciences",
      "items": [
        "Economics",
        "Geography and Regional Planning",
        "Mass Communication",
        "Political Science",
        "Psychology",
        "Sociology"
      ]
    },
    {
      "group": "Faculty of Dentistry",
      "items": [
        "Dentistry"
      ]
    }
  ],
  // https://aksu.edu.ng/newsite/putme-de-screening-exercise-for-2024-2025-admission/ and https://aksu.edu.ng/web/aksu_new_programmes/
  "Akwa Ibom State University": [
    { group: "Faculty of Agriculture", items: ["Agricultural Economics and Extension", "Animal Science", "Crop Science", "Fisheries and Aquaculture", "Soil Science"] },
    { group: "Faculty of Arts", items: ["English", "History and International Studies", "Performing Arts", "Philosophy", "Religious and Cultural Studies", "Fine and Applied Arts", "Music"] },
    { group: "Faculty of Biological Sciences", items: ["Biochemistry", "Botany", "Genetics and Biotechnology", "Marine Biology", "Microbiology", "Zoology"] },
    { group: "Faculty of Education", items: ["Biology Education", "Chemistry Education", "Integrated Science Education", "Mathematics Education", "Physics Education", "Guidance and Counselling"] },
    { group: "Faculty of Engineering", items: ["Agricultural Engineering", "Chemical and Petrochemical Engineering", "Civil Engineering", "Electrical and Electronic Engineering", "Marine Engineering", "Mechanical Engineering", "Computer Engineering", "Automotive Engineering", "Telecommunications Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building", "Quantity Surveying", "Surveying and Geoinformatics", "Project Management", "Urban and Regional Planning", "Estate Management"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Public Administration", "Marketing", "Local Government and Development Studies"] },
    { group: "Faculty of Physical Sciences", items: ["Mathematics", "Statistics", "Chemistry", "Geology", "Physics"] },
    { group: "Faculty of Computing and Information Technology", items: ["Computer Science"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Mass Communication", "Political Science", "Sociology and Anthropology", "Peace and Conflict Resolution"] },
    { group: "Faculty of Pharmacy", items: ["Pharmacy"] },
  ],
  // https://ugadm.uam.edu.ng/programs.php (Joseph Sarwuan Tarka University, formerly University of Agriculture, Makurdi)
  "University of Agriculture, Makurdi": [
    { group: "College of Agricultural Economics and Extension", items: ["Agricultural Economics", "Agricultural Extension and Communication", "Agricultural Extension and Rural Development", "Sustainable Social Development"] },
    { group: "College of Agronomy", items: ["Crop and Environmental Protection", "Crop Protection", "Crop and Soil Science", "Plant Breeding and Seed Science"] },
    { group: "College of Animal Science", items: ["Animal Breeding and Physiology", "Animal Nutrition", "Animal Breeding and Genetics", "Animal Production"] },
    { group: "College of Biological Sciences", items: ["Biochemistry", "Botany", "Microbiology", "Zoology"] },
    { group: "College of Education", items: ["Adult Education", "Agricultural Education", "Home Economics Education", "Biology Education", "Business Education", "Chemistry Education", "Computer Science Education", "Educational Administration and Planning", "History and Archaeology Education", "Pre-Primary Education", "Environmental Education", "Environmental and Management Education", "Pre-Primary Education English", "English Language Education", "Entrepreneurship Education", "Guidance and Counselling", "Industrial Technical Education", "Integrated Science Education", "Mathematics and Computer Science Education", "Mathematics and Statistics Education", "Statistics and Computer Science Education", "Mathematics Education", "Physics Education", "Pre-Primary Science Education", "Social Studies and Civic Education", "Statistics Education"] },
    { group: "College of Engineering", items: ["Agricultural and Environmental Engineering", "Civil Engineering", "Computer Engineering", "Environmental Engineering", "Mechanical Engineering", "Telecommunication Engineering"] },
    { group: "College of Food Technology and Human Ecology", items: ["Consumer Science (Human Relations and Family Development)", "Consumer Science (Resource Management and Extension)", "Consumer Science (Textiles, Clothing and Interior Decoration)", "Home Science and Management", "Food Science and Technology", "Nutrition and Dietetics"] },
    { group: "College of Forestry and Fisheries", items: ["Fisheries", "Forest Production and Products", "Forestry", "Social and Environmental Forestry", "Forestry and Wildlife Management"] },
    { group: "College of Management Sciences", items: ["Accounting", "Agribusiness Management", "Agricultural Marketing and Cooperatives", "Banking and Finance", "Business Administration", "Entrepreneurship", "Library and Information Science", "Marketing", "Procurement Management", "Public Administration"] },
    { group: "College of Physical Sciences", items: ["Chemistry", "Computer Science", "Environmental Sustainability", "Industrial Chemistry", "Industrial Physics", "Mathematics", "Mathematics and Computer Science", "Statistics and Computer Science", "Physics", "Statistics"] },
    { group: "College of Veterinary Medicine", items: ["Veterinary Medicine"] },
  ],
  // https://kasu.edu.ng/apply-to-kasu/undergraduate/ and https://kasu.edu.ng/directory/
  "Kaduna State University": [
    { group: "Faculty of Arts", items: ["Theatre Arts", "Arabic", "History and Strategic Studies", "Islamic Studies", "Christian Religious Studies", "English", "Linguistics", "French", "Hausa"] },
    { group: "Faculty of Education", items: ["Arabic Education", "Biology Education", "Chemistry Education", "Christian Religious Studies Education", "Economics Education", "English Language Education", "Geography Education", "Hausa Education", "Islamic Studies Education", "Mathematics Education", "Physics Education"] },
    { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
    { group: "Faculty of Allied Health Sciences", items: ["Physiotherapy", "Medical Laboratory Science", "Nursing Science", "Radiography"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Human Anatomy", "Human Physiology", "Medical Biochemistry"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Agriculture", items: ["Animal Science", "Crop Science", "Soil Science", "Plant Protection", "Agricultural Economics", "Agricultural Extension and Rural Development"] },
    { group: "Faculty of Architecture", items: ["Architecture"] },
    { group: "Faculty of Environmental Management", items: ["Environmental Management", "Estate Management", "Building", "Quantity Surveying"] },
    { group: "Faculty of Management Sciences", items: ["Banking and Finance", "Entrepreneurship", "Marketing", "Public Administration", "Accounting", "Business Administration", "Procurement Management", "Logistics and Supply Chain Management", "Industrial Relations and Personnel Management"] },
    { group: "Faculty of Social Sciences", items: ["Sociology", "Criminology and Security Studies", "Economics", "Political Science", "International Relations and Diplomacy", "Library and Information Science"] },
    { group: "Faculty of Communication", items: ["Mass Communication", "Journalism and Media Studies", "Broadcasting"] },
    { group: "Faculty of Life Sciences", items: ["Biochemistry", "Biotechnology", "Biology", "Microbiology"] },
    { group: "Faculty of Physical Sciences", items: ["Pure and Applied Chemistry", "Physics", "Mathematics", "Statistics"] },
    { group: "Faculty of Earth Sciences and Sustainability Studies", items: ["Geography and Sustainability Studies", "Geophysics", "Geology", "Environmental Standards"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Cyber Security", "Data Science"] },
    { group: "Faculty of Engineering", items: ["Computer Engineering", "Mechanical Engineering", "Electrical and Electronics Engineering"] },
  ],
  // https://ugportal.uniabuja.edu.ng/programmes and faculty pages linked from https://www.uniabuja.edu.ng/faculty
  "University of Abuja": [
    { group: "Faculty of Agriculture", items: ["Agricultural Economics", "Agricultural Economics and Extension", "Agricultural Extension and Rural Sociology", "Agronomy", "Animal Science", "Crop Protection", "Crop Science", "Dairy Science", "Fisheries, Aquaculture and Wildlife", "Food Science and Technology", "Forestry and Bioresources", "Horticulture and Landscaping", "Soil Science"] },
    { group: "Faculty of Arts", items: ["Arabic", "Christian Studies", "English Language", "History and Diplomatic Studies", "Islamic Studies", "Linguistics", "Philosophy", "Theatre Arts"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Anatomy", "Human Physiology", "Medical Biochemistry"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Communication and Media Studies", items: ["Advertising", "Broadcasting", "Development Communication Studies", "Film and Multimedia Studies", "Information and Media Studies", "Journalism and Media Studies", "Public Relations", "Strategic Communication"] },
    { group: "Faculty of Education", items: ["History Education", "Arabic Education", "Christian Studies Education", "English Language Education", "Islamic Studies Education", "Social Studies Education", "Primary Education", "Educational Administration and Planning", "Guidance and Counselling", "Library Science Education", "Agricultural Science Education", "Biology Education", "Chemistry Education", "Environmental Education", "Integrated Science Education", "Mathematics Education", "Physics Education", "Economics Education", "Geography Education"] },
    { group: "Faculty of Engineering", items: ["Chemical Engineering", "Civil Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering", "Agricultural Engineering", "Aeronautical and Astronautical Engineering", "Nuclear Engineering", "Railway Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building", "Quantity Surveying", "Surveying and Geoinformatics", "Urban and Regional Planning"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Entrepreneurship Studies", "Public Administration", "Tourism and Hospitality Management"] },
    { group: "Faculty of Science", items: ["Computer Science", "Mathematics", "Microbiology", "Physics", "Statistics", "Zoology", "Biochemistry", "Biology", "Botany", "Chemistry", "Geology and Mining"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Geography and Environmental Management", "Political Science", "Sociology"] },
    { group: "Faculty of Nursing and Allied Health Sciences", items: ["Medical Laboratory Science", "Nursing Science"] },
    { group: "Faculty of Veterinary Medicine", items: ["Veterinary Medicine"] },
  ],
  // https://legacy.futo.edu.ng/wp-content/uploads/2024/07/FUTO-Post-UTME-ADVERT.pdf and https://resources.futo.edu.ng/news/futo-2024-2025-supplementary-admission-exercise/
  "Federal University of Technology, Owerri": [
    { group: "School of Agriculture and Agricultural Technology", items: ["Agricultural Economics", "Agricultural Extension", "Animal Science and Technology", "Crop Science and Technology", "Soil Science and Technology", "Fisheries and Aquaculture Technology", "Forestry and Wildlife Technology", "Agribusiness"] },
    { group: "School of Biological Sciences", items: ["Biochemistry", "Biotechnology", "Biological Sciences", "Forensic Science", "Microbiology"] },
    { group: "School of Engineering and Engineering Technology", items: ["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Mechanical Engineering", "Petroleum Engineering", "Materials and Metallurgical Engineering", "Polymer and Textile Engineering", "Food Science and Technology"] },
    { group: "School of Environmental Sciences", items: ["Architecture", "Building Technology", "Environmental Management", "Quantity Surveying", "Urban and Regional Planning", "Surveying and Geoinformatics", "Estate Management and Valuation"] },
    { group: "School of Logistics and Innovation Technology", items: ["Logistics and Transport Technology", "Project Management Technology", "Supply Chain Management", "Entrepreneurship and Innovation", "Maritime Technology"] },
    { group: "School of Physical Sciences", items: ["Chemistry", "Geology", "Mathematics", "Physics", "Statistics", "Science Laboratory Technology"] },
    { group: "School of Health Technology", items: ["Biomedical Technology", "Dental Technology", "Environmental Health Science", "Prosthetics and Orthotics Technology", "Public Health Technology", "Optometry", "Radiography"] },
    { group: "School of Electrical Systems and Engineering Technology", items: ["Telecommunication Engineering", "Computer Engineering", "Electronic Engineering", "Electrical Engineering", "Mechatronics Engineering"] },
    { group: "School of Information and Communication Technology", items: ["Information Technology", "Computer Science", "Software Engineering", "Cyber Security Science"] },
    { group: "School of Basic Medical Sciences", items: ["Human Anatomy", "Human Physiology"] },
    { group: "College of Medicine", items: ["Medicine and Surgery"] },
    { group: "Centre of Excellence in Sustainable Procurement, Environmental and Social Standards", items: ["Procurement Management", "Sustainable Environment Studies", "Sustainable Social Standards"] },
  ],
  // https://storage.googleapis.com/comsoft-public/REQUIREMENTS.pdf (NDA 78 Regular Course, 2026/2027)
  "Nigerian Defence Academy": [
    { group: "Faculty of Science", items: ["Biological Sciences", "Biotechnology", "Chemistry", "Mathematics", "Physics"] },
    { group: "Faculty of Military Science and Interdisciplinary Studies", items: ["Computer Science", "Cyber Security", "Intelligence and Security Science", "Military Science"] },
    { group: "Faculty of Engineering and Technology", items: ["Civil Engineering", "Electrical and Electronics Engineering", "Mechanical Engineering", "Mechatronics Engineering"] },
    { group: "Faculty of Arts and Social Sciences", items: ["English", "French", "Geography", "History and War Studies", "Political Science and Defence Studies", "Psychology", "Arabic"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Logistics and Supply Chain Management", "Economics", "Management Studies"] },
  ],
  // https://mouau.edu.ng/academic-department-by-faculty/ and the colleges' academic-programme pages
  "Michael Okpara University of Agriculture": [
    { group: "College of Agricultural Economics, Rural Sociology and Extension", items: ["Agribusiness and Management", "Agricultural Economics", "Agricultural Extension and Rural Sociology"] },
    { group: "College of Animal Science and Animal Production", items: ["Animal Breeding and Physiology", "Animal Nutrition and Forage Science", "Animal Production and Livestock Management"] },
    { group: "College of Applied Food Science and Tourism", items: ["Food Science and Technology", "Human Nutrition and Dietetics", "Home Science", "Hospitality Management and Tourism"] },
    { group: "College of Crop and Soil Sciences", items: ["Agronomy", "Plant Health Management", "Soil Science and Meteorology", "Water Resources Management and Agrometeorology"] },
    { group: "College of Education", items: ["Adult and Continuing Education", "Agricultural Education", "Home Economics Education", "Business Education", "Economics Education", "Educational Management", "Industrial Technology Education", "Library and Information Science", "Guidance and Counselling", "Integrated Science Education", "Biology Education", "Chemistry Education", "Computer Science Education", "Mathematics Education", "Physics Education"] },
    { group: "College of Engineering and Engineering Technology", items: ["Agricultural and Bioresources Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering", "Electrical and Electronics Engineering", "Food Engineering", "Mechanical Engineering", "Mechatronics Engineering"] },
    { group: "College of Management Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Economics", "Entrepreneurial Studies", "Industrial Relations and Personnel Management", "Marketing"] },
    { group: "College of Natural Resources and Environmental Management", items: ["Environmental Management and Toxicology", "Fisheries and Aquatic Resources Management", "Forestry and Environmental Management"] },
    { group: "College of Natural Sciences", items: ["Biochemistry", "Microbiology", "Plant Science and Biotechnology", "Zoology and Environmental Biology"] },
    { group: "College of Physical and Applied Sciences", items: ["Chemistry", "Computer Science", "Mathematics", "Physics", "Statistics"] },
    { group: "College of Veterinary Medicine", items: ["Veterinary Medicine"] },
  ],
  // https://kwasu.edu.ng/course/, https://kwasu.edu.ng/history/ and https://kwasu.edu.ng/nuc-approves-24-new-programmes-at-kwasu/
  "Kwara State University": [
    { group: "Faculty of Agriculture and Veterinary Sciences", items: ["Agricultural Economics and Farm Management", "Agricultural Extension and Rural Development", "Animal Production", "Crop Production", "Food Science and Technology"] },
    { group: "Faculty of Allied Health Sciences", items: ["Environmental Health Science", "Medical Laboratory Science", "Public Health", "Nursing Science", "Community Health Science"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Arts", items: ["Arabic and International Studies", "Christian Studies", "English", "Fine and Applied Arts", "Film Production", "French and International Studies", "History and Diplomatic Studies", "Islamic Studies", "Linguistics", "Linguistics and Yoruba", "Performing Arts"] },
    { group: "Faculty of Education", items: ["Business Education", "Early Childhood Education", "Primary Education", "Human Kinetics", "Special Education", "Educational Technology", "Guidance and Counselling", "Health Education", "Entrepreneurship Education", "Technology Education"] },
    { group: "Faculty of Engineering and Technology", items: ["Aeronautical and Astronautical Engineering", "Agricultural Engineering", "Civil Engineering", "Electrical and Electronics Engineering", "Food Engineering", "Materials and Metallurgical Engineering", "Mechanical Engineering", "Computer Engineering", "Industrial and Production Engineering", "Biomedical Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Estate Management", "Geography and Remote Sensing", "Quantity Surveying", "Surveying and Geoinformatics", "Urban and Regional Planning"] },
    { group: "Faculty of Information and Communication Technology", items: ["Computer Science", "Library and Information Science", "Mass Communication"] },
    { group: "Faculty of Law", items: ["Common Law", "Common and Islamic Law"] },
    { group: "Faculty of Management and Social Sciences", items: ["Accounting", "Business Administration", "Economics", "Entrepreneurship", "Finance", "Insurance and Risk Management", "Political Science", "Public Administration", "Tourism and Hospitality Management"] },
    { group: "Faculty of Pure and Applied Sciences", items: ["Biochemistry", "Chemistry", "Environmental Management and Toxicology", "Geology and Mineral Science", "Industrial Chemistry", "Mathematics", "Microbiology", "Physics and Material Science", "Plant and Environmental Biology", "Statistics", "Zoology"] },
  ],
  // https://www.polac.edu.ng/RC-12_Admission and https://polac.edu.ng/
  "Nigerian Police Academy": [
    { group: "Faculty of Humanities", items: ["English", "History and International Studies", "Linguistics and Nigerian Languages", "History Education", "English Language Education", "Chemistry Education", "Mathematics Education", "Computer Science Education", "Biology Education", "Guidance and Counselling", "Educational Management", "Psychology Education", "Political Science Education", "Economics Education", "Physics Education"] },
    { group: "Faculty of Science", items: ["Biochemistry", "Biological Sciences", "Chemistry", "Computer Science", "Forensic Science", "Mathematics", "Physics"] },
    { group: "Faculty of Social and Management Sciences", items: ["Accounting", "Economics", "Management Science", "Political Science", "Psychology", "Sociology", "Criminology and Security Studies"] },
    { group: "Faculty of Law", items: ["Law"] },
  ],
  // https://fcetomoku.edu.ng/2025-2026-admission/ (updated by the college for 2026/2027)
  "Federal College of Education (Technical), Omoku": [
    { group: "School of Vocational Education", items: ["Agricultural Science Education", "Home Economics Education", "Fine and Applied Art Education", "Fine and Creative Art"] },
    { group: "School of Technical Education", items: ["Industrial Technical Education"] },
    { group: "School of Business Education", items: ["Business Education"] },
    { group: "School of Science Education", items: ["Computer Science Education", "Physics Education", "Mathematics Education", "Biology Education", "Chemistry Education", "Integrated Science Education", "Health Science", "Physical Education", "Environmental Science Education"] },
    { group: "School of Primary Education", items: ["Pre-Primary and Primary Education"] },
    { group: "School of Education", items: ["Guidance and Counselling", "Educational Management Education", "Library and Information Science Education"] },
    { group: "Directorate of Degree Programmes", items: ["English Language Education", "Political Science Education", "Social Studies Education", "Economics Education"] },
  ],
  // https://eksu.edu.ng/pre-degree-programmes/, https://eksu.edu.ng/sandwich-programmes/ and https://medicine.eksu.edu.ng/about-us/
  "Ekiti State University": [
    { group: "Faculty of Agricultural Sciences", items: ["Agricultural Economics and Extension Services", "Animal Production and Health Sciences", "Crop Production, Horticulture and Landscaping", "Fisheries and Aquaculture Management", "Forestry and Wildlife Management", "Soil and Environmental Sciences"] },
    { group: "Faculty of Arts", items: ["Arabic", "Christian Religious Studies", "English and Literary Studies", "French", "History and International Studies", "Islamic Studies", "Linguistics", "Philosophy", "Theatre and Media Arts", "Yoruba"] },
    { group: "Faculty of Education", items: ["Adult Education", "Agricultural Science Education", "Arabic Education", "Biology Education", "Business Education", "Chemistry Education", "Christian Religious Studies Education", "Computer Science Education", "Early Childhood Education", "Economics Education", "Educational Management", "Educational Technology", "English Education", "French Education", "Geography Education", "Guidance and Counselling", "History Education", "Human Kinetics and Health Education", "Integrated Science Education", "Islamic Studies Education", "Library and Information Science", "Mathematics Education", "Physics Education", "Political Science Education", "Social Studies Education", "Yoruba Education", "Building and Woodwork Technology Education", "Electrical and Electronics Technology Education", "Mechanical Technology Education", "Accounting Education"] },
    { group: "Faculty of Engineering", items: ["Civil Engineering", "Computer Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Actuarial Science", "Banking and Finance", "Business Administration", "Cooperative and Rural Development", "Entrepreneurship", "Industrial Relations and Personnel Management", "Insurance", "Marketing"] },
    { group: "Faculty of Science", items: ["Biochemistry", "Chemistry", "Computer Science", "Geology", "Industrial Chemistry", "Mathematics", "Microbiology", "Physics", "Plant Science and Biotechnology", "Science Laboratory Technology", "Statistics", "Zoology and Environmental Biology"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Environmental Management", "Geography and Planning Science", "Political Science", "Psychology and Behavioural Studies", "Public Administration", "Sociology", "Tourism and Hospitality Management"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Human Anatomy", "Human Physiology", "Medical Laboratory Science", "Nursing Science"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
  ],
  // https://www.esut.edu.ng/faculty/ and https://portal.esut.edu.ng/supAdvert.pdf (2025/2026)
  "Enugu State University of Science and Technology": [
    { group: "Faculty of Agricultural and Natural Resources Management", items: ["Agricultural Economics and Extension", "Agronomy and Ecological Management", "Animal Science and Fisheries Management", "Food Science and Technology"] },
    { group: "Faculty of Applied Biological Sciences", items: ["Applied Biology", "Applied Microbiology", "Biochemistry"] },
    { group: "Faculty of Applied Physical Sciences", items: ["Computer Science", "Geology and Mining", "Industrial Chemistry", "Industrial Physics", "Mathematics", "Statistics"] },
    { group: "Faculty of Allied Medical Sciences", items: ["Medical Laboratory Science", "Nursing Science", "Radiography"] },
    { group: "Faculty of Applied Basic Medicine", items: ["Human Nutrition and Dietetics"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Anatomy", "Physiology"] },
    { group: "Faculty of Clinical Medicine", items: ["Medicine and Surgery"] },
    { group: "Faculty of Education", items: ["Agricultural Science Education", "Biology Education", "Business and Entrepreneurship Education", "Chemistry Education", "Computer Science Education", "Continuing Education and Development Studies", "Educational Administration and Supervision", "Educational Foundation", "Educational Management", "Educational Technology", "Guidance and Counselling", "Human Kinetics and Health Education", "Integrated Science Education", "Library and Information Science", "Mathematics Education", "Physics Education", "Technology and Vocational Education", "Building and Woodwork Education", "Electrical and Electronics Technology Education", "Mechanical Technology Education"] },
    { group: "Faculty of Engineering", items: ["Agricultural Engineering", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering", "Mechatronics Engineering", "Metallurgical and Materials Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building Technology", "Environmental Management", "Estate Management", "Geography and Meteorology", "Quantity Surveying", "Surveying and Geoinformatics", "Urban and Regional Planning"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accountancy", "Banking and Finance", "Business Administration", "Cooperative Economics and Management", "Insurance and Risk Management", "Marketing", "Mass Communication", "Public Administration"] },
    { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
    { group: "Faculty of Social Sciences and Humanities", items: ["Economics", "English and Literary Studies", "History and International Studies", "Political Science", "Psychology", "Sociology and Anthropology"] },
  ],
  // https://gvu.edu.ng/ and its 2025/2026 fresher fee schedule; formerly Samuel Adegboyega University
  "Samuel Adegboyega University": [
    { group: "College of Basic, Applied and Health Sciences", items: ["Biochemistry", "Chemistry", "Computer Science", "Industrial Chemistry", "Mathematics", "Microbiology", "Physics", "Statistics", "Medical Laboratory Science", "Nursing Science"] },
    { group: "College of Humanities", items: ["English Language", "French", "History and Diplomatic Studies", "Philosophy", "Religious Studies"] },
    { group: "College of Management and Social Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Economics", "Mass Communication", "Public Administration"] },
    { group: "College of Law", items: ["Law"] },
  ],
  // https://www.uniport.edu.ng/faculties/ and the official 2026/2027 supplementary-admission programme table
  "University of Port Harcourt": [
    { group: "Faculty of Agriculture", items: ["Agricultural Economics and Agribusiness Management", "Agricultural Extension and Development Studies", "Animal Science", "Crop and Soil Science", "Fisheries", "Environmental Forestry and Wildlife Management", "Food Science and Nutrition", "Home Science"] },
    { group: "Faculty of Allied Health Sciences", items: ["Medical Laboratory Science", "Nursing Science", "Physiotherapy"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Human Anatomy", "Human Physiology"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Dentistry", items: ["Dentistry and Dental Surgery"] },
    { group: "Faculty of Communication and Media Studies", items: ["Broadcasting", "Film and Multimedia Studies", "Journalism and Media Studies", "Public Relations and Advertising"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Cyber Security", "Information Technology"] },
    { group: "Faculty of Education", items: ["Adult and Non-Formal Education", "Agricultural Science Education", "Biology Education", "Business Education", "Chemistry Education", "Early Childhood Education", "Economics Education", "Educational Management and Planning", "English Education", "Environmental Education", "French Education", "Geography Education", "Guidance and Counselling", "History Education", "Human Kinetics", "Health Education", "Mathematics Education", "Physics Education", "Political Science Education", "Primary Education", "Religious Studies Education", "Social Studies Education", "Theatre Arts Education"] },
    { group: "Faculty of Engineering", items: ["Chemical Engineering", "Civil and Environmental Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering", "Mechatronics Engineering", "Petroleum and Gas Engineering"] },
    { group: "Faculty of Humanities", items: ["English Studies", "Fine Arts and Design", "Foreign Languages and Literatures (French)", "History and Diplomatic Studies", "Linguistics and Communication Studies", "Music", "Philosophy", "Religious and Cultural Studies", "Theatre and Film Studies"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Finance and Banking", "Hospitality Management and Tourism", "Insurance", "Management", "Marketing"] },
    { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
    { group: "Faculty of Science", items: ["Animal and Environmental Biology", "Biochemistry", "Geology", "Mathematics", "Mathematics with Statistics", "Microbiology", "Physics", "Plant Science and Biotechnology", "Pure and Industrial Chemistry", "Statistics"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Geography and Environmental Management", "Library and Information Science", "Political and Administrative Studies", "Social Work", "Sociology"] },
    { group: "School of Science Laboratory Technology", items: ["Science Laboratory Technology"] },
  ],
  // https://lasu.edu.ng/foundation/application/apply.php and https://lasu.edu.ng/home/faculties/all-departments.php
  "Lagos State University": [
    { group: "School of Agriculture", items: ["Agricultural Science", "Agricultural Economics and Farm Management", "Agricultural Extension and Rural Management", "Animal Science", "Crop Production"] },
    { group: "Faculty of Allied Health Sciences", items: ["Medical Laboratory Science", "Nursing Science", "Physiotherapy", "Radiography and Radiation Science"] },
    { group: "Faculty of Arts", items: ["Arabic", "Christian Religious Studies", "English Language", "English Literature", "French", "History and International Relations", "Islamic Studies", "Linguistics", "Linguistics, African Languages and Communication Arts", "Music", "Peace Studies", "Philosophy", "Portuguese and English", "Theatre and Film Arts"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Pharmacology", "Physiology"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Computing and Information Technology", items: ["Computer Science"] },
    { group: "Faculty of Dentistry", items: ["Dentistry"] },
    { group: "Faculty of Education", items: ["Arabic Education", "Christian Religious Studies Education", "Early Childhood and Primary Education", "Economics Education", "Educational Management", "Accounting Education", "Business Education", "English Education", "French Education", "Geography Education", "Guidance and Counselling", "Health Education", "History Education", "Human Kinetics Education", "Islamic Religious Studies Education", "Political Science Education", "Biology Education", "Chemistry Education", "Computer Science Education", "Educational Technology", "Mathematics Education", "Physics Education", "Social Studies and Civic Education", "Special Education", "Yoruba Education"] },
    { group: "Faculty of Engineering", items: ["Aeronautics and Astronautics Engineering", "Chemical Engineering", "Civil Engineering", "Electronics and Computer Engineering", "Industrial and Production Engineering", "Mechanical Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building", "Environmental Management", "Estate Management", "Fine Arts", "Industrial Design", "Quantity Surveying", "Surveying and Geoinformatics", "Urban and Regional Planning"] },
    { group: "Faculty of Law", items: ["Common and Islamic Law", "Common and Civil Law"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Industrial Relations and Human Resources Management", "Insurance", "Local Government Development and Administration", "Management Technology", "Marketing", "Public Administration", "Taxation"] },
    { group: "Faculty of Science", items: ["Biochemistry", "Botany", "Chemistry", "Fisheries and Aquatic Biology", "Mathematics", "Microbiology", "Physics", "Science Laboratory Technology", "Zoology"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Geography and Regional Planning", "Political Science", "Psychology", "Sociology"] },
    { group: "Faculty of Pharmacy", items: ["Pharmacy"] },
    { group: "School of Communication", items: ["Book Publishing", "Cinematography", "Communication Technology", "Human Communication", "Journalism", "Mass Communication", "Photojournalism", "Public Relations and Advertising", "Radio and Television Broadcasting"] },
    { group: "School of Library, Archival and Information Science", items: ["Library and Information Science"] },
    { group: "School of Transport and Logistics", items: ["Transport", "Logistics and Supply Chain Management"] },
  ],
  // https://unical.edu.ng/faculties.php and its faculty programme directories
  "University of Calabar": [
    { group: "Faculty of Administration and Management Sciences", items: ["Accounting", "Banking and Finance", "Business Management", "Hospitality and Tourism Management", "Marketing", "Public Administration"] },
    { group: "Faculty of Agriculture, Forestry and Wildlife Resource Management", items: ["Agricultural Economics", "Agricultural Extension and Rural Sociology", "Animal Science", "Crop Science", "Fisheries and Aquaculture", "Food Science and Technology", "Forestry and Wildlife Resource Management", "Soil Science"] },
    { group: "Faculty of Allied Medical Sciences", items: ["Human Nutrition and Dietetics", "Nursing Science", "Physiotherapy", "Public Health", "Radiography and Radiological Science"] },
    { group: "Faculty of Arts", items: ["English and Literary Studies", "History and International Studies", "Linguistics and Nigerian Languages", "Modern Languages and Translation Studies", "Music", "Philosophy", "Religious and Cultural Studies", "Theatre and Media Studies"] },
    { group: "Faculty of Arts and Social Science Education", items: ["Creative Arts Education", "Economics Education", "Political Science Education", "Geography Education", "History Education", "Christian Religious Studies Education", "English Education", "French Education", "Social Studies and Civic Education"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Biochemistry", "Human Anatomy", "Pharmacology", "Physiology"] },
    { group: "Faculty of Biological Sciences", items: ["Botany", "Genetics and Biotechnology", "Microbiology", "Science Laboratory Technology", "Zoology and Environmental Biology"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Communication and Media Studies", items: ["Advertising", "Broadcasting", "Development Communication", "Journalism and Media Studies", "Mass Communication", "Public Relations", "Strategic Communication"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Cyber Security", "Information Systems", "Information Technology", "Software Engineering"] },
    { group: "Faculty of Dentistry", items: ["Dentistry and Dental Surgery"] },
    { group: "Faculty of Educational Foundation Studies", items: ["Curriculum and Teaching", "Educational Foundations", "Educational Management", "Educational Psychology", "Elementary Education", "Guidance and Counselling", "Special Education"] },
    { group: "Faculty of Engineering and Technology", items: ["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering", "Electrical and Electronic Engineering", "Mechanical Engineering", "Petroleum Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Environmental Resource Management", "Estate Management", "Fine and Applied Arts", "Geography and Environmental Science", "Surveying and Geoinformatics", "Urban and Regional Planning"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Medical Laboratory Science", items: ["Medical Laboratory Science"] },
    { group: "Faculty of Oceanography", items: ["Biological Oceanography", "Mariculture", "Marine Oceanography", "Physical Oceanography"] },
    { group: "Faculty of Pharmacy", items: ["Pharmacy"] },
    { group: "Faculty of Physical Sciences", items: ["Electronics and Computer Technology", "Geology", "Mathematics", "Physics", "Pure and Applied Chemistry", "Statistics"] },
    { group: "Faculty of Science Education", items: ["Biology Education", "Chemistry Education", "Computer Science Education", "Environmental Education", "Health Education", "Human Kinetics", "Mathematics Education", "Physics Education"] },
    { group: "Faculty of Social Sciences", items: ["Criminology and Security Studies", "Economics", "Library and Information Science", "Peace and Conflict Studies", "Political Science", "Social Work", "Sociology"] },
    { group: "Faculty of Vocational and Entrepreneurial Education", items: ["Adult and Continuing Education", "Agricultural Education", "Business Education", "Educational Technology", "Home Economics Education"] },
  ],
  // https://fulafia.edu.ng/ and the official faculty directories linked from its Academics menu
  "Federal University, Lafia": [
    { group: "Faculty of Agriculture", items: ["Agricultural Economics and Extension", "Agronomy", "Animal Science", "Fisheries and Aquaculture", "Forestry and Wildlife Management"] },
    { group: "Faculty of Arts", items: ["Arabic Studies", "Christian Religious Studies", "English and Literary Studies", "French", "Hausa", "History and International Studies", "Islamic Studies", "Nigerian Languages", "Philosophy", "Theatre and Media Arts", "Visual and Creative Arts"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Human Anatomy", "Human Physiology"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Cyber Security", "Information Technology"] },
    { group: "Faculty of Education", items: ["Biology Education", "Business Education", "Chemistry Education", "Computer Science Education", "Integrated Science Education", "Mathematics Education", "Physics Education", "Special Needs and Rehabilitation Education", "Vocational and Technical Education"] },
    { group: "Faculty of Environmental Design", items: ["Architecture", "Building", "Fine Arts", "Geography", "Glass and Silicate Technology", "Industrial Design", "Quantity Surveying", "Urban and Regional Planning"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Life Sciences", items: ["Biochemistry", "Microbiology", "Plant Science and Biotechnology", "Science Laboratory Technology", "Zoology"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Business Administration", "Entrepreneurial Studies", "Petroleum Information Management", "Public Administration"] },
    { group: "Faculty of Medical Laboratory Science", items: ["Medical Laboratory Science"] },
    { group: "Faculty of Nursing", items: ["Nursing Science"] },
    { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
    { group: "Faculty of Physical Sciences", items: ["Chemistry", "Geology", "Mathematics", "Physics", "Statistics"] },
    { group: "Faculty of Radiography and Applied Health Sciences", items: ["Radiography"] },
    { group: "Faculty of Social Sciences", items: ["Criminology and Security Studies", "Economics", "Library and Information Science", "Mass Communication", "Political Science", "Psychology", "Social Work", "Sociology"] },
    { group: "Faculty of Veterinary Medicine", items: ["Veterinary Medicine"] },
  ],
  // https://uniosun.edu.ng/academics/colleges/ and https://admissions.uniosun.edu.ng/
  "Osun State University": [
    { group: "Faculty of Agricultural Production and Management", items: ["Agricultural Economics and Agribusiness Management", "Agricultural Extension and Rural Development", "Agronomy", "Animal Science"] },
    { group: "Faculty of Renewable Natural Resources Management", items: ["Fisheries and Aquatic Resources Management", "Forestry Resource Management", "Wildlife and Ecotourism Management"] },
    { group: "Faculty of Basic and Applied Sciences", items: ["Animal and Environmental Biology", "Biochemistry", "Biotechnology", "Chemistry", "Food Science and Technology", "Geology", "Industrial Chemistry", "Mathematics", "Microbiology", "Physics with Electronics", "Plant Biology", "Science Laboratory Technology", "Statistics"] },
    { group: "Faculty of Computing and Information Technology", items: ["Computer Science", "Cyber Security", "Data Science", "Information Systems", "Information Technology", "Library and Information Science", "Software Engineering"] },
    { group: "Faculty of Engineering", items: ["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering", "Electrical and Electronics Engineering", "Mechanical Engineering", "Mechatronics Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building", "Estate Management", "Quantity Surveying", "Urban and Regional Planning"] },
    { group: "Faculty of Education", items: ["Adult Education", "Biology Education", "Business Education", "Chemistry Education", "Computer Science Education", "Early Childhood Education", "Economics Education", "Educational Management", "Educational Technology", "English Education", "Environmental Education", "Guidance and Counselling", "History Education", "Mathematics Education", "Physics Education", "Political Science Education", "Social Studies Education"] },
    { group: "Faculty of Basic Medical Sciences", items: ["Anatomy", "Physiology", "Public Health"] },
    { group: "Faculty of Clinical Sciences", items: ["Medicine and Surgery"] },
    { group: "Faculty of Nursing Sciences", items: ["Nursing Science"] },
    { group: "Faculty of Humanities", items: ["Arabic Language and Literature", "Christian Studies", "English and Literary Studies", "English and International Studies", "French and Francophone Studies", "French and International Studies", "History and International Studies", "Islamic Studies", "Linguistics and Communication Studies", "Philosophy", "Theatre and Film Studies", "Tourism Studies", "Yoruba"] },
    { group: "Faculty of Law", items: ["Law", "Common and Islamic Law"] },
    { group: "Faculty of Liberal Studies", items: ["Criminology and Security Studies", "Peace and Conflict Studies"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Banking and Finance", "Business Administration", "Cooperative and Rural Development", "Employment Relations", "Entrepreneurship", "Human Resource Development", "Industrial Relations and Personnel Management", "Marketing", "Public Administration"] },
    { group: "Faculty of Social Sciences", items: ["Economics", "Geography", "Political Science and International Relations", "Sociology"] },
  ],
  // https://uniben.edu/academic-programmes.html, https://waeup.uniben.edu/faculties/ and official faculty programme pages
  // https://eng.uniben.edu/organization-of-academic-programmes/
  // https://educ.uniben.edu/wp-content/uploads/2025/01/FACULTY-OF-EDUCATION-Webometrics.pdf
  "University of Benin": [
    { group: "Faculty of Agriculture", items: ["Agricultural Economics and Extension Services", "Animal Science", "Aquaculture and Fisheries Management", "Crop Science", "Food Science and Nutrition", "Forestry and Wildlife", "Soil Science and Land Management"] },
    { group: "Faculty of Arts", items: ["English and Literature", "French", "History and International Studies", "Linguistics", "Linguistics and Edo Language", "Philosophy", "Religious Studies", "Theatre Arts"] },
    { group: "School of Basic Medical Sciences", items: ["Anatomy", "Medical Biochemistry", "Medical Laboratory Science", "Physiology"] },
    { group: "Faculty of Computing", items: ["Computer Science", "Cyber Security", "Data Science", "Information and Communication Technology", "Information Technology", "Software Engineering"] },
    { group: "School of Dentistry", items: ["Dentistry and Dental Surgery"] },
    { group: "Faculty of Education", items: ["Adult Education", "Adult Education and English and Literature", "Adult Education and Geography", "Adult Education and Economics", "Adult Education and Political Science", "Biology Education", "Chemistry Education", "Computer Science Education", "Edo Language Education", "Educational Management", "English and Literature Education", "Environmental Education", "Economics Education", "French Education", "Geography Education", "Guidance and Counselling", "Health Education", "History Education", "Human Kinetics and Sports Science", "Integrated Science Education", "Library and Information Science", "Mathematics Education", "Physics Education", "Political Science Education", "Religious Studies Education", "Social Studies Education", "Special Education"] },
    { group: "Faculty of Engineering", items: ["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering", "Electrical and Electronic Engineering", "Industrial Engineering", "Marine Engineering", "Mechanical Engineering", "Mechatronics Engineering", "Metallurgical and Materials Engineering", "Petroleum Engineering", "Production Engineering", "Structural Engineering"] },
    { group: "Faculty of Environmental Sciences", items: ["Architecture", "Estate Management", "Fine and Applied Arts", "Geomatics", "Quantity Surveying"] },
    { group: "Faculty of Law", items: ["Law"] },
    { group: "Faculty of Life Sciences", items: ["Animal and Environmental Biology", "Biochemistry", "Environmental Management and Toxicology", "Microbiology", "Optometry", "Plant Biology and Biotechnology"] },
    { group: "Faculty of Management Sciences", items: ["Accounting", "Actuarial Science", "Banking and Finance", "Business Administration", "Entrepreneurship", "Human Resource Management", "Insurance", "Marketing"] },
    { group: "Faculty of Media and Communication Studies", items: ["Mass Communication"] },
    { group: "School of Medicine", items: ["Medicine and Surgery"] },
    { group: "Faculty of Nursing Sciences", items: ["Nursing Science"] },
    { group: "Faculty of Pharmacy", items: ["Pharmacy"] },
    { group: "Faculty of Physical Sciences", items: ["Chemistry", "Geology", "Industrial Chemistry", "Industrial Mathematics", "Mathematics", "Physics", "Statistics"] },
    { group: "Faculty of Science Laboratory Technology", items: ["Science Laboratory Technology"] },
    { group: "Faculty of Social Sciences", items: ["Economics and Statistics", "Geography and Regional Planning", "Political Science and Public Administration", "Social Work", "Sociology and Anthropology"] },
    { group: "Faculty of Veterinary Medicine", items: ["Veterinary Medicine"] },
    { group: "Faculty of Vocational and Technical Education", items: ["Agricultural Education", "Business Education", "Home Economics Education", "Industrial Technical Education"] },
  ],
};
