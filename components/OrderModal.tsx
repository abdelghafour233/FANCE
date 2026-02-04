import React, { useState } from 'react';
import { X, CheckCircle, MapPin, Phone, User, Truck } from 'lucide-react';
import { Product, OrderFormState } from '../types';
import { CITIES } from '../constants';

interface OrderModalProps {
  product: Product;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ product, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<OrderFormState>({
    fullName: '',
    city: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      console.log('Order Submitted:', { product, customer: formData });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">تم استلام طلبك!</h3>
          <p className="text-gray-600 mb-6">شكراً لك {formData.fullName}. سنتصل بك قريباً على الرقم {formData.phone} لتأكيد الطلب.</p>
          <button 
            onClick={onClose}
            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-emerald-800 transition-colors"
          >
            متابعة التسوق
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Product Summary (Left side on RTL, logically first in visual flow for Arabic?) 
            Actually in RTL layout: Right is 1st col, Left is 2nd col. 
            We want Image on one side, Form on other.
        */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 flex flex-col justify-center border-l border-gray-100">
          <div className="relative aspect-square mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
             <div className="absolute top-2 right-2 bg-secondary text-emerald-900 text-xs font-bold px-3 py-1 rounded-full">
              عرض خاص
            </div>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4 text-sm leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">{product.price} درهم</span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">{product.oldPrice} درهم</span>
              )}
            </div>
          </div>
        </div>

        {/* Order Form (Right side) */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <Truck size={24} />
            <h2 className="text-2xl font-bold">أكمل طلبك الآن</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                <User size={16} className="text-gray-400" />
                الاسم الكامل
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="أدخل اسمك هنا..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                رقم الهاتف
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="06XXXXXXXX"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                المدينة
              </label>
              <select
                name="city"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all bg-white"
                value={formData.city}
                onChange={handleInputChange}
              >
                <option value="">اختر مدينتك...</option>
                {CITIES.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 text-sm text-yellow-800 flex items-start gap-2">
                <span className="mt-0.5 text-xl">🚚</span>
                <p>الدفع عند الاستلام. التوصيل مجاني للطلبات فوق 500 درهم.</p>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2"
              >
                تأكيد الطلب الآن
                <span className="text-secondary font-sans">←</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};