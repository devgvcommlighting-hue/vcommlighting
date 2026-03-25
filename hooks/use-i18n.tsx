'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import enTranslations from '../i18n/en.json';
import thTranslations from '../i18n/th.json';

// 1. Define Types
export type Locale = 'en' | 'th';

// Using a more flexible type for translations to allow nested keys
type Translations = Record<string, any>;

const translations: Record<Locale, Translations> = {
    en: enTranslations,
    th: thTranslations,
};

// 2. Create Context
interface LanguageContextType {
    locale: Locale;
    toggleLocale: () => void;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 3. Create Provider
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocaleState] = useState<Locale>('th');
    const [isLoaded, setIsLoaded] = useState(false); // To prevent hydration mismatch

    // Load from localStorage on mount
    useEffect(() => {
        const savedLocale = localStorage.getItem('locale') as Locale;
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'th')) {
            setLocaleState(savedLocale);
        }
        setIsLoaded(true);
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('locale', newLocale);
    };

    const toggleLocale = useCallback(() => {
        setLocale(locale === 'en' ? 'th' : 'en');
    }, [locale]);

    // Translation function (supports nested keys like 'header.home')
    const t = useCallback(
        (keyPath: string): string => {
            const keys = keyPath.split('.');
            let value: any = translations[locale];

            for (const key of keys) {
                if (value && typeof value === 'object' && key in value) {
                    value = value[key];
                } else {
                    return keyPath; // Return key if not found
                }
            }

            return typeof value === 'string' ? value : keyPath;
        },
        [locale]
    );

    // Prevent rendering until locale is loaded to avoid mismatch
    /* 
       We must render the Provider always, otherwise children calling useI18n will throw errors.
       Hydration mismatch is a trade-off here, or we can use a loading spinner.
       For now, we render with default locale.
    */


    return (
        <LanguageContext.Provider value={{ locale, toggleLocale, setLocale, t }
        }>
            {children}
        </LanguageContext.Provider>
    );
};

// 4. Custom Hook
export const useI18n = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useI18n must be used within a LanguageProvider');
    }
    return context;
};