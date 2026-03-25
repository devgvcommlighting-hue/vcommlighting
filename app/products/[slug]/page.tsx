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
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;

    // แปลง slug เป็นชื่อที่อ่านได้
    const titleMap: Record<string, string> = {
        't8-tube': 'LED T8 Tube Light',
        'high-bay': 'LED High Bay Light',
        'flood-light': 'LED Flood Light',
        'street-light': 'LED Street Lamp',
    };

    const productTitle = titleMap[slug] || 'รายละเอียดผลิตภัณฑ์';

    return {
        title: `${productTitle} | สินค้า Vcommlighting`,
        description: `ข้อมูลจำเพาะและรายละเอียดของ ${productTitle} จาก Vcommlighting`,
        keywords: [productTitle, 'LED', 'Vcommlighting', 'datasheet', 'จำหน่าย'],
    };
}


// *************************************************************
// 2. Component Page หลัก
// *************************************************************

export default async function ProductDetailPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
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
        't8-tube',
        'high-bay',
        'flood-light',
        'street-light',
    ];

    return slugs.map((slug) => ({
        slug: slug,
    }));
}