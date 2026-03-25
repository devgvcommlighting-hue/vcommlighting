// components/ProductGallerySection.tsx (แก้ไข: เพิ่มข้อมูล 4 ผลิตภัณฑ์)
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Info, FileText } from 'lucide-react';

// *** 1. Type สำหรับ Product Card ***
interface ProductCardProps {
    title: string;
    series: string;
    imageSrc: string; // URL ของรูปภาพ (ต้องอยู่ใน public folder เช่น /images/filename.png)
    linkHref: string; // ลิงก์ไปยังหน้ารายละเอียดผลิตภัณฑ์
    description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, series, imageSrc, linkHref, description }) => {

    return (
        <Link
            href={linkHref}
            passHref
            className="block bg-white/5 backdrop-blur-md border border-neon-blue/30 rounded-lg shadow-[0_0_10px_rgba(0,243,255,0.1)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:-translate-y-1 group"
        >
            {/* Image Container */}
            <div className="relative w-full h-48 bg-gray-900/50 flex items-center justify-center">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-100 opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100 mb-1 flex items-center transition-colors duration-200 group-hover:text-neon-blue">
                    <div className="relative w-5 h-5 mr-2">
                        <Image
                            src="/images/v_icon.png"
                            alt="V Icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                    {title}
                </h3>
                <p className="text-sm font-semibold text-neon-green mb-3 drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">{series}</p>

                {description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>
                )}

                {/* Call to Action Link */}
                <span className="w-full inline-flex justify-start items-center text-sm font-medium text-neon-blue group-hover:text-cyan-300 transition-colors">
                    <FileText className="w-4 h-4 mr-2" />
                    ดูรายละเอียดเพิ่มเติม
                </span>
            </div>
        </Link>
    );
};


// *** 2. ข้อมูลผลิตภัณฑ์ (จัดเรียงตามลำดับ: T8, High Bay, Flood Light, Street Lamp) ***
const PRODUCTS_DATA: ProductCardProps[] = [
    {
        title: "LED T8 Tube Light",
        series: "LRG-Series",
        imageSrc: "/images/led-t8-tube-lrg.png",
        linkHref: "/products/t8-tube",
        description: "หลอดไฟ LED T8 สำหรับการใช้งานทั่วไปในออฟฟิศ อาคารพาณิชย์ และที่พักอาศัย",
    },
    {
        title: "LED High Bay Lighting",
        series: "GK-Series",
        imageSrc: "/images/led-high-bay-gk20-70.png",
        linkHref: "/products/high-bay",
        description: "ไฟ LED High Bay สำหรับโรงงาน คลังสินค้า และพื้นที่ที่มีเพดานสูง",
    },
    {
        title: "LED Flood Light",
        series: "GT-Series",
        imageSrc: "/images/led-flood-light.png",
        linkHref: "/products/flood-light",
        description: "LED ประสิทธิภาพสูง ออกแบบมาเพื่อส่องสว่างพื้นที่ภายนอก และ บริเวณกว้าง เช่น ลานจอดรถ, สนามกีฬา, ป้ายโฆษณา, หรือการส่องสว่างตัวอาคาร",
    },
    {
        title: "LED Street Lamp",
        series: "LD-Series",
        imageSrc: "/images/led-street-light-ld.png",
        linkHref: "/products/street-light",
        description: "ไฟถนน LED ประสิทธิภาพสูง กันน้ำ กันฝุ่น ทนทาน เหมาะสำหรับการใช้งานภายนอกอาคาร",
    },
];


// *** 3. Main Component ***
interface ProductGallerySectionProps {
    mainTitle?: string;
    subTitle?: string;
}

export default function ProductGallerySection({
    mainTitle = "ผลิตภัณฑ์ LED คุณภาพสูง",
    subTitle = "Vcommlighting นำเสนอโซลูชันแสงสว่างประหยัดพลังงานสำหรับทุกการใช้งาน"
}: ProductGallerySectionProps) {

    return (
        <section className="py-16 md:py-24 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-neon-blue tracking-tight mb-3 drop-shadow-[0_0_10px_rgba(0,243,255,0.6)]">
                        {mainTitle}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {subTitle}
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS_DATA.map((product) => (
                        <ProductCard
                            key={product.series}
                            {...product}
                        />
                    ))}
                </div>

                {/* Optional: Full Catalog CTA */}
                {/* <div className="mt-12 text-center">
                    <Link href="/products/catalog" passHref>
                        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700 transition-colors">
                            <Info className="w-5 h-5 mr-2" />
                            ดูแคตตาล็อกผลิตภัณฑ์ทั้งหมด
                        </button>
                    </Link>
                </div> */}

            </div>
        </section>
    );
}