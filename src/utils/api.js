console.log(process.env.REACT_APP_HOSTED_URL);

export const checkPortfolioExistsOrNotUrl = `${process.env.REACT_APP_HOSTED_URL}/api/v1/user/portfolio/check`;

export const getPortfolioDetailsUrl = `${process.env.REACT_APP_HOSTED_URL}/api/v1/user/portfolio/details`;