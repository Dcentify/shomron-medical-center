import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { CreateContactMessage } from '@/shared/types';

export default function Contact() {
  const [formData, setFormData] = useState<CreateContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            צור קשר
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            יש לכם שאלות, רעיונות או רצון להצטרף למאמץ? אנחנו כאן ונשמח לשמוע מכם
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">שלחו לנו הודעה</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                <span className="text-green-700">ההודעה נשלחה בהצלחה! ניצור קשר בהקדם.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                <span className="text-red-700">שגיאה בשליחת ההודעה. אנא נסו שוב.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="הכנס את שמך המלא"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  אימייל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                  placeholder="הכנס את מספר הטלפון שלך"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  הודעה *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right resize-none"
                  placeholder="כתוב את ההודעה שלך כאן..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>שלח הודעה</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">פרטי התקשרות</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">כתובת</h3>
                    <p className="text-gray-600">כיסופים 24, קרני שומרון</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">טלפון</h3>
                    <a href="tel:050-1234567" className="text-gray-600 hover:text-blue-600 transition-colors">
                      050-1234567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">אימייל</h3>
                    <a href="mailto:info@shomron-medical.org" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@shomron-medical.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center ml-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">וואטסאפ</h3>
              </div>
              <p className="mb-6">לתגובה מהירה ונוחות מרבית, צרו קשר איתנו דרך וואטסאפ</p>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                פתח וואטסאפ
              </a>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">שעות פעילות</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">ראשון - חמישי</span>
                  <span className="text-gray-600">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">ששי</span>
                  <span className="text-gray-600">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">שבת</span>
                  <span className="text-gray-600">סגור</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * בחירום ניתן להשאיר הודעה ונחזור אליכם בהקדם
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
