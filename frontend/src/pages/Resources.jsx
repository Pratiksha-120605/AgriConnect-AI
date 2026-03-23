function Resources() {
  const resources = [
    {
      name: "Tractor Rental",
      location: "Pune",
      contact: "9876543210",
    },
    {
      name: "Farm Labor",
      location: "Nashik",
      contact: "9123456780",
    },
    {
      name: "Harvesting Machine",
      location: "Satara",
      contact: "9988776655",
    },
    {
      name: "Irrigation Equipment",
      location: "Kolhapur",
      contact: "9090909090",
    },
  ];

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Resource Hub 🚜
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>

            <p className="text-gray-600">📍 {item.location}</p>

            <p className="text-gray-600">📞 {item.contact}</p>

            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
