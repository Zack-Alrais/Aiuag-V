
import React from 'react';
import { Secretariat } from './types';

export const NAV_LINKS = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'من نحن' },
  { path: '/executive', label: 'المكتب التنفيذي' },
  { path: '/advisory', label: 'المجلس الاستشاري' },
  { path: '/sectors', label: 'القطاعات' },
  { path: '/news', label: 'الأخبار' },
  { path: '/membership', label: 'العضوية' },
  { path: '/profile', label: 'الملف الشخصي' },
  { path: '/contact', label: 'تواصل معنا' },
];

export const SECRETARIATS: Secretariat[] = [
  { 
    title: 'أمانة الشؤون المالية والإدارية', 
    description: 'مسؤولة عن وضع الخطط والبرامج المالية، ومسك الدفاتر المحاسبية وإدارة الأصول.', 
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
  },
  { 
    title: 'أمانة العلاقات الخارجية', 
    description: 'تختص بتكوين الروابط الفرعية بالدول المختلفة وتعريف المنظمات بالرابطة وأهدافها.', 
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> 
  },
  { 
    title: 'أمانة الثقافة والمجتمع', 
    description: 'تعزيز التواصل الثقافي بين الخريجين وإقامة الفعاليات الاجتماعية لتقوية اللحمة.', 
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> 
  },
  { 
    title: 'أمانة التخطيط والتدريب', 
    description: 'وضع الخطط الاستراتيجية وتنمية الموارد البشرية من خلال دورات متخصصة.', 
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> 
  },
  { 
    title: 'أمانة البحوث والتنمية', 
    description: 'دعم وتشجيع البحث العلمي والتعاون مع مراكز البحوث والدراسات الدولية.', 
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> 
  },
  { 
    title: 'أمانة الإعلام والنشر', 
    description: 'التغطية الإعلامية لأنشطة الرابطة وإدارة المنصات الرقمية والمطبوعات.', 
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> 
  },
  { 
    title: 'أمانة المرأة والمعلومات', 
    description: 'تقديم البرامج النوعية لشؤون المرأة الخريجة وإدارة قواعد بيانات الأعضاء.', 
    icon: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> 
  },
];

export const HISTORY_TIMELINE = [
  { period: '1980–1991', title: 'مرحلة التأسيس', desc: 'بدايات التجمع الطلابي والخريجين الأوائل.' },
  { period: '1995', title: 'مرحلة التوسع', desc: 'انتشار خريجي الجامعة في دول الجوار والمنطقة.' },
  { period: '1995–2001', title: 'مرحلة التنظيم', desc: 'بدء العمل المؤسسي ووضع النظم اللائحية.' },
  { period: '2002', title: 'مرحلة الانفتاح', desc: 'تعزيز العلاقات مع المنظمات الدولية والإقليمية.' },
  { period: '2007', title: 'الرؤية الجديدة', desc: 'تحديث الأهداف الاستراتيجية لتواكب تطورات الجامعة.' },
  { period: '2015', title: 'المؤتمر التأسيسي', desc: 'انعقاد المؤتمر الجامع وإقرار النظام الأساسي.' },
];
