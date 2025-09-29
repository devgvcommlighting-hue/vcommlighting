// app/products/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import ProductGallerySection from '@/components/ProductGallerySection'; 

export const metadata: Metadata = {
    title: 'สินค้า (Products) - VCOMM Lighting',
    description: 'ค้นพบผลิตภัณฑ์ LED และโซลูชันแสงสว่างประหยัดพลังงานคุณภาพสูงจาก VCOMM',
};

export default function ProductsPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">หน้าสินค้า (Products)</h1>
            <p className="text-lg text-gray-600">กำลังอยู่ในระหว่างการพัฒนาและเพิ่มรายการสินค้าเร็วๆ นี้</p>
            {/* ไม่ต้องมี className ที่กำหนด padding ด้านบน เพราะ RootLayoutProvider จัดการให้แล้ว */}
            <div className="min-h-screen">

                {/* Component แกลเลอรี่ผลิตภัณฑ์ */}
                <ProductGallerySection
                    mainTitle="ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting"
                    subTitle="ค้นพบโซลูชันที่สมบูรณ์แบบสำหรับโรงงาน, คลังสินค้า, และถนน"
                />

                {/* คุณสามารถเพิ่มส่วนอื่นๆ ได้ที่นี่ เช่น CTA, FAQ */}

            </div>
        </div>
    );
}