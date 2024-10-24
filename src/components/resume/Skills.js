import React from 'react'
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lgl:gap-20 justify-items-center"
    >

      {skills.map((skill, index) => <div className="w-full lgl:w-3/4 lg:w-full" key={index}>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">{skill.heading}</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          {skill.list.map((item, itemIdx) => {
            return <div className="overflow-x-hidden" key={itemIdx}>
              <p className="text-sm uppercase font-medium">{item.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  style={{ width: `${item?.rating}%` }}
                >
                  <span className="absolute -top-7 right-0">{item.rating}%</span>
                </motion.span>
              </span>
            </div>
          }
          )}
        </div>
      </div>)}


    </motion.div>
  );
}

export default Skills