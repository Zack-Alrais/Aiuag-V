
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  author: string;
  image: string;
}

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [featuredNews, setFeaturedNews] = useState<NewsItem | null>(null);

  const categories = ['الكل', 'أخبار الرابطة', 'إعادة إعمار', 'أكاديمي', 'المرأة', 'روابط فرعية'];

  useEffect(() => {
    const savedNews = localStorage.getItem('site_news');
    if (savedNews) {
      const parsed = JSON.parse(savedNews);
      setNewsList(parsed);
      setFeaturedNews(parsed[0] || null); // Use first item as featured
    } else {
      // Default Data (Should match dashboard default for consistency)
      const defaults = [
         { id: 1, title: 'انطلاق فعاليات ملتقى خريجي إفريقيا السنوي', date: '2024-03-12', category: 'أخبار الرابطة', summary: 'ملتقى جامع لمناقشة الخطط المستقبلية.', author: 'أمانة الإعلام', image: 'https://picsum.photos/seed/news1/600/400' },
         { id: 2, title: 'افتتاح مكتب الرابطة في أنقرة', date: '2024-03-05', category: 'روابط فرعية', summary: 'تدشين المكتب الفرعي الجديد.', author: 'العلاقات الخارجية', image: 'https://picsum.photos/seed/news2/600/400' }
      ];
      setNewsList(defaults);
      setFeaturedNews(defaults[0]);
    }
  }, []);

  const filteredNews = activeCategory === 'الكل' 
    ? newsList 
    : newsList.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header & Hero */}
      <div className="bg-white pb-12 pt-12 rounded-b-[3rem] shadow-sm mb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">المركز الإعلامي</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">نبض الرابطة، وصوت الخريج. تابع أحدث الأخبار والفعاليات والمقالات الحصرية.</p>
          </div>

          {/* Featured News Hero */}
          {featuredNews && (
            <div className="block relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer h-[500px] animate-in fade-in zoom-in-95 duration-700 delay-100">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-8 md:p-12 w-full md:w-2/3 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{featuredNews.category}</span>
                  <span className="text-sm text-blue-100 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:underline decoration-blue-400 underline-offset-4">{featuredNews.title}</h2>
                <p className="text-blue-100 text-lg line-clamp-2 mb-6">{featuredNews.summary}</p>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span>بواسطة: {featuredNews.author}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-blue-900 text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4">
                   <span className="bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                     {item.category}
                   </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                   <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {item.summary}
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                   <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                     اقرأ التفاصيل <span>←</span>
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
             <div className="text-4xl mb-4 text-gray-300">
               <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
             </div>
             <h3 className="text-xl font-bold text-gray-800 mb-2">لا توجد أخبار في هذا القسم حالياً</h3>
             <p className="text-gray-500">حاول اختيار تصنيف آخر.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
