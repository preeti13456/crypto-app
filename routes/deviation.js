const express = require("express");
const Crypto = require("../models/Crypto");
const { std } = require("mathjs");
const router = express.Router();

router.get("/", async(req, res) => {
    const { coin } = req.query;
    const records = await Crypto.find({ coin })
        .sort({ timestamp: -1 })
        .limit(100);
    const prices = records.map((record) => record.price);
    const deviation = std(prices);
    res.json({ deviation });
});

module.exports = router;