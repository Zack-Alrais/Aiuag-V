
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Interfaces
interface Post {
  id: number;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  timestamp: string;
}

interface Friend {
  id: number;
  name: string;
  role: string;
  avatar: string;
  mutual: number;
}

interface UserProfile {
    name: string;
    headline: string;
    location: string;
    work: string;
    education: string;
    bio: string;
    coverImage: string;
    avatar: string;
    email: string;
    phone: string;
    membershipId: string;
    joinDate: string;
    status: string;
    website: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Login States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Profile States
  const [activeTab, setActiveTab] = useState('timeline');
  const [isEditing, setIsEditing] = useState(false);
  
  const defaultUser: UserProfile = {
    name: 'جامع ديني',
    headline: 'مدير مشاريع في شركة التقنية المتقدمة',
    location: 'الخرطوم، السودان',
    work: 'شركة التقنية المتقدمة',
    education: 'جامعة إفريقيا العالمية',
    bio: 'خريج كلية الاقتصاد 2015. مهتم بالتنمية المستدامة والتطوير الإداري. أسعى لربط الخريجين وبناء مجتمع معرفي متكامل.',
    coverImage: 'https://picsum.photos/seed/cover/1200/400',
    avatar: 'https://picsum.photos/seed/avatar-jd/150/150',
    email: 'jamie.dini@example.com',
    phone: '+249 912345678',
    membershipId: 'IUA-2015-8842',
    joinDate: '01/01/2015',
    status: 'نشط',
    website: 'https://jamiedini.com'
  };

  const [userData, setUserData] = useState<UserProfile>(defaultUser);

  useEffect(() => {
    const authStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(authStatus);

    // Load Profile from DB
    const savedProfile = localStorage.getItem('user_profile');
    if (savedProfile) {
        setUserData(JSON.parse(savedProfile));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      setLoading(false);
    }, 1500);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save to simulated DB
    localStorage.setItem('user_profile', JSON.stringify(userData));
    alert('تم حفظ التغييرات بنجاح وتحديث قاعدة البيانات!');
  };

  // Posts State (Mock)
  const [posts, setPosts] = useState<Post[]>([
    { 
      id: 1, 
      content: 'سعيد جداً بالمشاركة في مؤتمر الخريجين السنوي اليوم. فرصة رائعة للقاء الزملاء القدامى ومناقشة مستقبل جامعتنا العريقة.', 
      likes: 45, 
      comments: 12, 
      isLiked: false, 
      timestamp: 'منذ ساعتين' 
    }
  ]);

  // Render Logic (Mostly unchanged from UI perspective, but data is now persistent)
  
  if (!isLoggedIn) {
     // ... (Login View - Same as before but I will keep it concise for the change block)
     return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-blue-900 mb-6">تسجيل الدخول مطلوب</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded-xl" />
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-3 border rounded-xl" />
                    <button disabled={loading} className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold">
                        {loading ? '...' : 'دخول'}
                    </button>
                </form>
            </div>
        </div>
     );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      {/* Cover */}
      <div className="relative h-[350px] bg-gray-300">
        <img src={userData.coverImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header Info */}
        <div className="flex flex-col items-center md:items-start -mt-28 mb-8 relative z-40 px-4">
           <div className="w-44 h-44 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white relative z-10 mb-4">
               <img src={userData.avatar} alt={userData.name} className="w-full h-full object-cover" />
           </div>
           
           <div className="text-center md:text-right space-y-2 mb-6 max-w-xl w-full">
             {isEditing ? (
               <div className="space-y-3 bg-white/90 p-4 rounded-xl shadow-lg w-full">
                 <input type="text" value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})} className="w-full p-2 border rounded" placeholder="الاسم" />
                 <input type="text" value={userData.headline} onChange={e => setUserData({...userData, headline: e.target.value})} className="w-full p-2 border rounded" placeholder="المسمى الوظيفي" />
                 <input type="text" value={userData.location} onChange={e => setUserData({...userData, location: e.target.value})} className="w-full p-2 border rounded" placeholder="الموقع" />
               </div>
             ) : (
               <div className="md:pr-2">
                 <h1 className="text-3xl font-extrabold text-gray-900 mb-1">{userData.name}</h1>
                 <p className="text-gray-600 font-medium text-lg">{userData.headline}</p>
                 <p className="text-gray-500 text-sm">{userData.location}</p>
               </div>
             )}
           </div>

           <div className="flex gap-3 justify-center md:justify-start">
             {isEditing ? (
               <button onClick={handleSaveProfile} className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold shadow-md hover:bg-green-700">حفظ التغييرات</button>
             ) : (
               <button onClick={() => setIsEditing(true)} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold shadow-md hover:bg-blue-700">تعديل الملف</button>
             )}
             <button onClick={() => { localStorage.removeItem('isLoggedIn'); setIsLoggedIn(false); }} className="bg-white border text-red-600 px-4 py-2 rounded-xl font-bold">خروج</button>
           </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="font-bold text-xl mb-4">عني</h3>
                    {isEditing ? (
                        <textarea value={userData.bio} onChange={e => setUserData({...userData, bio: e.target.value})} className="w-full p-2 border rounded h-32" />
                    ) : (
                        <p className="text-gray-600 text-sm">{userData.bio}</p>
                    )}
                    <div className="mt-4 pt-4 border-t space-y-2 text-sm">
                        <p><strong>العمل:</strong> {userData.work}</p>
                        <p><strong>التعليم:</strong> {userData.education}</p>
                    </div>
                </div>
            </div>

            <div className="md:col-span-2">
                 {/* Timeline / Posts */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                     <h3 className="font-bold mb-4">المنشورات</h3>
                     {posts.map(post => (
                         <div key={post.id} className="border-b pb-4 mb-4 last:border-0">
                             <p className="text-gray-800 mb-2">{post.content}</p>
                             <span className="text-xs text-gray-500">{post.timestamp}</span>
                         </div>
                     ))}
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
