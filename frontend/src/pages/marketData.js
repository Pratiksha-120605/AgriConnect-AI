// Option 1: Named export
export const marketData = [
  {
    state: "Maharashtra",
    markets: [
      {
        name: "Pune",
        crops: [
          {
            name: "Tomato",
            prices: [
              { date: "2026-03-14", price: 25 },
              { date: "2026-03-15", price: 27 },
              { date: "2026-03-16", price: 26 },
            ],
          },
          {
            name: "Onion",
            prices: [
              { date: "2026-03-14", price: 35 },
              { date: "2026-03-15", price: 32 },
              { date: "2026-03-16", price: 33 },
            ],
          },
        ],
      },
      {
        name: "Nagpur",
        crops: [
          {
            name: "Wheat",
            prices: [
              { date: "2026-03-14", price: 2100 },
              { date: "2026-03-15", price: 2150 },
              { date: "2026-03-16", price: 2125 },
            ],
          },
        ],
      },
    ],
  },
  {
    state: "Karnataka",
    markets: [
      {
        name: "Bengaluru",
        crops: [
          {
            name: "Tomato",
            prices: [
              { date: "2026-03-14", price: 28 },
              { date: "2026-03-15", price: 30 },
              { date: "2026-03-16", price: 29 },
            ],
          },
        ],
      },
    ],
  },
];
