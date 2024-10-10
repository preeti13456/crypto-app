const cron = require("node-cron");
const Crypto = require("../models/Crypto");
const fetchCryptoData = require("../services/cryptoService");

const coins = ["bitcoin", "matic-network", "ethereum"];

const scheduleFetch = () => {
    cron.schedule("0 */2 * * *", async() => {
        for (const coin of coins) {
            const data = await fetchCryptoData(coin);
            const cryptoData = new Crypto({
                coin: coin,
                price: data.usd,
                marketCap: data.usd_market_cap,
                change24h: data.usd_24h_change,
            });
            await cryptoData.save();
        }
    });
};

module.exports = scheduleFetch;