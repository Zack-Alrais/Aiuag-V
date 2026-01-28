
import React, { useEffect, useState } from 'react';

interface ExecMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const ExecutiveOffice: React.FC = () => {
  const [members, setMembers] = useState<ExecMember[]>([]);

  // Static content for the descriptions (could be moved to CMS later if needed)
  const secretariats = [
    { title: 'الرئيس', role: 'رمز الرابطة والمسؤول الأول عن حفظ كيانها وتمثيلها.' },
    { title: 'الأمين العام', role: 'المسؤول عن التنسيق بين الأمانات وإدارة الجلسات والمكاتبات.' },
    { title: 'أمانة الشؤون الإدارية والمالية', role: 'وضع الخطط المالية والميزانيات وإدارة الأصول.' },
    { title: 'أمانة العلاقات الخارجية', role: 'تنسيق العمل مع الروابط الفرعية والمنظمات الدولية.' },
    { title: 'أمانة الإحصاء والمعلومات', role: 'حصر الخريجين وتصنيفهم وإدارة قاعدة البيانات.' },
    { title: 'أمانة التخطيط والتدريب', role: 'رسم السياسات الاستراتيجية وتنمية الكوادر.' },
    { title: 'أمانة الإعلام والعلاقات العامة', role: 'إبراز دور الرابطة والتواصل مع وسائل الإعلام.' },
    { title: 'أمانة الشؤون الثقافية', role: 'تعزيز التواصل الثقافي والفكري بين الخريجين.' },
    { title: 'أمانة الشؤون الاجتماعية', role: 'تقوية الأواصر الاجتماعية والأسرية بين الأعضاء.' },
    { title: 'أمانة تنمية العلاقات الاقتصادية', role: 'جذب الاستثمارات وتنمية موارد الرابطة المالية.' },
    { title: 'أمانة البحوث والدراسات', role: 'تشجيع البحث العلمي والتعاون مع المراكز الأكاديمية.' },
    { title: 'الأمانة الأكاديمية', role: 'توفير فرص المنح الدراسية وربط الخريجين بالكليات.' },
    { title: 'الأمانة الرياضية', role: 'تنظيم الفعاليات والمنافسات الرياضية للخريجين.' },
    { title: 'أمانة المرأة', role: 'الاهتمام بشؤون الخريجات وتفعيل دورهن في الرابطة.' }
  ];

  useEffect(() => {
    const savedExec = localStorage.getItem('site_exec');
    if (savedExec) {
      setMembers(JSON.parse(savedExec));
    } else {
      // Default members if none in storage
      setMembers([
        { id: 1, name: 'د. كمارا عباس', position: 'رئيس اللجنة التنفيذية', image: 'https://picsum.photos/seed/p1/200/200' },
        { id: 2, name: 'د. مزمل الريس أحمد', position: 'الأمين العام', image: 'https://picsum.photos/seed/p2/200/200' },
        { id: 3, name: 'أ. محمد إبراهيم', position: 'أمين الشؤون المالية', image: 'https://picsum.photos/seed/p3/200/200' },
        { id: 4, name: 'د. فاطمة زين', position: 'أمين أمانة المرأة', image: 'https://picsum.photos/seed/p4/200/200' }
      ]);
    }
  }, []);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">المكتب التنفيذي</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            الجهاز التنفيذي المسؤول عن تسيير أعمال الرابطة وتحويل السياسات العامة إلى برامج عمل ملموسة.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">دور المكتب التنفيذي</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يُنتخب أعضاء اللجنة التنفيذية من قبل الجمعية العمومية لمدة 4 سنوات. يتولى المكتب تنفيذ قرارات الجمعية، والإشراف على الأداء المالي، وتمثيل الرابطة في المحافل المحلية والدولية.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">أمانات المكتب (15 منصباً)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secretariats.map((sec, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center font-bold mb-4">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{sec.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{sec.role}</p>
            </div>
          ))}
        </div>

        {/* Representative Members Cards (Dynamic) */}
        <h2 className="text-3xl font-bold text-blue-900 mt-20 mb-10 text-center">أعضاء المكتب الحالي</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {members.length > 0 ? members.map((member) => (
            <div key={member.id} className="text-center group animate-in fade-in">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-900 transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-blue-900 text-lg">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.position}</p>
            </div>
          )) : (
            <p className="col-span-4 text-center text-gray-500">جاري تحديث قائمة الأعضاء...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveOffice;
