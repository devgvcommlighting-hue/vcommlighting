// app/dual-carbon-goal/page.tsx

import type { Metadata } from 'next';
import React from 'react';
import { Globe, Leaf, Zap, Factory, Car, Building2, Target } from 'lucide-react';

// *************************************************************
// 1. Metadata
// *************************************************************
export const metadata: Metadata = {
    title: 'ภายใต้เป้าหมาย "คาร์บอนคู่" - Vcommlighting',
    description: 'Vcommlighting นำเสนอโซลูชัน LED ประสิทธิภาพสูงเพื่อสนับสนุนพันธกิจ "คาร์บอนคู่" (Dual Carbon) ในการลดการปล่อยคาร์บอนสูงสุดและความเป็นกลางทางคาร์บอน',
    keywords: ['คาร์บอนคู่', 'Dual Carbon', 'Carbon Neutrality', 'Carbon Emission Peak', 'LED', 'ความยั่งยืน'],
    openGraph: {
        title: 'ภายใต้เป้าหมาย "คาร์บอนคู่"',
        description: 'Vcommlighting: พลังงานสะอาดเพื่อโลกที่ดีกว่า',
        url: 'https://www.vcommlighting.com/dual-carbon-goal',
    },
};

// *************************************************************
// 2. Component
// *************************************************************
export default function DualCarbonGoalPage() {

    // คลาสพื้นฐานสำหรับการจัดรูปแบบ
    const containerClass = "container mx-auto px-4 md:px-8 max-w-4xl";
    const subHeaderClass = "text-2xl md:text-3xl font-bold mb-4 flex items-center text-green-700";
    const paragraphClass = "text-gray-600 mb-6 leading-relaxed";
    const highlightClass = "font-semibold text-green-600";
    const cardClass = "p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300";

    return (
        <div className="py-1">
            <div className="pt-24 bg-gray-50 pb-16"> {/* Header Section */}
                <div className={containerClass}>

                    {/* หัวข้อหลัก */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                            <Globe className="inline-block w-8 h-8 md:w-10 md:h-10 text-green-500 mr-3" />
                            Vcommlighting: พลังงานสะอาดเพื่อโลกที่ดีกว่า 🌍✨
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            ภายใต้เป้าหมาย <span className="font-extrabold text-green-600">"คาร์บอนคู่"</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className={containerClass}>

                    {/* บทนำเกี่ยวกับ Dual Carbon */}
                    <section className="py-12 border-b border-gray-200/50">
                        <p className={paragraphClass}>
                            <span className="font-extrabold text-green-700">"คาร์บอนคู่" (Dual Carbon)</span> คือพันธกิจสำคัญระดับโลก ที่มุ่งเน้นการบรรลุเป้าหมายการปล่อยคาร์บอนในระดับสูงสุด (<span className={highlightClass}>Carbon Emission Peak</span>) และ <span className={highlightClass}>ความเป็นกลางทางคาร์บอน (Carbon Neutrality)</span> ซึ่งผลักดันให้ภาคอุตสาหกรรม ภาคธุรกิจ และการคมนาคม ต้องเปลี่ยนผ่านสู่การใช้พลังงานสะอาดและการลดการปล่อยก๊าซเรือนกระจกอย่างจริงจัง
                        </p>
                    </section>

                    {/* โซลูชันลดคาร์บอนที่เป็นรูปธรรม */}
                    <section className="py-12 border-b border-gray-200/50">
                        <h2 className={subHeaderClass}>
                            <Leaf className="w-6 h-6 mr-3 text-green-500" />
                            💡 ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting: โซลูชันลดคาร์บอนที่เป็นรูปธรรม
                        </h2>
                        <p className={paragraphClass}>
                            Vcommlighting เข้าใจดีถึงบทบาทของ <span className={highlightClass}>ผลิตภัณฑ์แสงสว่างประสิทธิภาพสูง</span> ในการช่วยให้องค์กรต่างๆ บรรลุเป้าหมายการประหยัดพลังงานและลดการปล่อยคาร์บอนได้ทันที การเปลี่ยนจากหลอดไฟแบบดั้งเดิมมาเป็น **LED (Light Emitting Diode)** ของเราคือการตัดสินใจที่ชาญฉลาดและยั่งยืน
                        </p>
                    </section>

                    {/* 3 ส่วนหลักของการลดคาร์บอน */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">

                        {/* 1. โรงงานและคลังสินค้า */}
                        <div className={cardClass}>
                            <Factory className="w-8 h-8 text-green-600 mb-3" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">🏭 โรงงานและคลังสินค้า</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold text-gray-800">LED High Bay Lighting GK-Series:</span>
                                ลดการใช้พลังงานกว่า 50-80% ลดการปล่อยคาร์บอนทางอ้อม และสอดคล้องกับแนวคิด <span className={highlightClass}>เศรษฐกิจหมุนเวียน (Circular Economy)</span>
                            </p>
                            <ul className="list-disc ml-4 text-xs text-gray-500">
                                <li>ลดการปล่อยคาร์บอนทางอ้อม</li>
                                <li>ลดปริมาณขยะอิเล็กทรอนิกส์</li>
                            </ul>
                        </div>

                        {/* 2. ถนนและพื้นที่ภายนอกอาคาร */}
                        <div className={cardClass}>
                            <Car className="w-8 h-8 text-green-600 mb-3" /> {/* เปลี่ยนจาก Road เป็น Car */}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">🛣️ ถนนและภายนอกอาคาร</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold text-gray-800">LED Street Light LD-Series:</span>
                                ประสิทธิภาพสูง ทนทาน ลดภาระไฟฟ้าของเมืองอย่างชัดเจน สนับสนุนการสร้าง <span className={highlightClass}>ระบบพลังงานที่สะอาดขึ้น</span>
                            </p>
                            <ul className="list-disc ml-4 text-xs text-gray-500">
                                <li>ลดภาระไฟฟ้าของเมือง</li>
                                <li>สนับสนุนเมืองคาร์บอนต่ำ</li>
                            </ul>
                        </div>

                        {/* 3. ออฟฟิศและอาคารพาณิชย์ */}
                        <div className={cardClass}>
                            <Building2 className="w-8 h-8 text-green-600 mb-3" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">🏢 ออฟฟิศ/อาคารพาณิชย์</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold text-gray-800">LED T8 Tube Light LRG-Series:</span>
                                โซลูชันเปลี่ยนง่าย ประหยัดทันที และลดความร้อน ช่วยลดภาระการทำงานของเครื่องปรับอากาศ (HVAC)
                            </p>
                            <ul className="list-disc ml-4 text-xs text-gray-500">
                                <li>ลดการใช้ไฟฟ้าโดยรวม</li>
                                <li>ลดภาระเครื่องปรับอากาศ</li>
                            </ul>
                        </div>
                    </div>

                    {/* บทสรุป: พันธมิตรของคุณ */}
                    <section className="pt-8 pb-16 text-center">
                        <h2 className={subHeaderClass + " justify-center"}>
                            <Target className="w-6 h-6 mr-3 text-green-500" />
                            🎯 Vcommlighting: พันธมิตรของคุณสู่ความเป็นกลางทางคาร์บอน
                        </h2>
                        <div className="bg-green-100/50 p-6 rounded-lg border-l-8 border-green-500 mt-4">
                            <p className="text-lg font-medium text-gray-700 italic">
                                ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting ไม่ได้เป็นเพียงการลงทุนด้านแสงสว่าง แต่เป็นการลงทุนใน <span className="font-bold text-green-700">อนาคตที่ยั่งยืน</span> ซึ่งช่วยให้ธุรกิจของคุณ:
                            </p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-md font-medium text-gray-800">
                                <li><Zap className="inline w-4 h-4 mr-1 text-green-600" /> ลดต้นทุนการดำเนินงาน: ประหยัดค่าไฟฟ้าในระยะยาว</li>
                                <li><Leaf className="inline w-4 h-4 mr-1 text-green-600" /> บรรลุเป้าหมายความยั่งยืน: ลด **Carbon Footprint** และตอบโจทย์พันธกิจด้านสิ่งแวดล้อม (ESG)</li>
                                <li><Globe className="inline w-4 h-4 mr-1 text-green-600" /> สนับสนุนทิศทางการพัฒนาประเทศ: ขับเคลื่อนการเปลี่ยนผ่านสู่เศรษฐกิจสีเขียวและคาร์บอนต่ำ</li>
                            </ul>
                        </div>
                        <p className="mt-6 text-base text-gray-500 font-medium">
                            เลือก Vcommlighting วันนี้ เพื่อให้ธุรกิจของคุณส่องสว่างอย่างมีประสิทธิภาพและรับผิดชอบต่อโลกภายใต้เป้าหมาย "คาร์บอนคู่" อย่างแท้จริง!
                        </p>
                    </section>
                </div>
            </div>

        </div>
    );
}