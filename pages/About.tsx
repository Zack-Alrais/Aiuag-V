
import React, { useEffect, useState } from 'react';
import { HISTORY_TIMELINE } from '../constants';

const About: React.FC = () => {
  const [intro, setIntro] = useState('رابطة خريجي جامعة إفريقيا العالمية هي كيان طوعي يجمع الآلاف من الخريجين.');

  useEffect(() => {
    const saved = localStorage.getItem('site_content');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.about && parsed.about.intro) setIntro(parsed.about.intro);
    }
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">من نحن</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        {/* Definition & Structure */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <span className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-lg text-blue-900 p-2">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </span>
              تعريف الرابطة
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                تأسست الرابطة كشخصية اعتبارية طوعية، تهدف لاستيعاب قدرات الخريجين وتأهيلهم وربطهم بالجامعة ومجتمعاتهم.
              </p>
              <p>
                تعمل الرابطة بمبدأ الاستقلالية والحياد، وتقدم خدماتها للمحتاجين دون تمييز من لون أو جنس أو دين، ملتزمة بقيم رسالة الإسلام في التسامح والوسطية.
              </p>
            </div>
          </div>
          <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6">الهيكل التنظيمي</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">01</span>
                <div>
                  <h4 className="font-bold">الجمعية العمومية</h4>
                  <p className="text-sm text-blue-200">السلطة العليا للرابطة التي تضم ممثلي الروابط الفرعية.</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">02</span>
                <div>
                  <h4 className="font-bold">المكتب التنفيذي</h4>
                  <p className="text-sm text-blue-200">الجهاز المسؤول عن تنفيذ سياسات الرابطة وبرامجها.</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">03</span>
                <div>
                  <h4 className="font-bold">المجلس الاستشاري</h4>
                  <p className="text-sm text-blue-200">مجلس يضم قيادات الجامعة وخبراء لتقديم المشورة والنصح.</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">04</span>
                <div>
                  <h4 className="font-bold">الروابط الفرعية</h4>
                  <p className="text-sm text-blue-200">فروع الرابطة في مختلف الدول التي يتواجد بها خريجون.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="bg-gray-50 p-12 rounded-3xl mb-20">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">الأهداف الاستراتيجية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'الارتباط الدائم', desc: 'توطيد العلاقة بين الجامعة وخريجيها كشركاء في التطوير.' },
              { title: 'خدمة المجتمعات', desc: 'تفعيل دور الخريجين في تنمية مجتمعاتهم المحلية والإقليمية.' },
              { title: 'إعادة الإعمار', desc: 'تعبئة الموارد للمساهمة في تأهيل مرافق الجامعة المتضررة.' },
              { title: 'البحث العلمي', desc: 'تشجيع الخريجين على إكمال دراساتهم والمساهمة في الإنتاج المعرفي.' },
              { title: 'التكافل الاجتماعي', desc: 'بناء شبكة تواصل اجتماعي قوية بين الخريجين وأسرهم.' }
            ].map((goal, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-blue-900 font-bold mb-3 text-lg border-r-4 border-blue-600 pr-3">{goal.title}</h4>
                <p className="text-gray-600 text-sm">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">المسيرة التاريخية</h2>
          <div className="relative border-r-2 border-blue-200 pr-8 mr-4 space-y-12">
            {HISTORY_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute top-0 right-[-41px] w-6 h-6 bg-blue-900 rounded-full border-4 border-white"></div>
                <div>
                  <span className="text-blue-700 font-bold text-lg">{item.period}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
