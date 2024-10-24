import React, { useState } from 'react'
import { PortfolioContext } from './PortfolioContext'

export const PortfolioContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [portfolioData, setPortfolioData] = useState({});
    const [userNotFound, setUserNotFound] = useState(false);

    return (
        <PortfolioContext.Provider value={{ isLoading, setIsLoading, portfolioData, setPortfolioData, userNotFound, setUserNotFound }}>
            {children}
        </PortfolioContext.Provider>
    )
}

