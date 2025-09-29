'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiLine } from 'react-icons/si'; // ใช้ SiLine สำหรับ Line Icon

// ข้อมูลสำหรับไอคอนติดต่อ
const contactLinks = [
    {
        icon: SiLine,
        label: 'LINE',
        href: 'https://line.me/ti/p/@vcommlighting', // แทนที่ด้วย Line ID จริง
        color: 'bg-green-500',
        hover: 'hover:bg-green-600'
    },
    {
        icon: FaMapMarkerAlt,
        label: 'LOCATION',
        href: '/contact',
        color: 'bg-red-500',
        hover: 'hover:bg-red-600'
    },
    {
        icon: FaPhone,
        label: 'CALL',
        href: 'tel:+6621234567',
        color: 'bg-blue-500',
        hover: 'hover:bg-blue-600'
    },
    {
        icon: FaEnvelope,
        label: 'EMAIL',
        href: 'mailto:info@vcommlighting.com',
        color: 'bg-yellow-500',
        hover: 'hover:bg-yellow-600'
    },
];

export default function ContactCtaSection() {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">

            {/* Background Image */}
            <Image
                src="/hero-cta-bg.png" // **ต้องสร้างไฟล์นี้ใน public/hero-cta-bg.jpg**
                alt="Let's Discuss Your Project"
                fill
                style={{ objectFit: 'cover' }}
                className="z-0"
            />

            {/* Overlay เพื่อเพิ่มความชัดเจนของข้อความ */}
            <div className="absolute inset-0 bg-black/30 z-10" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">

                {/* Main Text */}
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-12 drop-shadow-lg max-w-4xl">
                    LET&apos;S DISCUSS YOUR PROJECT WITH THE BEST SOLUTION
                </h2>

                {/* Contact Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
                    {contactLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            target={item.label === 'CALL' || item.label === 'EMAIL' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center justify-center p-4 w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-xl transition-all duration-300 transform scale-100 ${item.color} ${item.hover} hover:scale-105`}
                        >
                            <item.icon className="w-8 h-8 text-white mb-1" aria-hidden="true" />
                            <span className="text-white text-xs font-bold uppercase mt-1">
                                {item.label === 'LINE' ? 'LINE' : ''}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}