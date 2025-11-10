import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectPage from "./pages/Project";
import HelpPage from "./pages/Help";
import TeamPage from "./pages/Team";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
import DonatePage from "./pages/Donate";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Catch-all: always open Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
