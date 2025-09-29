// components/RootLayoutProvider.tsx (ส่วนที่แก้ไข)

'use client';

import React, { useState } from 'react';
// Import Header และ Sidebar
import Header, { Locale, HeaderKeys } from './Header'; 
import Sidebar from './Sidebar';
import Footer from './Footer';

// *** 1. Translation Data (แก้ไข: contact -> case) ***
const translations = {
    en: { 
        header: {
            home: 'Home', about: 'About Us', products: 'Products', service: 'Service', 
            case: 'Case Collection', toggleMenu: 'Toggle menu', // <--- แก้ไขตรงนี้
            switchToThai: 'Switch to Thai', switchToEnglish: 'Switch to English',
        },
    },
    th: {
        header: {
            home: 'หน้าแรก', about: 'เกี่ยวกับเรา', products: 'สินค้า', service: 'บริการ', 
            case: 'ผลงาน', toggleMenu: 'สลับเมนู', // <--- แก้ไขตรงนี้
            switchToThai: 'สลับเป็นภาษาไทย', switchToEnglish: 'สลับเป็นภาษาอังกฤษ',
        },
    },
};

// *** 2. useI18n Hook (ยังคงเดิม) ***
// ... (useI18n code remains the same) ...

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


// *** 3. RootLayoutProvider Component (แก้ไข: contact -> case) ***
interface RootLayoutProviderProps {
    children: React.ReactNode;
    fontClasses: string; 
}

// items ที่ใช้ใน Sidebar (แก้ไข: contact -> case)
const sidebarMenuItems = ['home', 'about', 'products', 'service', 'case'] as const; // <--- แก้ไขตรงนี้


export default function RootLayoutProvider({ children, fontClasses }: RootLayoutProviderProps) {
// ... (Rest of the component remains the same) ...
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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