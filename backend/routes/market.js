const express = require("express");
const router = express.Router();

const mockPrices = {
  Wheat: [
    { price: 2000 },
    { price: 2050 },
    { price: 2100 },
    { price: 2080 },
    { price: 2120 },
    { price: 2150 },
    { price: 2180 },
  ],
  Sugarcane: [
    { price: 3500 },
    { price: 3550 },
    { price: 3600 },
    { price: 3650 },
    { price: 3700 },
    { price: 3750 },
    { price: 3800 },
  ],
  Cotton: [
    { price: 5500 },
    { price: 5600 },
    { price: 5650 },
    { price: 5700 },
    { price: 5800 },
    { price: 5900 },
    { price: 6000 },
  ],
  Chana: [
    { price: 4000 },
    { price: 4100 },
    { price: 4200 },
    { price: 4250 },
    { price: 4350 },
    { price: 4400 },
    { price: 4500 },
  ],
};

// GET PRICES
router.get("/prices/:cropName", (req, res) => {
  try {
    const { cropName } = req.params;
    const prices = mockPrices[cropName];

    if (!prices) {
      return res.status(404).json({
        message: `No data for crop: ${cropName}`,
        availableCrops: Object.keys(mockPrices),
      });
    }

    const minPrice = Math.min(...prices.map((p) => p.price));
    const maxPrice = Math.max(...prices.map((p) => p.price));
    const avgPrice = Math.round(
      prices.reduce((sum, p) => sum + p.price, 0) / prices.length,
    );
    const currentPrice = prices[prices.length - 1].price;

    res.json({
      cropName,
      currentPrice,
      minPrice,
      maxPrice,
      avgPrice,
      priceHistory: prices,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET CROPS
router.get("/crops", (req, res) => {
  res.json({ crops: Object.keys(mockPrices) });
});

module.exports = router;
