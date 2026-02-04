import React from 'react';
import { ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-emerald-800 text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6 text-center md:text-right">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
            توصيل سريع لجميع المدن 🇲🇦
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            أفضل المنتجات <br />
            <span className="text-secondary">بأفضل الأسعار</span>
          </h2>
          <p className="text-lg text-emerald-100 max-w-xl">
            تسوق الآن واستفد من عروض حصرية. الدفع عند الاستلام لضمان راحتك وأمانك.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#products" className="bg-secondary text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition-colors shadow-lg flex items-center gap-2">
              <ShoppingCart size={20} />
              تسوق الآن
            </a>
            <div className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg backdrop-blur-sm">
              <Truck size={20} />
              <span>الدفع عند الاستلام</span>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes or Image placeholder */}
        <div className="flex-1 w-full max-w-md relative">
           <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform scale-110"></div>
           <img 
             src="https://picsum.photos/id/119/600/600" 
             alt="Featured Product" 
             className="relative z-10 rounded-2xl shadow-2xl border-4 border-white/20 rotate-3 hover:rotate-0 transition-transform duration-500 w-full object-cover h-80 md:h-96"
           />
        </div>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
           <div className="bg-white/20 p-2 rounded-full"><Truck className="text-secondary" /></div>
           <div>
             <h3 className="font-bold">توصيل سريع</h3>
             <p className="text-sm text-emerald-100">إلى جميع مدن المملكة</p>
           </div>
        </div>
        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
           <div className="bg-white/20 p-2 rounded-full"><ShieldCheck className="text-secondary" /></div>
           <div>
             <h3 className="font-bold">ضمان الجودة</h3>
             <p className="text-sm text-emerald-100">منتجات أصلية ومضمونة</p>
           </div>
        </div>
         <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
           <div className="bg-white/20 p-2 rounded-full"><ShoppingCart className="text-secondary" /></div>
           <div>
             <h3 className="font-bold">سعر مناسب</h3>
             <p className="text-sm text-emerald-100">أفضل العروض في السوق</p>
           </div>
        </div>
      </div>
    </div>
  );
};