// app/energy-cost-reduction/page.tsx

import type { Metadata } from 'next';
import React from 'react';
import { DollarSign, Zap, Wrench, Clock, Lightbulb, Factory, Building2, Car } from 'lucide-react'; 

// *************************************************************
// 1. Metadata
// *************************************************************
export const metadata: Metadata = {
    title: 'การลดต้นทุนพลังงาน - Vcommlighting',
    description: 'เปลี่ยนค่าใช้จ่ายให้เป็นกำไร ด้วยผลิตภัณฑ์ LED ของ Vcommlighting ด้วยการประหยัดพลังงานและการลดต้นทุนบำรุงรักษาที่เห็นผลชัดเจน',
    keywords: ['ลดต้นทุนพลังงาน', 'Energy Cost Reduction', 'LED', 'ประหยัดไฟฟ้า', 'Vcommlighting', 'คืนทุนเร็ว'],
    openGraph: {
        title: 'การลดต้นทุนพลังงาน',
        description: 'Vcommlighting: เปลี่ยนค่าใช้จ่ายให้เป็นกำไร ด้วย LED',
        url: 'https://www.vcommlighting.com/energy-cost-reduction',
    },
};

// *************************************************************
// 2. Component
// *************************************************************
export default function EnergyCostReductionPage() {
    
    // คลาสพื้นฐานสำหรับส่วนต่างๆ ในหน้าเพจ (คงความสอดคล้องกับหน้าก่อนหน้า)
    const sectionClass = "py-12 md:py-16 border-b border-gray-200/50";
    const containerClass = "container mx-auto px-4 md:px-8 max-w-4xl";
    const subHeaderClass = "text-2xl md:text-3xl font-bold mb-4 flex items-center text-green-700";
    const paragraphClass = "text-gray-600 mb-6 leading-relaxed";
    const highlightClass = "font-semibold text-green-600";
    
    return (
        <div className="py-1"> 
            <div className="pt-24 bg-gray-50 pb-16"> {/* Header Section */}
                <div className={containerClass}>
                    
                    {/* หัวข้อหลัก */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                            <DollarSign className="inline-block w-8 h-8 md:w-10 md:h-10 text-green-500 mr-3" />
                            การลดต้นทุนพลังงาน
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            เปลี่ยนค่าใช้จ่ายให้เป็นกำไร ด้วย LED ของ <span className="font-bold text-green-500">Vcommlighting</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className={containerClass}>
                    
                    {/* บทนำ */}
                    <section className="py-12">
                        <p className={paragraphClass}>
                            สำหรับทุกธุรกิจ ไม่ว่าจะเป็นโรงงานขนาดใหญ่ อาคารพาณิชย์ หรือหน่วยงานท้องถิ่น <span className={highlightClass}>ต้นทุนพลังงาน</span> มักเป็นหนึ่งในค่าใช้จ่ายที่ควบคุมได้ยาก แต่การเปลี่ยนมาใช้ <span className={highlightClass}>ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting</span> คือการลงทุนที่ให้ผลตอบแทนรวดเร็วและยั่งยืนที่สุดในการ <span className={highlightClass}>ลดต้นทุนการดำเนินงาน</span> ของคุณ
                        </p>
                        <hr className="my-8 border-gray-100" />
                    </section>

                    {/* 1. การประหยัดที่เห็นได้ชัด: ประสิทธิภาพเหนือกว่าหลอดไฟเดิม */}
                    <section className={sectionClass}>
                        <h2 className={subHeaderClass}>
                            <Zap className="w-6 h-6 mr-3 text-green-500" />
                            1. การประหยัดที่เห็นได้ชัด: ประสิทธิภาพเหนือกว่าหลอดไฟเดิม
                        </h2>
                        <p className={paragraphClass}>
                            หัวใจสำคัญของการลดต้นทุนคือ <span className={highlightClass}>ประสิทธิภาพการแปลงพลังงาน</span> หลอดไฟ LED ใช้พลังงานน้อยกว่าหลอดไฟแบบเก่า (เช่น หลอดเมทัลฮาไลด์หรือฟลูออเรสเซนต์) ถึง **50% - 80%** ซึ่งหมายถึงใบเรียกเก็บค่าไฟฟ้าที่ลดลงในทันที
                        </p>

                        <div className="space-y-8 mt-6">
                            {/* สำหรับพื้นที่อุตสาหกรรม */}
                            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
                                <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                                    <Factory className="w-5 h-5 mr-2 text-green-700" /> 
                                    สำหรับพื้นที่อุตสาหกรรม (โรงงาน/คลังสินค้า):
                                </h4>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium text-gray-700">LED High Bay Lighting GK-Series (20W - 240W):</span> แทนที่หลอดไฟกำลังสูงเดิมที่ใช้พลังงานมหาศาล ด้วย High Bay LED ที่ให้ความสว่างเท่ากัน แต่กินไฟน้อยกว่ามาก การประหยัดพลังงานจะทวีคูณเมื่อใช้ในพื้นที่ขนาดใหญ่และเปิดใช้งานต่อเนื่องตลอดวันหรือทั้งคืน **ยิ่งใช้มาก ยิ่งประหยัดมาก**
                                </p>
                            </div>
                            
                            {/* สำหรับอาคารทั่วไป */}
                            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
                                <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                                    <Building2 className="w-5 h-5 mr-2 text-green-700" />
                                    สำหรับอาคารทั่วไป (ออฟฟิศ/พาณิชย์):
                                </h4>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium text-gray-700">LED T8 Tube Light LRG-Series:</span> การเปลี่ยนหลอดฟลูออเรสเซนต์ T8 เดิมเป็น LED T8 คือการลดการใช้ไฟฟ้าแบบง่ายและรวดเร็วที่สุดในอาคารที่มีการติดตั้งหลอดไฟจำนวนมาก การประหยัดนี้รวมถึงการลดโหลดความร้อน ทำให้เครื่องปรับอากาศทำงานน้อยลง <span className={highlightClass}>ประหยัดพลังงานซ้ำซ้อน</span>
                                </p>
                            </div>

                            {/* สำหรับพื้นที่สาธารณะ */}
                            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
                                <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                                    <Car className="w-5 h-5 mr-2 text-green-700" />
                                    สำหรับพื้นที่สาธารณะ (ถนน):
                                </h4>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium text-gray-700">LED Street Light LD-Series:</span> องค์กรปกครองส่วนท้องถิ่นสามารถลด <span className={highlightClass}>งบประมาณค่าไฟฟ้าสาธารณะ</span> ลงได้ในระดับโครงการ การใช้ไฟถนน LED ที่มีประสิทธิภาพสูง ช่วยให้เกิดความสว่างและปลอดภัยที่เหมาะสม ด้วยต้นทุนพลังงานต่อหัวเสาที่ต่ำที่สุด
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* 2. ลดค่าใช้จ่ายในการบำรุงรักษา (Maintenance Cost) */}
                    <section className={sectionClass}>
                        <h2 className={subHeaderClass}>
                            <Wrench className="w-6 h-6 mr-3 text-green-500" />
                            2. ลดค่าใช้จ่ายในการบำรุงรักษา (Maintenance Cost)
                        </h2>
                        <p className={paragraphClass}>
                            นอกเหนือจากค่าไฟฟ้าโดยตรง ค่าใช้จ่ายในการบำรุงรักษาและเปลี่ยนหลอดไฟ ยังเป็น <span className={highlightClass}>ต้นทุนแฝงที่สูงมาก</span> โดยเฉพาะในพื้นที่ที่เข้าถึงยาก เช่น เพดานสูงของโรงงาน หรือเสาไฟถนน
                        </p>
                        
                        <ul className="space-y-3 ml-6 list-none mt-4">
                            <li className="relative pl-6 text-gray-700">
                                <span className="absolute left-0 top-0 text-xl font-black text-green-500">•</span>
                                <span className="font-bold">อายุการใช้งานที่ยาวนานกว่า:</span> ผลิตภัณฑ์ LED ของ Vcommlighting มีอายุการใช้งานยาวนานกว่าหลอดไฟแบบดั้งเดิมหลายเท่า (เฉลี่ย 3-5 เท่า)
                            </li>
                            <li className="relative pl-6 text-gray-700">
                                <span className="absolute left-0 top-0 text-xl font-black text-green-500">•</span>
                                <span className="font-bold">ลดค่าแรงช่าง:</span> ไม่ต้องเสียค่าแรงในการเปลี่ยนหลอดไฟบ่อย ๆ
                            </li>
                            <li className="relative pl-6 text-gray-700">
                                <span className="absolute left-0 top-0 text-xl font-black text-green-500">•</span>
                                <span className="font-bold">ลดค่าอุปกรณ์:</span> ลดค่าใช้จ่ายในการซื้อหลอดสำรองและอุปกรณ์ในการเข้าถึงพื้นที่สูง เช่น รถกระเช้าหรือนั่งร้าน
                            </li>
                            <li className="relative pl-6 text-gray-700">
                                <span className="absolute left-0 top-0 text-xl font-black text-green-500">•</span>
                                <span className="font-bold">ลดการหยุดชะงักของงาน:</span> ลดเวลาที่ต้องหยุดการผลิตหรือจำกัดการจราจรเพื่อทำการซ่อมบำรุง
                            </li>
                        </ul>
                    </section>
                    
                    {/* 3. การคืนทุนที่รวดเร็ว (Fast Payback Period) */}
                    <section className="pt-12 pb-16">
                        <h2 className={subHeaderClass}>
                            <Clock className="w-6 h-6 mr-3 text-green-500" />
                            3. การคืนทุนที่รวดเร็ว (Fast Payback Period)
                        </h2>
                        <p className={paragraphClass}>
                            ด้วยการประหยัดพลังงานที่สูง และการลดต้นทุนบำรุงรักษาที่ชัดเจน การลงทุนเริ่มต้นในการติดตั้ง LED จึงสามารถ <span className={highlightClass}>คืนทุน (Payback)</span> ได้ภายในระยะเวลาอันสั้น (โดยทั่วไปอาจใช้เวลาเพียง **1-3 ปี** ขึ้นอยู่กับชั่วโมงการใช้งานและอัตราค่าไฟฟ้า) หลังจากนั้น ทุกบาทที่ประหยัดได้จะกลายเป็น <span className="font-extrabold text-green-700">กำไรสุทธิ (Net Profit)</span> ขององค์กร
                        </p>
                    </section>
                    
                    {/* บทสรุป */}
                    <section className="pt-8 pb-16 text-center bg-green-50/50 rounded-lg p-6 mb-8 border border-green-200">
                        <p className="text-lg font-medium text-gray-700 italic border-l-4 border-green-500 pl-4 inline-block">
                            <span className="font-bold text-green-700">Vcommlighting</span> คือคำตอบที่ตรงจุดสำหรับการจัดการต้นทุนในยุคพลังงานแพง ให้เราช่วยวิเคราะห์ความต้องการแสงสว่างของคุณ เพื่อปลดล็อกศักยภาพการประหยัดพลังงานสูงสุดให้กับธุรกิจของคุณ
                        </p>
                    </section>
                </div>
            </div>
            
        </div>
    );
}

// *************************************************************
// 4. คำแนะนำเพิ่มเติม: การอัปเดต Quick Links ใน Footer
// *************************************************************

/*
เพื่อเพิ่มการเข้าถึงหน้านี้ โปรดพิจารณาเพิ่มลิงก์ "การลดต้นทุนพลังงาน"
ในส่วน "Quick Links" ของคอมโพเนนต์ Footer.tsx

ตัวอย่างโค้ดที่ต้องเพิ่มในไฟล์ components/Footer.tsx:

// ในคอลัมน์ที่ 2: Quick Links
// ...
<ul className="space-y-2 text-sm">
    <li><Link href="/about" className="text-gray-400 hover:text-green-500 transition-colors">เกี่ยวกับเรา</Link></li> 
    <li><Link href="/products" className="text-gray-400 hover:text-green-500 transition-colors">สินค้า</Link></li> 
    <li><Link href="/service" className="text-gray-400 hover:text-green-500 transition-colors">บริการ</Link></li> 
    <li><Link href="/supply-chain-and-awareness" className="text-gray-400 hover:text-green-500 transition-colors">อุปทานและการตระหนักรู้</Link></li> 
    <li><Link href="/energy-cost-reduction" className="text-gray-400 hover:text-green-500 transition-colors">การลดต้นทุนพลังงาน</Link></li>  <-- เพิ่มบรรทัดนี้
    <li><Link href="/news" className="text-gray-400 hover:text-green-500 transition-colors">ข่าวสาร</Link></li> 
    <li><Link href="/contact" className="text-gray-400 hover:text-green-500 transition-colors">ติดต่อเรา</Link></li> 
</ul>
// ...
*/