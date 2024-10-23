export const getPortfolioNameFromUrl = () => {
    try {
        const pathname = window.location.pathname;
        const portfolioName = pathname.split('/')[1];
        return portfolioName;
    } catch (error) {
        return "";
    }
}