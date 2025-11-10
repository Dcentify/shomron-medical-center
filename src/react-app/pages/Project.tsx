import { Building, Calendar, CheckCircle, Circle, MapPin, Stethoscope, Users, Zap } from 'lucide-react';

export default function Project() {
  const phases = [
    {
      id: 1,
      title: "שלב א': תכנון והיתרים",
      description: "תכנון אדריכלי מפורט, קבלת היתרי בנייה ואישורי משרד הבריאות",
      status: "completed",
      duration: "6 חודשים"
    },
    {
      id: 2,
      title: "שלב ב': בנייה ותשתיות",
      description: "בניית המבנה, התקנת תשתיות חשמל, מים וביוב",
      status: "in-progress",
      duration: "12 חודשים"
    },
    {
      id: 3,
      title: "שלב ג': ציוד רפואי",
      description: "רכישה והתקנה של ציוד רפואי מתקדם ומערכות מידע",
      status: "pending",
      duration: "4 חודשים"
    },
    {
      id: 4,
      title: "שלב ד': גיוס צוות",
      description: "גיוס רופאים, אחיות וצוות רפואי מקצועי",
      status: "pending",
      duration: "3 חודשים"
    },
    {
      id: 5,
      title: "שלב ה': פתיחה",
      description: "בדיקות סופיות, קבלת אישורים ופתיחה לקהל",
      status: "pending",
      duration: "2 חודשים"
    }
  ];

  const facilities = [
    {
      name: "חדרי בדיקה כלליים",
      count: 8,
      icon: Stethoscope,
      description: "חדרי בדיקה מודרניים לרפואה כללית"
    },
    {
      name: "חדרי התמחויות",
      count: 6,
      icon: Building,
      description: "חדרים מתמחים לקרדיולוגיה, אורתופדיה ועוד"
    },
    {
      name: "חדר רנטגן מתקדם",
      count: 1,
      icon: Zap,
      description: "ציוד הדמייה דיגיטלי חדיש"
    },
    {
      name: "מעבדה",
      count: 1,
      icon: Circle,
      description: "מעבדה מקומית לבדיקות דם וביולוגיות"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            המרכז הרפואי - הפרויקט שלנו
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מרכז רפואי מודרני בשטח של 350 מ״ר שיספק שירותים רפואיים מקיפים לכל תושבי השומרון
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">סקירת הפרויקט</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">מה יוקם במרכז?</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  המרכז הרפואי יכלול מגוון רחב של שירותים רפואיים: רפואה כללית, התמחויות שונות, 
                  שירותי אבחון מתקדמים, מעבדה ומרפאת חירום. המטרה היא לספק מענה רפואי מקיף 
                  ואיכותי לכל משפחות השומרון.
                </p>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 ml-3" />
                  <span className="text-gray-700">מיקום: לב השומרון, נגיש לכל תושבי האזור</span>
                </div>
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-blue-600 ml-3" />
                  <span className="text-gray-700">שטח: 350 מ״ר נטו</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 ml-3" />
                  <span className="text-gray-700">יעיל לטיפול ב-10,000+ תושבים</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="תכנון מרכז רפואי"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">350</div>
                  <div className="text-sm text-gray-600">מ״ר שטח</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">המתקנים במרכז</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-3">{facility.count}</div>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">תוכנית השלבים</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-start">
                <div className="flex-shrink-0 ml-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    phase.status === 'completed' 
                      ? 'bg-green-100 border-2 border-green-500' 
                      : phase.status === 'in-progress'
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-gray-100 border-2 border-gray-300'
                  }`}>
                    {phase.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <span className={`text-sm font-semibold ${
                        phase.status === 'in-progress' ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        {phase.id}
                      </span>
                    )}
                  </div>
                  {index < phases.length - 1 && (
                    <div className={`w-0.5 h-16 mx-auto mt-4 ${
                      phase.status === 'completed' ? 'bg-green-200' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
                <div className="flex-grow">
                  <div className={`bg-white rounded-lg shadow-lg p-6 ${
                    phase.status === 'in-progress' ? 'border-r-4 border-blue-500' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-gray-500 ml-2" />
                        <span className="text-sm text-gray-500">{phase.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{phase.description}</p>
                    <div className="mt-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        phase.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : phase.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {phase.status === 'completed' && 'הושלם'}
                        {phase.status === 'in-progress' && 'בתהליך'}
                        {phase.status === 'pending' && 'מתוכנן'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">עזרו לנו להגשים את החזון</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              כל תרומה מקרבת אותנו למטרה. בואו נבנה יחד עתיד רפואי טוב יותר לכל תושבי השומרון.
            </p>
            <a
              href="/donate"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              תרמו עכשיו
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
