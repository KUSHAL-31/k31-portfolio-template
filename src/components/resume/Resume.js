import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
// import Achievement from './Achievement';
// import Experience from "./Experience"

const Resume = ({ portfolioData }) => {
  const [eduAndExpData, setEduAndExpData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  // const [experienceData, setExperienceData] = useState(false);
  // const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Know more" des="About me" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() =>
              setEduAndExpData(true) &
              setSkillData(false)
              // &
              // setExperienceData(false)
              // & setAchievementData(false)
            }
            className={`${eduAndExpData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Education & Experience
          </li>
          <li
            onClick={() =>
              setEduAndExpData(false) &
              setSkillData(true)
              // &
              // setExperienceData(false)
              // & setAchievementData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Professional Skills
          </li>
          {/* <li
            onClick={() =>
              setEduAndExpData(false) &
              setSkillData(false)
              // &
              // setExperienceData(true)
              // & setAchievementData(false)
            }
            className={`${experienceData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Experience
          </li> */}
          {/* <li
            onClick={() =>
              setEduAndExpData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${achievementData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Achievements
          </li> */}
        </ul>
      </div>
      {eduAndExpData && <Education educations={portfolioData.userExpEdu.education} experiences={portfolioData.userExpEdu.experience} />}
      {skillData && <Skills skills={portfolioData.userSkills.skillSection} />}
      {/* {achievementData && <Achievement />} */}
      {/* {experienceData && <Experience experienceDetails={portfolioData.userExpEdu.experience} />} */}

    </section>
  );
}

export default Resume