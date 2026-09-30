import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RoomsPage from "./pages/RoomsPage";
import ServicesPage from "./pages/ServicesPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import GalleryPage from "./pages/GalleryPage";
import BookingPage from "./pages/BookingPage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/rooms" element={<RoomsPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}
        />

        <Route path="/facilities" element={<FacilitiesPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/booking" element={<BookingPage />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;