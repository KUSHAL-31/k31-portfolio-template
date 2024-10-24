export const getPortfolioNameFromUrl = () => {
    try {
        const pathname = window.location.pathname;
        const portfolioName = pathname.split('/')[1];
        return portfolioName;
    } catch (error) {
        return "";
    }
}

export const changeFavicon = (url) => {
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

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}