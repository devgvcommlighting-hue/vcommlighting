// components/ServiceCard.tsx
import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link'; // ตรวจสอบให้แน่ใจว่าได้ import Link แล้ว

interface ServiceCardProps {
    icon: IconType; // ใช้ IconType จาก 'react-icons' เพื่อรับ Component Icon
    title: string;
    description: string;
    linkHref: string;
}

export default function ServiceCard({ icon: Icon, title, description, linkHref }: ServiceCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-white transition-shadow duration-300 hover:shadow-xl rounded-lg">

            {/* Icon Area - ห่อด้วย Link Component */}
            <Link 
                href={linkHref} 
                className="text-green-600 mb-6 block hover:text-green-800 transition-colors duration-200"
                aria-label={`Go to ${title} page`}
            > 
                <Icon className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true" />
            </Link> 

            {/* Title - ควรห่อด้วย Link ด้วย เพื่อให้ทั้ง Title และ Icon คลิกได้ */}
            {/* แต่เนื่องจากด้านล่างมี Link 'Explore More' อยู่แล้ว จึงควรห่อแค่ Icon หรือห่อทั้งหมด */}
            {/* ในตัวอย่างนี้ ผมจะห่อแค่ Icon และ Title เพื่อให้เป็นจุดที่คลิกได้สองจุด (รวม 'Explore More') */}
            <Link
                href={linkHref}
                className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 hover:text-green-600 transition-colors"
            >
                {title}
            </Link>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6 flex-grow min-h-[100px] sm:min-h-[120px]">
                {description}
            </p>

            {/* Explore More Link/Button (มีอยู่แล้ว) */}
            <Link
                href={linkHref}
                className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b-2 border-transparent hover:border-green-600 transition-colors duration-200 mt-auto" 
            >
                {'Explore More'}
            </Link>
        </div>
    );
}