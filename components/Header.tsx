// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// *** 1. Translation Data และ Type Definitions ***
const translations = {
    en: {
        header: {
            home: 'Home',
            about: 'About Us',
            products: 'Products',
            service: 'Service',
            news: 'News',
            contact: 'Contact Us',
            toggleMenu: 'Header Menu', 
            switchToThai: 'Switch to Thai',
            switchToEnglish: 'Switch to English',
        },
    },
    th: {
        header: {
            home: 'หน้าแรก',
            about: 'เกี่ยวกับเรา',
            products: 'สินค้า',
            service: 'บริการ',
            news: 'ข่าวสาร',
            contact: 'ติดต่อเรา',
            toggleMenu: 'Header Menu',
            switchToThai: 'สลับเป็นภาษาไทย',
            switchToEnglish: 'สลับเป็นภาษาอังกฤษ',
        },
    },
};

type TranslationKeys = typeof translations;
export type Locale = keyof TranslationKeys; 

const menuItems = [
    'home', 'about', 'products', 'service', 'news', 'contact', 
    'toggleMenu', 'switchToThai', 'switchToEnglish'
] as const;
export type HeaderKeys = typeof menuItems[number]; 


// *** 2. Inline SVG Icons ***

const GlobeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className={className}>
        <path d="M288 32c-80.8 0-160.8 24.4-224 68.3v5.1L288 160l224-94.6v-5.1C448.8 56.4 368.8 32 288 32zM576 160.6c0-10.4-1.9-20.7-5.5-30.4L512 80c-25.9-10.7-53.7-16-81.8-16c-38.3 0-75.1 8-109 23.3L288 96l-3.2 1.4L183.1 64c-25.9-10.7-53.7-16-81.8-16c-38.3 0-75.1 8-109 23.3L5.5 130.2C1.9 140-.0 150.3 0 160.6c0 10.1 2.5 20 7.3 29.1L288 320l280.7-130.4c4.8-9.1 7.3-19.1 7.3-29.1zM288 352c-80.8 0-160.8 24.4-224 68.3v5.1L288 480l224-94.6v-5.1c-63.2-43.9-143.2-68.3-224-68.3zM576 352.6c0-10.4-1.9-20.7-5.5-30.4L512 288c-25.9-10.7-53.7-16-81.8-16c-38.3 0-75.1 8-109 23.3L288 320l-3.2 1.4L183.1 288c-25.9-10.7-53.7-16-81.8-16c-38.3 0-75.1 8-109 23.3L5.5 310.2C1.9 320-.0 330.3 0 340.6c0 10.1 2.5 20 7.3 29.1L288 480l280.7-130.4c4.8-9.1 7.3-19.1 7.3-29.1z" />
    </svg>
);

const BarsIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}>
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
);

const TimesIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className={className}>
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
);


// *** 3. Header Props ***
interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    locale: Locale; 
    t: (key: `header.${HeaderKeys}`) => string; 
    toggleLocale: () => void;
}


export default function Header({ isMenuOpen, toggleMenu, locale, t, toggleLocale }: HeaderProps) {
    
    const [isMounted, setIsMounted] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const headerClass =
        'fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-sm bg-black/60';

    const toggleMenuLabel = isMounted ? t('header.toggleMenu') : 'Header Menu'; 
    const langToggleLabel = isMounted 
        ? (locale === 'en' ? t('header.switchToThai') : t('header.switchToEnglish')) 
        : (locale === 'en' ? 'Switch to Thai' : 'Switch to English'); 
    

    return (
        <header className={headerClass}>
            <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-8">

                {/* โลโก้ */}
                <Link href="/" onClick={() => isMenuOpen && toggleMenu()}>
                    <Image
                        src="/vcommlighting-logo-placeholder.svg" 
                        alt="โลโก้ Vcommlighting"
                        width={150} 
                        height={40}
                        className="h-10 w-auto invert dark:invert-0"
                        priority
                    />
                </Link>

                {/* เมนูหลัก (Desktop) */}
                <nav className="hidden md:flex items-center space-x-6">
                    {/* แสดงลิงก์เมนู 6 รายการแรก */}
                    {menuItems.slice(0, 6).map((item) => ( 
                        <Link
                            key={item}
                            href={`/${item === 'home' ? '' : item}`}
                            className="text-white hover:text-yellow-400 transition-colors font-semibold uppercase text-sm tracking-widest"
                        >
                            {t(`header.${item}`)}
                        </Link>
                    ))}

                    {/* ตัวสลับภาษา (Desktop) */}
                    <button
                        onClick={toggleLocale}
                        type="button"
                        className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/20 transition-colors text-white" 
                        aria-label={langToggleLabel}
                    >
                        <GlobeIcon className="text-xl w-5 h-5" />
                        <span className="text-sm font-bold">
                            {locale === 'en' ? 'TH' : 'EN'}
                        </span>
                    </button>
                </nav>

                {/* Mobile Menu Controls (Hamburger Only) */}
                <div className="md:hidden flex items-center relative z-50"> 
                    {/* Hamburger Icon */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-white text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded relative z-50"
                        // *** แก้ไข ARIA attribute: ใช้ Boolean เป็น string ("true" | "false") เพื่อให้เป็นค่า ARIA ที่ถูกต้อง ***
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                        aria-label={toggleMenuLabel}
                    >
                        {isMenuOpen 
                            ? <TimesIcon className="w-6 h-6 block" /> 
                            : <BarsIcon className="w-6 h-6 block" />}
                    </button>
                </div>
            </div>
        </header>
    );
}