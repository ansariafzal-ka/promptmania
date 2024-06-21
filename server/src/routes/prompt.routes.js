const express = require("express");
const router = express();

const Prompt = require("../models/prompt.models");

router.post("/", async (req, res) => {
  try {
    const { name, title, prompt } = req.body;
    await Prompt.create({
      name,
      title,
      prompt,
    });

    res.status(201).json({ msg: "prompt saved." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const prompts = await Prompt.find().sort({ createdAt: -1 });
    res.status(200).json({ prompts: prompts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
