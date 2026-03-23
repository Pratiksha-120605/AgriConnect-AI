import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashbaord";
import Disease from "./pages/Disease";
import Schemes from "./pages/Schemes";
import Market from "./pages/Market";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/market" element={<Market />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
