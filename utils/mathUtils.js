const { std } = require("mathjs");

const calculateStandardDeviation = (prices) => {
    return std(prices);
};

module.exports = { calculateStandardDeviation };