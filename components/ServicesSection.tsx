'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { FaFlask, FaGlobe, FaWarehouse, FaTruckLoading } from 'react-icons/fa';
import { IconType } from 'react-icons';

// กำหนด Type สำหรับข้อมูลบริการ
interface ServiceData {
    icon: IconType;
    title: string;
    description: string;
    link: string;
}

// ข้อมูลบริการ (อ้างอิงจากภาพตัวอย่าง)
const servicesData: ServiceData[] = [
    {
        icon: FaFlask, // Market Outlook Advisor / R&D (ใช้ Flask แทน Microscope)
        title: 'Market Outlook Advisor / R&D',
        description:
            'ISM นำประสบการณ์ด้านการตลาดและองค์ความรู้ด้านผลิตภัณฑ์ นำมาต่อยอดด้วยการวิจัยและพัฒนาโดยทีมผู้เชี่ยวชาญทั้งในและต่างประเทศ',
        link: '/service/market-advisor',
    },
    {
        icon: FaGlobe, // Import
        title: 'Import',
        description:
            'ISM เราดำเนินธุรกิจโดยมุ่งหวังการเป็นพันธมิตรทางธุรกิจที่พร้อมสนับสนุนและตอบสนองความต้องการของลูกค้าด้วยสินค้าคุณภาพ',
        link: '/service/import',
    },
    {
        icon: FaWarehouse, // Warehouse
        title: 'Warehouse',
        description:
            'เรามุ่งมั่นที่จะรักษาคุณภาพสินค้าให้ดีที่สุด เพื่อการส่งมอบสินค้าที่สมบูรณ์ ด้วยระบบการจัดเก็บสินค้าที่ได้มาตรฐานทุกระดับชั้น จึงมั่นใจคุณภาพและความสดใหม่ไปถึงมือลูกค้าเสมอ',
        link: '/service/warehouse',
    },
    {
        icon: FaTruckLoading, // Logistics
        title: 'Logistics',
        description:
            'ISM ใส่ใจในความต้องการของลูกค้า จึงจัดวางระบบการจัดส่งที่มีประสิทธิภาพ จัดส่งได้อย่างรวดเร็ว ปลอดภัย ถึงที่หมายภายในระยะเวลาที่กำหนด',
        link: '/service/logistics',
    },
];

export default function ServicesSection() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header Section (ถ้ามี) */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
                    Important partner of State Grid Energy Ecosystem
                </h2>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Energy saving • Low carbon • Digital • Smart
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            linkHref={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}