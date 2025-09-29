// app/products/[slug]/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';

// *************************************************************
// 1. การสร้าง Metadata (จำเป็นสำหรับ SEO)
// *************************************************************

// ฟังก์ชันสำหรับสร้าง Metadata (Dynamic Title)
export async function generateMetadata({
    params
}: {
    params: { slug: string }
}): Promise<Metadata> {

    // แปลง slug เป็นชื่อที่อ่านได้ (เช่น 'high-bay-gk-series-20-70' -> 'LED High Bay Light (20W - 70W)')
    const titleMap: Record<string, string> = {
        'high-bay-gk-series-20-70': 'LED High Bay Light (20W - 70W)',
        'street-light-ld-series': 'LED Street Light (LD-Series)',
        't8-tube-lrg-series': 'LED T8 Tube Light (LRG-Series)',
        'high-bay-gk-series-75-240': 'LED High Bay Light (75W - 240W)',
    };

    const productTitle = titleMap[params.slug] || 'รายละเอียดผลิตภัณฑ์';

    return {
        title: `${productTitle} | สินค้า Vcommlighting`,
        description: `ข้อมูลจำเพาะและรายละเอียดของ ${productTitle} จาก Vcommlighting`,
        keywords: [productTitle, 'LED', 'Vcommlighting', 'datasheet', 'จำหน่าย'],
    };
}


// *************************************************************
// 2. Component Page หลัก
// *************************************************************

export default function ProductDetailPage({
    params
}: {
    params: { slug: string }
}) {
    const { slug } = params;

    return (
        <div className="min-h-screen bg-gray-50">
            <ProductDetail slug={slug} />
        </div>
    );
}

// *************************************************************
// 3. การสร้าง Static Params (Next.js App Router)
// *************************************************************
// ฟังก์ชันนี้จะบอก Next.js ให้สร้างหน้าเหล่านี้ล่วงหน้าในระหว่าง build time (Static Site Generation - SSG)
export async function generateStaticParams() {
    const slugs = [
        'high-bay-gk-series-20-70',
        'street-light-ld-series',
        't8-tube-lrg-series',
        'high-bay-gk-series-75-240',
    ];

    return slugs.map((slug) => ({
        slug: slug,
    }));
}