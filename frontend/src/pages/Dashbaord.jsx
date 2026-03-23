import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en"); // default English

  const texts = {
    cropHealth: "Crop Health",
    marketPrices: "Market Prices",
    schemes: "Government Schemes",
    resources: "Resources",
    dashboard: "Dashboard",
    logout: "Logout",
  };

  const [translations, setTranslations] = useState({ ...texts });

  // Translate all texts using backend
  const handleLanguageChange = async (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);

    if (selectedLang === "en") {
      setTranslations(texts);
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          texts: Object.values(texts), // send all texts
          target: selectedLang,
        }),
      });

      const data = await res.json();

      // data.translations should be an array in the same order
      const newTranslations = {};
      Object.keys(texts).forEach((key, idx) => {
        newTranslations[key] = data.translations[idx] || texts[key];
      });

      setTranslations(newTranslations);
    } catch (err) {
      console.error("Translation error:", err);
      setTranslations(texts); // fallback to English
    }
  };

  return (
    <div className="flex h-screen bg-green-50">
      {/* SIDEBAR */}
      <div className="w-64 bg-green-700 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-4">AgriConnect 🌱</h2>

        {/* Language Selector */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className="mb-6 p-2 rounded text-black w-full"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
          {/* Add more languages as needed */}
        </select>

        <ul className="space-y-4">
          <li
            onClick={() => navigate("/disease")}
            className="hover:bg-green-600 p-2 rounded cursor-pointer"
          >
            {translations.cropHealth}
          </li>
          <li
            onClick={() => navigate("/schemes")}
            className="hover:bg-green-600 p-2 rounded cursor-pointer"
          >
            {translations.schemes}
          </li>
          <li
            onClick={() => navigate("/market")}
            className="hover:bg-green-600 p-2 rounded cursor-pointer"
          >
            {translations.marketPrices}
          </li>
          <li
            onClick={() => navigate("/resources")}
            className="hover:bg-green-600 p-2 rounded cursor-pointer"
          >
            {translations.resources}
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* NAVBAR */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-700">
            {translations.dashboard} 🌾
          </h1>

          <button
            onClick={() => navigate("/")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            {translations.logout}
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Crop Health */}
          <div
            onClick={() => navigate("/disease")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">
              {translations.cropHealth}
            </h2>
            <p className="text-gray-600">Detect crop diseases using AI</p>
          </div>

          {/* Market */}
          <div
            onClick={() => navigate("/market")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">
              {translations.marketPrices}
            </h2>
            <p className="text-gray-600">View latest crop prices</p>
          </div>

          {/* Schemes */}
          <div
            onClick={() => navigate("/schemes")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">
              {translations.schemes}
            </h2>
            <p className="text-gray-600">Explore government schemes</p>
          </div>

          {/* Resources */}
          <div
            onClick={() => navigate("/resources")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">
              {translations.resources}
            </h2>
            <p className="text-gray-600">Find labor & machinery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
