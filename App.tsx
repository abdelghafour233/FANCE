import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OrderModal } from './components/OrderModal';
import { CATEGORIES, PRODUCTS } from './constants';
import { CategoryId, Product } from './types';
import { LayoutGrid, Glasses, Watch, Car, ShoppingBag, ShoppingCart } from 'lucide-react';

const CategoryIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'Glasses': return <Glasses size={20} />;
    case 'Watch': return <Watch size={20} />;
    case 'Car': return <Car size={20} />;
    case 'ShoppingBag': return <ShoppingBag size={20} />;
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Categories Section */}
        <section id="products" className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">تسوق حسب القسم</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-primary border-primary text-white shadow-lg scale-105'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                <CategoryIcon icon={cat.icon} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.oldPrice && (
                     <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                       تخفيض {(100 - (product.price / product.oldPrice) * 100).toFixed(0)}%
                     </div>
                  )}
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <div className="text-xs text-primary font-bold mb-1 uppercase tracking-wider">
                    {CATEGORIES.find(c => c.id === product.category)?.name}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="block text-xl font-bold text-primary">{product.price} درهم</span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.oldPrice} درهم</span>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="bg-gray-900 text-white p-3 rounded-xl hover:bg-secondary hover:text-emerald-900 transition-colors shadow-md"
                      title="اطلب الآن"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-dashed border-2 border-gray-200">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">لا توجد منتجات في هذا القسم حالياً.</p>
            </div>
          )}
        </section>

        {/* Features / Info Section */}
        <section className="bg-emerald-50 py-16 mt-12">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">لماذا تختارنا؟</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">1</div>
                    <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
                    <p className="text-gray-600">نختار منتجاتنا بعناية فائقة لضمان أفضل تجربة لك.</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">2</div>
                    <h3 className="text-xl font-bold mb-2">أفضل الأسعار</h3>
                    <p className="text-gray-600">أسعار تنافسية وعروض حصرية لعملائنا في المغرب.</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">3</div>
                    <h3 className="text-xl font-bold mb-2">خدمة عملاء</h3>
                    <p className="text-gray-600">فريقنا جاهز للإجابة على استفساراتكم ومساعدتكم.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">متجر المغرب</h2>
              <p className="text-gray-400 max-w-sm">
                منصتك الأولى للتسوق الإلكتروني في المغرب. نوفر لك منتجات عالية الجودة مع خدمة التوصيل والدفع عند الاستلام.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">الرئيسية</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">المنتجات</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">من نحن</a></li>
              </ul>
            </div>
            <div>
               <h3 className="text-white font-bold mb-4">تواصل معنا</h3>
               <ul className="space-y-2 text-sm">
                 <li>الدار البيضاء، المغرب</li>
                 <li>05-22-00-00-00</li>
                 <li>support@store.ma</li>
               </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمتجر المغرب.
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