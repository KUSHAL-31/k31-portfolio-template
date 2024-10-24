import React, { useContext } from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { PortfolioContext } from '../../contexts/PortfolioContext';

const Projects = () => {

  const { portfolioData } = useContext(PortfolioContext);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {portfolioData.userProjects.projects.map((project, index) => <ProjectsCard
          title={project.title}
          des={project.description}
          src={project.image}
          url={project.url}
          sourceCode={project.sourceCode}
          key={index}
        />)}

      </div>
    </section>
  );
}

export default Projects