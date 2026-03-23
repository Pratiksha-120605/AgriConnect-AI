import { useState } from "react";

function Disease() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const solutions = {
    "hip, rose hip, rosehip":
      "Check for fungal infection, prune affected areas, apply fungicide",
    "apple scab": "Remove infected leaves, apply appropriate fungicide",
    "tomato leaf spot": "Avoid overhead watering, use copper-based spray",
    "indigo bunting, indigo finch, indigo bird, Passerina cyanea":
      "No plant disease detected — likely a bird or non-plant object",
  };

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
    setResult(null);
    setError(null);
  };

  const handleDetect = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        // Add solution mapping here
        const solution = solutions[data.label] || "No solution found yet";

        setResult({
          ...data,
          solution,
        });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
      <div className="w-full max-w-md">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-green-800 mb-6 text-center">
          🌿 Agri AI Detector
        </h1>

        {/* Upload Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl text-center border">
          <input
            type="file"
            onChange={handleImage}
            className="mb-4 w-full text-sm"
          />

          {image && (
            <img
              src={image}
              alt="preview"
              className="w-full h-52 object-cover rounded-xl mb-4 border"
            />
          )}

          <button
            onClick={handleDetect}
            disabled={!image || loading}
            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition-all duration-300 disabled:bg-gray-400"
          >
            {loading ? "🔄 Detecting..." : "🔍 Detect Disease"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg text-center">
            ⚠️ {error}
          </div>
        )}

        {/* Result Card */}
        {result && (
          <div className="mt-6 bg-white p-6 rounded-3xl shadow-xl border">
            <h2 className="text-2xl font-bold text-green-700 mb-3 text-center">
              🌱 Analysis Result
            </h2>

            <p className="text-lg mb-2">
              <b>🦠 Disease:</b> {result.label}
            </p>

            <p className="text-lg mb-2">
              <b>📊 Confidence:</b> {result.confidence}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: result.confidence }}
              ></div>
            </div>

            <p className="text-gray-700">
              <b>💡 Solution:</b> {result.solution}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Disease;
