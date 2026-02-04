import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-lg">
            <ShoppingBag size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            متجر<span className="text-primary">المغرب</span>
          </h1>
        </div>

        {/* Desktop Nav - Hidden on mobile for simplicity in this demo */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-primary transition-colors">الرئيسية</a>
          <a href="#products" className="hover:text-primary transition-colors">المنتجات</a>
          <a href="#about" className="hover:text-primary transition-colors">من نحن</a>
          <a href="#contact" className="hover:text-primary transition-colors">اتصل بنا</a>
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