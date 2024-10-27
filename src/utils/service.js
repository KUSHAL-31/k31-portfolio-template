import axios from "axios"
import { checkPortfolioExistsOrNotUrl, getPortfolioDetailsUrl } from "./api"

export const checkPortfolioExistsOrNot = async (websiteName) => {
    try {
        const res = await axios.post(checkPortfolioExistsOrNotUrl, {
            withCredentials: true,
        },
            { websiteName: websiteName }
        );
        if (res.status === 200) {
            return { portfolioId: res.data.portfolioId, doesExists: res.data.doesExists };
        }
    } catch (error) {
        return { portfolioId: null, doesExists: false };
    }
}

export const getPortfolioDetailsById = async (portfolioId) => {
    try {
        const res = await axios.post(getPortfolioDetailsUrl, {
            withCredentials: true,
        },
            { portfolioId: portfolioId }
        );
        if (res.status === 200) {
            return res.data;
        }
    } catch (error) {
        return null;
    }
}