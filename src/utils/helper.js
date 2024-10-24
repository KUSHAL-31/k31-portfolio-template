export const getPortfolioNameFromUrl = () => {
    try {
        const pathname = window.location.pathname;
        const portfolioName = pathname.split('/')[1];
        return portfolioName;
    } catch (error) {
        return "";
    }
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}