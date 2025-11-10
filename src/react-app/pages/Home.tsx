import { Heart, Users, Building, Stethoscope, ArrowLeft, Phone, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface DonationStats {
  total_donations: number;
  total_amount: number;
}

export default function Home() {
  const [stats, setStats] = useState<DonationStats>({ total_donations: 0, total_amount: 0 });

  useEffect(() => {
    fetch('/api/donations/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <img 
          src="https://mocha-cdn.com/019a29a3-2f05-72fd-a4d3-fea788052ed4/medical-center-hero.jpg"
          alt="מרכז רפואי מודרני"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-green-600/80 z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="text-center">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-100 mb-2">
                מעיין הבריאות בשומרון
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                מרכז רפואי 24/7 בשומרון
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              טיפול רפואי קהילתי בקרני שומרון - זמין תמיד, גם בלילה, גם בשבת
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                תרמו עכשיו
              </Link>
              <Link
                to="/project"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <span>למידע על הפרויקט</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Story Section - Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-l from-red-600 to-orange-600 px-8 py-6">
              <div className="flex items-center justify-center space-x-3 space-x-reverse text-white">
                <AlertCircle className="w-8 h-8" />
                <h2 className="text-2xl md:text-3xl font-bold">למה אנחנו כאן? למה זה דחוף?</h2>
              </div>
            </div>
            
            <div className="px-8 md:px-12 py-10 space-y-6 text-gray-800 text-lg leading-relaxed">
              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="font-semibold text-xl text-red-600">השעה 02:15 לפנות בוקר.</p>
              </div>
              
              <p>
                הילד שלכם צורח מכאב, אוחז באוזן ובוכה בלי אוויר. הלב שלכם נחמץ.<br />
                אתם מנסים להרגיע, מחפשים נואשות מענה רפואי – ואין מי שיענה. לא רופא. לא מוקד. לא מיון קהילתי.
              </p>
              
              <p>
                קופות החולים סגורות. הכונן היחיד שזמין אומר את המשפט המוכר מדי:<br />
                <em className="text-gray-600">"אין מה לעשות... סעו למיון בכפר סבא".</em>
              </p>
              
              <div className="bg-red-50 border-r-4 border-red-600 p-6 rounded-lg">
                <p className="font-semibold text-red-900 mb-3">ואז מגיע הרגע הקשה באמת:</p>
                <p>
                  או שמעירים את כל הבית למסע לילי, או שמשאירים ילדים ישנים לבד בחוסר אונים. הכל רק כדי להגיע למבט אחד של רופא.
                </p>
                <p className="mt-4">
                  כך, <strong>בשביל טיפול של חמש דקות</strong>, משפחה שלמה יוצאת למסע מתיש של 40 דקות לכל כיוון.
                </p>
              </div>
              
              <div className="text-center py-6">
                <p className="text-3xl font-bold text-blue-700 mb-2">אבל אנחנו אומרים: די!</p>
                <p className="text-xl text-gray-700">די למצב ה"מובן מאליו" הזה.</p>
                <p className="text-lg text-gray-600">
                  די למציאות שבה תושב השומרון צריך לנסוע שעה ארוכה באמצע הלילה בשביל טיפול רפואי בסיסי.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 p-8 rounded-2xl">
                <p className="text-2xl font-bold text-center text-blue-900 mb-4">
                  הפתרון שלנו: מרכז רפואי 24/7 בשומרון
                </p>
                <p className="text-xl text-center text-blue-800 mb-6">
                  אנחנו מקימים כאן בקרני שומרון את "מעיין הבריאות" – המרכז הרפואי הקהילתי הראשון שפועל 24/7.
                </p>
                <div className="space-y-3 mt-6">
                  <p className="text-lg">
                    מרכז רפואי שיהיה שם בשבילכם גם בלילה, גם בשבת, גם כשכל המרפאות סגורות.
                  </p>
                  <p className="text-lg">
                    עם צוות מקצועי ומסור שמכיר את הקהילה שלנו, את המשפחות ואת המציאות המקומית.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 pr-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2 space-x-reverse">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>כשיש חום גבוה – יהיה לאן לפנות.</span>
                  </li>
                  <li className="flex items-start space-x-2 space-x-reverse">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>כשיש חתך עמוק או התקף לחץ דם – לא תצטרכו לנסוע בכבישים חשוכים ומפותלים.</span>
                  </li>
                  <li className="flex items-start space-x-2 space-x-reverse">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span>כשיש לחץ – יהיה מענה זמין וקרוב.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-xl font-semibold text-center text-blue-900">
                זה המקום שיחזיר את הביטחון הרפואי לשומרון.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl mt-8">
                <p className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2 space-x-reverse">
                  <Heart className="w-8 h-8" />
                  <span>איך אתם נכנסים לתמונה? 💙</span>
                </p>
                <p className="text-lg mb-3">
                  העמותה שלנו, <strong>"מעיין הבריאות בשומרון (ע״ר)"</strong>, כבר הוקמה. יש צוות, יש חזון, ויש מקום פיזי.
                </p>
                <p className="text-lg mb-3">
                  עכשיו, הגיע הזמן לבנות את זה יחד.
                </p>
                <p className="text-lg mb-4">
                  אנחנו יוצאים לקראת גיוס הקהילתי הראשון מסוגו בארץ.
                </p>
                <p className="text-lg">
                  כל תרומה – גדולה כקטנה – היא אבן יסוד במרכז הרפואי שכולנו נזדקק לו.<br />
                  זו לא "עוד תרומה". זו השקעה ישירה בחיים, במשפחה ובביטחון של הקהילה שלנו.
                </p>
              </div>
              
              <div className="text-center space-y-4 pt-6">
                <p className="text-2xl font-bold text-gray-900">
                  הצטרפו אלינו עכשיו. הפכו את החזון למציאות.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link
                    to="/donate"
                    className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Heart className="w-6 h-6" />
                    <span>הצטרפו אלינו - תרמו עכשיว</span>
                  </Link>
                </div>
                
                <div className="pt-6 border-t border-gray-200 mt-8">
                  <p className="text-lg font-semibold text-gray-800">
                    נשיא העמותה, ד"ר יעקב זליגמן.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ההישגים שלנו עד כה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">350</div>
              <div className="text-gray-600">מ״ר שטח המרכז</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.total_donations}</div>
              <div className="text-gray-600">תומכים</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₪{stats.total_amount.toLocaleString()}</div>
              <div className="text-gray-600">נתרם עד כה</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">תושבים ייהנו</div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            הצטרפו אלינו למאמץ החשוב הזה
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            כל תרומה, קטנה כגדולה, מקרבת אותנו למטרה. בואו נבנה יחד עתיד רפואי טוב יותר לכולנו.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              תרמו עכשיו
            </Link>
            <Link
              to="/help"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              דרכים נוספות לעזור
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
  );
}
