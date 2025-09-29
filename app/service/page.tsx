// app/service/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCtaSection from '@/components/ContactCtaSection'; 

// *** ข้อมูลเมตาสำหรับ SEO (โดเมนหลัก vcommlingting.com) ***
export const metadata: Metadata = {
    title: 'บริการ (Service) - VCOMM Lighting: Consulting + Digitalization',
    description: 'โซลูชัน Consulting + Digitalization แบบครบวงจรเพื่อประสิทธิภาพด้านพลังงานสูงสุดสำหรับอุตสาหกรรมการผลิต',
};

export default function ServicePage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-gray-50 text-center pt-24">
            
            {/* หัวข้อหลัก */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-6">
                Consulting + Digitalization
            </h1>
            
            {/* คำอธิบาย */}
            <p className="text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
                การให้คำปรึกษาพร้อมการเปลี่ยนผ่านสู่ยุคดิจิทัล (Consulting + Digitalization) 
                คือ<strong className="text-teal-600">โซลูชันประสิทธิภาพพลังงานแบบองค์รวมที่ออกแบบมาโดยเฉพาะ (Tailor-made)</strong>
                เพื่อช่วยให้อุตสาหกรรมการผลิตบรรลุเป้าหมายด้านประสิทธิภาพการดำเนินงานและมูลค่าทางธุรกิจที่เพิ่มขึ้น
            </p>
            
            {/* *** ตำแหน่งของ ContactCtaSection *** */}
            <ContactCtaSection />
            
            {/* กรอบเน้นบริการ */}
            <div className="mt-4 mb-10 p-6 max-w-3xl w-full bg-green-100 border-l-4 border-green-500 shadow-md">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">
                    เพิ่มประสิทธิภาพและมูลค่าธุรกิจ
                </h2>
                <p className="text-lg text-green-800">
                    เรามุ่งเน้นการมอบโซลูชันที่ปรับให้เข้ากับความต้องการเฉพาะของคุณ เพื่อให้มั่นใจว่าองค์กรของคุณจะได้รับ
                    <strong className="text-green-900">การส่งเสริมสองเท่า (Double Boost)</strong> ทั้งในด้านประสิทธิภาพองค์กรและการสร้างมูลค่า
                </p>
            </div>
            
            {/* ปุ่ม Consultation */}
            <Link 
                href="/contact" // ลิงก์ไปยังหน้าติดต่อเราเพื่อขอรับการปรึกษา
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-white bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300 transform hover:scale-105"
            >
                ปรึกษาผู้เชี่ยวชาญด้านพลังงานวันนี้!
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </Link>

            <p className="mt-4 text-sm text-gray-500">
                คลิกเพื่อติดต่อทีมงานของเรา
            </p>

        </div>
    );
}