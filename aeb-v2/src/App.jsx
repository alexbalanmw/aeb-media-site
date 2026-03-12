import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SocialMedia from "./pages/services/SocialMedia";
import GoogleAds from "./pages/services/GoogleAds";
import MetaAds from "./pages/services/MetaAds";
import AIAutomations from "./pages/services/AIAutomations";
import Contact from "./pages/Contact";
import BlogList from "./pages/blog/BlogList";
import BlogPost from "./pages/blog/BlogPost";
import "./global.css";

export default function App() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/services/ai-automations" element={<AIAutomations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
