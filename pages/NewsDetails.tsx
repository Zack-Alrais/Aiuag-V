
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  author: string;
  image: string;
  content?: string; // Optional full content
}

const NewsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  
  const [likes, setLikes] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  
  // Mock Comments
  const [comments, setComments] = useState([
    { id: 1, name: 'عبدالله محمد', date: 'منذ ساعتين', text: 'جهود مباركة، نسأل الله لكم التوفيق والسداد.', avatar: 'https://picsum.photos/seed/u1/100' },
    { id: 2, name: 'سارة أحمد', date: 'منذ 5 ساعات', text: 'فكرة صندوق الطوارئ ممتازة جداً، كيف يمكننا المساهمة من كندا؟', avatar: 'https://picsum.photos/seed/u2/100' }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const savedNews = localStorage.getItem('site_news');
    if (savedNews) {
      const allNews: NewsItem[] = JSON.parse(savedNews);
      const found = allNews.find(n => n.id === Number(id));
      
      if (found) {
        // Since dashboard might not save full content, we generate it if missing for demo purposes
        if (!found.content) {
          found.content = `
            <p class="mb-6 text-xl leading-loose font-bold">${found.summary}</p>
            <p class="mb-6 leading-loose">
              في إطار سعي الرابطة المتواصل لتعزيز دور الخريجين، يأتي هذا الخبر ليؤكد على التزامنا بالقيم المؤسسية والأهداف الاستراتيجية. 
              تفاصيل هذا الحدث تعكس حجم الجهد المبذول من قبل الأمانات المختلفة.
            </p>
            <h3 class="text-2xl font-bold text-blue-900 mb-4">التفاصيل والتداعيات</h3>
            <p class="mb-6 leading-loose">
              وقد صرح ${found.author} بأن الخطوات القادمة ستشمل توسيع نطاق المشاركة ليشمل كافة الفروع الخارجية. 
              كما سيتم إصدار تقارير دورية لمتابعة التنفيذ.
            </p>
            <blockquote class="border-r-4 border-blue-600 pr-4 italic text-gray-600 bg-gray-50 p-4 rounded-lg mb-6">
              "نحن ملتزمون بخدمة الخريج والجامعة والمجتمع."
            </blockquote>
          `;
        }
        setArticle(found);
        setRelatedNews(allNews.filter(n => n.id !== Number(id)).slice(0, 3));
      } else {
        // Fallback or Not Found
         setArticle({
            id: 0,
            title: 'خبر غير موجود',
            date: '',
            category: 'عام',
            summary: 'عذراً، لم يتم العثور على الخبر المطلوب.',
            author: 'النظام',
            image: 'https://picsum.photos/seed/error/1200/600',
            content: '<p>الرابط الذي تحاول الوصول إليه غير صحيح أو تم حذف الخبر.</p>'
         });
      }
    } else {
      // Very basic fallback if storage is empty
      setArticle({
         id: 1, title: 'انطلاق فعاليات ملتقى خريجي إفريقيا السنوي', date: '2024-03-12', category: 'أخبار الرابطة', 
         summary: 'أعلنت الأمانة العامة عن بدء الترتيبات للمؤتمر القادم.', 
         author: 'أمانة الإعلام', 
         image: 'https://picsum.photos/seed/news1/600/400',
         content: '<p>تفاصيل الخبر الافتراضي...</p>'
      });
    }
  }, [id]);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      name: 'أنت', 
      date: 'الآن',
      text: commentText,
      avatar: 'https://ui-avatars.com/api/?name=User&background=random'
    };
    
    setComments([newComment, ...comments]);
    setCommentText('');
  };

  if (!article) return <div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
        <div className="absolute bottom-0 right-0 w-full p-6 md:p-12 lg:p-20 text-white container mx-auto z-20">
          <div className="max-w-4xl">
             <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold">{article.category}</span>
               <span className="text-gray-300 text-sm flex items-center gap-1">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 {article.date}
               </span>
             </div>
             <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
               {article.title}
             </h1>
             <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                 </div>
                 <div className="text-sm">
                   <p className="text-gray-400 text-xs">كتب بواسطة</p>
                   <p className="font-bold">{article.author}</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-30 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
             {/* Article Body */}
             <div 
               className="text-gray-800 text-lg leading-relaxed font-light"
               dangerouslySetInnerHTML={{ __html: article.content || '' }} 
             />

             {/* Interaction Bar */}
             <div className="mt-8 flex items-center justify-between bg-blue-50 p-4 rounded-2xl">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl transition-all font-bold ${hasLiked ? 'bg-red-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
                >
                  <span className={hasLiked ? 'animate-bounce' : ''}>
                    {hasLiked ? (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    )}
                  </span>
                  <span>{likes} إعجاب</span>
                </button>
             </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <h3 className="text-2xl font-bold text-gray-900 mb-8">التعليقات ({comments.length})</h3>
             
             {/* Add Comment */}
             <form onSubmit={handleCommentSubmit} className="mb-12 bg-gray-50 p-6 rounded-2xl">
               <h4 className="font-bold text-sm text-gray-700 mb-4">أضف تعليقك</h4>
               <textarea 
                 value={commentText}
                 onChange={(e) => setCommentText(e.target.value)}
                 className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white min-h-[100px] mb-4"
                 placeholder="شاركنا رأيك في هذا الموضوع..."
               ></textarea>
               <div className="flex justify-end">
                 <button type="submit" className="bg-blue-900 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-800 transition-colors">
                   نشر التعليق
                 </button>
               </div>
             </form>

             {/* Comments List */}
             <div className="space-y-8">
               {comments.map(comment => (
                 <div key={comment.id} className="flex gap-4 animate-in fade-in slide-in-from-bottom-2">
                   <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full border border-gray-100" />
                   <div className="flex-grow">
                     <div className="bg-gray-50 p-4 rounded-2xl rounded-tr-none">
                       <div className="flex justify-between items-center mb-2">
                         <h5 className="font-bold text-blue-900 text-sm">{comment.name}</h5>
                         <span className="text-xs text-gray-400">{comment.date}</span>
                       </div>
                       <p className="text-gray-700 text-sm leading-relaxed">{comment.text}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Related News */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
             <h3 className="font-bold text-xl text-blue-900 mb-6 border-r-4 border-blue-500 pr-3">أخبار ذات صلة</h3>
             <div className="space-y-6">
               {relatedNews.map(item => (
                 <Link key={item.id} to={`/news/${item.id}`} className="group flex gap-3 items-start">
                   <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                     <img src={item.image} alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                       {item.title}
                     </h4>
                     <span className="text-xs text-gray-400 mt-1 block">{item.date}</span>
                   </div>
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
