import React from 'react';
import { ShoppingCart, Zap, ShieldCheck, Clock } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-primary text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6 text-center md:text-right">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
            🚀 تفعيل فوري لجميع الخدمات
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            عالمك الرقمي <br />
            <span className="text-secondary">بأرخص الأثمنة</span>
          </h2>
          <p className="text-lg text-emerald-100 max-w-xl">
            احصل على اشتراكات Netflix، Spotify، برامج Windows والمزيد بأسعار لا تقبل المنافسة. توصل بالكود فوراً عبر الواتساب.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#products" className="bg-secondary text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition-colors shadow-lg flex items-center gap-2">
              <Zap size={20} fill="currentColor" />
              اكتشف العروض
            </a>
            <div className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg backdrop-blur-sm">
              <ShieldCheck size={20} />
              <span>ضمان كامل المدة</span>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes or Image placeholder */}
        <div className="flex-1 w-full max-w-md relative">
           <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform scale-110"></div>
           <img 
             src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=800&auto=format&fit=crop" 
             alt="Digital Lifestyle" 
             className="relative z-10 rounded-2xl shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 w-full object-cover h-80 md:h-96"
           />
        </div>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
           <div className="bg-white/20 p-2 rounded-full"><Clock className="text-secondary" /></div>
           <div>
             <h3 className="font-bold">تسليم فوري</h3>
             <p className="text-sm text-emerald-100">تصلك معلومات الحساب في دقائق</p>
           </div>
        </div>
        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
           <div className="bg-white/20 p-2 rounded-full"><ShieldCheck className="text-secondary" /></div>
           <div>
             <h3 className="font-bold">ضمان وموثوقية</h3>
             <p className="text-sm text-emerald-100">تعويض فوري في حال أي خلل</p>
           </div>
        </div>
         <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
           <div className="bg-white/20 p-2 rounded-full"><ShoppingCart className="text-secondary" /></div>
           <div>
             <h3 className="font-bold">أسعار رمزية</h3>
             <p className="text-sm text-emerald-100">توفير يصل إلى 80% من السعر الرسمي</p>
           </div>
        </div>
      </div>
    </div>
  );
};