const express = require("express");
const axios = require("axios");
const { protect } = require("../middleware/auth");

const router = express.Router();

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";

// DISEASE DETECTION
router.post("/diagnose-disease", protect, async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64)
      return res.status(400).json({ message: "Image required" });
    if (!CLAUDE_API_KEY)
      return res.status(500).json({ message: "Claude API not configured" });

    const response = await axios.post(
      CLAUDE_API_URL,
      {
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: "image/jpeg",
                  data: imageBase64,
                },
              },
              {
                type: "text",
                text: `Analyze this crop image and provide JSON:
{
  "disease": "name or 'No disease'",
  "severity": "mild/moderate/severe/none",
  "symptoms": "description",
  "treatment": "recommendations",
  "prevention": "tips"
}`,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "x-api-key": CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
        },
      },
    );

    const diagnosis = JSON.parse(response.data.content[0].text);
    res.json({
      message: "Disease diagnosed",
      diagnosis,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Claude API error:", error.message);
    res
      .status(500)
      .json({ message: "Error diagnosing disease", error: error.message });
  }
});

// CHATBOT
router.post("/chat", protect, async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) return res.status(400).json({ message: "Message required" });
    if (!CLAUDE_API_KEY)
      return res.status(500).json({ message: "Claude API not configured" });

    const messages = [
      ...conversationHistory,
      { role: "user", content: message },
    ];

    const response = await axios.post(
      CLAUDE_API_URL,
      {
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system: `You are an expert agricultural advisor. Help farmers with:
- Crop cultivation
- Soil management
- Pest control
- Government schemes
Provide practical, concise advice in simple language.`,
        messages,
      },
      {
        headers: {
          "x-api-key": CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
        },
      },
    );

    const assistantMessage = response.data.content[0].text;
    res.json({
      message: assistantMessage,
      conversationHistory: [
        ...conversationHistory,
        { role: "user", content: message },
        { role: "assistant", content: assistantMessage },
      ],
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Claude API error:", error.message);
    res.status(500).json({ message: "Error processing message" });
  }
});

module.exports = router;
