
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  vision: string;
  mission: string;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

const Home: React.FC = () => {
  const [content, setContent] = useState<HomeContent>({
    heroTitle: 'رابطة خريجي جامعة إفريقيا العالمية',
    heroSubtitle: 'رابطة طوعية ذات شخصية اعتبارية، وصفة تعاقبية مستديمة',
    vision: 'بناء علاقات ارتباطية تفاعلية دائمة بين الجامعة وخريجيها.',
    mission: 'بث قيم التسامح والاعتدال والجودة، وتعبئة الطاقات.'
  });

  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Fetch Dynamic Content
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      const parsed = JSON.parse(savedContent);
      if (parsed.home) setContent(parsed.home);
    }

    // Fetch Latest News
    const savedNews = localStorage.getItem('site_news');
    if (savedNews) {
      const parsedNews: NewsItem[] = JSON.parse(savedNews);
      setLatestNews(parsedNews.slice(0, 3)); // Get top 3
    } else {
        // Fallback demo data
        setLatestNews([
             { id: 1, title: 'انطلاق فعاليات ملتقى خريجي إفريقيا السنوي', date: '2024-03-12', category: 'أخبار الرابطة', summary: 'أعلنت الأمانة العامة عن بدء الترتيبات للمؤتمر القادم.', image: 'https://picsum.photos/seed/news1/600/400' },
             { id: 2, title: 'افتتاح مكتب الرابطة في أنقرة', date: '2024-03-05', category: 'روابط فرعية', summary: 'تدشين المكتب الفرعي الجديد.', image: 'https://picsum.photos/seed/news2/600/400' },
             { id: 3, title: 'خطة إعادة الإعمار 2026', date: '2024-02-28', category: 'إعادة إعمار', summary: 'البدء في تأهيل القاعات الدراسية.', image: 'https://picsum.photos/seed/news3/600/400' }
        ]);
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/iua-campus/1920/1080" 
          alt="IUA Campus" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="container mx-auto px-4 relative text-white text-center">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
             <img src="https://picsum.photos/seed/aiuag-logo/120/120" alt="Logo" className="w-24 h-24 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">{content.heroTitle}</h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            “{content.heroSubtitle}”
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg">اشترك في العضوية</Link>
            <Link to="/about" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white px-8 py-3 rounded-lg font-bold text-lg">تعرف علينا</Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 p-8 rounded-2xl border-r-8 border-blue-900 shadow-sm">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">الرؤية والرسالة</h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </span>
                الرؤية
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content.vision}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-8">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 13V6a2 2 0 012-2h14a2 2 0 012 2v7m-9 4h2"></path></svg>
                </span>
                الرسالة
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content.mission}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             {/* Static Benefit Cards */}
            <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
               <div className="bg-blue-100 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
               </div>
               <div>
                 <h4 className="font-bold text-lg text-blue-900 mb-1">إعادة الإعمار المادي</h4>
                 <p className="text-sm text-gray-600">قيادة جهود التعبئة وجمع التبرعات لإعادة إعمار وتأهيل مرافق الجامعة.</p>
               </div>
            </div>
            <div className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
               <div className="bg-green-100 text-green-900 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
               </div>
               <div>
                 <h4 className="font-bold text-lg text-blue-900 mb-1">التمكين الأكاديمي</h4>
                 <p className="text-sm text-gray-600">دعم استئناف العملية التعليمية وتوفير الدعم اللوجستي للطلاب والأساتذة.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News (Dynamic) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">آخر الأخبار</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>
            <Link to="/news" className="text-blue-700 font-bold hover:underline">عرض كل الأخبار ←</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-blue-900 text-white text-xs px-3 py-1 rounded-full">{item.category}</div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-400 mb-2 block flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  <Link to={`/news`} className="text-blue-600 font-bold text-sm hover:text-blue-800">اقرأ المزيد ←</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت خريج من جامعة إفريقيا العالمية؟</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            انضم إلى مجتمعنا العالمي وكن جزءاً من مسيرة العطاء والارتباط الدائم بجامعتك الأم.
          </p>
          <Link to="/membership" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-xl shadow-2xl inline-block transition-transform hover:-translate-y-1">
            سجل عضويتك الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
