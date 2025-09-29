// components/Sidebar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Import ไอคอนทั้งหมดจาก lucide-react เพื่อความสอดคล้อง
import { 
    FileDigit, 
    Gem, 
    Crown, 
    CalendarCheck, 
    Book, 
    Code, 
    Settings, 
    Database, 
    Plug,
    Info, 
    HeartHandshake,
    X,
    Menu, 
    Globe 
} from 'lucide-react'; 
import { FaGithub } from 'react-icons/fa'; 
import { BiSearchAlt } from 'react-icons/bi'; 

// *************************************************************
// Type Definitions (แก้ไขสำหรับ TS2345)
// *************************************************************
type Locale = 'en' | 'th'; 
type MainMenuItemKey = 'home' | 'about' | 'products' | 'service' | 'contact';
type HeaderKeys = MainMenuItemKey | 'toggleMenu' | 'switchToThai' | 'switchToEnglish';
type TFunction = (key: `header.${HeaderKeys}`) => string;


// *************************************************************
// Component: MenuItem
// *************************************************************
interface MenuItemProps {
    icon: React.ReactNode;
    text: string;
    href?: string;
    isExternal?: boolean; 
    onClick?: () => void; 
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, href, isExternal = false, onClick }) => {
    
    const baseClasses = "flex items-center p-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150";
    
    // สำหรับปุ่มที่มี onClick (เช่นปุ่มเปลี่ยนภาษา)
    if (onClick && !href) {
        return (
            <div className={baseClasses} onClick={onClick}>
                <div className="mr-3 text-teal-800">{icon}</div>
                <span>{text}</span>
            </div>
        );
    }
    
    const linkProps = isExternal 
        ? { target: "_blank", rel: "noopener noreferrer" } 
        : {};

    return (
        <Link 
            href={href!} 
            className={baseClasses} 
            onClick={onClick}
            {...linkProps}
        >
            <div className="mr-3 text-teal-800">{icon}</div>
            <span>{text}</span>
        </Link>
    );
};


// *************************************************************
// Component: Sidebar
// *************************************************************
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: readonly MainMenuItemKey[]; 
    t: TFunction;
    locale: Locale;
    toggleLocale: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, menuItems, t, locale, toggleLocale }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleLanguageToggle = () => {
        toggleLocale();
    };
    
    const langToggleText = locale === 'en' ? t('header.switchToThai') : t('header.switchToEnglish');

    return (
        <>
            {/* Overlay for mobile view */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-10 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* *** แก้ไข: เปลี่ยนจาก left-0 เป็น top-0 และใช้ translate-y เพื่อเลื่อนจากบนลงล่าง *** */}
            {/* *** กำหนดความสูงเป็น full เพื่อให้เต็มหน้าจอในแนวตั้ง *** */}
            {/* *** แก้ไข: เพิ่ม bg-white/30, backdrop-blur-md, และ shadow-xl เพื่อทำพื้นหลังใสเบลอ *** */}
            <aside className={`fixed inset-x-0 top-0 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out md:hidden w-full h-full bg-white/30 backdrop-blur-md shadow-xl overflow-y-auto z-50`}>
                
                {/* Header (Mobile Only) - ปุ่มปิดถูกจัดชิดขวา */}
                {/* *** แก้ไข: เปลี่ยนเป็น justify-end เพื่อให้ปุ่มปิดอยู่ขวา และนำ h2 ออก *** */}
                <div className="flex justify-end items-center p-4 border-b bg-gray-10 h-20">
                    
                    <button 
                        onClick={onClose}
                        type="button" 
                        aria-label="Close sidebar"
                    >
                        <X size={24} className="text-white hover:text-gray-900" />
                    </button>
                </div>
                
                <nav>
                    {/* *** 1. เมนูหลัก (จาก Header) *** */}
                    <div className="p-4 border-b">
                        <h2 className="text-sm text-gray-100 font-semibold uppercase tracking-wider">MAIN MENU</h2>
                    </div>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item}
                            href={`/${item === 'home' ? '' : item}`}
                            icon={<Menu size={20} />} 
                            text={t(`header.${item}`)}
                            onClick={onClose} 
                        />
                    ))}
                    
                    {/* *** 2. ปุ่มสลับภาษา *** */}
                    <div className="p-4 border-b">
                         <h2 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Language</h2>
                    </div>
                    <MenuItem
                        onClick={handleLanguageToggle} 
                        icon={<Globe size={20} />} 
                        text={langToggleText}
                    />

                </nav>

            </aside>
        </>
    );
};

export default Sidebar;