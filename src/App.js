import React, { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import { getPortfolioNameFromUrl } from "./utils/helper";
import { checkPortfolioExistsOrNot, getPortfolioDetailsById } from "./utils/service";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const [portfolioData, setPortfolioData] = useState({});
  const [userNotFound, setUserNotFound] = useState(false);

  const changeFavicon = (url) => {
    // Find existing favicon element
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      // Create a new link element if it doesn't exist
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    // Set the new favicon URL
    link.href = url;
  };

  const loadPortfolioData = async () => {

    const portfolioName = getPortfolioNameFromUrl();
    const value = await checkPortfolioExistsOrNot(portfolioName);
    if (!value.doesExists) {
      setUserNotFound(true);
      setIsLoading(false);
      return;
    }

    const data = await getPortfolioDetailsById(value.portfolioId);
    if (data) {
      changeFavicon(data?.user?.avatar);
      document.title = `K31 Portfolio - ${data?.user?.username}`;
      setPortfolioData(data);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPortfolioData();
  }, [])

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">

      {isLoading ? <div className="w-full h-screen flex justify-center items-center">Loading...</div> : (
        <>
          {!userNotFound ? <div className="max-w-screen-xl mx-auto">
            <Navbar portfolioData={portfolioData} />
            <Banner portfolioData={portfolioData} />
            <Features portfolioData={portfolioData} />
            <Projects portfolioData={portfolioData} />
            <Resume portfolioData={portfolioData} />
            <Testimonial portfolioData={portfolioData} />
            <Contact portfolioData={portfolioData} />
            <Footer portfolioData={portfolioData} />
            <FooterBottom portfolioData={portfolioData} />
          </div> : <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-3xl">No Portfolio exists with this domain</h1>
          </div>}
        </>
      )}
    </div>
  );
}

export default App;
