import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    email: 'info@aiuag.org',
    phone: '+249 114210853',
    address: 'جامعة إفريقيا العالمية، حي جبرة، الخرطوم، السودان'
  });

  useEffect(() => {
    const saved = localStorage.getItem('site_content');
    if(saved) {
      const parsed = JSON.parse(saved);
      if(parsed.contact) setContactInfo(parsed.contact);
    }
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">تواصل معنا</h1>
          <p className="text-xl text-gray-600">يسعدنا دائماً سماع مقترحاتكم واستفساراتكم.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">أرسل لنا رسالة</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم بالكامل</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-900"></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors">
                إرسال الآن
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-blue-900 mb-2">المقر الرئيسي</h3>
                <p className="text-sm text-gray-500">{contactInfo.address}</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-blue-900 mb-2">أوقات العمل</h3>
                <p className="text-sm text-gray-500">الأحد - الخميس: 8:00 ص - 3:00 م</p>
              </div>
            </div>

            <div className="h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 border border-gray-200">
               <span className="flex items-center gap-2">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 خريطة الموقع
               </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;