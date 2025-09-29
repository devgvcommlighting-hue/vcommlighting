// components/ClientLogosSection.tsx
import React from 'react';
import Image from 'next/image';

// ข้อมูลโลโก้ลูกค้า (แทนที่ด้วยชื่อไฟล์โลโก้จริง)
const clientLogos = [
    { name: 'ClientLogos1', src: '/logos/ClientLogos1.png' },
    { name: 'ClientLogos2', src: '/logos/ClientLogos2.png' },
    { name: 'ClientLogos3', src: '/logos/ClientLogos3.png' },
    { name: 'ClientLogos4', src: '/logos/ClientLogos4.png' },
    { name: 'ClientLogos5', src: '/logos/ClientLogos5.png' },
    { name: 'ClientLogos6', src: '/logos/ClientLogos6.png' },
];

// โลโก้ซ้ำ 2 ชุด เพื่อให้เกิด Infinite Loop
const fullLogoSet = [...clientLogos, ...clientLogos];

export default function ClientLogosSection() {
    return (
        <section className="py-8 md:py-12 bg-gray-200 overflow-hidden">

            {/* Container หลักที่ซ่อน Scrollbar และจำกัดความกว้าง */}
            <div className="mx-auto">

                {/* Container สำหรับ Animation: ใช้ flex และ class animate-slide */}
                <div className="flex animate-slide group-hover:pause">
                    {fullLogoSet.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex justify-center items-center flex-shrink-0 w-[150px] sm:w-[200px] h-10 md:h-12 opacity-100 transition-opacity duration-400 mx-4 md:mx-8"
                        // w-[150px] คือการกำหนดความกว้างของแต่ละโลโก้สำหรับใช้คำนวณใน CSS slide animation
                        >
                            <Image
                                src={logo.src}
                                alt={`${logo.name} Logo`}
                                width={200}
                                height={50}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tips: หากต้องการให้หยุดเมื่อเมาส์ชี้ (Pause on hover)
        ให้ห่อหุ้ม div หลักด้วย div ที่มี class 'group' และเพิ่ม 'group-hover:pause' 
        ใน animate-slide (คุณต้องเพิ่ม utility class pause ใน globals.css สำหรับ Tailwind 4)
        แต่สำหรับ Keyframes ล้วนๆ เราสามารถใช้ CSS ได้:
        
        @keyframes slide { ... }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      */}
        </section>
    );
}