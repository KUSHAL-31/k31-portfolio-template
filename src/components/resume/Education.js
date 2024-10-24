import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { formatDate } from "../../utils/helper";

const Education = ({ educations, experiences }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Details</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {
            educations.map((education, index) => (
              <ResumeCard
                title={education.degree}
                subTitle={education?.school}
                result={education.result}
                des={education?.comments}
                key={index}
              />
            ))
          }
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {
            experiences.map((experience, index) => (
              <ResumeCard
                title={experience.title}
                subTitle={experience.company}
                result={experience.isPresent ? `${formatDate(experience.startDate)} - Present` : `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`}
                des={experience.description.join('. ')}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
