// components/RootLayoutProvider.tsx
'use client';

import React, { useState } from 'react';
// Import Header และ Sidebar
import Header, { Locale, HeaderKeys } from './Header'; // ต้อง Import Locale และ HeaderKeys
import Sidebar from './Sidebar';
import Footer from './Footer';

// *** 1. Translation Data (คัดลอกมาจาก Header.tsx) ***
const translations = {
    en: { 
        header: {
            home: 'Home', about: 'About Us', products: 'Products', service: 'Service', 
            contact: 'Contact Us', toggleMenu: 'Toggle menu', 
            switchToThai: 'Switch to Thai', switchToEnglish: 'Switch to English',
        },
    },
    th: {
        header: {
            home: 'หน้าแรก', about: 'เกี่ยวกับเรา', products: 'สินค้า', service: 'บริการ', 
            contact: 'ติดต่อเรา', toggleMenu: 'สลับเมนู',
            switchToThai: 'สลับเป็นภาษาไทย', switchToEnglish: 'สลับเป็นภาษาอังกฤษ',
        },
    },
};

// *** 2. useI18n Hook (แก้ไขให้มีการ return อย่างชัดเจน) ***
const useI18n = () => {
    // ใช้ Locale Type จาก Header.tsx
    const [locale, setLocale] = useState<Locale>('en'); 
    
    // ใช้ HeaderKeys Type จาก Header.tsx
    const t = (key: `header.${HeaderKeys}`) => { 
        const [category, item] = key.split('.') as ['header', HeaderKeys];
        return translations[locale]?.[category]?.[item] || key; 
    };
    
    const toggleLocale = () => {
        setLocale(prev => (prev === 'en' ? 'th' : 'en'));
    };
    
    return { locale, t, toggleLocale };
};

// *** 3. RootLayoutProvider Component ***
interface RootLayoutProviderProps {
    children: React.ReactNode;
    fontClasses: string; // รับ String ของ Class Name เข้ามา
}

// items ที่ใช้ใน Sidebar
const sidebarMenuItems = ['home', 'about', 'products', 'service', 'contact'] as const;


export default function RootLayoutProvider({ children, fontClasses }: RootLayoutProviderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // *** FIX: Destructuring จาก Hook ที่ถูกแก้ไขแล้ว ***
    const { locale, t, toggleLocale } = useI18n(); 

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleToggleLocale = () => {
        toggleLocale();
    };

    return (
        <div className={`antialiased min-h-screen flex flex-col ${fontClasses}`}> 
            <Header 
                isMenuOpen={isMenuOpen} 
                toggleMenu={toggleMenu} 
                locale={locale} 
                t={t} 
                toggleLocale={handleToggleLocale}
            />

            {/* Sidebar สำหรับ Mobile View */}
            <Sidebar 
                isOpen={isMenuOpen} 
                onClose={toggleMenu}
                menuItems={sidebarMenuItems} 
                t={t}
                locale={locale}
                toggleLocale={handleToggleLocale}
            />

            {/* Main Content: pt-20 ชดเชย Header fixed */}
            <main className={`flex-grow pt-20 ${isMenuOpen ? 'md:blur-none md:pointer-events-auto blur-sm pointer-events-none' : ''}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
}