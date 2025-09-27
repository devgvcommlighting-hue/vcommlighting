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
    Menu, // ใช้สำหรับไอคอนเมนูหลักใน Sidebar
    Globe // ใช้สำหรับสลับภาษา
} from 'lucide-react'; 
import { FaGithub } from 'react-icons/fa'; // FaGithub ยังคงใช้จาก react-icons/fa
import { BiSearchAlt } from 'react-icons/bi'; // BiSearchAlt ยังคงใช้จาก react-icons/bi

// *************************************************************
// NOTE: DonationsPopup ต้องถูกสร้างขึ้นมาแยกต่างหาก
// *************************************************************
// สมมติว่า DonationsPopup ถูกกำหนดไว้ใน './DonationsPopup'
interface DonationsPopupProps {
    isOpen: boolean;
    onClose: () => void;
}
const DonationsPopup: React.FC<DonationsPopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h3 className="text-xl font-bold text-teal-800">Donations</h3>
                    <button onClick={onClose} aria-label="Close donation popup">
                        <X className="w-6 h-6 text-gray-500 hover:text-gray-900" />
                    </button>
                </div>
                <p className="text-gray-700">Scan QR Code here to support our work.</p>
                {/*  */}
                <p className="mt-4 text-sm text-gray-500">Thank you for your support!</p>
            </div>
        </div>
    );
};


// *************************************************************
// Type Definitions จาก Header.tsx (เพื่อให้ Sidebar รู้จัก)
// *************************************************************
type Locale = 'en' | 'th'; // ต้องตรงกับที่กำหนดใน Header.tsx
type HeaderKeys = 'home' | 'about' | 'products' | 'service' | 'news' | 'contact' | 'toggleMenu' | 'switchToThai' | 'switchToEnglish';
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
    
    if (onClick) {
        return (
            <div className={baseClasses} onClick={onClick}>
                <div className="mr-3 text-teal-800">{icon}</div>
                <span>{text}</span>
            </div>
        );
    }
    
    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                <div className="mr-3 text-teal-800">{icon}</div>
                <span>{text}</span>
            </a>
        );
    }

    return (
        <Link href={href!} className={baseClasses} onClick={onClick}>
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
    menuItems: readonly string[]; // ['home', 'about', ...]
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
        // ไม่ปิด Sidebar ทันทีหลังเปลี่ยนภาษา เพื่อให้ผู้ใช้เห็นภาษาใหม่ในเมนู
    };
    
    const langToggleText = locale === 'en' ? t('header.switchToThai') : t('header.switchToEnglish');

    return (
        <>
            {/* Overlay for mobile view */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden w-80 bg-white shadow-2xl overflow-y-auto z-50`}>
                
                {/* Header (Mobile Only) */}
                <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                    <h2 className="text-xl font-bold text-teal-800">Menu</h2>
                    <button 
                        onClick={onClose}
                        type="button" 
                        aria-label="Close sidebar"
                    >
                        <X size={24} className="text-gray-500 hover:text-gray-900" />
                    </button>
                </div>
                
                <nav>
                    {/* *** 1. เมนูหลัก (จาก Header) *** */}
                    <div className="p-4 border-b">
                        <h2 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Navigation</h2>
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


                    {/* *** 3. เมนูเฉพาะทาง (Horoscope/Developers) *** */}
                    <div className="p-4 border-b mt-4">
                        <h2 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">หมวดหมู่</h2>
                    </div>
                    <MenuItem href="/contents/mahataksa" icon={<BiSearchAlt size={20} />} text="มหาทักษาพยากรณ์" onClick={onClose}/>
                    <MenuItem href="/contents/sevennum" icon={<FileDigit size={20} />} text="พยากรณ์เลข ๗ ตัว" onClick={onClose}/>
                    <MenuItem href="/contents/jakrasri" icon={<Crown size={20} />} text="พยากรณ์จักราศี" onClick={onClose}/>
                    <MenuItem href="/contents/yama" icon={<Gem size={20} />} text="ฤกษ์-ยาม" onClick={onClose}/>
                    <MenuItem href="/contents/starcountdown" icon={<CalendarCheck size={20} />} text="ปฏิทินดวงดาว" onClick={onClose}/>
                    <MenuItem href="/contents/content" icon={<Book size={20} />} text="บทความดูดวง" onClick={onClose}/>

                    <div className="p-4 border-b">
                        <h2 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Developers</h2>
                    </div>
                    <MenuItem href="/developers/components" icon={<Code size={20} />} text="Components" onClick={onClose}/>
                    <MenuItem href="/developers/functions" icon={<Settings size={20} />} text="Functions" onClick={onClose}/>
                    <MenuItem href="/developers/informations" icon={<Database size={20} />} text="Data Informations" onClick={onClose}/>
                    <MenuItem href="/developers/apis" icon={<Plug size={20} />} text="API" onClick={onClose}/>

                    <MenuItem href="/about" icon={<Info size={20} />} text="About Us" onClick={onClose}/>
                    <MenuItem
                        href="https://github.com/DarumaKlang/hora-documents"
                        icon={<FaGithub size={20} />}
                        text="GitHub Repository"
                        isExternal={true}
                    />
                     <MenuItem 
                        onClick={handleOpenPopup} 
                        icon={<HeartHandshake size={20} />} 
                        text="Donations"
                    />
                </nav>

                <DonationsPopup 
                    isOpen={isPopupOpen} 
                    onClose={handleClosePopup} 
                />
            </aside>
        </>
    );
};

export default Sidebar;