
import React from 'react';
import { SECRETARIATS } from '../constants';

const Sectors: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">قطاعات الرابطة</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تنقسم أعمال الرابطة إلى قطاعات متخصصة تضمن الكفاءة في التنفيذ وتحقيق الأهداف الاستراتيجية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECRETARIATS.map((sec, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all border-b-4 border-b-blue-900">
              <div className="w-12 h-12 text-blue-600 mb-6">{sec.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{sec.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {sec.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gray-900 text-white rounded-3xl flex flex-wrap items-center gap-8">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-bold mb-4">تكامل القطاعات</h2>
            <p className="text-gray-400 mb-6">
              تعمل كافة هذه القطاعات تحت إشراف الأمانة العامة لضمان تكامل الأدوار وتوحيد الجهود نحو "رؤية 2026" لإعادة بناء وتطوير الجامعة.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold">عرض تفاصيل خطة 2026</button>
          </div>
          <div className="flex-shrink-0">
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
               <div className="text-center">
                 <span className="text-4xl font-bold block">15</span>
                 <span className="text-sm">أمانة متخصصة</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
