const express = require("express");
const router = express.Router();

const schemes = [
  {
    id: 1,
    name: "Pradhan Mantri Krishi Sinchayee Yojana",
    description: "Irrigation subsidy",
    subsidy: "55% for marginal, 45% for others",
    category: "Irrigation",
  },
  {
    id: 2,
    name: "Crop Insurance Scheme",
    description: "Protection against crop failure",
    subsidy: "Partially subsidized",
    category: "Insurance",
  },
  {
    id: 3,
    name: "Soil Health Card Scheme",
    description: "Free soil testing",
    subsidy: "100% funded",
    category: "Soil",
  },
];

// GET ALL SCHEMES
router.get("/", (req, res) => {
  res.json({ message: "Schemes retrieved", count: schemes.length, schemes });
});

// GET BY ID
router.get("/:id", (req, res) => {
  const scheme = schemes.find((s) => s.id === parseInt(req.params.id));
  if (!scheme) return res.status(404).json({ message: "Scheme not found" });
  res.json({ message: "Scheme retrieved", scheme });
});

module.exports = router;
