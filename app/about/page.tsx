// app/about/page.tsx

// **ต้อง import AboutUs Component ที่เราสร้างไว้ในคำตอบแรก**
import AboutUs from '@/components/AboutUs'; 
import ContactCtaSection from '@/components/ContactCtaSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'เกี่ยวกับเรา - VCOMM Lighting',
    description: 'VCOMM ผู้นำนวัตกรรมแสงสว่างและพลังงานยั่งยืน ด้วยประสบการณ์กว่า 20 ปี และเทคโนโลยี IES Management System',
};


export default function AboutPage() {
    return (
        // ลบ className="py-1" ออก เพราะ AboutUs component มี padding ของตัวเองแล้ว
        // <div className="py-1"> 
        <div>
            
            {/* *** ส่วนเนื้อหาหลักของหน้า About Us ***
                ใช้ AboutUs Component ที่มีเนื้อหา Profile ของบริษัท
            */}
            <AboutUs />

            {/* ส่วนกระตุ้นให้ติดต่อ (สามารถเก็บไว้ได้) */}
            <ContactCtaSection />
            
        </div>
    );
}