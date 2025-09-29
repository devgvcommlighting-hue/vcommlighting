// hooks/use-i18n.ts
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
    // สามารถเพิ่ม section อื่นๆ ได้ที่นี่
}

const translations: Record<Locale, Translations> = {
    en: enTranslations as Translations,
    th: thTranslations as Translations,
};

// Hook สำหรับการจัดการภาษา
export const useI18n = () => {
    // กำหนดภาษาเริ่มต้นเป็น 'th' และโหลดจาก localStorage หากมี
    const [locale, setLocale] = useState<Locale>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('locale') as Locale) || 'th';
        }
        return 'th';
    });

    // เก็บ locale ใน localStorage เมื่อมีการเปลี่ยนแปลง
    useEffect(() => {
        localStorage.setItem('locale', locale);
    }, [locale]);


    // ฟังก์ชันสลับภาษา
    const toggleLocale = useCallback(() => {
        setLocale(prevLocale => (prevLocale === 'en' ? 'th' : 'en'));
    }, []);

    /**
     * ฟังก์ชันสำหรับดึงข้อความแปล
     * @param keyPath เช่น 'header.about' หรือ 'hero.tagline_line1'
     */
    const t = useCallback(
        (keyPath: string): string => {
            const [mainKey, subKey] = keyPath.split('.');
            const currentTranslations = translations[locale];

            if (mainKey && subKey && currentTranslations[mainKey as keyof Translations] && (currentTranslations[mainKey as keyof Translations] as any)[subKey]) {
                return (currentTranslations[mainKey as keyof Translations] as any)[subKey];
            }
            return `[Missing translation: ${keyPath} in ${locale}]`;
        },
        [locale]
    );

    return { locale, t, toggleLocale };
};