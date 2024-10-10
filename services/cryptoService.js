const axios = require("axios");

const fetchCryptoData = async(coin) => {
    const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );
    return response.data[coin];
};

module.exports = fetchCryptoData;