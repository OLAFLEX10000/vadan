// Subject combinations restored from the previous admission requirements.
export function getPreviousSubjectCombination(institution: string, course: string) {
  const lowerCourse = course.toLowerCase();
  const lowerInstitution = institution.toLowerCase();
  const normalizedCourse = lowerCourse.replace(/[^a-z0-9]+/g, " ").trim();

  const institutionCourseMap: Record<string, Record<string, { jambSubjects: string[]; oLevel: string }>> = {
    "university of lagos": {
      "medicine and surgery": {
        jambSubjects: ["English Language", "Biology", "Chemistry", "Physics"],
        oLevel: "Five SSCE credit passes in English, Mathematics, Biology, Chemistry, and Physics.",
      },
      "computer science": {
        jambSubjects: ["English Language", "Mathematics", "Physics", "Chemistry/Biology"],
        oLevel: "Five SSCE credits including English, Mathematics, Physics, Chemistry, and Further Mathematics.",
      },
      "law": {
        jambSubjects: ["English Language", "Literature in English", "Government", "History/CRS"],
        oLevel: "Five SSCE credit passes including English, Literature, Mathematics, and two Arts/Social Science subjects.",
      }
    },
    "university of ibadan": {
      "medicine and surgery": {
        jambSubjects: ["English Language", "Biology", "Chemistry", "Physics"],
        oLevel: "Five SSCE credit passes in English, Mathematics, Biology, Chemistry, and Physics.",
      },
      "law": {
        jambSubjects: ["English Language", "Literature in English", "Government", "History/CRS"],
        oLevel: "Five SSCE credit passes including English, Literature in English, and other Arts subjects. Mathematics is required.",
      },
      "pharmacy": {
        jambSubjects: ["English Language", "Biology", "Chemistry", "Physics"],
        oLevel: "Five SSCE credit passes in English, Mathematics, Biology, Chemistry, and Physics.",
      }
    },
    "university of nigeria, nsukka": {
      "medicine and surgery": {
        jambSubjects: ["English Language", "Biology", "Chemistry", "Physics"],
        oLevel: "Five SSCE credit passes in English, Mathematics, Biology, Chemistry, and Physics.",
      },
      "law": {
        jambSubjects: ["English Language", "Literature in English", "Government", "History/CRS"],
        oLevel: "Five SSCE credit passes including English Language, Literature in English, and Mathematics.",
      }
    },
    "federal university of technology, minna": {
      "computer science": {
        jambSubjects: ["English Language", "Mathematics", "Physics", "Chemistry"],
        oLevel: "Five SSCE credit passes including English Language, Mathematics, Physics, Chemistry, and any other Science subject.",
      }
    }
  };

  const exact = institutionCourseMap[lowerInstitution]?.[normalizedCourse];
  if (exact) {
    return {
      ...exact,
    };
  }

  const isMedical = /(medicine|dentistry|pharmacy|nursing|radiography|physiology|anatomy|medical laboratory|optometry|physiotherapy|veterinary)/i.test(lowerCourse);
  const isEngineering = /(engineering|architecture|surveying|geoinformatics|civil|mechanical|electrical|computer engineering|mechatronics|chemical|petroleum|marine|aeronautical|urban and regional)/i.test(lowerCourse);
  const isScience = /(science|chemistry|biology|physics|mathematics|statistics|geology|geography|agric|food|microbiology|biochemistry|zoology|botany|environmental|industrial|fisheries|forestry|computer)/i.test(lowerCourse);
  const isBusiness = /(accounting|economics|finance|banking|business administration|public administration|insurance|management|marketing|commerce|entrepreneurship)/i.test(lowerCourse);
  const isArts = /(law|english|literature|history|political|sociology|philosophy|theatre|mass communication|communication|language|french|linguistics|international relations|criminology|psychology|education|arts)/i.test(lowerCourse);

  if (isMedical) {
    return {
      jambSubjects: ["English Language", "Biology", "Chemistry", "Physics"],
      oLevel: "Five SSCE credit passes in English Language, Mathematics, Biology, Chemistry, and Physics.",
    };
  }

  if (isEngineering) {
    return {
      jambSubjects: ["English Language", "Mathematics", "Physics", "Chemistry"],
      oLevel: "Five SSCE credit passes including English Language, Mathematics, Physics, Chemistry, and one other relevant science subject.",
    };
  }

  if (isBusiness) {
    return {
      jambSubjects: ["English Language", "Mathematics", "Economics", "Government/Commerce"],
      oLevel: "Five SSCE credit passes including English Language, Mathematics, Economics, and any two business/social science subjects.",
    };
  }

  if (isArts) {
    return {
      jambSubjects: ["English Language", "Literature in English or Government", "Economics/History/CRS/IRS", "One other arts subject"],
      oLevel: "Five SSCE credit passes including English Language, Mathematics, and relevant arts or social science subjects.",
    };
  }

  if (isScience) {
    return {
      jambSubjects: ["English Language", "Mathematics", "Physics", "Chemistry or Biology"],
      oLevel: "Five SSCE credit passes including English Language, Mathematics, and science subjects.",
    };
  }

  return {
    jambSubjects: ["English Language", "Mathematics", "Relevant Subject 1", "Relevant Subject 2"],
    oLevel: "Five SSCE credit passes including English Language and Mathematics.",
  };
}
