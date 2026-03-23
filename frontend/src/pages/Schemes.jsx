import { useState } from "react";
import { schemesData } from "./schemesData";

function Schemes() {
  const [selectedScheme, setSelectedScheme] = useState(null);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Government Schemes 🏛️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemesData.map((scheme, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{scheme.name}</h2>

            <p className="text-gray-600 mb-2">{scheme.shortDescription}</p>

            <button
              onClick={() => setSelectedScheme(scheme)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
     {/* Detail Modal */}
{selectedScheme && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={() => setSelectedScheme(null)} // clicking outside closes
  >
    <div
      className="bg-white rounded-xl p-6 max-w-lg w-full relative"
      onClick={(e) => e.stopPropagation()} // prevent modal click from closing
    >
      {/* Top-right close button */}
      <button
        onClick={() => setSelectedScheme(null)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold mb-3">{selectedScheme.name}</h2>

      <p className="mb-2">
        <b>Short Description:</b> {selectedScheme.shortDescription}
      </p>

      <p className="mb-2">
        <b>Key Benefits:</b> {selectedScheme.keyBenefits}
      </p>

      <p className="mb-2">
        <b>Eligibility:</b> {selectedScheme.eligibility}
      </p>

      {selectedScheme.requiredDocs && (
        <div className="mb-2">
          <b>Required Documents:</b>
          <ul className="list-disc ml-5">
            {selectedScheme.requiredDocs.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedScheme.applyLink && (
        <p className="mb-2">
          <b>Apply Link:</b>{" "}
          <a
            href={selectedScheme.applyLink}
            target="_blank"
            rel="noreferrer"
            className="text-green-600 hover:underline"
          >
            Apply Here
          </a>
        </p>
      )}

      {selectedScheme.ytLink && (
        <p className="mb-2">
          <b>Video Guide:</b>{" "}
          <a
            href={selectedScheme.ytLink}
            target="_blank"
            rel="noreferrer"
            className="text-green-600 hover:underline"
          >
            Watch on YouTube
          </a>
        </p>
      )}

      {/* Prominent bottom close button */}
      <div className="mt-4 text-center">
        <button
          onClick={() => setSelectedScheme(null)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default Schemes;
