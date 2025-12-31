import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ar: 'من نحن' },
  'nav.advice': { en: 'Dental Advice', ar: 'نصائح طبية' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },
  'nav.book': { en: 'Book Appointment', ar: 'حجز موعد' },

  // Hero Section
  'hero.trusted': { en: 'Trusted by 1000+ Happy Patients', ar: 'موثوق من قبل أكثر من 1000 مريض سعيد' },
  'hero.title1': { en: 'Your Smile,', ar: 'ابتسامتك،' },
  'hero.title2': { en: 'Our Priority', ar: 'أولويتنا' },
  'hero.clinic': { en: 'Al-Babr Dental Clinic', ar: 'عيادة البابر لطب الأسنان' },
  'hero.description': { 
    en: 'Experience exceptional dental care with Dr. Ahmed. We combine modern technology with a gentle, personalized approach for your comfort.', 
    ar: 'استمتع برعاية أسنان استثنائية مع الدكتور أحمد. نجمع بين التكنولوجيا الحديثة والنهج اللطيف والشخصي لراحتك.' 
  },
  'hero.gentleCare': { en: 'Gentle Care', ar: 'رعاية لطيفة' },
  'hero.modernTech': { en: 'Modern Technology', ar: 'تكنولوجيا حديثة' },
  'hero.support': { en: '24/7 Support', ar: 'دعم على مدار الساعة' },
  'hero.meetDoctor': { en: 'Meet Dr. Ahmed', ar: 'تعرف على د. أحمد' },
  'hero.callUs': { en: 'Call us anytime', ar: 'اتصل بنا في أي وقت' },

  // Services
  'services.title': { en: 'Our Services', ar: 'خدماتنا' },
  'services.subtitle': { en: 'Comprehensive Dental Care', ar: 'رعاية أسنان شاملة' },
  'services.viewAll': { en: 'View All Services', ar: 'عرض جميع الخدمات' },

  // About
  'about.title': { en: 'About The Doctor', ar: 'عن الطبيب' },
  'about.experience': { en: 'Years Experience', ar: 'سنوات الخبرة' },
  'about.patients': { en: 'Happy Patients', ar: 'مرضى سعداء' },
  'about.certifications': { en: 'Certifications', ar: 'الشهادات' },
  'about.learnMore': { en: 'Learn More About Us', ar: 'اعرف المزيد عنا' },

  // Contact
  'contact.title': { en: 'Contact Us', ar: 'اتصل بنا' },
  'contact.getInTouch': { en: 'Get In Touch', ar: 'تواصل معنا' },
  'contact.sendMessage': { en: 'Send Us a Message', ar: 'أرسل لنا رسالة' },
  'contact.name': { en: 'Name', ar: 'الاسم' },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.subject': { en: 'Subject', ar: 'الموضوع' },
  'contact.message': { en: 'Message', ar: 'الرسالة' },
  'contact.send': { en: 'Send Message', ar: 'إرسال الرسالة' },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.location': { en: 'Location', ar: 'الموقع' },
  'contact.hours': { en: 'Working Hours', ar: 'ساعات العمل' },

  // Booking
  'book.title': { en: 'Book Your Appointment', ar: 'احجز موعدك' },
  'book.selectDate': { en: 'Select Date', ar: 'اختر التاريخ' },
  'book.selectTime': { en: 'Select Time', ar: 'اختر الوقت' },
  'book.patientName': { en: 'Patient Name', ar: 'اسم المريض' },
  'book.phone': { en: 'Phone Number', ar: 'رقم الهاتف' },
  'book.notes': { en: 'Additional Notes', ar: 'ملاحظات إضافية' },
  'book.confirm': { en: 'Confirm Booking', ar: 'تأكيد الحجز' },

  // Footer
  'footer.rights': { en: 'All rights reserved', ar: 'جميع الحقوق محفوظة' },
  'footer.quickLinks': { en: 'Quick Links', ar: 'روابط سريعة' },
  'footer.services': { en: 'Services', ar: 'الخدمات' },
  'footer.followUs': { en: 'Follow Us', ar: 'تابعنا' },

  // Common
  'common.loading': { en: 'Loading...', ar: 'جاري التحميل...' },
  'common.error': { en: 'Something went wrong', ar: 'حدث خطأ ما' },
  'common.success': { en: 'Success!', ar: 'تم بنجاح!' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('language', newLang);
      // Update document direction and language immediately
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLang;
      // Refresh the page to apply language changes everywhere
      window.location.reload();
      return newLang;
    });
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
