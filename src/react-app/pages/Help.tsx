import { Heart, HandHeart, Users, Briefcase, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Help() {
  const helpWays = [
    {
      icon: Heart,
      title: "תרומות כספיות",
      description: "תרומה חד-פעמית או חודשית לפרויקט המרכז הרפואי",
      action: "תרמו עכשיו",
      link: "/donate",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: HandHeart,
      title: "התנדבות",
      description: "הצטרפו לצוות המתנדבים בתחומים שונים - ניהול, שיווק, יחסי ציבור",
      action: "הצטרפו כמתנדבים",
      link: "/contact",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Users,
      title: "חיבורים מקצועיים",
      description: "עזרו לנו להתחבר לרופאים, ספקים, קבלנים ואנשי מקצוע רלוונטיים",
      action: "שתפו קשרים",
      link: "/contact",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "חסויות עסקיות",
      description: "עסקים וחברות המעוניינים לחסות על הפרויקט או חלקים ממנו",
      action: "צרו קשר לחסות",
      link: "/contact",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            איך אפשר לעזור
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            יש הרבה דרכים להצטרף למאמץ החשוב הזה ולתרום לבניית עתיד רפואי טוב יותר בשומרון
          </p>
        </div>

        {/* Ways to Help */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpWays.map((way, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-full flex items-center justify-center mb-6`}>
                    <way.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{way.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{way.description}</p>
                  <Link
                    to={way.link}
                    className={`inline-block bg-gradient-to-r ${way.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    {way.action}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">פירוט דרכי העזרה</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">תרומות כספיות</h3>
                <p className="text-gray-700 mb-4">
                  כל תרומה, קטנה כגדולה, מקרבת אותנו למטרה. אפשר לתרום חד-פעמית או להתחייב לתרומה חודשית.
                  כל התרומות מנוהלות בשקיפות מלאה ומושקעות ישירות בפרויקט המרכז הרפואי.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>תרומות חד-פעמיות - בכל סכום</li>
                  <li>תרומות חודשיות - התחייבות קבועה</li>
                  <li>תרומה לזכר או לכבוד</li>
                  <li>חסות על מתקנים ספציפיים</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">התנדבות</h3>
                <p className="text-gray-700 mb-4">
                  אנחנו מחפשים מתנדבים בתחומים שונים שיעזרו לנו לקדם את הפרויקט:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>ניהול פרויקטים ולוגיסטיקה</li>
                  <li>שיווק ויחסי ציבור</li>
                  <li>גיוס תרומות וקרנות</li>
                  <li>תכנון ועיצוב</li>
                  <li>ייעוץ מקצועי בתחומים שונים</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">חיבורים מקצועיים</h3>
                <p className="text-gray-700 mb-4">
                  עזרו לנו להתחבר לאנשי המקצוע הנכונים:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>רופאים ואנשי צוות רפואי</li>
                  <li>ספקי ציוד רפואי</li>
                  <li>קבלני בנייה ואדריכלים</li>
                  <li>יועצים בתחום הבריאות</li>
                  <li>נותני שירות מקצועיים</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">חסויות עסקיות</h3>
                <p className="text-gray-700 mb-4">
                  עסקים וחברות יכולים לחסות על הפרויקט ולקבל הכרה ופרסום:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>חסות על מתקנים או חדרים ספציפיים</li>
                  <li>תרומת ציוד או שירותים</li>
                  <li>השתתפות בעלויות התפעול</li>
                  <li>מתן הנחות לקמיטי העמותה</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Help */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">מוכנים להצטרף אלינו?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              בואו נשוחח על איך אתם יכולים לתרום למאמץ החשוב הזה
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Mail className="w-5 h-5" />
                <span>צור קשר</span>
              </Link>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Phone className="w-5 h-5" />
                <span>וואטסאפ</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
