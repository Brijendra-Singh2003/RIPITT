import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "./global.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import { BiLoaderAlt } from "react-icons/bi";
import ResearchAndDevelopmentPage from "./pages/RnDPage.jsx";

const App =  lazy(() => import("./App.jsx"));
const AboutUs =  lazy(() => import("./pages/Abut.jsx"));
const ContactUs =  lazy(() => import("./pages/Contact.jsx"));

const HomeLayout = (
  <>
    <Navbar />
    <main className="min-h-screen w-screen min-w-80 overflow-x-hidden">
      <Suspense
        fallback={
          <BiLoaderAlt size={64} className="animate-spin mx-auto mt-24" />
        }
      >
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomeLayout}>
          <Route index element={<App />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="rnd" element={<ResearchAndDevelopmentPage />} />
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
