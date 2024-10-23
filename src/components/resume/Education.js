import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = ({ educationDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {
            educationDetails.map((education, index) =>
              <ResumeCard
                title={education.degree}
                subTitle={education.school}
                result={education.result}
                des={education.comment ? education.comment : "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."}
                key={index}
              />
            )
          }

        </div>
      </div>
    </motion.div>
  );
};

export default Education;
