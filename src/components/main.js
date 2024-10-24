import React, { useEffect } from 'react'
import { useContext } from 'react';
import { changeFavicon, getPortfolioNameFromUrl } from "./../utils/helper";
import { checkPortfolioExistsOrNot, getPortfolioDetailsById } from "./../utils/service";
import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import FooterBottom from "./footer/FooterBottom";
import Navbar from "./navbar/Navbar";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";
import Testimonial from "./tesimonial/Testimonial";
import { PortfolioContext } from '../contexts/PortfolioContext';
import NoPortfolioFound from './notFound/NoPortfolioFound';
import Loader from '../utils/Loader';


const PortfolioWebsite = () => {


    const { isLoading, setIsLoading, setPortfolioData, userNotFound, setUserNotFound } = useContext(PortfolioContext);

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
            {isLoading ? <Loader /> : (
                <>
                    {!userNotFound ? <div className="max-w-screen-xl mx-auto">
                        <Navbar />
                        <Banner />
                        <Features />
                        <Projects />
                        <Resume />
                        <Testimonial />
                        <Contact />
                        <Footer />
                        <FooterBottom />
                    </div> : <NoPortfolioFound />}
                </>
            )}
        </div>
    )
}

export default PortfolioWebsite