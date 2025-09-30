// components/ServicesSection.tsx
'use client';

import React from 'react';
// Import ไอคอนที่ใกล้เคียงจาก react-icons/fa
import { FaFlask, FaGlobe, FaWarehouse, FaTruckLoading } from 'react-icons/fa';
import { IconType } from 'react-icons';
import ServiceCard from './ServiceCard';

// กำหนด Type สำหรับข้อมูล Infographic
interface InfographicData {
    icon: IconType;
    iconClass: string; // คลาสสำหรับปรับสไตล์ไอคอนภายในวงกลม
    title: string;
    description: string;
    link: string;
}

// ข้อมูล Infographic (เนื้อหายังคงเดิม)
const infographicData: InfographicData[] = [
    {
        icon: FaFlask,
        iconClass: 'rotate-180', // หมุน 180 องศาเพื่อจำลองกราฟที่ชี้ลง
        title: 'ภายใต้เป้าหมาย “คาร์บอนคู่”',
        description:
            '"คาร์บอนคู่" (Dual Carbon) คือพันธกิจสำคัญระดับโลก ที่มุ่งเน้นการบรรลุเป้าหมายการปล่อยคาร์บอนในระดับสูงสุด (Carbon Emission Peak) และ ความเป็นกลางทางคาร์บอน (Carbon Neutrality)',
        link: '/dual-carbon-goal',
    },
    {
        icon: FaGlobe,
        iconClass: '',
        title: 'นโยบายภาครัฐที่ดึงดูด',
        description:
            'นโยบายภาครัฐในปัจจุบันมุ่งเน้นการส่งเสริม ประสิทธิภาพการใช้พลังงาน (Energy Efficiency) และการลดการปล่อยก๊าซเรือนกระจก ซึ่งเป็นโอกาสสำคัญที่ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting ',
        link: '/government-policy',
    },
    {
        icon: FaWarehouse,
        iconClass: '',
        title: 'การลดต้นทุนพลังงาน',
        description:
            'สำหรับทุกธุรกิจ ไม่ว่าจะเป็นโรงงานขนาดใหญ่ อาคารพาณิชย์ หรือหน่วยงานท้องถิ่น ต้นทุนพลังงาน มักเป็นหนึ่งในค่าใช้จ่ายที่ควบคุมได้ยาก แต่การเปลี่ยนมาใช้ ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting ',
        link: '/energy-cost-reduction',
    },
    {
        icon: FaTruckLoading,
        iconClass: '',
        title: 'อุปทานและการตระหนักรู้',
        description:
            'ในโลกธุรกิจปัจจุบัน การตัดสินใจซื้อสินค้าไม่ได้พิจารณาแค่ราคาและคุณภาพ แต่ยังรวมถึง ความยั่งยืนของห่วงโซ่อุปทาน (Supply Chain) และ ความตระหนักรู้ (Awareness) ด้านสิ่งแวดล้อมและสังคม',
        link: '/supply-chain-and-awareness',
    },
];

// Component สำหรับแสดง Icon และ Circle (คงเดิม)
const CircleIcon: React.FC<{ Icon: IconType; iconClass: string }> = ({ Icon, iconClass }) => (
    <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-green-700/70 p-4 mx-auto mb-6">
        <Icon className={`text-white text-5xl sm:text-6xl ${iconClass}`} />
    </div>
);

export default function InfographicSection() {
    return (
        // ใช้ Tailwind Classes แทน Inline Style: 
        // bg-gray-900 หรือ bg-blue-900 สำหรับสีพื้นหลังเข้ม
        // หากต้องการภาพพื้นหลังจริง ๆ ต้องตั้งค่าภาพนั้นใน CSS ภายนอก 
        // หรือใช้ Tailwind Plugin สำหรับการกำหนด background-image
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
                    {infographicData.map((item, index) => (
                        <ServiceCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            linkHref={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}