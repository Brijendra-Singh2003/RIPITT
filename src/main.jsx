import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "./global.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import { BiLoaderAlt } from "react-icons/bi";
import NextTopLoader from "nextjs-toploader";

const App = lazy(() => import("./App.jsx"));
const AboutUs = lazy(() => import("./pages/Abut.jsx"));
const ContactUs = lazy(() => import("./pages/Contact.jsx"));
const ResearchAndDevelopmentPage = lazy(() => import("./pages/RnDPage.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogById = lazy(() => import("./pages/Blog.Id.jsx"));

const HomeLayout = (
  <>
    <Navbar />
    <main className="min-h-screen">
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
      <NextTopLoader />
      <Routes>
        <Route path="/" element={HomeLayout}>
          <Route index element={<App />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Outlet />}>
            <Route index element={<Blog />} />
            <Route path="/blog/:id" element={<BlogById />} />
          </Route>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/rnd" element={<ResearchAndDevelopmentPage />} />
          <Route path="/:rest" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
