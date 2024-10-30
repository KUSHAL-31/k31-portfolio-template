import React, { useContext } from 'react'
import { PortfolioContext } from '../../contexts/PortfolioContext';
import { defaultPerson } from "../../assets";

const RightBanner = () => {

  const { portfolioData } = useContext(PortfolioContext);
  const imageUrl = portfolioData?.userMetaData?.images[0]?.url || defaultPerson;


  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[450px] lgl:h-[450px] z-10"
        src={imageUrl}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner