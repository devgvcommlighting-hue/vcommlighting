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
            className="block bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 group"
        >
            {/* Image Container */}
            <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1 flex items-center transition-colors duration-200 group-hover:text-emerald-600">
                    <Lightbulb className="w-5 h-5 mr-2 text-green-600 group-hover:text-emerald-700 transition-colors" />
                    {title}
                </h3>
                <p className="text-sm font-semibold text-teal-600 mb-3">{series}</p>

                {description && (
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {description}
                    </p>
                )}

                {/* Call to Action Link */}
                <span className="w-full inline-flex justify-start items-center text-sm font-medium text-emerald-500 group-hover:text-emerald-600 transition-colors">
                    <FileText className="w-4 h-4 mr-2" />
                    ดูรายละเอียดเพิ่มเติม
                </span>
            </div>
        </Link>
    );
};


// *** 2. ข้อมูลผลิตภัณฑ์ (อัปเดต: มี 4 รายการครบถ้วน) ***
const PRODUCTS_DATA: ProductCardProps[] = [
    {
        title: "LED High Bay Lighting",
        series: "GK-Series (20W - 70W)",
        imageSrc: "/images/led-high-bay-gk20-70.png", // ตรวจสอบว่ามีไฟล์นี้ใน public/images/
        linkHref: "/products/high-bay-gk-series-20-70",
        description: "ไฟ LED High Bay สำหรับโรงงาน คลังสินค้า และพื้นที่ที่มีเพดานสูง (รุ่นประหยัดพลังงาน)",
    },
    {
        title: "LED Street Light",
        series: "LD-Series",
        imageSrc: "/images/led-street-light-ld.png", // ตรวจสอบว่ามีไฟล์นี้ใน public/images/
        linkHref: "/products/street-light-ld-series",
        description: "ไฟถนน LED ประสิทธิภาพสูง กันน้ำ กันฝุ่น ทนทาน เหมาะสำหรับการใช้งานภายนอกอาคาร",
    },
    {
        title: "LED T8 Tube Light",
        series: "LRG-Series",
        imageSrc: "/images/led-t8-tube-lrg.png", // ตรวจสอบว่ามีไฟล์นี้ใน public/images/
        linkHref: "/products/t8-tube-lrg-series",
        description: "หลอดไฟ LED T8 สำหรับการใช้งานทั่วไปในออฟฟิศ อาคารพาณิชย์ และที่พักอาศัย",
    },
    {
        title: "LED High Bay Lighting",
        series: "GK-Series (75W - 240W)",
        imageSrc: "/images/led-high-bay-gk75-240.png", // ตรวจสอบว่ามีไฟล์นี้ใน public/images/
        linkHref: "/products/high-bay-gk-series-75-240",
        description: "ไฟ LED High Bay รุ่นกำลังสูง สำหรับพื้นที่อุตสาหกรรมขนาดใหญ่ที่ต้องการแสงสว่างเข้มข้น",
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
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                        {mainTitle}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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