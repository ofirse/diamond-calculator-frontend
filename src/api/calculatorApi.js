import axios from "axios";

export const getAllOptions = async () => {
    try {
        return await Promise.all([
            axios.get("http://localhost:3000/calculator/cut-options"),
            axios.get("http://localhost:3000/calculator/carat-weight-options"),
            axios.get("http://localhost:3000/calculator/color-options"),
            axios.get("http://localhost:3000/calculator/clarity-options"),
        ]);
    } catch (error) {
        console.error(error);
    }
};

export const getDiamondPrice = async (diamond) => {
    try {
        const response = await axios.put("http://localhost:3000/calculator/calcPrice", diamond);

        return response.data;
    } catch (error) {
        console.error(error);
    }
};
