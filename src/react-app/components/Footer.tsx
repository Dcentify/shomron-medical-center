import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <img 
                src="https://mocha-cdn.com/019a29a3-2f05-72fd-a4d3-fea788052ed4/shomron-medical-logo.png"
                alt="לוגו מעיין הבריאות בשומרון"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold">מעיין הבריאות בשומרון</h3>
            </div>
            <p className="text-gray-400 mb-4">
              עמותה למען רפואה איכותית ונגישה לכל תושבי השומרון
            </p>
            <p className="text-sm text-gray-500">
              עמותה רשומה: 580826667
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">פרטי יצירת קשר</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">כיסופים 24, קרני שומרון</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">050-1234567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@shomron-medical.org</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                על העמותה
              </Link>
              <Link to="/project" className="block text-gray-400 hover:text-white transition-colors">
                הפרויקט
              </Link>
              <Link to="/donate" className="block text-gray-400 hover:text-white transition-colors">
                תרומה
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                צור קשר
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                מדיניות פרטיות
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">
                תנאי שימוש
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 עמותת מעיין הבריאות בשומרון. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
