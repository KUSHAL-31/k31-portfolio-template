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
import axios from "axios";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const [portfolioData, setPortfolioData] = useState({});

  const loadPortfolioData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_HOSTED_URL}/api/v1/user/details/${process.env.REACT_APP_PORTFOLIO_USER_ID}`);
    if (res.data.success) {
      setPortfolioData(res.data.user);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPortfolioData();
  }, [])

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      {isLoading ? <div className="w-full h-screen flex justify-center items-center">Loading...</div> : (
        <>
          <div className="max-w-screen-xl mx-auto">
            <Banner portfolioData={portfolioData} />
            <Features />
            <Projects />
            <Resume />
            <Testimonial />
            <Contact />
            <Footer />
            <FooterBottom />
          </div>
        </>)}
    </div>
  );
}

export default App;
