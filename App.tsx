
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import ExecutiveOffice from './pages/ExecutiveOffice';
import AdvisoryCouncil from './pages/AdvisoryCouncil';
import Sectors from './pages/Sectors';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// Login Modal Component
const LoginModal = ({ isOpen, onClose, onLogin }: { isOpen: boolean; onClose: () => void; onLogin: () => void }) => {
  if (!isOpen) return null;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Auth
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('isLoggedIn', 'true');
      onLogin();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative z-10 animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 left-6 text-gray-400 hover:text-gray-600 bg-gray-50 p-2 rounded-full transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="text-center mb-8">
           <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 border-4 border-blue-100 shadow-sm">
             <img src="https://picsum.photos/seed/aiuag-logo/100/100" alt="Logo" className="w-full h-full rounded-full opacity-90" />
           </div>
           <h2 className="text-2xl font-bold text-blue-900">تسجيل دخول الأعضاء</h2>
           <p className="text-gray-500 text-sm mt-2">قم بإدخال بيانات عضويتك للوصول للوحة التحكم</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
           <div>
             <label className="block text-sm font-bold text-gray-700 mb-1">البريد الإلكتروني</label>
             <input 
               type="email" 
               required 
               value={email} 
               onChange={e => setEmail(e.target.value)} 
               className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900 transition-all text-left" 
               dir="ltr"
               placeholder="name@example.com"
             />
           </div>
           <div>
             <label className="block text-sm font-bold text-gray-700 mb-1">كلمة المرور</label>
             <input 
               type="password" 
               required 
               value={password} 
               onChange={e => setPassword(e.target.value)} 
               className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-900 transition-all text-left" 
               dir="ltr" 
               placeholder="••••••••"
             />
           </div>
           <button type="submit" disabled={loading} className="w-full bg-blue-900 text-white font-bold py-4 rounded-2xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-3 transform active:scale-[0.98]">
             {loading ? (
               <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
             ) : (
               <>
                <span>دخول آمن</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
               </>
             )}
           </button>
        </form>
        <div className="mt-6 text-center text-xs text-gray-400">
           <a href="#" className="hover:text-blue-600 transition-colors">نسيت كلمة المرور؟</a>
           <span className="mx-2">•</span>
           <Link to="/membership" onClick={onClose} className="hover:text-blue-600 transition-colors">طلب عضوية جديدة</Link>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    navigate('/dashboard');
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-blue-100" role="banner">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo - Acts as Login Trigger */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer group p-1 rounded-xl hover:bg-blue-50 transition-colors select-none"
            title="دخول الأعضاء / لوحة التحكم"
          >
            <div className="relative">
              <img src="https://picsum.photos/seed/aiuag-logo/100/100" alt="شعار الرابطة" className="w-12 h-12 rounded-full border border-blue-900 group-hover:scale-105 transition-transform" />
              <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 border-2 border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity scale-75">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-blue-900 font-bold text-lg leading-tight group-hover:text-blue-700 transition-colors">رابطة خريجي جامعة إفريقيا العالمية</h1>
              <p className="text-xs text-gray-500">Association of IUA Graduates</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6" role="navigation" aria-label="القائمة الرئيسية">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 hover:text-blue-700 relative py-1 ${location.pathname === link.path ? 'text-blue-900 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900' : 'text-gray-600'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden text-blue-900 p-2 hover:bg-gray-100 rounded-lg" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="فتح القائمة"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900 text-white absolute top-full left-0 right-0 py-4 flex flex-col items-center gap-4 shadow-xl border-t border-blue-800 animate-in fade-in slide-in-from-top-4 duration-300">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`py-2 w-full text-center hover:bg-blue-800 ${location.pathname === link.path ? 'bg-blue-800' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLoginSuccess} 
      />
    </>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8" role="contentinfo">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <img src="https://picsum.photos/seed/aiuag-logo/100/100" alt="" className="w-10 h-10 rounded-full" />
          رابطة خريجي جامعة إفريقيا العالمية
        </h3>
        <p className="text-gray-400 mb-8 leading-relaxed max-w-lg text-lg">
          مؤسسة عالمية تهدف لربط خريجي جامعة إفريقيا العالمية وتمكينهم من المساهمة الفعالة في نهضة مجتمعاتهم وإعادة إعمار جامعتهم الأم.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-600 transition-all transform hover:-translate-y-1" aria-label="Facebook">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-400 transition-all transform hover:-translate-y-1" aria-label="Twitter">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1" aria-label="LinkedIn">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-red-600 transition-all transform hover:-translate-y-1" aria-label="YouTube">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27z"></path></svg>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-xl mb-6 border-r-4 border-blue-600 pr-3">روابط هامة</h4>
        <ul className="space-y-3 text-gray-400">
          <li><Link to="/about" className="hover:text-white transition-colors">عن الرابطة</Link></li>
          <li><Link to="/news" className="hover:text-white transition-colors">الأخبار والفعاليات</Link></li>
          <li><Link to="/sectors" className="hover:text-white transition-colors">القطاعات التخصصية</Link></li>
          <li><Link to="/membership" className="hover:text-white transition-colors">بوابة العضوية</Link></li>
          <li><Link to="/" onClick={() => { localStorage.getItem('isLoggedIn') === 'true' ? window.location.hash = '#/dashboard' : null }} className="hover:text-white transition-colors cursor-pointer">لوحة تحكم الخريج</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-xl mb-6 border-r-4 border-blue-600 pr-3">بيانات التواصل</h4>
        <ul className="space-y-4 text-gray-400">
          <li className="flex gap-3">
            <span className="text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </span>
            <span>المركز الرئيسي، جامعة إفريقيا العالمية، الخرطوم</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </span>
            <span dir="ltr">+249 114210853</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            <span>info@aiuag.org</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center container mx-auto px-4 gap-4">
      <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - رابطة خريجي جامعة إفريقيا العالمية</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white">سياسة الخصوصية</a>
        <a href="#" className="hover:text-white">الشروط والأحكام</a>
        <a href="#" className="hover:text-white">اتفاقية الخدمة</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/executive" element={<ExecutiveOffice />} />
            <Route path="/advisory" element={<AdvisoryCouncil />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
