import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'الكل', icon: 'LayoutGrid' },
  { id: 'glasses', name: 'النظارات', icon: 'Glasses' },
  { id: 'watches', name: 'الساعات', icon: 'Watch' },
  { id: 'car_accessories', name: 'إكسسوارات السيارة', icon: 'Car' },
  { id: 'misc', name: 'متنوعات', icon: 'ShoppingBag' },
];

export const PRODUCTS: Product[] = [
  // Glasses
  {
    id: 1,
    name: 'نظارات شمسية كلاسيك',
    price: 199,
    oldPrice: 299,
    category: 'glasses',
    image: 'https://picsum.photos/id/200/500/500', // placeholder
    description: 'نظارات شمسية عالية الجودة بحماية UV400، تصميم عصري يناسب جميع الأذواق.'
  },
  {
    id: 2,
    name: 'نظارات طبية بإطار أسود',
    price: 150,
    category: 'glasses',
    image: 'https://picsum.photos/id/201/500/500',
    description: 'إطار خفيف ومريح للاستخدام اليومي، متين وأنيق.'
  },
  // Watches
  {
    id: 3,
    name: 'ساعة رجالية فاخرة',
    price: 450,
    oldPrice: 600,
    category: 'watches',
    image: 'https://picsum.photos/id/175/500/500', // watch related usually
    description: 'ساعة يد معدنية مقاومة للماء، تصميم فخم للمناسبات الخاصة والعمل.'
  },
  {
    id: 4,
    name: 'ساعة رياضية ذكية',
    price: 300,
    category: 'watches',
    image: 'https://picsum.photos/id/1060/500/500',
    description: 'تتبع نبضات القلب والنشاط الرياضي، بطارية تدوم طويلاً.'
  },
  // Car Accessories
  {
    id: 5,
    name: 'حامل هاتف للسيارة',
    price: 89,
    oldPrice: 120,
    category: 'car_accessories',
    image: 'https://picsum.photos/id/1070/500/500',
    description: 'ثبات عالي ومرونة في التحريك، يناسب جميع أنواع الهواتف.'
  },
  {
    id: 6,
    name: 'مكنسة سيارة محمولة',
    price: 199,
    category: 'car_accessories',
    image: 'https://picsum.photos/id/111/500/500',
    description: 'قوة شفط عالية لتنظيف السيارة بسهولة، تعمل على ولاعة السيارة.'
  },
  // Misc
  {
    id: 7,
    name: 'حقيبة ظهر عصرية',
    price: 250,
    category: 'misc',
    image: 'https://picsum.photos/id/103/500/500',
    description: 'مساحة واسعة للابتوب والأغراض الشخصية، قماش مقاوم للماء.'
  },
  {
    id: 8,
    name: 'سماعات بلوتوث',
    price: 180,
    oldPrice: 250,
    category: 'misc',
    image: 'https://picsum.photos/id/305/500/500',
    description: 'صوت نقي وعزل للضوضاء، تصميم مريح للأذن.'
  }
];

export const CITIES = [
  "الدار البيضاء", "الرباط", "فاس", "مراكش", "أكادير", "طنجة", "مكناس", "وجدة", "القنيطرة", "تطوان", "العيون", "آسفي"
];