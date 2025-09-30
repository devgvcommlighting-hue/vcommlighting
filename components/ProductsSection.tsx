// components/ProductsSection.tsx

import React from 'react';
import ProductCard from './ProductCard';

// ข้อมูลสินค้า (อ้างอิงจากภาพตัวอย่าง)
const productsData = [
    {
        imageUrl: '/images/led-high-bay-gk20-70.png', // ต้องเตรียมรูปภาพนี้
        title: 'LED High Bay Light',
        description:
            'โคมไฟไฮเบย์ LED สำหรับโรงงานและคลังสินค้าขนาดเล็กถึงกลาง',
        link: '/products',
    },
    {
        imageUrl: '/images/led-street-light-ld.png', // ต้องเตรียมรูปภาพนี้
        title: 'LED Street Light',
        description:
            'ไฟถนน LED ที่ออกแบบมาเพื่อทนทานต่อสภาพแวดล้อมภายนอกอาคาร',
        link: '/products',
    },
    {
        imageUrl: '/images/led-t8-tube-lrg.png', // ต้องเตรียมรูปภาพนี้
        title: 'LED T8 Tube Light',
        description:
            'หลอดไฟ LED T8 ทางเลือกที่ประหยัดและเป็นมิตรต่อสิ่งแวดล้อม',
        link: '/products',
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