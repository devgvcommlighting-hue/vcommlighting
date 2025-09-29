// components/ProductDetail.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, FileText, Download } from 'lucide-react';

// *** 1. ข้อมูลสำหรับ Component ย่อย (สมมติข้อมูลที่จะส่งให้ High Bay Component) ***
interface ProductData {
    title: string;
    series: string;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    imageSrc: string;
    documentUrl?: string;
}


// *************************************************************
// 2. Component ย่อยตัวอย่าง: High Bay Light (GR-GK Series)
// *************************************************************
// คุณจะต้องสร้างไฟล์แยกต่างหากสำหรับ Component ย่อยเหล่านี้ในภายหลัง 
// แต่ผมจะแสดงโค้ดตัวอย่างในนี้ก่อน
const HighBayLightDetail: React.FC<ProductData> = ({ title, series, description, features, specs, imageSrc, documentUrl }) => (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h1>
        <p className="text-xl text-teal-600 font-semibold mb-6">{series}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* คอลัมน์ซ้าย: รูปภาพและเอกสาร */}
            <div className="md:col-span-1">
                <div className="relative w-full h-80 bg-gray-100 rounded-lg mb-6">
                    <img src={imageSrc} alt={title} className="object-contain w-full h-full p-4" />
                </div>
                {documentUrl && (
                    <a 
                        href={documentUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gray-800 text-white p-3 rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        ดาวน์โหลด Datasheet
                    </a>
                )}
            </div>
            
            {/* คอลัมน์ขวา: รายละเอียดและคุณสมบัติ */}
            <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">ภาพรวมผลิตภัณฑ์</h2>
                <p className="text-gray-600 mb-6">{description}</p>

                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">คุณสมบัติเด่น</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <Lightbulb className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">ข้อมูลจำเพาะทางเทคนิค</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    {specs.map((spec, index) => (
                        <div key={index} className="flex flex-col border-b pb-2">
                            <span className="font-semibold text-gray-500">{spec.label}:</span>
                            <span className="text-gray-700">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


// *************************************************************
// 3. Component หลัก: ProductDetail
// *************************************************************
interface ProductDetailProps {
    slug: string; // รับ slug มาจาก Dynamic Route
}

// ข้อมูลรวมผลิตภัณฑ์ (จำลองการดึงข้อมูลจาก Database/API)
const PRODUCT_MAP: Record<string, ProductData> = {
    // High Bay 20-70W
    'high-bay-gk-series-20-70': {
        title: "LED High Bay Light",
        series: "GK-Series (20W - 70W)",
        description: "โคมไฟไฮเบย์ LED สำหรับโรงงานและคลังสินค้าขนาดเล็กถึงกลาง โดดเด่นด้วยการประหยัดพลังงานสูงและอายุการใช้งานยาวนาน",
        features: ["ประสิทธิภาพสูงถึง 150 lm/W", "กันน้ำ/ฝุ่น IP65", "อายุการใช้งาน 50,000 ชั่วโมง", "รับประกัน 5 ปี"],
        specs: [
            { label: "กำลังไฟ", value: "20W - 70W" },
            { label: "อุณหภูมิสี", value: "3000K / 5000K / 6500K" },
            { label: "วัสดุ", value: "Aluminum Alloy" },
            { label: "การรับรอง", value: "มอก." }
        ],
        imageSrc: "/images/led-high-bay-gk20-70.png",
        documentUrl: "/docs/datasheet-gk20-70.pdf"
    },
    // Street Light
    'street-light-ld-series': {
        title: "LED Street Light",
        series: "LD-Series",
        description: "ไฟถนน LED ที่ออกแบบมาเพื่อทนทานต่อสภาพแวดล้อมภายนอกอาคาร ให้ความสว่างสม่ำเสมอและลดค่าใช้จ่ายด้านพลังงานขององค์กร",
        features: ["ทนทานต่ออุณหภูมิสูง", "การกระจายแสงแบบ Type II/III", "ป้องกันฟ้าผ่า (Surge Protection)", "บำรุงรักษาง่าย"],
        specs: [
            { label: "กำลังไฟ", value: "60W - 200W" },
            { label: "กันน้ำ/ฝุ่น", value: "IP66" },
            { label: "แรงดันไฟฟ้า", value: "AC 85-265V" },
            { label: "มาตรฐาน", value: "CE, RoHS" }
        ],
        imageSrc: "/images/led-street-light-ld.png",
        documentUrl: "/docs/datasheet-ld-series.pdf"
    },
    // T8 Tube Light
    't8-tube-lrg-series': {
        title: "LED T8 Tube Light",
        series: "LRG-Series",
        description: "หลอดไฟ LED T8 ทางเลือกที่ประหยัดและเป็นมิตรต่อสิ่งแวดล้อม แทนหลอดฟลูออเรสเซนต์เดิม ติดตั้งง่ายและให้แสงสว่างสบายตา",
        features: ["ประหยัดไฟกว่า 60%", "ไม่มี UV และ Mercury", "ใช้งานร่วมกับบัลลาสต์อิเล็กทรอนิกส์ได้", "แสงไม่กระพริบ"],
        specs: [
            { label: "กำลังไฟ", value: "9W / 18W" },
            { label: "ความยาว", value: "60cm / 120cm" },
            { label: "ขั้วหลอด", value: "G13" },
            { label: "มุมลำแสง", value: "180 องศา" }
        ],
        imageSrc: "/images/led-t8-tube-lrg.png",
        documentUrl: "/docs/datasheet-t8-lrg.pdf"
    },
    // High Bay 75-240W
    'high-bay-gk-series-75-240': {
        title: "LED High Bay Light (Heavy Duty)",
        series: "GK-Series (75W - 240W)",
        description: "โคมไฟไฮเบย์สำหรับพื้นที่อุตสาหกรรมขนาดใหญ่ที่ต้องการความสว่างสูงและคุณภาพแสงที่สม่ำเสมอ ออกแบบมาเพื่อการทำงานหนักตลอด 24 ชั่วโมง",
        features: ["ระบบระบายความร้อนขั้นสูง", "เลนส์ PC ทนความร้อนสูง", "ประสิทธิภาพสูงพิเศษ", "เหมาะสำหรับความสูงเพดาน > 10 เมตร"],
        specs: [
            { label: "กำลังไฟ", value: "75W - 240W" },
            { label: "อุณหภูมิสี", value: "4000K / 5700K" },
            { label: "ค่า CRI", value: "> 80" },
            { label: "การรับประกัน", value: "5 ปี (Premium)" }
        ],
        imageSrc: "/images/led-high-bay-gk75-240.png",
        documentUrl: "/docs/datasheet-gk75-240.pdf"
    },
};

const ProductDetail: React.FC<ProductDetailProps> = ({ slug }) => {
    const product = PRODUCT_MAP[slug];

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">ไม่พบผลิตภัณฑ์</h1>
                <p className="text-gray-600 mb-8">ขออภัย, ไม่พบข้อมูลสำหรับสินค้า {slug} นี้</p>
                <Link href="/products" className="inline-flex items-center text-emerald-600 hover:text-emerald-800">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    กลับไปหน้าผลิตภัณฑ์ทั้งหมด
                </Link>
            </div>
        );
    }

    // ในสถานการณ์จริง คุณอาจใช้ Component ที่ต่างกันตามประเภทสินค้า
    // แต่สำหรับตัวอย่างนี้ เราจะใช้ HighBayLightDetail เป็น Component แสดงผลหลัก
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <div className="mb-8">
                <Link href="/products" className="inline-flex items-center text-gray-500 hover:text-emerald-600 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    ผลิตภัณฑ์ทั้งหมด
                </Link>
            </div>
            
            <HighBayLightDetail {...product} />

            {/* ส่วนแนะนำผลิตภัณฑ์ที่เกี่ยวข้อง */}
            <div className="mt-16 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">ผลิตภัณฑ์ที่เกี่ยวข้อง</h2>
                {/* คุณสามารถเพิ่ม Component แกลเลอรี่เล็กๆ หรือ Link ไปยังสินค้าอื่นได้ที่นี่ */}
            </div>
        </div>
    );
};

export default ProductDetail;