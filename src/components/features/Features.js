import React, { useContext } from 'react'
import Title from '../layouts/Title';
import Card from './Card';
import { PortfolioContext } from '../../contexts/PortfolioContext';

const Features = () => {

  const { portfolioData } = useContext(PortfolioContext);

  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {portfolioData.userServices.services.map((service, index) => <Card
          title={service.title}
          des={service.description}
          key={index}
        />)}

      </div>
    </section>
  );
}

export default Features