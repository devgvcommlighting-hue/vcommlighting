import React from 'react';
import ProductCard from './ProductCard';

// ข้อมูลสินค้า (อ้างอิงจากภาพตัวอย่าง)
const productsData = [
    {
        imageUrl: '/products/dairy-powder.png', // ต้องเตรียมรูปภาพนี้
        title: 'DAIRY POWDER',
        description:
            'ผลิตภัณฑ์ที่ผ่านกระบวนการผลิตที่ได้รับการรับรองมาตรฐานในระดับสากล',
        link: '/products/dairy-powder',
    },
    {
        imageUrl: '/products/cocoa-powder.png', // ต้องเตรียมรูปภาพนี้
        title: 'COCOA POWDER',
        description:
            'ผลิตภัณฑ์โกโก้ไขมันต่ำ ช่วยเพิ่มคุณค่าและเอกลักษณ์ให้กับทุกเมนู',
        link: '/products/cocoa-powder',
    },
    {
        imageUrl: '/products/dairy-fats.png', // ต้องเตรียมรูปภาพนี้
        title: 'DAIRY FATS',
        description:
            'ผลิตภัณฑ์ประเภทไขมันนม เนย ชีส เพื่อเพิ่มอรรถรสให้แก่เมนู',
        link: '/products/dairy-fats',
    },
];

export default function ProductsSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header Section (ตามภาพตัวอย่าง) */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-gray-800">
                        QUALITY PRODUCTS
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                        เราคัดสรรเฉพาะสินค้าที่มีคุณภาพ ผ่านการรับรองมาตรฐานในระดับสากล
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                    {productsData.map((product, index) => (
                        <ProductCard
                            key={index}
                            imageUrl={product.imageUrl}
                            title={product.title}
                            description={product.description}
                            linkHref={product.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}