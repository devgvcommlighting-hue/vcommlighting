import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    imageUrl: string;
    title: string;
    description: string;
    linkHref: string;
}

export default function ProductCard({ imageUrl, title, description, linkHref }: ProductCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-4">

            {/* Product Image (ใช้ Next/Image) */}
            <div className="w-full max-w-[200px] h-[200px] flex items-center justify-center mb-6">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={250} // ขนาดที่ใหญ่กว่า Display Size เล็กน้อย
                    height={250}
                    style={{ objectFit: 'contain' }}
                    className="rounded-full" // หากต้องการให้ภาพดูเป็นวงกลม
                />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest text-gray-800 mb-4 border-b border-gray-300 pb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-8 min-h-[80px]">
                {description}
            </p>

            {/* Read More Button */}
            <Link
                href={linkHref}
                className="inline-block border border-gray-400 text-gray-700 font-semibold py-3 px-6 transition-colors duration-300 hover:bg-gray-100 uppercase text-xs tracking-wider"
            >
                READ MORE
            </Link>
        </div>
    );
}