import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { defaultPerson } from "../../assets";

const ContactLeft = ({ portfolioData }) => {

  const imageUrl = portfolioData?.userMetaData?.images.length === 2 ? portfolioData?.userMetaData?.images[1].url : portfolioData?.userMetaData?.images.length === 1 ? portfolioData?.userMetaData?.images[0].url : defaultPerson;

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 rounded-lg mb-2 object-contain"
        src={imageUrl}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">{portfolioData.user.username}</h3>
        {/* <p className="text-lg font-normal text-gray-400">
          {portfolioData.userMetaData.title}
        </p> */}
        <p className="text-base text-gray-400 tracking-wide">
          {portfolioData.userMetaData.description}
        </p>
        {portfolioData.user?.phoneNumber && <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">{portfolioData.user?.phoneNumber}</span>
        </p>}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">{portfolioData.user?.email}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft