import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* LEFT SIDE (Branding) */}
      <div className="hidden md:flex w-1/2 bg-green-600 text-white flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">AgriConnect 🌱</h1>
        <p className="text-lg text-center">
          Empowering farmers with smart decisions, better crops, and fair
          markets.
        </p>
      </div>

      {/* RIGHT SIDE (Login Form) */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-green-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-lg w-80"
        >
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
            Farmer Login 🌾
          </h2>

          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-gray-500">
            Demo login (no authentication)
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
