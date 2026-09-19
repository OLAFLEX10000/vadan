"use client";

import { useEffect, useRef, useState } from "react";
import { admissionPolicies } from "./admission-policies";
import { AggregateCalculator, ProgrammeRequirements } from "./admission-panels";
import { ProgrammeGuide } from "./programme-guide";
import { InstitutionGuide } from "./institution-guide";
import { createPortal } from "react-dom";
import { researchedInstitutionCourses } from "./institution-courses";

const institutions = [
  { name: "University of Lagos", location: "Akoka, Lagos", cutoff: null },
  { name: "University of Ibadan", location: "Ibadan, Oyo", cutoff: 200 },
  { name: "University of Nigeria, Nsukka", location: "Nsukka, Enugu", cutoff: 180 },
  { name: "Federal University of Technology, Minna", location: "Minna, Niger", cutoff: 150 },
  { name: "Benson Idahosa University", location: "Benin City, Edo", cutoff: 0 },
  { name: "Obafemi Awolowo University", location: "Ile-Ife, Osun", cutoff: 0 },
  { name: "Covenant University", location: "Otta, Ogun", cutoff: 0 },
  { name: "Federal University of Agriculture, Abeokuta", location: "Abeokuta, Ogun", cutoff: 0 },
  { name: "Federal University of Technology, Akure", location: "Akure, Ondo", cutoff: 0 },
  { name: "Ebonyi State University", location: "Abakaliki, Ebonyi", cutoff: 0 },
  { name: "Salem University", location: "Lokoja, Kogi", cutoff: 0 },
  { name: "Crescent University", location: "Abeokuta, Ogun", cutoff: 0 },
  { name: "Federal University of Petroleum Resources, Effurun", location: "Effurun, Delta", cutoff: 0 },
  { name: "University of Abuja", location: "Abuja, FCT", cutoff: 0 },
  { name: "Federal University of Technology, Owerri", location: "Owerri, Imo", cutoff: 0 },
  { name: "University of Ilorin", location: "Ilorin, Kwara", cutoff: 0 },
  { name: "Veritas University", location: "Abuja, FCT", cutoff: 0 },
  { name: "Kaduna State University", location: "Kaduna, Kaduna", cutoff: 0 },
  { name: "Ajayi Crowther University", location: "Oyo, Oyo", cutoff: 0 },
  { name: "Ekiti State University", location: "Ado-Ekiti, Ekiti", cutoff: 0 },
  { name: "University of Port Harcourt", location: "Port Harcourt, Rivers", cutoff: 0 },
  { name: "University of Calabar", location: "Calabar, Cross River", cutoff: 0 },
  { name: "Caritas University", location: "Amorji-Nike, Enugu", cutoff: 0 },
  { name: "Tai Solarin University of Education", location: "Ijebu-Ode, Ogun", cutoff: 0 },
  { name: "Akwa Ibom State University", location: "Ikot Akpaden, Akwa Ibom", cutoff: 0 },
  { name: "National Open University of Nigeria", location: "Nigeria", cutoff: 0 },
  { name: "Enugu State University of Science and Technology", location: "Enugu, Enugu", cutoff: 0 },
  { name: "Michael Okpara University of Agriculture", location: "Umudike, Abia", cutoff: 0 },
  { name: "Redeemer's University", location: "Ede, Osun", cutoff: 0 },
  { name: "Wellspring University", location: "Benin City, Edo", cutoff: 0 },
  { name: "University of Agriculture, Makurdi", location: "Makurdi, Benue", cutoff: 0 },
  { name: "Bayero University", location: "Kano, Kano", cutoff: 0 },
  { name: "Lagos State University", location: "Ojo, Lagos", cutoff: 0 },
  { name: "Osun State University", location: "Osogbo, Osun", cutoff: 0 },
  { name: "Ignatius Ajuru University of Education", location: "Port Harcourt, Rivers", cutoff: 0 },
  { name: "Paul University", location: "Awka, Anambra", cutoff: 0 },
  { name: "Kwara State University", location: "Malete, Kwara", cutoff: 0 },
  { name: "Federal College of Education (Technical), Omoku", location: "Omoku, Rivers", cutoff: 0 },
  { name: "Nigerian Police Academy", location: "Wudil, Kano", cutoff: 0 },
  { name: "Samuel Adegboyega University", location: "Ogwa, Edo", cutoff: 0 },
  { name: "Rhema University", location: "Aba, Abia", cutoff: 0 },
  { name: "Ondo State University of Science and Technology", location: "Okitipupa, Ondo", cutoff: 0 },
  { name: "Federal University, Otuoke", location: "Otuoke, Bayelsa", cutoff: 0 },
  { name: "Nigerian Defence Academy", location: "Kaduna, Kaduna", cutoff: 0 },
  { name: "Delta State University", location: "Abraka, Delta", cutoff: 0 },
  { name: "Federal University, Lafia", location: "Lafia, Nasarawa", cutoff: 0 },
  { name: "University of Jos", location: "Jos, Plateau", cutoff: 0 },
  { name: "St. Augustine University", location: "Ilara, Lagos", cutoff: 0 },
  { name: "University of Benin", location: "Benin City, Edo", cutoff: 0 },
  { name: "Godfrey Okoye University", location: "Enugu, Enugu", cutoff: 0 },
  { name: "Edo University Iyamho", location: "Iyamho, Edo", cutoff: 0 },
];

type CourseOption = string | { group: string; items: string[] };

const unilagCoursesGrouped: CourseOption[] = [
  { group: "Faculty of Arts", items: ["Creative Arts", "English Language", "French", "Russian", "German", "History & Strategic Studies", "Linguistics/Yoruba", "Linguistics", "Chinese", "Philosophy", "Christian Religious Studies", "Islamic Religious Studies"] },
  { group: "College of Medicine", items: ["Anatomy", "Pharmacology", "Physiology", "Medical Laboratory Science", "Medicine and Surgery", "Nursing Science", "Physiotherapy", "Radiography", "Dental Science"] },
  { group: "Faculty of Education", items: ["Adult Education", "Education Economics", "Business Education", "Education Islamic Religious Studies", "Education English", "Early Childhood Education", "Education Yoruba", "Education French", "Education History", "Education Christian Religious Studies", "Educational Administration", "Educational Foundations", "Health Education", "Human Kinetics Education", "Education Biology", "Education Chemistry", "Education Home Economics", "Integrated Science Education", "Education Mathematics", "Education Physics", "Technology Education", "Special Education"] },
  { group: "Faculty of Engineering", items: ["Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering", "Electrical and Electronics Engineering", "Mechanical Engineering", "Metallurgical & Materials Engineering", "Petroleum & Gas Engineering", "Surveying & Geoinformatics Engineering", "Systems Engineering"] },
  { group: "Faculty of Environmental Sciences", items: ["Architecture", "Building", "Estate Management", "Quantity Surveying", "Urban & Regional Planning"] },
  { group: "Faculty of Law", items: ["Law"] },
  { group: "Faculty of Management Sciences", items: ["Accounting", "Actuarial Science", "Banking & Finance", "Business Administration", "IRPM", "Insurance", "Taxation", "Procurement"] },
  { group: "Faculty of Pharmacy", items: ["Pharmacy"] },
  { group: "Faculty of Science", items: ["Biochemistry", "Biostatistics", "Botany", "Cell Biology & Genetics", "Chemistry", "Computer Science", "Data Science", "Environmental Standards", "Geology", "Geophysics", "Marine Biology", "Fisheries", "Mathematics", "Statistics", "Microbiology", "Physics", "Zoology"] },
  { group: "Faculty of Social Sciences", items: ["Economics", "Economics & Development Studies", "Geography", "Meteorology & Climate Science", "Mass Communication", "Library & Information Science", "Political Science", "Psychology", "Public Administration", "Social Work", "Sociology", "Social Standard"] }
];

const uiCoursesGrouped: CourseOption[] = [
  { group: "Faculty of Agriculture", items: ["Agric. Economics", "Agric. Extension and Rural Development.", "Crop and Horticultural Sciences", "Soil Resources Management", "Animal Science", "Crop Protection and Environmental Biology"] },
  { group: "Faculty of Arts", items: ["Anthropology (Arts)", "Arabic Language and Literature", "Archaeology (Arts)", "Classical Studies", "Communication and Language Arts", "European Studies - French", "European Studies- German", "European Studies- Russian", "English", "History", "Islamic Studies", "Linguistics", "Linguistics- Igbo", "Linguistics- Yoruba", "Music", "Philosophy", "Religious Studies", "Theatre Arts"] },
  { group: "College of Medicine", items: ["Biochemistry", "Dentistry", "Environmental Health Science", "Human Nutrition and Dietetics", "Medical Laboratory Science", "Medicine and Surgery", "Nursing Science", "Physiology", "Physiotherapy"] },
  { group: "Economics & Mgt Science", items: ["Economics", "Accounting", "Banking and Finance", "Marketing and Consumer Studies"] },
  { group: "Faculty of Education", items: ["Adult Education", "Business Education", "Early Childhood Education", "Education and Arabic Studies", "Education and Biology", "Education and Chemistry", "Education and Christian Religious Studies", "Education and Communication and Lang Arts", "Education and Economics", "Education and English", "Education and French", "Education and Geography", "Education and History", "Education and Islamic Studies", "Education and Mathematics", "Education and Physics", "Education and Political Science", "Education and Yoruba", "Educational Management", "Guidance and Counselling", "Health Education", "Human Kinetics", "Library, Archival and Information Studies", "Special Education"] },
  { group: "Environmental Design Management", items: ["Architecture", "Estate Management", "Urban and Regional Planning", "Quantity Surveying"] },
  { group: "Faculty of Law", items: ["Law"] },
  { group: "Faculty of Pharmacy", items: ["Pharmacy"] },
  { group: "Renewable Natural Resources", items: ["Aquaculture and Fisheries Management", "Forest Resources Management", "Wildlife & Ecotourism Management", "Social and Environmental Forestry"] },
  { group: "Faculty of Science", items: ["Anthropology (Science)", "Archaeology (Science)", "Botany", "Chemistry", "Computer Science", "Geography (Science)", "Geology", "Industrial Chemistry", "Mathematics", "Microbiology", "Physics", "Statistics", "Zoology"] },
  { group: "Faculty of Social Sciences", items: ["Geography (Social Sciences)", "Political Science", "Psychology", "Sociology"] },
  { group: "Faculty of Technology", items: ["Agricultural and Environmental Engineering", "Civil Engineering", "Electrical and Electronics Engineering", "Food Technology", "Industrial and Production Engineering", "Mechanical Engineering", "Petroleum Engineering", "Wood Products Engineering", "Automotive Engineering"] },
  { group: "Faculty of Veterinary Medicine", items: ["Veterinary Medicine"] }
];

const unnCoursesGrouped: CourseOption[] = [
  { group: "Faculty of Agriculture", items: ["Agricultural Economics", "Agricultural Extension", "Animal Science", "Crop Science", "Home Science", "Soil Science", "Food Science and Technology", "Nutrition and Dietetics"] },
  { group: "Faculty of Arts", items: ["Archeology and Tourism", "Combined Arts", "French", "FRENCH/GERMAN/RUSSIA", "German", "Igbo", "Language and Linguistics Igbo", "English and Literary Studies", "Fine and Applied Arts", "History and International Studies", "Linguistics and Nigerian Languages", "Mass Communication", "Music", "Theater and Film Studies"] },
  { group: "Faculty of Basic Medical Sciences", items: ["Anatomy", "Physiology"] },
  { group: "Faculty of Biological Sciences", items: ["Botany", "Zoology", "Combined Biological Sciences", "Biochemistry", "Microbiology"] },
  { group: "Faculty of Business Administration", items: ["Accountancy", "Banking and Finance", "Marketing", "Business Management"] },
  { group: "Faculty of Dentistry", items: ["Dentistry"] },
  { group: "Faculty of Education", items: ["Education Biology", "Education Chemistry", "Education and Fine Arts", "Education Mathematics", "Education Physics", "Education Science", "Education Social Science", "Education History", "Guidance and Counseling", "Health Education", "Special Education", "Library and Information Science", "Adult Education and Community Development", "Creative Arts", "Early Childhood Education", "Education and Economics", "Education and Geography", "Education and Igbo", "Education Arts", "Education and Political Science", "Education English"] },
  { group: "Faculty of Engineering", items: ["Agric and Bioresources Engineering", "Metallurgical and Material Engineering", "Mechatronics Engineering", "Civil Engineering", "Electrical Engineering", "Electronic Engineering", "Mechanical Engineering"] },
  { group: "Faculty of Environmental Studies", items: ["Estate Management", "Geoinformatics and Surveying", "Urban and Regional Planning", "Architecture"] },
  { group: "Faculty of Health Science and Technology", items: ["Medical Laboratory Science", "Medical Radiography", "Medical Rehabilitation", "Nursing Science"] },
  { group: "Faculty of Law", items: ["Law"] },
  { group: "College of Medicine", items: ["Medicine and Surgery"] },
  { group: "Faculty of Pharmaceutical Sciences", items: ["Pharmacy"] },
  { group: "Faculty of Physical Sciences", items: ["Computer/Statistics", "Geology", "Mathematics", "Physics and Astronomy", "Pure and Industrial Chemistry", "Statistics", "Science Laboratory Technology", "Computer Science"] },
  { group: "Faculty of Social Sciences", items: ["Geography", "Philosophy (Social Sciences)", "Religious Studies", "Economics", "Political Sciences", "Psychology", "Public Administration and Local Government", "Sociology and Anthropology", "Social Work"] },
  { group: "Faculty of Veterinary Medicine", items: ["Veterinary Medicine"] },
  { group: "Faculty of Vocational and Technical Education", items: ["Agric Education", "Agric Science Education", "Business Education (Vocational)", "Computer Education", "Home Economics Education", "Industrial Technical Education"] }
];

const futminnaCoursesGrouped: CourseOption[] = [
  { group: "School of Agronomy & Forestry Technology (SAFT)", items: ["Crop Production", "Soil Science and Land Management", "Horticulture", "Forestry and Wildlife Technology"] },
  { group: "School of Agricultural Management & Extension Technology (SAMET)", items: ["Agricultural Economics and Farm Management", "Agricultural Extension and Rural Development", "Agribusiness"] },
  { group: "School of Architectural Technology (SAT)", items: ["Architecture", "Interior Architecture and Design", "Landscaping Architecture", "Furniture Design Architecture"] },
  { group: "School of Basic Medical Sciences (SBMS)", items: ["Medicine and Surgery", "Human Anatomy", "Human Physiology", "Nursing Science", "Medical Laboratory Science", "Doctor of Pharmacy (Pharm. D.)"] },
  { group: "School of Environmental Technology (SET)", items: ["Building", "Estate Management & Valuation", "Quantity Surveying", "Surveying and Geoinformatics", "Urban and Regional Planning"] },
  { group: "School of Electrical Engineering and Technology (SEET)", items: ["Computer Engineering", "Electrical/Electronic Engineering", "Mechatronics Engineering", "Telecommunication Engineering"] },
  { group: "School of Food Science & Agricultural Technology (SFAT)", items: ["Water Resources, Aquaculture and Fisheries Tech", "Food Science Technology", "Animal Production", "Human Nutrition and Dietetics"] },
  { group: "School of Information and Communication Technology (SICT)", items: ["Computer Science", "Cyber Security Science", "Data Science", "Information Technology", "Information Science and Media Studies", "Software Engineering"] },
  { group: "School of Infrastructure, Process Engineering and Technology (SIPET)", items: ["Agric. and Bioresources Engineering", "Chemical Engineering", "Civil Engineering", "Food Engineering", "Material and Metallurgical Engineering", "Mechanical Engineering", "Petroleum and Gas Engineering"] },
  { group: "School of Innovative Technology (SIT)", items: ["Entrepreneurship", "Logistics and Transport Technology", "Project Management Technology", "Procurement Management Technology", "Logistics and Supply Chain Management"] },
  { group: "School of Life Sciences (SLS)", items: ["Animal Biology", "Biochemistry", "Forensic Science", "Microbiology", "Plant Biology", "Public Health", "Biotechnology"] },
  { group: "School of Physical Sciences (SPS)", items: ["Applied Geophysics", "Chemistry", "Geography", "Geology", "Industrial Mathematics", "Mathematics", "Meteorology", "Physics", "Statistics"] },
  { group: "School of Science Technology Education (SSTE)", items: ["Educational Technology", "Industrial and Technology Education", "Library and Information Science", "Biology Education", "Chemistry Education", "Geography Education", "Mathematics Education", "Physics Education"] }
];

const bensonIdahosaCoursesGrouped: CourseOption[] = [
  { 
    group: "Agriculture", 
    items: [
      "Agricultural Economics", 
      "Agricultural Extension Services", 
      "Agronomy", 
      "Animal Science and Animal Technology", 
      "Agricultural Science-related programmes"
    ] 
  },
  { 
    group: "Arts & Education", 
    items: [
      "English Studies", 
      "Education programmes", 
      "Business Education", 
      "Computer Science Education", 
      "Economics Education", 
      "English Education", 
      "Mathematics Education", 
      "Political Science Education"
    ] 
  },
  { 
    group: "Law", 
    items: ["Bachelor of Laws (LL.B)"] 
  },
  { 
    group: "Science", 
    items: [
      "Biochemistry", 
      "Microbiology", 
      "Mathematics", 
      "Other science-related programmes"
    ] 
  },
  { 
    group: "Social & Management Sciences", 
    items: [
      "Accounting", 
      "Banking and Finance", 
      "Business Administration", 
      "Economics", 
      "Political Science", 
      "Public Administration", 
      "Mass Communication", 
      "Other related programmes"
    ] 
  },
  { 
    group: "Basic Medical & Health Sciences", 
    items: [
      "Nursing Science", 
      "Medical Laboratory Science"
    ] 
  },
  { 
    group: "Engineering", 
    items: ["Engineering programmes offered by the Faculty of Engineering"] 
  },
  { 
    group: "Medicine", 
    items: ["Medicine and Surgery"] 
  }
];

const oauCoursesGrouped: CourseOption[] = [
  { 
    group: "Faculty of Administration", 
    items: [
      "International Relations", 
      "Local Government and Development Studies", 
      "Management & Accounting", 
      "Public Administration"
    ] 
  },
  { 
    group: "Faculty of Agriculture", 
    items: [
      "Agricultural Economics", 
      "Plant Science", 
      "Animal Sciences", 
      "Crop Production and Protection", 
      "Family, Nutrition & Consumer Sciences", 
      "Agricultural Extension and Rural Development"
    ] 
  },
  { 
    group: "Faculty of Arts", 
    items: [
      "Linguistics and African Languages", 
      "Department of English", 
      "Dramatic Arts", 
      "History", 
      "Music", 
      "Philosophy", 
      "Religious Studies"
    ] 
  },
  { 
    group: "Faculty of Education", 
    items: [
      "Education Technology & Library Studies", 
      "Adult Education and Lifelong Learning", 
      "Educational Foundations and Counselling", 
      "Arts and Social Sciences Education", 
      "Science and Technology Education", 
      "Educational Management", 
      "Institute of Education", 
      "Physical and Health Education"
    ] 
  },
  { 
    group: "Faculty of Environmental Design and Management", 
    items: [
      "Fine and Applied Arts", 
      "Architecture", 
      "Building", 
      "Quantity Surveying", 
      "Urban and Regional Planning", 
      "Estate Management"
    ] 
  },
  { 
    group: "Faculty of Law", 
    items: [
      "International Law", 
      "Jurisprudence and Private Law", 
      "Business Law", 
      "Public Law"
    ] 
  },
  { 
    group: "Faculty of Pharmacy", 
    items: [
      "Clinical Pharmacy and Pharmacy Administration", 
      "Pharmaceutics", 
      "Pharmacology", 
      "Pharmaceutical Chemistry", 
      "Pharmacognosy", 
      "Drug Research and Production Unit"
    ] 
  },
  { 
    group: "Faculty of Sciences", 
    items: [
      "Biochemistry & Molecular Biology", 
      "Botany", 
      "Chemistry", 
      "Geology", 
      "Mathematics", 
      "Microbiology", 
      "Physics and Physics Engineering", 
      "Zoology"
    ] 
  },
  { 
    group: "Faculty of Social Sciences", 
    items: [
      "Demography & Social Statistics", 
      "Economics", 
      "Geography", 
      "Political Science", 
      "Psychology", 
      "Sociology & Anthropology"
    ] 
  },
  { 
    group: "Faculty of Technology", 
    items: [
      "Agricultural and Environmental Engineering", 
      "Chemical Engineering", 
      "Civil Engineering", 
      "Computer Science and Engineering", 
      "Electronic and Electrical Engineering", 
      "Food Science and Technology", 
      "Mechanical Engineering", 
      "Materials Science and Engineering"
    ] 
  }
];

const covenantCoursesGrouped: CourseOption[] = [
  {
    group: "College of Leadership Development",
    items: [
      "English",
      "International Relations",
      "Policy and Strategic Studies",
      "Political Science",
      "Psychology"
    ]
  },
  {
    group: "College of Management and Social Sciences",
    items: [
      "Accounting",
      "Business Administration",
      "Economics",
      "Finance",
      "Financial Technology",
      "Industrial Relations and Human Resource Management",
      "Marketing",
      "Mass Communication",
      "Sociology",
      "Sociology (Criminology)",
      "Sociology (Social Work)"
    ]
  },
  {
    group: "College of Engineering",
    items: [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Engineering",
      "Electrical and Electronics Engineering",
      "Information and Communication Engineering",
      "Mechanical Engineering",
      "Petroleum Engineering"
    ]
  },
  {
    group: "College of Science and Technology",
    items: [
      "Architecture",
      "Biochemistry",
      "Biology (Applied Biology and Biotechnology)",
      "Building Technology",
      "Computer Science",
      "Estate Management",
      "Industrial Chemistry",
      "Industrial Mathematics",
      "Industrial Mathematics (Computer Science Option)",
      "Industrial Mathematics (Statistics Option)",
      "Industrial Physics (Applied Geophysics Option)",
      "Industrial Physics (Electronics and IT Applications Option)",
      "Industrial Physics (Renewable Energy Option)",
      "Management Information Systems",
      "Microbiology"
    ]
  }
];

const funaabCoursesGrouped: CourseOption[] = [
  {
    group: "Agriculture",
    items: [
      "Agricultural Administration",
      "Agricultural Economics and Farm Management",
      "Agricultural Extension and Rural Development",
      "Animal Breeding and Genetics",
      "Animal Nutrition",
      "Animal Physiology",
      "Animal Production and Health",
      "Aquaculture and Fisheries Management",
      "Climate Science and Agricultural Meteorology",
      "Crop Protection",
      "Environmental Management and Toxicology",
      "Forest Resource Management",
      "Geology",
      "Horticulture",
      "Hydrology And Water Resources Management",
      "Pasture and Range Management",
      "Plant Breeding and Seed Technology",
      "Plant Physiology and Crop Production",
      "Soil Science and Land Management",
      "Water Resources Management and Agro-meteorology",
      "Wildlife Management"
    ]
  },
  {
    group: "Biological Science",
    items: [
      "Biochemistry",
      "Microbiology",
      "Pure and Applied Botany",
      "Pure and Applied Zoology"
    ]
  },
  {
    group: "Computing Science",
    items: [
      "Computer Science",
      "Cyber Security",
      "Data Science",
      "Information Communication Technology",
      "Information Systems",
      "Information Technology",
      "Software Engineering"
    ]
  },
  {
    group: "Food Science",
    items: [
      "Food Science and Technology",
      "Home Science and Management",
      "Hospitality and Tourism",
      "Nutrition and Dietetics",
      "Veterinary Medicine"
    ]
  },
  {
    group: "Physical Science",
    items: [
      "Chemistry",
      "Industrial Chemistry",
      "Mathematics",
      "Physics",
      "Statistics"
    ]
  },
  {
    group: "Engineering",
    items: [
      "Agricultural Engineering",
      "Civil Engineering",
      "Electrical and Electronics Engineering",
      "Mechanical Engineering",
      "Mechatronic Engineering"
    ]
  },
  {
    group: "Veterinary Medicine",
    items: [
      "Veterinary Medicine"
    ]
  },
  {
    group: "Entrepreneurial and Development Studies",
    items: [
      "Cooperative Studies",
      "Development Studies",
      "Entrepreneurial Studies",
      "Library and Information Science"
    ]
  }
];

const futaCoursesGrouped: CourseOption[] = [
  {
    group: "College of Health Sciences",
    items: [
      "Biomedical Technology",
      "Human Anatomy",
      "Medicine & Surgery",
      "Physiology"
    ]
  },
  {
    group: "School of Agriculture & Agricultural Technology",
    items: [
      "Agric Extension & Communication Technology",
      "Agricultural Engineering",
      "Agricultural Resource Economics",
      "Animal Production & Health Services",
      "Crop, Soil & Pest Management",
      "Fisheries & Aquaculture",
      "Food Science & Technology",
      "Forestry & Wood Technology"
    ]
  },
  {
    group: "School of Art, Design & Printing Technology",
    items: [
      "Industrial Design"
    ]
  },
  {
    group: "School of Computing",
    items: [
      "Computer Science",
      "Cyber Security",
      "Information & Communication Technology",
      "Information Systems",
      "Information Technology",
      "Software Engineering"
    ]
  },
  {
    group: "School of Earth & Mineral Sciences",
    items: [
      "Applied Geology",
      "Applied Geophysics",
      "Marine Science & Technology"
    ]
  },
  {
    group: "School of Ecotourism & Wildlife Management",
    items: [
      "Ecotourism & Wildlife Management"
    ]
  },
  {
    group: "School of Engineering & Engineering Technology",
    items: [
      "Civil Engineering",
      "Computer Engineering",
      "Electrical / Electronics Engineering",
      "Industrial & Production Engineering",
      "Mechanical Engineering",
      "Metallurgical & Materials Engineering",
      "Mining Engineering"
    ]
  },
  {
    group: "School of Environmental Technology",
    items: [
      "Architecture",
      "Building",
      "Estate Management",
      "Quantity Surveying",
      "Remote Sensing & Geoscience Information Systems",
      "Surveying & Geoinformatics",
      "Urban & Regional Planning"
    ]
  },
  {
    group: "School of Sciences",
    items: [
      "Biochemistry",
      "Biology",
      "Industrial Chemistry",
      "Industrial Mathematics",
      "Mathematics",
      "Meteorology",
      "Microbiology",
      "Physics",
      "Statistics"
    ]
  }
];

const ebsuCoursesGrouped: CourseOption[] = [
  {
    group: "Faculty of Medicine",
    items: [
      "Medicine & Surgery",
      "Anatomy",
      "Physiology"
    ]
  },
  {
    group: "Faculty of Clinical Medicine",
    items: [
      "Community Medicine",
      "Internal Medicine",
      "Pharmacology",
      "Surgery"
    ]
  },
  {
    group: "Faculty of Health Science and Technology",
    items: [
      "Medical Laboratory Science",
      "Nursing Science"
    ]
  },
  {
    group: "Faculty of Science",
    items: [
      "Applied Biology",
      "Applied Microbiology",
      "Biochemistry",
      "Biotechnology",
      "Computer Science",
      "Geology and Exploration Geophysics",
      "Industrial Chemistry",
      "Industrial Mathematics",
      "Applied Statistics",
      "Industrial Physics"
    ]
  },
  {
    group: "Faculty of Agricultural and Natural Resource Management",
    items: [
      "Agric Economics, Management and Extension",
      "Animal Science",
      "Crop Science and Landscape Management",
      "Fisheries and Aquaculture",
      "Food Science and Technology",
      "Soil and Environmental Management"
    ]
  },
  {
    group: "Faculty of Law",
    items: [
      "Business Law",
      "Civil Law",
      "International Law & Jurisprudence",
      "Private & Property Law",
      "Public Law"
    ]
  },
  {
    group: "Faculty of Social Sciences and Humanities",
    items: [
      "Mass Communication",
      "Economics",
      "Political Science",
      "Psychology",
      "Sociology & Anthropology",
      "English Language & Literature",
      "Linguistics (French, Igbo)",
      "History and International Relations",
      "Philosophy",
      "Religion and Peace Studies",
      "Social Work",
      "Library & Information Science"
    ]
  },
  {
    group: "Faculty of Management Sciences",
    items: [
      "Accountancy",
      "Banking and Finance",
      "Business Management",
      "Marketing",
      "Public Administration",
      "Entrepreneurship"
    ]
  },
  {
    group: "Faculty of Education",
    items: [
      "Arts & Social Science Education",
      "Science Education",
      "Vocational Technical Education",
      "Business Education",
      "Educational Foundations",
      "Human Kinetics & Health Education",
      "Home Economics & Hospitality Management"
    ]
  }
];

// Salem University, Lokoja: official undergraduate catalogue and college/admissions pages,
// checked 18 September 2026. Use current catalogue names where older notices differ.
// https://salemuniversity.edu.ng/course/?e-filter-16b6a5c-level=undergraduate
// https://salemuniversity.edu.ng/course/page/2/?e-filter-16b6a5c-level=undergraduate
// https://salemuniversity.edu.ng/2025-2026-undergraduate-admissions/
// https://salemuniversity.edu.ng/college/college-of-management-and-social-sciences/
const salemCoursesGrouped: CourseOption[] = [
  {
    group: "College of Law",
    // Private/Property and Public/International Law are covered by the LL.B. programme.
    items: ["Law"]
  },
  {
    group: "College of Management and Social Sciences",
    items: [
      "Accounting",
      "Business Administration",
      "Criminology and Security Studies",
      "Economics",
      "International Relations and Diplomacy",
      "Mass Communication",
      "Peace, Conflict and Development Studies",
      "Public Administration",
      "Sociology"
    ]
  },
  {
    group: "College of Information and Communication Technology",
    items: [
      "Computer Science",
      "Cybersecurity",
      "Data Science",
      "Information Technology",
      "Software Engineering"
    ]
  },
  {
    group: "College of Basic Medical and Allied Sciences",
    items: [
      "Human Anatomy",
      "Human Physiology",
      "Medical Laboratory Science",
      "Nursing Science",
      "Public Health"
    ]
  },
  {
    group: "College of Medicine and Health Science",
    items: ["Medicine and Surgery"]
  },
  {
    group: "College of Education",
    items: [
      "Business Education",
      "Computer Science Education",
      "Educational Management",
      "English Language Education",
      "Library and Information Science",
      "Social Studies Education"
    ]
  },
  {
    group: "College of Natural and Applied Sciences",
    items: ["Biochemistry", "Geology", "Microbiology"]
  },
  {
    group: "College of Humanities",
    items: ["English and Literary Studies", "History Studies"]
  },
  // Listed in the official catalogue without a college affiliation.
  "Entrepreneurship"
];

const generalInstitutionCourses: CourseOption[] = [
  "Accounting", "Agricultural Science", "Architecture", "Banking and Finance", "Biochemistry", "Biology",
  "Business Administration", "Chemistry", "Civil Engineering", "Computer Science", "Economics", "Education",
  "Electrical and Electronics Engineering", "English Language", "Estate Management", "Food Science and Technology",
  "Geography", "Geology", "Law", "Mass Communication", "Mathematics", "Mechanical Engineering",
  "Medicine and Surgery", "Microbiology", "Nursing Science", "Pharmacy", "Philosophy", "Physics",
  "Political Science", "Psychology", "Public Administration", "Quantity Surveying", "Sociology", "Statistics",
  "Theatre Arts", "Urban and Regional Planning", "Zoology"
];

const institutionCourses: Record<string, CourseOption[]> = {
  "University of Lagos": unilagCoursesGrouped,
  "University of Ibadan": uiCoursesGrouped,
  "University of Nigeria, Nsukka": unnCoursesGrouped,
  "Federal University of Technology, Minna": futminnaCoursesGrouped,
  "Benson Idahosa University": bensonIdahosaCoursesGrouped,
  "Obafemi Awolowo University": oauCoursesGrouped,
  "Covenant University": covenantCoursesGrouped,
  "Federal University of Agriculture, Abeokuta": funaabCoursesGrouped,
  "Federal University of Technology, Akure": futaCoursesGrouped,
  "Ebonyi State University": ebsuCoursesGrouped,
  "Salem University": salemCoursesGrouped,
  ...researchedInstitutionCourses,
};

institutions.forEach(({ name }) => {
  if (!institutionCourses[name]) {
    institutionCourses[name] = generalInstitutionCourses;
  }
});

export default function Home() {
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [selectedAction, setSelectedAction] = useState<"requirements" | "aggregate" | null>("aggregate");
  const [openDropdown, setOpenDropdown] = useState<"institution" | "course" | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [guideMode, setGuideMode] = useState<'programme' | 'institution'>('programme');
  const arrowRef = useRef<HTMLButtonElement>(null);
  const institutionArrowRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const flipStarted = useRef(false);
  const selectedInstitution = institutions.find(item => item.name === institution);
  const courses = institution ? institutionCourses[institution] ?? [] : [];
  const faculty = courses.find(item => typeof item !== 'string' && item.items.includes(course));
  const facultyName = faculty && typeof faculty !== 'string' ? faculty.group : '';
  const policy = admissionPolicies[institution];
  const jambCutoff = policy?.courseCutoffs?.[course] ?? policy?.minimumUtme;
  useEffect(() => {
    if (flipped) { flipStarted.current = true; backRef.current?.focus({ preventScroll: true }); }
    else if (flipStarted.current) { (guideMode === 'institution' ? institutionArrowRef : arrowRef).current?.focus({ preventScroll: true }); flipStarted.current = false; }
  }, [flipped, guideMode]);

  return (
    <main className="page-shell">
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="aurora aurora-three" aria-hidden="true" />

      <div className="bg-text-container" aria-hidden="true">
        <span className="bg-letter">V</span>
        <span className="bg-letter">A</span>
        <span className="bg-letter">D</span>
        <span className="bg-letter">A</span>
        <span className="bg-letter">N</span>
      </div>

      <div className={flipped ? "programme-scene is-flipped" : "programme-scene"} onKeyDown={event => { if (event.key === 'Escape' && flipped) setFlipped(false); }}>
      <div className="programme-flipper">
      <section inert={flipped} aria-hidden={flipped} className={institution ? "finder finder-expanded" : "finder"} aria-label="School finder">
        <div className="finder-topline">
          <span className="product-name">Vadan</span>
          <span className="step-count">{institution ? "02" : "01"} / 02</span>
        </div>

        <div className="finder-heading">
          <span className="field-number">01</span>
          <div>
            <label htmlFor="institution">Institution</label>
            <p>{institution ? "Choose a course and compare your scores." : "Where would you like to study?"}</p>
          </div>
        </div>

        <div className={institution ? "course-selector-row has-programme institution-selector-row" : "course-selector-row institution-selector-row"}>
        <Dropdown
          label="institution"
          value={institution}
          placeholder="Select an institution"
          options={institutions.map((item) => item.name)}
          isOpen={openDropdown === "institution"}
          onToggle={() => setOpenDropdown(openDropdown === "institution" ? null : "institution")}
          onChange={(value) => { 
            setInstitution(value); 
            setCourse(""); 
            setSelectedAction("aggregate"); 
            setFlipped(false); 
            setOpenDropdown(null); 
          }}
        />
        {institution && <button ref={institutionArrowRef} type="button" className="programme-arrow" aria-label={`Learn more about ${institution}`} aria-controls="institution-details" aria-expanded={flipped && guideMode === 'institution'} onClick={() => { setOpenDropdown(null); setGuideMode('institution'); setFlipped(true); }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" /></svg>
          <span className="programme-sign" aria-hidden="true">Learn more about this institution</span>
        </button>}
        </div>

        {selectedInstitution && (
          <div className="expanded-content">
            <div className="field-divider" />
            <div className="finder-heading compact-heading">
              <span className="field-number">02</span>
              <div>
                <label htmlFor="course">Course or department</label>
                <p>{selectedInstitution.location} · {jambCutoff === undefined ? "See official screening requirements" : `screening UTME minimum ${jambCutoff}`}</p>
              </div>
            </div>

            <div className={course ? "course-selector-row has-programme" : "course-selector-row"}>
            <Dropdown
              label="course"
              value={course}
              placeholder="Select a course"
              options={courses}
              isOpen={openDropdown === "course"}
              onToggle={() => setOpenDropdown(openDropdown === "course" ? null : "course")}
              onChange={(value) => { setCourse(value); setSelectedAction("aggregate"); setFlipped(false); setOpenDropdown(null); }}
            />

            {course && <button ref={arrowRef} type="button" className="programme-arrow" aria-label={`Learn more about ${course}`} aria-controls="programme-details" aria-expanded={flipped && guideMode === 'programme'} onClick={() => { setOpenDropdown(null); setGuideMode('programme'); setFlipped(true); }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" /></svg>
              <span className="programme-sign" aria-hidden="true">Learn more about this programme</span>
            </button>}
            </div>

            {course && (
              <div className="score-section">
                <div className="action-toggle">
                  <button
                    type="button"
                    className={selectedAction === "requirements" ? "action-button active" : "action-button"}
                    onClick={() => setSelectedAction("requirements")}
                  >
                    Admission requirements
                  </button>
                  <button
                    type="button"
                    className={selectedAction === "aggregate" ? "action-button active" : "action-button"}
                    onClick={() => setSelectedAction("aggregate")}
                  >
                    Calculate aggregate
                  </button>
                </div>

                {selectedAction === "requirements" && <ProgrammeRequirements institution={institution} course={course} faculty={facultyName} />}
                {selectedAction === "aggregate" && <AggregateCalculator key={`${institution}:${course}`} institution={institution} course={course} faculty={facultyName} />}
              </div>
            )}
          </div>
        )}
        <div className="finder-footer">Official sources and applicable sessions are shown with each rule.</div>
      </section>
      {institution && <section id={guideMode === 'institution' ? 'institution-details' : 'programme-details'} className="finder programme-back" inert={!flipped} aria-hidden={!flipped} aria-label={guideMode === 'institution' ? `${institution} institution details` : `${course} programme details`}>
        <div className="programme-back-top"><span className="product-name">{guideMode === 'institution' ? 'Institution guide' : 'Programme guide'}</span><button ref={backRef} type="button" className="action-button" onClick={() => setFlipped(false)}>← Back</button></div>
        <div className="programme-scroll" tabIndex={0} role="region" aria-label={guideMode === 'institution' ? `${institution} institution guide` : `${course} programme guide`}>{guideMode === 'institution' ? <InstitutionGuide institution={institution} location={selectedInstitution?.location || ''} /> : <ProgrammeGuide institution={institution} course={course} faculty={facultyName} />}</div>
      </section>}
      </div>
      </div>
    </main>
  );
}

function Dropdown({
  label,
  value,
  placeholder,
  options,
  isOpen,
  onToggle,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  options: CourseOption[];
  isOpen: boolean;
  onToggle: () => void;
  onChange: (value: string) => void;
}) {
  const titleId = `${label}-modal-title`;
  const isInstitution = label === "institution";
  let optionIndex = 0;
  const renderOption = (option: string, key: string) => (
    <button className={option === value ? "institution-option selected" : "institution-option"} key={key} type="button" role="option" aria-selected={option === value} onClick={() => onChange(option)}>
      <span className="institution-index">{String(++optionIndex).padStart(2, "0")}</span>
      <span>{option}</span>
      {option === value && <span className="selected-mark">✓</span>}
    </button>
  );

  return (
    <div className={isOpen ? "select-wrap dropdown-open" : "select-wrap"}>
      <button className="select-trigger" id={label} type="button" aria-haspopup="dialog" aria-expanded={isOpen} onClick={onToggle}>
        <span className={value ? "selected-value" : "placeholder-value"}>{value || placeholder}</span>
        <span className="select-chevron">⌄</span>
      </button>
      
      {isOpen && createPortal(
        <div className="modal-backdrop" role="presentation" onClick={onToggle}>
          <div className="institution-modal" role="dialog" aria-modal="true" aria-labelledby={titleId} onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-eyebrow">{isInstitution ? "Choose your institution" : "Choose your course or department"}</span>
                <h2 id={titleId}>{isInstitution ? "All institutions" : "Courses and departments"}</h2>
              </div>
              <button className="modal-close" type="button" aria-label={isInstitution ? "Close institution list" : "Close course list"} onClick={onToggle}>×</button>
            </div>
            <div className="institution-list" role="listbox" aria-labelledby={titleId}>
              {options.map((option, index) => {
                if (typeof option === "string") {
                  return renderOption(option, option);
                }
                const groupId = `${label}-group-${index}`;
                return (
                  <div key={option.group} role="group" aria-labelledby={groupId}>
                    <div id={groupId} className="dropdown-group-label">{option.group}</div>
                    {option.items.map((item) => renderOption(item, `${option.group}-${item}`))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
      
    </div>
  );
}
