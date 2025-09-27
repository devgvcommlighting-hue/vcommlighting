'use client';

import { useState, useEffect, useCallback } from 'react';
import enTranslations from '../i18n/en.json';
import thTranslations from '../i18n/th.json';

// กำหนด type ของภาษา
export type Locale = 'en' | 'th';

// กำหนด type สำหรับโครงสร้างข้อความแปล
interface Translations {
    header: { [key: string]: string };
    hero: { [key: string]: string };
}

const translations: Record<Locale, Translations> = {
    en: enTranslations as Translations,
    th: thTranslations as Translations,
};

// Hook สำหรับการจัดการภาษา
export const useI18n = () => {
    const [locale, setLocale] = useState<Locale>('th'); // กำหนดภาษาเริ่มต้นเป็น 'th'

    // ฟังก์ชันสลับภาษา
    const toggleLocale = useCallback(() => {
        setLocale(prevLocale => (prevLocale === 'en' ? 'th' : 'en'));
    }, []);

    // ฟังก์ชันสำหรับดึงข้อความแปล
    const t = useCallback(
        (keyPath: string): string => {
            const [mainKey, subKey] = keyPath.split('.');
            const currentTranslations = translations[locale];

            if (mainKey && subKey) {
                return (currentTranslations as any)[mainKey]?.[subKey] || `Missing translation for ${keyPath}`;
            }
            return `Missing translation for ${keyPath}`;
        },
        [locale]
    );

    return { locale, t, toggleLocale };
};