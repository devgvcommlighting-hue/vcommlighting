// components/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import {
    X,
    Menu,
    Globe,
    Info,
    HeartHandshake,
    Gem,
    FileText
} from 'lucide-react';
import { useI18n } from '../hooks/use-i18n';

// Type Definitions
type MainMenuItemKey = 'home' | 'about' | 'products' | 'service' | 'case';

// ฟังก์ชันสำหรับกำหนด Icon ตาม Key
const getIcon = (key: string): React.ReactNode => {
    switch (key) {
        case 'home':
            return <Menu size={20} />;
        case 'about':
            return <Info size={20} />;
        case 'products':
            return <Gem size={20} />;
        case 'service':
            return <HeartHandshake size={20} />;
        case 'case':
            return <FileText size={20} />;
        default:
            return <Menu size={20} />;
    }
}

// Component: MenuItem
interface MenuItemProps {
    icon: React.ReactNode;
    text: string;
    href?: string;
    isExternal?: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, href, isExternal = false, onClick }) => {

    const baseClasses = "flex items-center p-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors duration-150";

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


// Component: Sidebar
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: readonly MainMenuItemKey[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, menuItems }) => {
    const { t, locale, toggleLocale } = useI18n(); // Global Hook

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

            <aside className={`fixed inset-x-0 top-0 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out md:hidden w-full h-full bg-white/30 backdrop-blur-md shadow-xl overflow-y-auto z-50`}>

                {/* Header (Mobile Only) */}
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
                    {/* *** 1. เมนูหลัก *** */}
                    <div className="p-4 border-b">
                        <h2 className="text-sm text-gray-100 font-semibold uppercase tracking-wider">MAIN MENU</h2>
                    </div>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item}
                            href={`/${item === 'home' ? '' : item}`}
                            icon={getIcon(item)}
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