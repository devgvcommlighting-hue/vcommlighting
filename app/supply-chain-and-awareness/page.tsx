// app/supply-chain-and-awareness/page.tsx

import type { Metadata } from 'next';
import React from 'react';
import { Lightbulb, Leaf, CheckCircle, Handshake, Box } from 'lucide-react'; // นำเข้าไอคอนจาก lucide-react เพื่อให้สอดคล้องกับ Sidebar.tsx

// *************************************************************
// 1. Metadata
// *************************************************************
export const metadata: Metadata = {
    title: 'อุปทานและการตระหนักรู้ - Vcommlighting',
    description: 'สร้างความยั่งยืนในห่วงโซ่คุณด้วย Vcommlighting: ความตระหนักรู้ด้าน ESG, การจัดการห่วงโซ่อุปทานที่มีประสิทธิภาพ และผลิตภัณฑ์ LED ที่เป็นมิตรต่อสิ่งแวดล้อม',
    keywords: ['Supply Chain', 'Awareness', 'ESG', 'LED', 'Vcommlighting', 'ความยั่งยืน'],
    openGraph: {
        title: 'อุปทานและการตระหนักรู้',
        description: 'Vcommlighting: ความยั่งยืนในห่วงโซ่อุปทาน',
        url: 'https://www.vcommlighting.com/supply-chain-and-awareness',
    },
};

// *************************************************************
// 2. Component
// *************************************************************
export default function SupplyChainAwarenessPage() {
    
    // คลาสพื้นฐานสำหรับส่วนต่างๆ ในหน้าเพจ
    const sectionClass = "py-12 md:py-16 border-b border-gray-200/50";
    const containerClass = "container mx-auto px-4 md:px-8 max-w-4xl";
    const headerClass = "text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 leading-tight";
    const subHeaderClass = "text-2xl md:text-3xl font-bold mb-4 flex items-center text-green-700";
    const paragraphClass = "text-gray-600 mb-6 leading-relaxed";
    const highlightClass = "font-semibold text-green-600";
    
    return (
        // ใช้ py-1 เหมือนกับหน้า page.tsx อื่นๆ
        <div className="py-1"> 
            <div className="pt-24 bg-gray-50 pb-16"> {/* เพิ่ม padding ด้านบนเพื่อไม่ให้ติด Header */}
                <div className={containerClass}>
                    
                    {/* หัวข้อหลัก */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                            <Lightbulb className="inline-block w-8 h-8 md:w-10 md:h-10 text-green-500 mr-3" />
                            อุปทานและการตระหนักรู้
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            สร้างความยั่งยืนในห่วงโซ่คุณด้วย <span className="font-bold text-green-500">Vcommlighting</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className={containerClass}>
                    
                    {/* บทนำ */}
                    <section className="py-12">
                        <p className={paragraphClass}>
                            ในโลกธุรกิจปัจจุบัน การตัดสินใจซื้อสินค้าไม่ได้พิจารณาแค่ราคาและคุณภาพ แต่ยังรวมถึง <span className={highlightClass}>ความยั่งยืนของห่วงโซ่อุปทาน (Supply Chain)</span> และ <span className={highlightClass}>ความตระหนักรู้ (Awareness)</span> ด้านสิ่งแวดล้อมและสังคมของผู้ประกอบการ การเลือก <span className={highlightClass}>ผลิตภัณฑ์แสงสว่าง LED ของ Vcommlighting</span> คือการแสดงความรับผิดชอบที่ส่งผลดีต่อทั้งสิ่งแวดล้อมและการเงินของคุณ
                        </p>
                        <hr className="my-8 border-gray-100" />
                    </section>

                    {/* 1. ความตระหนักรู้ */}
                    <section className={sectionClass}>
                        <h2 className={subHeaderClass}>
                            <Leaf className="w-6 h-6 mr-3 text-green-500" />
                            1. ความตระหนักรู้: ก้าวสู่การดำเนินงานที่ยั่งยืน
                        </h2>
                        <p className={paragraphClass}>
                            ผู้บริโภค คู่ค้า และนักลงทุน ต่างให้ความสำคัญกับบริษัทที่มี <span className={highlightClass}>ความตระหนักรู้</span> และดำเนินการเพื่อลดผลกระทบต่อสิ่งแวดล้อม การเปลี่ยนมาใช้ LED เป็นวิธีที่รวดเร็วและเป็นรูปธรรมในการแสดงความมุ่งมั่นนี้:
                        </p>

                        <ul className="space-y-6 ml-6 list-none">
                            {/* Sub-section: ลด Carbon Footprint ทันที */}
                            <li className="relative pl-6">
                                <CheckCircle className="absolute left-0 top-1 w-5 h-5 text-teal-500" />
                                <h4 className="text-lg font-bold text-gray-800 mb-2">ลด Carbon Footprint ทันที:</h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    การเปลี่ยนจากหลอดไฟเดิมที่ใช้พลังงานสูงมาเป็น LED ช่วย <span className={highlightClass}>ลดการใช้พลังงานไฟฟ้า</span> ลงอย่างมหาศาล ซึ่งเป็นปัจจัยหลักในการลดการปล่อยก๊าซเรือนกระจกโดยอ้อม (Scope 2 Emissions)
                                </p>
                                <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-500 list-disc">
                                    <li><span className="font-medium text-gray-700">LED High Bay Lighting (GK-Series):</span> ช่วยให้โรงงานและคลังสินค้าขนาดใหญ่สามารถรายงานตัวเลขการลดการใช้พลังงานได้อย่างน่าประทับใจ เพื่อตอบโจทย์ <span className={highlightClass}>ESG (Environmental, Social, and Governance)</span></li>
                                    <li><span className="font-medium text-gray-700">LED Street Light (LD-Series):</span> ช่วยให้หน่วยงานท้องถิ่นบรรลุเป้าหมายเมืองอัจฉริยะ (Smart City) และความเป็นกลางทางคาร์บอน</li>
                                </ul>
                            </li>
                            
                            {/* Sub-section: สร้างภาพลักษณ์องค์กรที่รับผิดชอบ */}
                            <li className="relative pl-6">
                                <CheckCircle className="absolute left-0 top-1 w-5 h-5 text-teal-500" />
                                <h4 className="text-lg font-bold text-gray-800 mb-2">สร้างภาพลักษณ์องค์กรที่รับผิดชอบ:</h4>
                                <p className="text-sm text-gray-600">
                                    การลงทุนในเทคโนโลยีประหยัดพลังงานอย่าง LED T8 (LRG-Series) ในอาคารสำนักงาน สื่อสารให้เห็นถึงความตระหนักในการอนุรักษ์ทรัพยากร ซึ่งเป็นแต้มต่อทางธุรกิจที่สำคัญ
                                </p>
                            </li>
                        </ul>
                    </section>
                    
                    {/* 2. อุปทาน */}
                    <section className={sectionClass}>
                        <h2 className={subHeaderClass}>
                            <Box className="w-6 h-6 mr-3 text-green-500" />
                            2. อุปทาน: ความมั่นคงและการจัดการของเสียที่เหนือกว่า
                        </h2>
                        <p className={paragraphClass}>
                            ห่วงโซ่อุปทานที่มีประสิทธิภาพ ไม่ได้วัดแค่ความเร็วในการจัดส่ง แต่รวมถึง <span className={highlightClass}>คุณภาพที่เชื่อถือได้</span> และ <span className="font-semibold text-red-600">การจัดการวัฏจักรชีวิตผลิตภัณฑ์ (Product Life Cycle)</span>
                        </p>
                        
                        <ul className="space-y-6 ml-6 list-none">
                            {/* Sub-section: ความเสี่ยงที่ลดลงในห่วงโซ่ */}
                            <li className="relative pl-6">
                                <Handshake className="absolute left-0 top-1 w-5 h-5 text-teal-500" />
                                <h4 className="text-lg font-bold text-gray-800 mb-2">ความเสี่ยงที่ลดลงในห่วงโซ่:</h4>
                                <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-500 list-disc">
                                    <li><span className="font-medium text-gray-700">อายุการใช้งานยาวนาน (Longevity):</span> LED ของ Vcommlighting มีอายุการใช้งานที่ยาวนานกว่าหลอดไฟทั่วไปหลายเท่า ทำให้คุณ <span className={highlightClass}>ลดความต้องการสินค้าคงคลัง (Inventory)</span> สำหรับหลอดไฟสำรอง และ <span className={highlightClass}>ลดความถี่ในการจัดซื้อ</span> ลงอย่างมาก ทำให้ห่วงโซ่อุปทานมีความเสถียรและคาดการณ์ได้ง่ายขึ้น</li>
                                    <li><span className="font-medium text-gray-700">ความทนทานสูง:</span> ผลิตภัณฑ์ เช่น LED Street Light (LD-Series) ถูกออกแบบให้ทนทานต่อสภาพอากาศและการใช้งานภายนอกอาคาร ลดโอกาสเกิดความเสียหายและลดความจำเป็นในการจัดส่งชิ้นส่วนอะไหล่อย่างเร่งด่วน</li>
                                </ul>
                            </li>
                            
                            {/* Sub-section: การจัดการของเสียอย่างยั่งยืน */}
                            <li className="relative pl-6">
                                <Handshake className="absolute left-0 top-1 w-5 h-5 text-teal-500" />
                                <h4 className="text-lg font-bold text-gray-800 mb-2">การจัดการของเสียอย่างยั่งยืน:</h4>
                                <p className="text-sm text-gray-600">
                                    LED ไม่มีส่วนประกอบของสารอันตราย เช่น <span className="font-medium text-red-600">ปรอท (Mercury)</span> เหมือนหลอดฟลูออเรสเซนต์แบบเดิม การเปลี่ยนมาใช้ <span className="font-medium text-gray-700">LED T8 Tube Light</span> หรือ <span className="font-medium text-gray-700">LED High Bay</span> จึงเป็นการลดการสร้างขยะอันตรายและช่วยให้องค์กรสามารถจัดการของเสียได้อย่างรับผิดชอบและสอดคล้องกับกฎระเบียบด้านสิ่งแวดล้อม
                                </p>
                            </li>
                        </ul>
                    </section>
                    
                    {/* บทสรุป */}
                    <section className="pt-8 pb-16 text-center">
                        <p className="text-lg font-medium text-gray-700 italic border-l-4 border-green-500 pl-4 inline-block bg-green-50/50 p-3">
                            <span className="font-bold text-green-700">Vcommlighting</span> พร้อมเป็นส่วนหนึ่งของห่วงโซ่อุปทานที่มั่นคงและยั่งยืนของคุณ การตัดสินใจเลือกใช้ LED ของเราวันนี้ คือการแสดงความตระหนักรู้ที่สร้างผลกำไรและอนาคตที่สะอาดกว่า
                        </p>
                    </section>
                </div>
            </div>
            
        </div>
    );
}

// *************************************************************
// 3. คำแนะนำเพิ่มเติม: การอัปเดต Quick Links ใน Footer
// *************************************************************

/*
หากต้องการให้หน้าเพจนี้เข้าถึงได้ง่ายขึ้น คุณอาจต้องการเพิ่มลิงก์ "อุปทานและการตระหนักรู้"
ในส่วน "Quick Links" ของคอมโพเนนต์ Footer.tsx ด้วย
นี่คือโค้ดที่คุณต้องเพิ่มในไฟล์ components/Footer.tsx:

// ในคอลัมน์ที่ 2: Quick Links
// ...
<ul className="space-y-2 text-sm">
    <li><Link href="/about" className="text-gray-400 hover:text-green-500 transition-colors">เกี่ยวกับเรา</Link></li> 
    <li><Link href="/products" className="text-gray-400 hover:text-green-500 transition-colors">สินค้า</Link></li> 
    <li><Link href="/service" className="text-gray-400 hover:text-green-500 transition-colors">บริการ</Link></li> 
    <li><Link href="/supply-chain-and-awareness" className="text-gray-400 hover:text-green-500 transition-colors">อุปทานและการตระหนักรู้</Link></li>  <-- เพิ่มบรรทัดนี้
    <li><Link href="/news" className="text-gray-400 hover:text-green-500 transition-colors">ข่าวสาร</Link></li> 
    <li><Link href="/contact" className="text-gray-400 hover:text-green-500 transition-colors">ติดต่อเรา</Link></li> 
</ul>
// ...
*/