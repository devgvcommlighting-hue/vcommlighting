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
            'เมื่อวันที่ 22 กันยายน 2020 ประธานาธิบดีสีจิ้นผิงได้กล่าวสุนทรพจน์ที่สำคัญว่า "จีนจะเพิ่มการสนับสนุนระดับชาติ และในการการแก้ไขปัญหา จึงพยายาม และมาตรการต่างๆ เพื่อลดการปล่อยก๊าซ"',
        link: '/service/market-advisor',
    },
    {
        icon: FaGlobe,
        iconClass: '',
        title: 'นโยบายมาใช้ดึงดูดความสนใจ',
        description:
            'คณะกรรมการกลางพรรคคอมมิวนิสต์จีนและคณะรัฐมนตรีได้ออก "แผนผังโดยรวมสำหรับการก่อสร้างดิจิทัล" คณะรัฐมนตรีเสนอให้จัดตั้งสำนักงานข้อมูลแห่งชาติเพื่อการตรวจสอบ',
        link: '/service/market-advisor',
    },
    {
        icon: FaWarehouse,
        iconClass: '',
        title: 'ต้นทุนพลังงานเพิ่มขึ้น',
        description:
            'ตั้งแต่วันที่ 15 ตุลาคม 2564 เป็นต้นไป การผลิตไฟฟ้าจากถ่านหินทั้งหมดจะถูกปล่อยเข้าสู่ระบบอย่างเป็นระเบียบ ราคาจะเพิ่มขึ้นเพื่อขยายช่วงราคาซื้อขายในตลาดการผลิตไฟฟ้าจากถ่านหินให้สูงขึ้น',
        link: '/service/market-advisor',
    },
    {
        icon: FaTruckLoading,
        iconClass: '',
        title: 'อุปทานและการตระหนักรู้',
        description:
            'ตลาดออฟไลน์ที่การผลิตพลังงานยังได้รันอยู่จากตลาดทุน ทั้งจำนวนและปริมาณ ของตลาดการลงทุน และการเงินที่เพิ่มขึ้น โครงสร้างพื้นฐานของประเทศมีความมั่นคงและแบ่งปันนวัตกรรมที่แข็งแกร่ง',
        link: '/service/market-advisor',
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