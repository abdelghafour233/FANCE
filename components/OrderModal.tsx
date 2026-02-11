import React, { useState } from 'react';
import { X, CheckCircle, Phone, User, MessageCircle, AlertCircle } from 'lucide-react';
import { Product, OrderFormState } from '../types';

interface OrderModalProps {
  product: Product;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ product, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<OrderFormState>({
    fullName: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      console.log('Digital Order Submitted:', { product, customer: formData });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <h3 className="text-2xl font-bold text-gray-800 mb-2">تم تسجيل طلبك!</h3>
          <p className="text-gray-600 mb-6">
            شكراً {formData.fullName}.<br/>
            سنقوم بالتواصل معك عبر الواتساب على الرقم 
            <span className="font-bold text-gray-800 mx-1" dir="ltr">{formData.phone}</span>
            لإتمام الدفع وإرسال معلومات {product.name}.
          </p>
          <button 
            onClick={onClose}
            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-emerald-800 transition-colors"
          >
            تصفح المزيد
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 z-10 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Product Summary */}
        <div className="w-full md:w-5/12 bg-slate-50 p-6 flex flex-col justify-center border-l border-gray-100">
          <div className="relative aspect-video mb-6 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
             <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                <p className="font-bold text-sm">{product.category.toUpperCase()}</p>
             </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4 text-sm leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">{product.price} درهم</span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">{product.oldPrice} درهم</span>
              )}
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="w-full md:w-7/12 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <MessageCircle size={24} />
            <h2 className="text-2xl font-bold">احصل على الكود الآن</h2>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 flex gap-3 text-sm text-blue-800">
            <AlertCircle className="shrink-0 w-5 h-5" />
            <p>المرجو التأكد من رقم الهاتف لأنه هو الوسيلة التي سنرسل لك عبرها معلومات الحساب أو كود التفعيل.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                <User size={16} className="text-gray-400" />
                الاسم (أو اللقب)
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="مثال: محمد"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                رقم الواتساب
              </label>
              <input
                type="tel"
                name="phone"
                required
                dir="ltr"
                placeholder="06 XX XX XX XX"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-green-100 outline-none transition-all text-right"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2"
              >
                تأكيد واستلام عبر الواتساب
                <span className="text-secondary font-sans">←</span>
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                الدفع متاح عبر CIH, Barid Bank, أو التجاري (سنرسل التفاصيل بعد الطلب)
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};