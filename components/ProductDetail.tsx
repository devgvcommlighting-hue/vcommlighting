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
    specImageSrc?: string;
    documentUrl?: string;
    detailedSpecs?: {
        headers: string[];
        rows: string[][];
    };
}


// *************************************************************
// 2. Component ย่อย: SpecTable (สำหรับแสดงตารางเปรียบเทียบสเปก)
// *************************************************************
const SpecTable: React.FC<{ specs: { headers: string[]; rows: string[][] } }> = ({ specs }) => (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-50 text-gray-500 border-b">
                <tr>
                    {specs.headers.map((header, i) => (
                        <th key={i} className={`px-4 py-3 font-bold whitespace-nowrap ${i === 0 ? 'sticky left-0 bg-gray-50 z-10 shadow-[1px_0_0_rgba(0,0,0,0.1)]' : ''}`}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {specs.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50/50 transition-colors">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={`px-4 py-3 whitespace-nowrap ${cellIndex === 0 ? 'font-semibold text-gray-900 bg-white sticky left-0 z-10 border-r shadow-[2px_0_5px_rgba(0,0,0,0.05)]' : ''}`}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// *************************************************************
// 3. Component ย่อยตัวอย่าง: High Bay Light (GR-GK Series)
// *************************************************************
const HighBayLightDetail: React.FC<ProductData> = ({
    title,
    series,
    description,
    features,
    specs,
    imageSrc,
    specImageSrc,
    detailedSpecs
}) => (
    <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h1>
        <p className="text-xl text-teal-600 font-semibold mb-6">{series}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* คอลัมน์ซ้าย: รูปภาพ */}
            <div className="md:col-span-1">
                <div className="relative w-full h-80 bg-gray-100 rounded-lg mb-6">
                    <img src={imageSrc} alt={title} className="object-contain w-full h-full p-4" />
                </div>
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

        {/* ส่วนแสดงสเปกผลิตภัณฑ์ (ตารางข้อมูล) */}
        {detailedSpecs && (
            <div className="mt-12 border-t pt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-blue-600" />
                    ตารางสเปกและมิติผลิตภัณฑ์ (Specifications & Dimensions)
                </h2>
                <SpecTable specs={detailedSpecs} />
                <p className="mt-4 text-xs text-gray-400 italic">
                    * ข้อมูลอ้างอิงจากแหล่งผลิต อาจมีการเปลี่ยนแปลงตามล็อตการผลิต
                </p>
            </div>
        )}
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
    't8-tube': {
        title: "LED T8 Tube Light",
        series: "LRG-Series",
        description: "หลอดไฟ LED T8 ทางเลือกที่ประหยัดและเป็นมิตรต่อสิ่งแวดล้อม แทนหลอดฟลูออเรสเซนต์เดิม ติดตั้งง่ายและให้แสงสว่างสบายตา",
        features: ["ประหยัดไฟกว่า 50%", "ไม่มี UV และ Mercury", "รับประกัน 8 ปี", "แสงไม่กระพริบ"],
        specs: [
            { label: "กำลังไฟ", value: "8W / 10W" },
            { label: "ความยาว", value: "60cm / 120cm" },
            { label: "ขั้วหลอด", value: "G13" },
            { label: "มุมลำแสง", value: "180 องศา" }
        ],
        imageSrc: "/images/led-t8-tube-lrg.png",
        specImageSrc: "/images/product/GR-LRG.png",
        detailedSpecs: {
            headers: ["Model No.", "GR-LRG1208", "GR-LRG1210"],
            rows: [
                ["Rated Power", "8W", "10W"],
                ["Operating Current", "0.037A", "0.046A"],
                ["Weight", "40±2 g", "40±2 g"],
                ["Input Voltage", "220-240V", "220-240V"],
                ["Lumens Efficiency", "> 220 lm/W", "> 220 lm/W"],
                ["Color Temp.", "3000-6000 ±500K", "3000-6000 ±500K"],
                ["CRI", "Ra > 70", "Ra > 70"],
                ["Power Factor", "> 0.9", "> 0.9"],
                ["Base", "G13", "G13"],
                ["Dimensions", "1198 X Ø 26.0 mm", "1198 X Ø 26.0 mm"],
                ["Beam Angle", "> 120°", "> 120°"],
                ["Life time", "≥ 100000 hrs", "≥ 100000 hrs"],
                ["Resistance Level", "IP65", "IP65"]
            ]
        }
    },
    // High Bay Light
    'high-bay': {
        title: "LED High Bay Light",
        series: "GK-Series",
        description: "โคมไฟไฮเบย์ LED สำหรับโรงงานและคลังสินค้าขนาดเล็กถึงกลาง โดดเด่นด้วยการประหยัดพลังงานสูงและอายุการใช้งานยาวนาน",
        features: ["ประสิทธิภาพสูงถึง 200 lm/W", "กันน้ำ/ฝุ่น IP65", "อายุการใช้งาน 100,000 ชั่วโมง", "รับประกัน 8 ปี"],
        specs: [
            { label: "กำลังไฟ", value: "40W - 200W" },
            { label: "อุณหภูมิสี", value: "4000-6000 ±500K" },
            { label: "วัสดุ", value: "Aluminum Alloy" },
            { label: "การรับรอง", value: "มอก." }
        ],
        imageSrc: "/images/led-high-bay-gk20-70.png",
        specImageSrc: "/images/product/GR-GK.png",
        detailedSpecs: {
            headers: ["Model No.", "GR-GK-FD40", "GR-GK-FD60", "GR-GK-FD100", "GR-GK-FD150", "GR-GK-FD200"],
            rows: [
                ["Rated Power", "40W", "60W", "100W", "150W", "200W"],
                ["Operate Current", "0.20A", "0.30A", "0.51A", "0.76A", "1.01A"],
                ["Dimensions", "H130xW350mm", "H140xW350mm", "H170xW350mm", "H180xW390mm", "H185xW390mm"],
                ["Weight", "350g±10g", "500g±10g", "850g±10g", "1200g±10g", "1800g±10g"],
                ["Input Voltage", "220-240V", "220-240V", "220-240V", "220-240V", "220-240V"],
                ["Luminous Efficiency", "≥ 200 lm/W", "≥ 200 lm/W", "≥ 200 lm/W", "≥ 200 lm/W", "≥ 200 lm/W"],
                ["Color Temp.", "4000-6000K", "4000-6000K", "4000-6000K", "4000-6000K", "4000-6000K"],
                ["CRI", "Ra ≥ 70", "Ra ≥ 70", "Ra ≥ 70", "Ra ≥ 70", "Ra ≥ 70"],
                ["Power Factor", "≥ 0.90", "≥ 0.90", "≥ 0.90", "≥ 0.90", "≥ 0.90"],
                ["Water Resistance", "IP65", "IP65", "IP65", "IP65", "IP65"]
            ]
        }
    },
    // Flood Light
    'flood-light': {
        title: "LED Flood Light",
        series: "GT-Series",
        description: "LED ประสิทธิภาพสูง ออกแบบมาเพื่อส่องสว่างพื้นที่ภายนอก และ บริเวณกว้าง เช่น ลานจอดรถ, สนามกีฬา, ป้ายโฆษณา, หรือการส่องสว่างตัวอาคาร",
        features: ["กำลังไฟสูง 40W - 200W", "มุมส่องแสงกว้าง 120 องศา", "กันน้ำ IP65", "อายุการใช้งาน 100,000 ชั่วโมง"],
        specs: [
            { label: "กำลังไฟ", value: "40W - 200W" },
            { label: "อุณหภูมิสี", value: "3000-6500K" },
            { label: "กันน้ำ/ฝุ่น", value: "IP65" },
            { label: "มุมส่องแสง", value: "120 องศา" }
        ],
        imageSrc: "/images/led-flood-light.png",
        specImageSrc: "/images/product/GR-GT.jpg",
        detailedSpecs: {
            headers: ["Model No.", "GR-GT40", "GR-GT100", "GR-GT150", "GR-GT200"],
            rows: [
                ["Rated Power", "40W", "100W", "150W", "200W"],
                ["Operate Current", "0.19A", "0.47A", "0.71A", "0.95A"],
                ["Dimensions (LxWxH)", "150x195x130", "230x310x130", "280x400x130", "360x420x130"],
                ["Weight", "1.04±0.5kg", "2.50±0.5kg", "3.90±0.5kg", "5.40±0.5kg"],
                ["Operating Voltage", "160-270V", "160-270V", "160-270V", "160-270V"],
                ["Luminous Efficiency", "≥ 180 lm/W", "≥ 180 lm/W", "≥ 180 lm/W", "≥ 180 lm/W"],
                ["Color Temp.", "3000-6500K", "3000-6500K", "3000-6500K", "3000-6500K"],
                ["CRI", "≥ 85", "≥ 85", "≥ 85", "≥ 85"],
                ["Water Resistance", "IP65", "IP65", "IP65", "IP65"]
            ]
        }
    },
    // Street Light
    'street-light': {
        title: "LED Street Lamp",
        series: "LD-Series",
        description: "ไฟถนน LED ที่ออกแบบมาเพื่อทนทานต่อสภาพแวดล้อมภายนอกอาคาร ให้ความสว่างสม่ำเสมอและลดค่าใช้จ่ายด้านพลังงานขององค์กร",
        features: ["ทนทานต่ออุณหภูมิสูง", "การกระจายแสงแบบ Type II/III", "ป้องกันฟ้าผ่า (Surge Protection)", "บำรุงรักษาง่าย"],
        specs: [
            { label: "กำลังไฟ", value: "40W" },
            { label: "กันน้ำ/ฝุ่น", value: "IP65" },
            { label: "แรงดันไฟฟ้า", value: "220-240V" },
            { label: "มาตรฐาน", value: "CE, RoHS" }
        ],
        imageSrc: "/images/led-street-light-ld.png",
        specImageSrc: "/images/product/GR-LD.png",
        detailedSpecs: {
            headers: ["Model No.", "GR-LD40", "GR-LD100", "GR-LD150", "GR-LD200"],
            rows: [
                ["Rated Power", "40W", "100W", "150W", "200W"],
                ["Operate Current", "0.19A", "0.47A", "0.71A", "0.95A"],
                ["Dimensions (LxWxH)", "493x330x117", "645x330x117", "835x330x117", "1025x330x117"],
                ["Weight", "2.80±0.5kg", "8.40±0.5kg", "11.90±0.5kg", "15.40±0.5kg"],
                ["Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
                ["Luminous Efficiency", "≥ 180 lm/W", "≥ 180 lm/W", "≥ 180 lm/W", "≥ 180 lm/W"],
                ["Color Temp.", "3000-6500K", "3000-6500K", "3000-6500K", "3000-6500K"],
                ["CRI", "Ra ≥ 70", "Ra ≥ 70", "Ra ≥ 70", "Ra ≥ 70"],
                ["Architecture", "Aluminum Base", "Aluminum Base", "Aluminum Base", "Aluminum Base"],
                ["Beam Angle", "140° x 75°", "140° x 75°", "140° x 75°", "140° x 75°"]
            ]
        }
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