import { Heart, Target, Eye, Users, Shield, FileText } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            על העמותה שלנו
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            עמותה ללא מטרות רווח המוקדשת להקמת מרכז רפואי מתקדם בשומרון
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center ml-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">הסיפור שלנו</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              העמותה שלנו הוקמה מתוך מטרה ברורה ודחופה: להביא רפואה איכותית ונגישה לכל תושבי השומרון. 
              במשך שנים רבות, תושבי האזור נאלצו לנסוע מרחקים ארוכים כדי לקבל טיפול רפואי איכותי, 
              להמתין בתורים ארוכים, ולפעמים אף לוותר על טיפול חיוני.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              אנו מאמינים שכל אדם זכאי לקבל טיפול רפואי איכותי בקרבת מקום מגוריו. 
              החזון שלנו הוא להקים מרכז רפואי מודרני ומתקדם שיספק מגוון רחב של שירותים רפואיים, 
              החל מרפואה כללית ועד לטיפולים מתמחים.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              מעבר למרכז הרפואי הראשי, אנחנו רואים חזון רחב יותר של הקמת מוקדי רפואה נוספים 
              ברחבי השומרון, כדי ליצור רשת רפואית מקיפה שתשרת את כל תושבי האזור.
            </p>
          </div>
        </section>

        {/* Goals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">המטרות שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">רפואה איכותית</h3>
              <p className="text-gray-600">
                הקמת מרכז רפואי מתקדם עם ציוד חדיש וצוות מקצועי מוביל
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">נגישות</h3>
              <p className="text-gray-600">
                רפואה זמינה ונגישה לכל תושבי השומרון ללא זמני המתנה ארוכים
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">קהילה</h3>
              <p className="text-gray-600">
                חיזוק הקהילה המקומית וקידום בריאות הציבור באזור
              </p>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center ml-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">שקיפות ואמינות</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">פרטי העמותה</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="text-gray-700">מספר עמותה: 580826667</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="text-gray-700">כתובת: כיסופים 24, קרני שומרון</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="text-gray-700">סטטוס: עמותה רשומה כחוק</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">המחויבות שלנו</h3>
                <p className="text-gray-700 mb-4">
                  אנו מתחייבים לשקיפות מלאה בכל פעילות העמותה, לרבות פרסום דוחות כספיים 
                  והתקדמות הפרויקט באופן שוטף.
                </p>
                <p className="text-gray-700">
                  כל תרומה מנוהלת בקפידה ומושקעת ישירות במטרות העמותה.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">החזון שלנו לעתיד</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              "לראות את השומרון כאזור עם רפואה מתקדמת ונגישה לכולם, 
              שבו כל תושב יוכל לקבל את הטיפול הרפואי הטוב ביותר 
              בקרבת מקום מגוריו, ללא פשרות על איכות או זמינות."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
