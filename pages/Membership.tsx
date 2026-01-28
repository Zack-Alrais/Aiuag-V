
import React, { useState } from 'react';

const Membership: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: 'كلية الطب',
    gradYear: '',
    degree: 'بكالوريوس'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Backend Save
    setTimeout(() => {
      const existingRequests = JSON.parse(localStorage.getItem('membership_requests') || '[]');
      const newRequest = {
          id: Date.now(),
          ...formData,
          status: 'قيد المراجعة',
          date: new Date().toISOString()
      };
      localStorage.setItem('membership_requests', JSON.stringify([newRequest, ...existingRequests]));
      
      setIsSubmitting(false);
      alert('تم إرسال طلبك بنجاح وحفظه في النظام. سيتم مراجعته من قبل إدارة العضوية.');
      setFormData({ fullName: '', email: '', phone: '', college: 'كلية الطب', gradYear: '', degree: 'بكالوريوس' });
    }, 1000);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">طلب اشتراك العضوية</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">انضم إلى شبكة عالمية تضم أكثر من 50 ألف خريج حول العالم.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-blue-50 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-blue-900 mb-10 border-r-4 border-blue-600 pr-5 relative z-10">نموذج التسجيل الرقمي</h2>
          
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            {/* Form Fields */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-gray-700">الاسم الكامل</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" required placeholder="أدخل اسمك الرباعي" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="example@domain.com" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-gray-700">رقم الهاتف</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required placeholder="+249..." className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900" dir="ltr" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-bold text-gray-700">الكلية</label>
                  <select name="college" value={formData.college} onChange={handleChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900">
                    <option>كلية الطب</option>
                    <option>كلية الهندسة</option>
                    <option>كلية الاقتصاد والعلوم الإدارية</option>
                    <option>كلية الشريعة والقانون</option>
                    <option>كلية التربية</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-bold text-gray-700">سنة التخرج</label>
                    <input name="gradYear" value={formData.gradYear} onChange={handleChange} type="number" required placeholder="2020" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-bold text-gray-700">الدرجة</label>
                    <select name="degree" value={formData.degree} onChange={handleChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900">
                      <option>بكالوريوس</option>
                      <option>ماجستير</option>
                      <option>دكتوراه</option>
                    </select>
                  </div>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex flex-col items-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full max-w-md bg-blue-900 text-white font-extrabold py-5 rounded-2xl text-xl shadow-2xl transition-all ${isSubmitting ? 'opacity-70' : 'hover:bg-blue-800'}`}
              >
                {isSubmitting ? 'جاري المعالجة...' : 'إرسال طلب الانضمام'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Membership;
