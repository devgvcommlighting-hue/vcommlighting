import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface ServiceCardProps {
    icon: IconType; // ใช้ IconType จาก 'react-icons' เพื่อรับ Component Icon
    title: string;
    description: string;
    linkHref: string;
}

export default function ServiceCard({ icon: Icon, title, description, linkHref }: ServiceCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-white transition-shadow duration-300 hover:shadow-xl rounded-lg">

            {/* Icon Area */}
            <div className="text-green-600 mb-6"> 
                <Icon className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6 flex-grow min-h-[100px] sm:min-h-[120px]">
                {description}
            </p>

            {/* Explore More Link/Button */}
            <Link
                href={linkHref}
                className="text-sm font-semibold uppercase tracking-wider text-green-600 border-b-2 border-transparent hover:border-green-600 transition-colors duration-200 mt-auto" 
            >
                {'Explore More'}
            </Link>
        </div>
    );
}