
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Interfaces ---
interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    vision: string;
    mission: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  about: {
    intro: string;
  };
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  author: string;
  image: string;
}

interface ExecMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');

  // --- Initial State (Database Simulation) ---
  const [content, setContent] = useState<SiteContent>({
    home: {
      heroTitle: 'رابطة خريجي جامعة إفريقيا العالمية',
      heroSubtitle: 'رابطة طوعية ذات شخصية اعتبارية، وصفة تعاقبية مستديمة، وذمة مالية مستقلة',
      vision: 'بناء علاقات ارتباطية تفاعلية دائمة بين الجامعة وخريجيها.',
      mission: 'بث قيم التسامح والاعتدال والجودة وتعبئة الطاقات.'
    },
    contact: {
      email: 'info@aiuag.org',
      phone: '+249 114210853',
      address: 'جامعة إفريقيا العالمية، حي جبرة، الخرطوم، السودان'
    },
    about: {
      intro: 'رابطة خريجي جامعة إفريقيا العالمية هي كيان طوعي يجمع الآلاف من الخريجين المنتشرين في كافة أنحاء المعمورة.'
    }
  });

  const [news, setNews] = useState<NewsItem[]>([]);
  const [execMembers, setExecMembers] = useState<ExecMember[]>([]);
  
  // Edit States
  const [newNews, setNewNews] = useState<Partial<NewsItem>>({ category: 'أخبار الرابطة' });
  const [newMember, setNewMember] = useState<Partial<ExecMember>>({});

  // --- Load Data ---
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    // Load Content
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) setContent(JSON.parse(savedContent));

    // Load News
    const savedNews = localStorage.getItem('site_news');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      // Default News if empty
      setNews([
         { id: 1, title: 'انطلاق فعاليات ملتقى الخريجين', date: '2024-03-12', category: 'أخبار الرابطة', summary: 'ملتقى جامع لمناقشة الخطط المستقبلية.', author: 'أمانة الإعلام', image: 'https://picsum.photos/seed/news1/600/400' }
      ]);
    }

    // Load Exec Members
    const savedExec = localStorage.getItem('site_exec');
    if (savedExec) {
      setExecMembers(JSON.parse(savedExec));
    } else {
      setExecMembers([
        { id: 1, name: 'د. كمارا عباس', position: 'رئيس اللجنة التنفيذية', image: 'https://picsum.photos/seed/p1/200/200' }
      ]);
    }
  }, [navigate]);

  // --- Save Handlers ---
  const saveContent = () => {
    localStorage.setItem('site_content', JSON.stringify(content));
    alert('تم حفظ المحتوى العام بنجاح وتحديث الموقع!');
  };

  const saveNews = () => {
    localStorage.setItem('site_news', JSON.stringify(news));
  };

  const saveExec = () => {
    localStorage.setItem('site_exec', JSON.stringify(execMembers));
  };

  // --- Actions ---
  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNews.title) return;
    const item: NewsItem = {
      id: Date.now(),
      title: newNews.title!,
      date: new Date().toISOString().split('T')[0],
      category: newNews.category || 'عام',
      summary: newNews.summary || '',
      author: 'المسؤول',
      image: 'https://picsum.photos/seed/new/600/400'
    };
    const updatedNews = [item, ...news];
    setNews(updatedNews);
    localStorage.setItem('site_news', JSON.stringify(updatedNews));
    setNewNews({ category: 'أخبار الرابطة' });
    alert('تم نشر الخبر');
  };

  const handleDeleteNews = (id: number) => {
    if(window.confirm('حذف هذا الخبر؟')) {
      const updated = news.filter(n => n.id !== id);
      setNews(updated);
      localStorage.setItem('site_news', JSON.stringify(updated));
    }
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newMember.name) return;
    const member: ExecMember = {
      id: Date.now(),
      name: newMember.name!,
      position: newMember.position || 'عضو',
      image: 'https://picsum.photos/seed/user/200/200'
    };
    const updatedMembers = [...execMembers, member];
    setExecMembers(updatedMembers);
    localStorage.setItem('site_exec', JSON.stringify(updatedMembers));
    setNewMember({});
    alert('تم إضافة العضو');
  };

  const handleDeleteMember = (id: number) => {
    if(window.confirm('حذف هذا العضو؟')) {
      const updated = execMembers.filter(m => m.id !== id);
      setExecMembers(updated);
      localStorage.setItem('site_exec', JSON.stringify(updated));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  // --- Render Sections ---

  const GeneralEditor = () => (
    <div className="space-y-8 animate-in fade-in">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg text-blue-900 mb-4 border-b pb-2">الصفحة الرئيسية (Home)</h3>
        <div className="space-y-4">
          <div>
             <label className="block text-sm font-bold text-gray-700 mb-1">العنوان الرئيسي (Hero Title)</label>
             <input type="text" value={content.home.heroTitle} onChange={e => setContent({...content, home: {...content.home, heroTitle: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
             <label className="block text-sm font-bold text-gray-700 mb-1">الوصف المختصر</label>
             <textarea value={content.home.heroSubtitle} onChange={e => setContent({...content, home: {...content.home, heroSubtitle: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" rows={2} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-1">الرؤية</label>
               <textarea value={content.home.vision} onChange={e => setContent({...content, home: {...content.home, vision: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" rows={3} />
            </div>
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-1">الرسالة</label>
               <textarea value={content.home.mission} onChange={e => setContent({...content, home: {...content.home, mission: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" rows={3} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg text-blue-900 mb-4 border-b pb-2">بيانات التواصل (Contact)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
             <label className="block text-sm font-bold text-gray-700 mb-1">البريد الإلكتروني</label>
             <input type="text" value={content.contact.email} onChange={e => setContent({...content, contact: {...content.contact, email: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" />
           </div>
           <div>
             <label className="block text-sm font-bold text-gray-700 mb-1">الهاتف</label>
             <input type="text" value={content.contact.phone} onChange={e => setContent({...content, contact: {...content.contact, phone: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" />
           </div>
           <div className="md:col-span-2">
             <label className="block text-sm font-bold text-gray-700 mb-1">العنوان</label>
             <input type="text" value={content.contact.address} onChange={e => setContent({...content, contact: {...content.contact, address: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" />
           </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg text-blue-900 mb-4 border-b pb-2">من نحن (About)</h3>
        <div>
           <label className="block text-sm font-bold text-gray-700 mb-1">المقدمة التعريفية</label>
           <textarea value={content.about.intro} onChange={e => setContent({...content, about: {...content.about, intro: e.target.value}})} className="w-full p-3 bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500" rows={4} />
        </div>
      </div>

      <div className="sticky bottom-4 z-10">
        <button onClick={saveContent} className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-700 transition-colors">
          حفظ كافة التغييرات أعلاه
        </button>
      </div>
    </div>
  );

  const NewsEditor = () => (
    <div className="space-y-8 animate-in fade-in">
       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <h3 className="font-bold text-lg text-blue-900 mb-4">إضافة خبر جديد</h3>
         <form onSubmit={handleAddNews} className="space-y-4">
            <input type="text" placeholder="عنوان الخبر" value={newNews.title || ''} onChange={e => setNewNews({...newNews, title: e.target.value})} className="w-full p-3 bg-gray-50 rounded-lg border" />
            <div className="grid grid-cols-2 gap-4">
              <select value={newNews.category} onChange={e => setNewNews({...newNews, category: e.target.value})} className="p-3 bg-gray-50 rounded-lg border">
                <option>أخبار الرابطة</option>
                <option>إعادة إعمار</option>
                <option>أكاديمي</option>
                <option>روابط فرعية</option>
              </select>
              <input type="text" placeholder="ملخص قصير" value={newNews.summary || ''} onChange={e => setNewNews({...newNews, summary: e.target.value})} className="p-3 bg-gray-50 rounded-lg border" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold hover:bg-blue-700">نشر الخبر</button>
         </form>
       </div>

       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
         <table className="w-full text-right">
           <thead className="bg-gray-50">
             <tr>
               <th className="p-4">العنوان</th>
               <th className="p-4">التاريخ</th>
               <th className="p-4">التصنيف</th>
               <th className="p-4">إجراء</th>
             </tr>
           </thead>
           <tbody>
             {news.map(item => (
               <tr key={item.id} className="border-t hover:bg-gray-50">
                 <td className="p-4 font-bold">{item.title}</td>
                 <td className="p-4 text-gray-500">{item.date}</td>
                 <td className="p-4"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{item.category}</span></td>
                 <td className="p-4"><button onClick={() => handleDeleteNews(item.id)} className="text-red-500 hover:underline font-bold text-sm">حذف</button></td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
    </div>
  );

  const ExecEditor = () => (
    <div className="space-y-8 animate-in fade-in">
       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
         <h3 className="font-bold text-lg text-blue-900 mb-4">إضافة عضو مكتب تنفيذي</h3>
         <form onSubmit={handleAddMember} className="flex gap-4 items-end">
            <div className="flex-grow">
               <label className="text-xs font-bold text-gray-500">الاسم</label>
               <input type="text" value={newMember.name || ''} onChange={e => setNewMember({...newMember, name: e.target.value})} className="w-full p-3 bg-gray-50 rounded-lg border" />
            </div>
            <div className="flex-grow">
               <label className="text-xs font-bold text-gray-500">المنصب</label>
               <input type="text" value={newMember.position || ''} onChange={e => setNewMember({...newMember, position: e.target.value})} className="w-full p-3 bg-gray-50 rounded-lg border" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">إضافة</button>
         </form>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {execMembers.map(member => (
            <div key={member.id} className="bg-white p-4 rounded-xl border flex items-center gap-4 shadow-sm relative group">
               <img src={member.image} alt="" className="w-16 h-16 rounded-full object-cover" />
               <div>
                  <h4 className="font-bold text-blue-900">{member.name}</h4>
                  <p className="text-xs text-gray-500">{member.position}</p>
               </div>
               <button onClick={() => handleDeleteMember(member.id)} className="absolute top-2 left-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
               </button>
            </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row" dir="rtl">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold">لوحة التحكم</h1>
          <p className="text-xs text-slate-400 mt-1">إدارة محتوى الموقع</p>
        </div>
        <nav className="p-4 space-y-2">
           <button onClick={() => setActiveTab('general')} className={`w-full text-right p-3 rounded-xl transition-colors ${activeTab === 'general' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-gray-300'}`}>📝 المحتوى العام</button>
           <button onClick={() => setActiveTab('news')} className={`w-full text-right p-3 rounded-xl transition-colors ${activeTab === 'news' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-gray-300'}`}>📰 الأخبار</button>
           <button onClick={() => setActiveTab('exec')} className={`w-full text-right p-3 rounded-xl transition-colors ${activeTab === 'exec' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-gray-300'}`}>👥 المكتب التنفيذي</button>
           <div className="border-t border-slate-800 pt-4 mt-4">
             <button onClick={handleLogout} className="w-full text-right p-3 text-red-400 hover:bg-red-900/20 rounded-xl">تسجيل الخروج</button>
           </div>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-grow p-8 overflow-y-auto h-screen">
         <h2 className="text-2xl font-bold text-gray-800 mb-6">
           {activeTab === 'general' && 'تحرير النصوص والمعلومات الأساسية'}
           {activeTab === 'news' && 'إدارة الأخبار والفعاليات'}
           {activeTab === 'exec' && 'إدارة أعضاء المكتب التنفيذي'}
         </h2>
         
         {activeTab === 'general' && <GeneralEditor />}
         {activeTab === 'news' && <NewsEditor />}
         {activeTab === 'exec' && <ExecEditor />}
      </main>
    </div>
  );
};

export default Dashboard;
