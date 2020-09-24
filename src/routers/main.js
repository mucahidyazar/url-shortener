const express = require("express");
const ShortUrl = require("../models/shortUrl");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allData = await ShortUrl.find();
    res.render("index", { shortUrls: allData });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const rec = await ShortUrl.findOne({ short: shortId });
    if (!rec) {
      res.status(404).send();
    }
    rec.clicks++;
    await rec.save();

    res.redirect(rec.full);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/short", async (req, res) => {
  try {
    const fullUrl = req.body.fullUrl;
    console.log("URL requested: ", fullUrl);

    const record = new ShortUrl({
      full: fullUrl,
    });
    await record.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
