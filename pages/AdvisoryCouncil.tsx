
import React from 'react';

const AdvisoryCouncil: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">المجلس الاستشاري</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            هيئة عليا تضم رموز الجامعة والخبراء لتقديم التوجيه الاستراتيجي والدعم المؤسسي للرابطة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">تكوين المجلس</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 w-5 h-5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                رئيس مجلس أمناء الجامعة (راعياً)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 w-5 h-5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                مدير الجامعة (رئيساً)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 w-5 h-5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                رئيس مكتب العلاقات الخارجية بالجامعة
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 w-5 h-5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                رئيس الرابطة ونائباه
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 w-5 h-5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                الأمين العام للرابطة ونائباه
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 w-5 h-5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                رؤساء المنسقيات الإقليمية
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 w-5 h-5">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                15 من قيادات الخريجين ذوي الخبرة
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white border border-blue-200 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">مهام المجلس</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                يقدم المجلس المشورة والنصح للجنة التنفيذية والروابط الفرعية، ويساعد في الحصول على الدعم المالي والمادي والمعنوي للرابطة، ويعقد اجتماعاته مرة كل عام على الأقل.
              </p>
            </div>
            <div className="p-6 bg-blue-900 text-white rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-3">دور مكتب العلاقات الخارجية</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                يضطلع مكتب العلاقات الخارجية بالجامعة بدور محوري في الإشراف والتقييم وتوثيق علاقات الجامعة مع خريجيها حول العالم، لضمان استمرارية قنوات التواصل الرسمية.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-12 rounded-3xl text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">كلمة رئيس المجلس</h2>
          <div className="w-20 h-20 mx-auto bg-white rounded-full overflow-hidden mb-6 border-4 border-blue-200">
            <img src="https://picsum.photos/seed/director/100/100" alt="Director" />
          </div>
          <p className="text-gray-700 italic max-w-2xl mx-auto mb-4">
            "إن رابطة الخريجين هي الجسر المتين الذي تعبر من خلاله الجامعة إلى آفاق العالمية، ونحن في المجلس الاستشاري ملتزمون بتذليل كافة الصعاب لدعم مسيرة أبنائنا الخريجين."
          </p>
          <span className="block font-bold text-blue-900">بروفيسور/ مدير جامعة إفريقيا العالمية</span>
          <span className="text-sm text-gray-500">رئيس المجلس الاستشاري</span>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryCouncil;
