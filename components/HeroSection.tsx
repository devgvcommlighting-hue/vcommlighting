// components/HeroSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useI18n } from '@/hooks/use-i18n';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// ข้อมูลสำหรับภาพสไลด์ (ต้องสร้างไฟล์รูปภาพเหล่านี้)
const heroSlides = [
    {
        id: 1,
        imageUrl: '/hero-1.png', // ต้องเตรียมรูปภาพในโฟลเดอร์ public
        alt: 'Important partner of State Grid Energy Ecosystem',
    },
    {
        id: 2,
        imageUrl: '/hero-2.png',
        alt: 'Energy saving • Low carbon • Digital • Smart',
    },
];

export default function HeroSection() {
    const { t } = useI18n();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 8000); // เปลี่ยนทุก 8 วินาที
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => setCurrentSlide(index);

    // Custom CSS สำหรับ Text Animation (ต้องเพิ่มใน globals.css ด้วย)
    // เราจะใช้ Tailwind utility class ที่สร้างขึ้นมา
    const textAnimationClass = 'animate-fadeInUp text-white text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider leading-tight';

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image Slider */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={slide.imageUrl}
                        alt={slide.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={index === 0} // โหลดภาพแรกก่อน
                    />
                    <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
                </div>
            ))}

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                {/* Animated Text */}
                <h1 className="flex flex-col mb-10 space-y-2">
                    <span className={`${textAnimationClass} animate-delay-100`}>
                        {t('hero.tagline_line1')}
                    </span>
                    <span className={`${textAnimationClass} animate-delay-500`}>
                        {t('hero.tagline_line2')}
                    </span>
                </h1>

                {/* Call to Action Button */}
                <button className="bg-white text-black hover:bg-yellow-400 transition-colors duration-300 font-semibold py-3 px-8 rounded-full text-base tracking-widest uppercase shadow-lg">
                    {t('hero.button')}
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}