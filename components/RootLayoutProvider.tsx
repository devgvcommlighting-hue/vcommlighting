// components/RootLayoutProvider.tsx
'use client';

import React, { useState } from 'react';
import Header, { HeaderKeys } from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LanguageProvider, useI18n } from '../hooks/use-i18n'; // Import Context Provider

interface RootLayoutProviderProps {
    children: React.ReactNode;
    fontClasses: string;
}

// items ที่ใช้ใน Sidebar
const sidebarMenuItems = ['home', 'about', 'products', 'service', 'case'] as const;

// Separate component to consume the context
const LayoutContent = ({ children, fontClasses }: RootLayoutProviderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { locale, t, toggleLocale } = useI18n(); // Now using the shared context

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className={`antialiased min-h-screen flex flex-col ${fontClasses}`}>
            <Header
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />

            <Sidebar
                isOpen={isMenuOpen}
                onClose={toggleMenu}
                menuItems={sidebarMenuItems}
            />

            <main className={`flex-grow ${isMenuOpen ? 'md:blur-none md:pointer-events-auto blur-sm pointer-events-none' : ''}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default function RootLayoutProvider(props: RootLayoutProviderProps) {
    return (
        <LanguageProvider>
            <LayoutContent {...props} />
        </LanguageProvider>
    );
}