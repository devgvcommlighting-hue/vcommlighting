// components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-gray-50 text-teal-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-800 tracking-tight">
                        VCOMM: ผู้นำนวัตกรรมแสงสว่างและพลังงานยั่งยืน
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                        ด้วยประสบการณ์กว่า 20 ปี เรามุ่งมั่นที่จะสร้างสภาพแวดล้อมแสงสว่างที่มีประสิทธิภาพสูงและเป็นมิตรต่อสิ่งแวดล้อม
                    </p>
                </header>

                {/* 1. ประวัติและพันธกิจ */}
                <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-teal-800 mb-6 border-b-2 border-blue-200 pb-2">
                        ประวัติและพันธกิจ (Company Profile)
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        <span className="font-semibold text-teal-800">VCOMM</span> คือผู้นำด้านเทคโนโลยีแสงสว่างและโซลูชันการจัดการพลังงานอย่างเป็นระบบ ด้วยประสบการณ์กว่า <span className="font-extrabold text-red-600">20 ปี</span> เรามุ่งมั่นที่จะสร้างสภาพแวดล้อมแสงสว่างที่มีประสิทธิภาพสูงและประหยัดพลังงาน เพื่อขับเคลื่อนธุรกิจของคุณไปสู่ความยั่งยืน
                    </p>
                    <p className="text-lg leading-relaxed">
                        เราไม่ใช่เพียงผู้ผลิตโคมไฟ <span className="font-semibold">LED</span> แต่เป็นบริษัทเทคโนโลยีที่ลงทุนอย่างลึกซึ้งในการวิจัยและพัฒนา ด้วยความร่วมมือกับมหาวิทยาลัยชั้นนำมากมาย ทำให้ <span className="font-semibold">VCOMM</span> ได้สร้างความก้าวหน้าครั้งสำคัญในด้าน:
                    </p>

                    <ul className="mt-4 space-y-2 text-lg list-disc list-inside ml-4">
                        <li className="text-teal-800"><strong>การกระจายแสง (LED Light Distribution):</strong> เพื่อให้ได้คุณภาพแสงที่เหมาะสมที่สุด</li>
                        <li className="text-teal-800"><strong>การระบายความร้อน (Heat Dissipation):</strong> ยืดอายุการใช้งานและรักษาประสิทธิภาพของหลอดไฟ</li>
                        <li className="text-teal-800"><strong>ระบบขับเคลื่อนพลังงาน (Power Drive):</strong> มั่นใจได้ถึงเสถียรภาพและประสิทธิภาพการใช้พลังงาน</li>
                    </ul>
                </div>

                {/* 2. เทคโนโลยีและนวัตกรรม */}
                <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-teal-700 mb-6 border-b-2 border-blue-200 pb-2">
                        เทคโนโลยีและนวัตกรรมเพื่อความยั่งยืน
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        <span className="font-semibold text-teal-800">VCOMM</span> ได้สร้างสรรค์นวัตกรรมที่เป็นเลิศมากมายในด้าน <span className="font-extrabold">ระบบอัตโนมัติ</span> และ <span className="font-extrabold">การควบคุมอัจฉริยะ (Intelligent Control)</span> ซึ่งทำให้เราก้าวขึ้นเป็นบริษัทเทคโนโลยีแสงสว่างชั้นนำ
                    </p>
                    <p className="text-lg leading-relaxed">
                        เราใช้ <span className="font-extrabold text-teal-600">IES Integrated Energy Management System</span> ซึ่งเป็นระบบการจัดการพลังงานแบบบูรณาการที่เราพัฒนาขึ้นเอง เพื่อวิเคราะห์และจัดการการใช้พลังงานอย่างแม่นยำ:
                    </p>

                    <ul className="mt-4 space-y-2 text-lg list-disc list-inside ml-4">
                        <li className="text-teal-700">การควบคุมพลังงานใน <strong>อุปกรณ์การผลิต</strong></li>
                        <li className="text-teal-700">การเพิ่มประสิทธิภาพการใช้พลังงานของ <strong>ระบบปรับอากาศส่วนกลาง</strong></li>
                    </ul>
                    <p className="mt-4 text-lg font-medium text-teal-600">
                        ระบบของเราช่วยให้ลูกค้าสามารถ <span className="font-extrabold">ค้นพบปัญหาด้านพลังงานได้ล่วงหน้า</span> และดำเนินการแก้ไขได้อย่างรวดเร็ว ซึ่งเป็นกุญแจสำคัญในการลดผลกระทบต่อสิ่งแวดล้อม
                    </p>
                </div>

                {/* 3. ความน่าเชื่อถือและผลลัพธ์ */}
                <div className="bg-white shadow-lg rounded-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-teal-700 mb-6 border-b-2 border-blue-200 pb-2">
                        ความน่าเชื่อถือและผลลัพธ์ที่พิสูจน์ได้
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        ด้วยกลยุทธ์ <span className="font-extrabold text-teal-900">"Bolbo Consulting +"</span> เราได้พัฒนาระบบการบริการให้เหมาะสมและมีประสิทธิภาพสูงสุด ในฐานะที่ปรึกษาด้านการประหยัดพลังงาน <span className="font-semibold">Bolbo</span> ได้มอบโซลูชันที่ปรับแต่งเฉพาะให้กับลูกค้ามาแล้ว <span className="font-extrabold text-red-600">กว่า 1,000 ราย</span> ทั่วโลก
                    </p>
                    <p className="text-xl font-extrabold text-center text-red-700 bg-red-50 p-4 rounded-lg my-6 border-l-4 border-red-500">
                        ผลลัพธ์ที่ชัดเจน: โครงการที่เราดำเนินการสามารถลดการใช้พลังงานลงได้โดยเฉลี่ย <span className="text-red-900">20% ถึง 80%</span>
                    </p>
                    <p className="text-lg leading-relaxed">
                        <span className="font-semibold">VCOMM</span> พร้อมที่จะร่วมมือกับลูกค้าของเราต่อไป ผ่านรูปแบบ <span className="font-extrabold text-teal-600">Contract Energy Management (การจัดการพลังงานตามสัญญา)</span> เพื่อส่งเสริมภาคส่วน <span className="font-extrabold text-teal-600">ลดคาร์บอน (Low-Carbon Sector)</span> และร่วมกันสร้างอนาคตที่ดีกว่าเดิม
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;