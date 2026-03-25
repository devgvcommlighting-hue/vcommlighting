// components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="py-16 sm:py-4 bg-transparent text-gray-200">
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-8 pb-8 pt-16 sm:pt-24 text-center">

                <header className="text-center mb-12 animate-fadeInUp">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-neon-blue tracking-tight drop-shadow-[0_0_10px_rgba(0,243,255,0.6)]">
                        VCOMM: ผู้นำนวัตกรรมแสงสว่างและพลังงานยั่งยืน
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        ด้วยประสบการณ์กว่า 20 ปี เรามุ่งมั่นที่จะสร้างสภาพแวดล้อมแสงสว่างที่มีประสิทธิภาพสูงและเป็นมิตรต่อสิ่งแวดล้อม
                    </p>
                </header>

                {/* 1. ประวัติและพันธกิจ */}
                <div className="bg-white/5 backdrop-blur-md border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.15)] rounded-xl p-8 md:p-12 mb-12 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-300">
                    <h2 className="text-3xl font-bold text-neon-blue mb-6 border-b border-neon-blue/50 pb-2">
                        ประวัติและพันธกิจ (Company Profile)
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-neon-blue">VCOMM</span> คือผู้นำด้านเทคโนโลยีแสงสว่างและโซลูชันการจัดการพลังงานอย่างเป็นระบบ ด้วยประสบการณ์กว่า <span className="font-extrabold text-neon-pink">20 ปี</span> เรามุ่งมั่นที่จะสร้างสภาพแวดล้อมแสงสว่างที่มีประสิทธิภาพสูงและประหยัดพลังงาน เพื่อขับเคลื่อนธุรกิจของคุณไปสู่ความยั่งยืน
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        เราไม่ใช่เพียงผู้ผลิตโคมไฟ <span className="font-semibold text-neon-green">LED</span> แต่เป็นบริษัทเทคโนโลยีที่ลงทุนอย่างลึกซึ้งในการวิจัยและพัฒนา ด้วยความร่วมมือกับมหาวิทยาลัยชั้นนำมากมาย ทำให้ <span className="font-semibold text-neon-blue">VCOMM</span> ได้สร้างความก้าวหน้าครั้งสำคัญในด้าน:
                    </p>

                    <ul className="mt-4 space-y-2 text-lg list-disc list-inside ml-4 text-gray-600 dark:text-gray-300">
                        <li><span className="text-neon-blue font-semibold">การกระจายแสง (LED Light Distribution):</span> เพื่อให้ได้คุณภาพแสงที่เหมาะสมที่สุด</li>
                        <li><span className="text-neon-blue font-semibold">การระบายความร้อน (Heat Dissipation):</span> ยืดอายุการใช้งานและรักษาประสิทธิภาพของหลอดไฟ</li>
                        <li><span className="text-neon-blue font-semibold">ระบบขับเคลื่อนพลังงาน (Power Drive):</span> มั่นใจได้ถึงเสถียรภาพและประสิทธิภาพการใช้พลังงาน</li>
                    </ul>
                </div>

                {/* 2. เทคโนโลยีและนวัตกรรม */}
                <div className="bg-white/5 backdrop-blur-md border border-neon-green/30 shadow-[0_0_15px_rgba(57,255,20,0.15)] rounded-xl p-8 md:p-12 mb-12 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300">
                    <h2 className="text-3xl font-bold text-neon-green mb-6 border-b border-neon-green/50 pb-2">
                        เทคโนโลยีและนวัตกรรมเพื่อความยั่งยืน
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-neon-green">VCOMM</span> ได้สร้างสรรค์นวัตกรรมที่เป็นเลิศมากมายในด้าน <span className="font-extrabold">ระบบอัตโนมัติ</span> และ <span className="font-extrabold">การควบคุมอัจฉริยะ (Intelligent Control)</span> ซึ่งทำให้เราก้าวขึ้นเป็นบริษัทเทคโนโลยีแสงสว่างชั้นนำ
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        เราใช้ <span className="font-extrabold text-neon-green">IES Integrated Energy Management System</span> ซึ่งเป็นระบบการจัดการพลังงานแบบบูรณาการที่เราพัฒนาขึ้นเอง เพื่อวิเคราะห์และจัดการการใช้พลังงานอย่างแม่นยำ:
                    </p>

                    <ul className="mt-4 space-y-2 text-lg list-disc list-inside ml-4 text-gray-600 dark:text-gray-300">
                        <li>การควบคุมพลังงานใน <strong className="text-neon-green">อุปกรณ์การผลิต</strong></li>
                        <li>การเพิ่มประสิทธิภาพการใช้พลังงานของ <strong className="text-neon-green">ระบบปรับอากาศส่วนกลาง</strong></li>
                    </ul>
                    <p className="mt-4 text-lg font-medium text-108191 dark:text-neon-green">
                        ระบบของเราช่วยให้ลูกค้าสามารถ <span className="font-extrabold">ค้นพบปัญหาด้านพลังงานได้ล่วงหน้า</span> และดำเนินการแก้ไขได้อย่างรวดเร็ว ซึ่งเป็นกุญแจสำคัญในการลดผลกระทบต่อสิ่งแวดล้อม
                    </p>
                </div>

                {/* 3. ความน่าเชื่อถือและผลลัพธ์ */}
                <div className="bg-white/5 backdrop-blur-md border border-neon-pink/30 shadow-[0_0_15px_rgba(188,19,254,0.15)] rounded-xl p-8 md:p-12 hover:shadow-[0_0_20px_rgba(188,19,254,0.3)] transition-all duration-300">
                    <h2 className="text-3xl font-bold text-neon-pink mb-6 border-b border-neon-pink/50 pb-2">
                        ความน่าเชื่อถือและผลลัพธ์ที่พิสูจน์ได้
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        ด้วยกลยุทธ์ <span className="font-extrabold text-neon-pink">"Bolbo Consulting +"</span> เราได้พัฒนาระบบการบริการให้เหมาะสมและมีประสิทธิภาพสูงสุด ในฐานะที่ปรึกษาด้านการประหยัดพลังงาน <span className="font-semibold text-neon-blue">Bolbo</span> ได้มอบโซลูชันที่ปรับแต่งเฉพาะให้กับลูกค้ามาแล้ว <span className="font-extrabold text-neon-pink">กว่า 1,000 ราย</span> ทั่วโลก
                    </p>
                    <p className="text-xl font-extrabold text-center text-neon-pink bg-pink-900/10 p-4 rounded-lg my-6 border-l-4 border-neon-pink shadow-[0_0_10px_rgba(188,19,254,0.2)]">
                        ผลลัพธ์ที่ชัดเจน: โครงการที่เราดำเนินการสามารถลดการใช้พลังงานลงได้โดยเฉลี่ย <span className="text-neon-pink text-2xl">20% ถึง 80%</span>
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-neon-blue">VCOMM</span> พร้อมที่จะร่วมมือกับลูกค้าของเราต่อไป ผ่านรูปแบบ <span className="font-extrabold text-neon-green">Contract Energy Management (การจัดการพลังงานตามสัญญา)</span> เพื่อส่งเสริมภาคส่วน <span className="font-extrabold text-neon-green">ลดคาร์บอน (Low-Carbon Sector)</span> และร่วมกันสร้างอนาคตที่ดีกว่าเดิม
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;