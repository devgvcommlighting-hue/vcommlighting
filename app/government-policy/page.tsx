// app/government-policy/page.tsx

import type { Metadata } from 'next';
import React from 'react';
import { Scale, Zap, Bolt, Briefcase, Target, Factory, Building2, Lamp, Lightbulb } from 'lucide-react';

// *************************************************************
// 1. Metadata
// *************************************************************
export const metadata: Metadata = {
    title: 'นโยบายภาครัฐที่ดึงดูดความสนใจ - Vcommlighting',
    description: 'Vcommlighting ช่วยธุรกิจตอบรับนโยบายรัฐบาลด้านการประหยัดพลังงาน ความยั่งยืน การลดภาษี และการสร้างความเป็นกลางทางคาร์บอน',
    keywords: ['นโยบายรัฐบาล', 'ประหยัดพลังงาน', 'BOI', 'ลดภาษี', 'LED', 'ความเป็นกลางทางคาร์บอน'],
    openGraph: {
        title: 'นโยบายภาครัฐที่ดึงดูดความสนใจ',
        description: 'Vcommlighting: ตอบรับนโยบายรัฐบาลด้วย LED',
        url: 'https://www.vcommlighting.com/government-policy',
    },
};

// *************************************************************
// 2. Component
// *************************************************************
export default function GovernmentPolicyPage() {

    // คลาสพื้นฐานสำหรับการจัดรูปแบบ
    const sectionClass = "py-12 md:py-16 border-b border-gray-200/50";
    const containerClass = "container mx-auto px-4 md:px-8 max-w-4xl";
    const subHeaderClass = "text-2xl md:text-3xl font-bold mb-4 flex items-center text-green-700";
    const paragraphClass = "text-gray-600 mb-6 leading-relaxed";
    const highlightClass = "font-semibold text-green-600";
    const itemTitleClass = "text-lg font-bold text-gray-800 mb-2 flex items-center";

    return (
        <div className="py-1">
            <div className="pt-24 bg-gray-50 pb-16"> {/* Header Section */}
                <div className={containerClass}>

                    {/* หัวข้อหลัก */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                            <Scale className="inline-block w-8 h-8 md:w-10 md:h-10 text-green-500 mr-3" />
                            นโยบายภาครัฐที่ดึงดูดความสนใจ
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            <span className="font-bold text-green-500">Vcommlighting:</span> ตอบรับนโยบายรัฐบาล ด้วยการประหยัดพลังงานและความยั่งยืน
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className={containerClass}>

                    {/* บทนำ */}
                    <section className="py-12">
                        <p className={paragraphClass}>
                            นโยบายภาครัฐในปัจจุบันมุ่งเน้นการส่งเสริม <span className={highlightClass}>ประสิทธิภาพการใช้พลังงาน (Energy Efficiency)</span> และการลดการปล่อยก๊าซเรือนกระจก ซึ่งเป็นโอกาสสำคัญที่ผลิตภัณฑ์แสงสว่าง **LED ของ Vcommlighting** จะเข้ามาเป็นโซลูชันหลักในการตอบโจทย์เหล่านี้
                        </p>
                        <p className="text-md font-medium text-gray-700 italic border-l-4 border-green-500 pl-4 bg-green-50/50 p-3 rounded-r-md">
                            การลงทุนในผลิตภัณฑ์ของเราคือการตัดสินใจที่สอดคล้องกับมาตรการจูงใจและข้อกำหนดของรัฐบาล ทำให้ธุรกิจของคุณไม่เพียงแต่ประหยัดค่าใช้จ่าย แต่ยังได้รับประโยชน์จากนโยบายสนับสนุนอีกด้วย
                        </p>
                        <hr className="my-8 border-gray-100" />
                    </section>

                    {/* 1. นโยบายการประหยัดพลังงาน (Energy Conservation) */}
                    <section className={sectionClass}>
                        <h2 className={subHeaderClass}>
                            <Bolt className="w-6 h-6 mr-3 text-green-500" />
                            1. นโยบายการประหยัดพลังงาน (Energy Conservation)
                        </h2>
                        <p className={paragraphClass}>
                            ภาครัฐมีการกำหนดเป้าหมายและมาตรฐานด้านการอนุรักษ์พลังงานในทุกภาคส่วน โดยเฉพาะใน **อาคารขนาดใหญ่ โรงงาน และอาคารควบคุม** การเปลี่ยนมาใช้ LED ถือเป็นมาตรการหลักที่ได้รับการสนับสนุนอย่างชัดเจน
                        </p>

                        <div className="space-y-6 mt-6">
                            {/* มาตรการลดการใช้พลังงานในโรงงาน/อาคาร */}
                            <div className="relative pl-8">
                                <Factory className="absolute left-0 top-1 w-6 h-6 text-teal-500" />
                                <h4 className={itemTitleClass}>มาตรการลดการใช้พลังงานในโรงงาน/อาคาร:</h4>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium text-gray-700">LED High Bay Lighting (GK-Series):</span> ตอบโจทย์โรงงานและคลังสินค้าขนาดใหญ่ที่ต้องปฏิบัติตาม <span className={highlightClass}>พระราชบัญญัติการส่งเสริมการอนุรักษ์พลังงาน</span> เนื่องจากช่วยลดการใช้ไฟฟ้าของระบบแสงสว่างได้สูงสุดถึง **50-80%**
                                </p>
                            </div>

                            {/* มาตรการสำหรับอาคารทั่วไป */}
                            <div className="relative pl-8">
                                <Building2 className="absolute left-0 top-1 w-6 h-6 text-teal-500" />
                                <h4 className={itemTitleClass}>มาตรการสำหรับอาคารทั่วไป (ออฟฟิศ/พาณิชย์):</h4>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium text-gray-700">LED T8 Tube Light (LRG-Series):</span> สอดคล้องกับข้อกำหนดด้าน <span className={highlightClass}>มาตรฐานประสิทธิภาพพลังงาน</span> สำหรับอาคารสำนักงานและอาคารพาณิชย์ การลดค่าไฟฟ้าที่ได้เป็นตัวชี้วัดความสำเร็จตามนโยบายรัฐบาล
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2. โครงการสนับสนุนการใช้พลังงานหมุนเวียนและ LED ในท้องถิ่น */}
                    <section className={sectionClass}>
                        <h2 className={subHeaderClass}>
                            <Lamp className="w-6 h-6 mr-3 text-green-500" />
                            2. โครงการสนับสนุนการใช้พลังงานหมุนเวียนและ LED ในท้องถิ่น
                        </h2>
                        <p className={paragraphClass}>
                            **องค์กรปกครองส่วนท้องถิ่น (อปท.)** มักมีงบประมาณและโครงการในการปรับปรุงโครงสร้างพื้นฐานเพื่อลดต้นทุนด้านพลังงานและเพิ่มความปลอดภัยสาธารณะ
                        </p>

                        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md mt-6">
                            <h4 className={itemTitleClass}>โครงการปรับปรุงไฟถนนเพื่อความปลอดภัยและประหยัดพลังงาน:</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-medium text-gray-700">LED Street Light (LD-Series):</span> เป็นทางออกที่สมบูรณ์แบบสำหรับ **โครงการเปลี่ยนไฟถนนของ อปท.** ซึ่งจะช่วย:
                            </p>
                            <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-500 list-disc">
                                <li>**ลดภาระงบประมาณ:** ประหยัดค่าไฟฟ้าสาธารณะได้ในระยะยาว</li>
                                <li>**เพิ่มความปลอดภัย:** ให้แสงสว่างที่มีคุณภาพและสม่ำเสมอ</li>
                                <li>**สอดคล้องกับแผนพัฒนาท้องถิ่น:** สนับสนุนการสร้าง <span className={highlightClass}>เมืองอัจฉริยะ (Smart City)</span></li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. มาตรการลดภาษีและการส่งเสริมการลงทุน (BOI) */}
                    <section className="pt-12 pb-16">
                        <h2 className={subHeaderClass}>
                            <Briefcase className="w-6 h-6 mr-3 text-green-500" />
                            3. มาตรการลดภาษีและการส่งเสริมการลงทุน (BOI)
                        </h2>
                        <p className={paragraphClass}>
                            ภาครัฐมีการให้สิทธิประโยชน์ทางภาษีแก่ภาคธุรกิจที่ลงทุนในอุปกรณ์ที่ช่วยอนุรักษ์พลังงาน หรือปรับปรุงประสิทธิภาพการผลิตให้เป็นมิตรต่อสิ่งแวดล้อมมากขึ้น
                        </p>

                        <div className="space-y-6 mt-6">
                            {/* การหักลดหย่อนภาษี */}
                            <div className="relative pl-8">
                                <Target className="absolute left-0 top-1 w-6 h-6 text-orange-500" />
                                <h4 className={itemTitleClass}>การหักลดหย่อนภาษีสำหรับการลงทุนในอุปกรณ์ประหยัดพลังงาน:</h4>
                                <p className="text-sm text-gray-600">
                                    การลงทุนใน **LED High Bay** และ **LED T8** ของ Vcommlighting มักจะสามารถนำไปใช้เป็นหลักฐานประกอบการ <span className={highlightClass}>หักลดหย่อนภาษี</span> ได้ตามมาตรการที่ภาครัฐกำหนด
                                </p>
                            </div>

                            {/* การส่งเสริมการผลิต/จำหน่ายสินค้าที่เป็นมิตรต่อสิ่งแวดล้อม */}
                            <div className="relative pl-8">
                                <Target className="absolute left-0 top-1 w-6 h-6 text-orange-500" />
                                <h4 className={itemTitleClass}>การส่งเสริมการผลิต/จำหน่ายสินค้าที่เป็นมิตรต่อสิ่งแวดล้อม:</h4>
                                <p className="text-sm text-gray-600">
                                    การเลือกใช้ผลิตภัณฑ์ LED เป็นการสนับสนุนเป้าหมาย <span className="font-extrabold text-green-700">ความเป็นกลางทางคาร์บอน (Carbon Neutrality)</span> ของประเทศ ซึ่งทำให้ธุรกิจของคุณโดดเด่นและเป็นที่ยอมรับ
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* บทสรุป */}
                    <section className="pt-8 pb-16 text-center bg-green-700 text-white rounded-lg p-6 mb-8">
                        <p className="text-xl font-bold">
                            การเลือก Vcommlighting คือการ <span className="underline">"ลงทุนเชิงกลยุทธ์"</span> ที่ตอบสนองต่อทุกมิติของนโยบายภาครัฐ
                        </p>
                        <p className="mt-2 text-sm opacity-90">
                            ไม่ว่าจะเป็นการประหยัดพลังงาน การลดคาร์บอน หรือการได้รับสิทธิประโยชน์ทางภาษี
                        </p>
                    </section>
                </div>
            </div>

        </div>
    );
}