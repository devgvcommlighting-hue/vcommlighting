// app/case/page.tsx
import type { Metadata } from 'next';
import CaseGrid from '@/components/CaseGrid'; // นำเข้า CaseGrid

export const metadata: Metadata = {
    title: 'ผลงาน (Case Collection) - VCOMM Lighting',
    description: 'รวบรวมผลงานและโครงการประหยัดพลังงาน LED ที่ประสบความสำเร็จของ VCOMM และ Bolbo Consulting',
};

export default function CasePage() {
    return (
        <div className="pt-20 bg-gray-50"> {/* เพิ่ม pt-20 เพื่อให้เนื้อหาไม่ถูก Header บัง */}
            
            {/* ส่วนหัวของหน้า (Case Collection) */}
            <div className="text-center py-10 px-4">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
                    Case Collection & Project Success
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    เราสร้างความเชื่อมั่นด้วยผลลัพธ์: การลดการใช้พลังงาน 20%-80% ผ่านโซลูชันแสงสว่างและอุปกรณ์คุณภาพสูงของเรา
                </p>
            </div>
            
            {/* ส่วนแสดง Case Grid */}
            <CaseGrid />
            
        </div>
    );
}