import React from 'react';
import { Zap, Search, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-lg">
            <Zap size={24} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            متجر<span className="text-primary">ديجيتال</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-primary transition-colors">الرئيسية</a>
          <a href="#products" className="hover:text-primary transition-colors">الخدمات</a>
          <a href="#about" className="hover:text-primary transition-colors">طريقة التفعيل</a>
          <a href="#contact" className="hover:text-primary transition-colors">الدعم الفني</a>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
            <Search size={22} />
          </button>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};