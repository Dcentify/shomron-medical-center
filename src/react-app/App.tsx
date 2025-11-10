import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ProjectPage from "@/react-app/pages/Project";
import HelpPage from "@/react-app/pages/Help";
import TeamPage from "@/react-app/pages/Team";
import NewsPage from "@/react-app/pages/News";
import ContactPage from "@/react-app/pages/Contact";
import DonatePage from "@/react-app/pages/Donate";
import PrivacyPage from "@/react-app/pages/Privacy";
import TermsPage from "@/react-app/pages/Terms";

export default function App() {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
