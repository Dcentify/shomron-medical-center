import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "בית" },
    { path: "/about", label: "על העמותה" },
    { path: "/project", label: "הפרויקט" },
    { path: "/help", label: "איך אפשר לעזור" },
    { path: "/team", label: "צוות והנהלה" },
    { path: "/news", label: "חדשות ועדכונים" },
    { path: "/contact", label: "צור קשר" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 space-x-reverse">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="לוגו מעיין הבריאות בשומרון"
              className="w-16 h-16 object-contain"
              loading="eager"
              width={64}
              height={64}
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">מעיין הבריאות בשומרון</h1>
              <p className="text-sm text-gray-600">עמותה רשומה: 580826667</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Donation Button */}
          <Link
            to="/donate"
            className="hidden md:block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
          >
            תרומה
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 ${
                    location.pathname === item.path ? "text-blue-600" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold text-center mt-4"
              >
                תרומה
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
