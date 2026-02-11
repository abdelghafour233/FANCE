import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'الكل', icon: 'LayoutGrid' },
  { id: 'streaming', name: 'اشتراكات المشاهدة', icon: 'Tv' },
  { id: 'software', name: 'برامج وتفعيل', icon: 'Cpu' },
  { id: 'design', name: 'أدوات التصميم', icon: 'Palette' },
  { id: 'games', name: 'ألعاب وشحن', icon: 'Gamepad' },
];

export const PRODUCTS: Product[] = [
  // Streaming
  {
    id: 1,
    name: 'Netflix Premium (شهر واحد)',
    price: 35,
    oldPrice: 65,
    category: 'streaming',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8efe30?q=80&w=800&auto=format&fit=crop', 
    description: 'حساب نتفليكس 4K بريميوم، ملف خاص بك، ضمان كامل المدة. استمتع بأحدث الأفلام والمسلسلات.'
  },
  {
    id: 2,
    name: 'Spotify Premium (3 أشهر)',
    price: 50,
    oldPrice: 90,
    category: 'streaming',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800&auto=format&fit=crop',
    description: 'استمع للموسيقى بدون إعلانات. حساب خاص بك تفعيل رسمي على إيميلك الشخصي.'
  },
  {
    id: 3,
    name: 'IPTV Smarters (12 شهر)',
    price: 199,
    oldPrice: 350,
    category: 'streaming',
    image: 'https://images.unsplash.com/photo-1593784697501-80a003be378f?q=80&w=800&auto=format&fit=crop',
    description: 'أكثر من 10,000 قناة عالمية وعربية، مكتبة أفلام ضخمة، ثبات عالي بدون تقطيع.'
  },
  {
    id: 4,
    name: 'Shahid VIP (اشتراك رياضي)',
    price: 45,
    oldPrice: 80,
    category: 'streaming',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop', // Abstract cinema/sports
    description: 'تابع الدوري السعودي وأحدث المسلسلات العربية بجودة عالية. حساب مشترك مضمون.'
  },
  // Software
  {
    id: 5,
    name: 'Windows 11 Pro Key',
    price: 99,
    oldPrice: 250,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1626218174358-77b7975c423d?q=80&w=800&auto=format&fit=crop', // Windows/Computer abstract
    description: 'مفتاح تفعيل أصلي مدى الحياة. يدعم التحديثات الرسمية من مايكروسوفت. يرسل فوراً.'
  },
  {
    id: 6,
    name: 'Office 365 Pro Plus',
    price: 80,
    oldPrice: 150,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1662657833502-3652c6769992?q=80&w=800&auto=format&fit=crop',
    description: 'حساب أوفيس 365 أصلي (Word, Excel, PowerPoint) مساحة تخزين 1TB OneDrive.'
  },
  {
    id: 7,
    name: 'Kaspersky Total Security',
    price: 120,
    oldPrice: 200,
    category: 'software',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800&auto=format&fit=crop',
    description: 'حماية كاملة لجهازك من الفيروسات والتهديدات. تفعيل لمدة سنة كاملة.'
  },
  // Design
  {
    id: 8,
    name: 'Canva Pro (تفعيل مدى الحياة)',
    price: 60,
    oldPrice: 120,
    category: 'design',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    description: 'انضمام لفريق تعليمي. استمتع بكل ميزات البرو، قوالب لا محدودة، إزالة الخلفية، والمزيد.'
  },
  // Games
  {
    id: 9,
    name: 'Xbox Game Pass Ultimate',
    price: 90,
    category: 'games',
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop',
    description: 'وصول لمئات الألعاب على الكونسول والPC. اشتراك لمدة شهرين.'
  }
];