
import { Package, Service, Offer } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'pkg-basic',
    name: 'الباقة الأساسية 🥉',
    price: 400,
    duration: 'شهري',
    platforms: 2,
    posts: 8,
    images: 12,
    description: 'خيار ممتاز للبدايات، نوفر لك تواجد احترافي بأقل التكاليف.',
    features: ['إدارة منصتين', '8 منشورات شهرية', 'تصميم 12 صورة', 'تقرير أداء بسيط'],
    tier: 'basic'
  },
  {
    id: 'pkg-medium',
    name: 'الباقة المتوسطة 🥈',
    price: 1200,
    duration: 'شهري',
    platforms: 4,
    posts: 16,
    images: 24,
    description: 'الباقة الأكثر طلباً، توازن مثالي بين السعر والأداء القوي.',
    features: ['إدارة 4 منصات', '16 منشور شهرية', 'تصميم 24 صورة', 'إدارة تعليقات', 'تقرير مفصل'],
    tier: 'medium'
  },
  {
    id: 'pkg-advanced',
    name: 'الباقة المتقدمة 🥇',
    price: 3500,
    duration: 'شهري',
    platforms: 6,
    posts: 30,
    images: 45,
    description: 'للمحترفين والشركات الكبرى، سيطرة كاملة على العالم الرقمي.',
    features: ['إدارة جميع المنصات', 'منشور يومي', 'تصاميم احترافية غير محدودة', 'إدارة حملات إعلانية', 'تصوير فيديو احترافي'],
    tier: 'advanced'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'svc-basic',
    name: 'خدمة أساسية 🥉',
    price: 50,
    description: 'تحسين ملفات التعريف وكتابة المحتوى البسيط.',
    details: ['تعديل البايو', 'تنسيق الروابط', 'إضافة كلمات مفتاحية'],
    icon: 'sparkles'
  },
  {
    id: 'svc-medium',
    name: 'خدمة متوسطة 🥈',
    price: 250,
    description: 'تصميم جرافيك متقدم وإدارة الردود السريعة.',
    details: ['3 تصاميم احترافية', 'إدارة الرسائل لمدة يومين', 'كتابة محتوى إبداعي'],
    icon: 'brush'
  },
  {
    id: 'svc-advanced',
    name: 'خدمة متقدمة 🥇',
    price: 850,
    description: 'حملات إعلانية ممولة وتحليل دقيق للمنافسين.',
    details: ['إطلاق حملة إعلانية', 'دراسة السوق', 'تقارير ذكاء اصطناعي'],
    icon: 'chart-bar'
  }
];

export const GOLDEN_OFFERS: Offer[] = [
  {
    id: 'off-1',
    title: 'عرض التأسيس الذهبي',
    discount: 'خصم 50%',
    deadline: new Date(Date.now() + 86400000 * 2),
    image: 'https://picsum.photos/400/300?random=1',
    isGolden: true
  },
  {
    id: 'off-2',
    title: 'باقة الفيديو الترويجية',
    discount: 'خصم 30%',
    deadline: new Date(Date.now() + 3600000 * 5),
    image: 'https://picsum.photos/400/300?random=2',
    isGolden: true
  },
  {
    id: 'off-3',
    title: 'عرض الإدارة السنوية',
    discount: 'شهرين مجاناً',
    deadline: new Date(Date.now() + 86400000 * 10),
    image: 'https://picsum.photos/400/300?random=3',
    isGolden: true
  }
];

export const CONTACT_PHONE = '+905526914399';
