import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OrderModal } from './components/OrderModal';
import { CATEGORIES, PRODUCTS } from './constants';
import { CategoryId, Product } from './types';
import { LayoutGrid, Tv, Cpu, Palette, Gamepad, ShoppingBag, ShoppingCart, Headset, Shield, Zap } from 'lucide-react';

const CategoryIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'Tv': return <Tv size={20} />;
    case 'Cpu': return <Cpu size={20} />;
    case 'Palette': return <Palette size={20} />;
    case 'Gamepad': return <Gamepad size={20} />;
    default: return <LayoutGrid size={20} />;
  }
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Categories Section */}
        <section id="products" className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">اختر الخدمة</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-2">جميع التطبيقات والبرامج التي تحتاجها في مكان واحد</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                <CategoryIcon icon={cat.icon} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.oldPrice && (
                     <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-20">
                       وفر {(100 - (product.price / product.oldPrice) * 100).toFixed(0)}%
                     </div>
                  )}
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {CATEGORIES.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="block text-xl font-bold text-primary">{product.price} درهم</span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">{product.oldPrice} درهم</span>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-gray-900 text-white p-2.5 rounded-lg hover:bg-secondary hover:text-emerald-900 transition-colors shadow-md flex gap-2 items-center text-sm font-bold pr-3 pl-3"
                    >
                      <span>شراء</span>
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-dashed border-2 border-gray-200">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">لا توجد خدمات في هذا القسم حالياً.</p>
            </div>
          )}
        </section>

        {/* Features / Info Section */}
        <section className="bg-slate-900 text-white py-16 mt-12">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-10">لماذا يثق بنا الآلاف؟</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary transition-colors">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 text-white rotate-3">
                        <Zap size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">سرعة التنفيذ</h3>
                    <p className="text-slate-400">لا حاجة للانتظار. بمجرد إتمام الدفع، تتوصل بمعلومات حسابك أو مفتاح التفعيل.</p>
                 </div>
                 <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary transition-colors">
                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6 text-slate-900 -rotate-3">
                        <Shield size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">ضمان كامل</h3>
                    <p className="text-slate-400">جميع اشتراكاتنا رسمية ومضمونة طيلة مدة الاشتراك. الدعم الفني معك دائماً.</p>
                 </div>
                 <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-primary transition-colors">
                    <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white rotate-3">
                        <Headset size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">دعم فني 24/7</h3>
                    <p className="text-slate-400">فريقنا جاهز للإجابة على استفساراتكم ومساعدتكم في التثبيت والتفعيل.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <div className="bg-primary text-white p-1.5 rounded">
                    <Zap size={18} fill="currentColor" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">متجر ديجيتال</h2>
              </div>
              <p className="text-gray-500 text-sm max-w-sm">
                نوفر لك أفضل الحلول الرقمية، برامج، واشتراكات بأسعار تنافسية.
              </p>
            </div>
            
            <div className="flex gap-6 text-sm font-medium text-gray-600">
                <a href="#" className="hover:text-primary">الرئيسية</a>
                <a href="#" className="hover:text-primary">الشروط والأحكام</a>
                <a href="#" className="hover:text-primary">سياسة الخصوصية</a>
            </div>

            <div className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedProduct && (
        <OrderModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default App;