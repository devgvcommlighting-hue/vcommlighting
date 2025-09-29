// app/case/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ผลงาน (Case Collection) - VCOMM Lighting',
    description: 'รวบรวมผลงานและโครงการประหยัดพลังงาน LED ที่ประสบความสำเร็จของ VCOMM และ Bolbo Consulting',
};

export default function CasePage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">หน้าผลงาน (Case Collection)</h1>
            <p className="text-lg text-gray-600">กำลังอยู่ในระหว่างการรวบรวมและแสดงผลงานอ้างอิงของโครงการเร็วๆ นี้</p>
            <div className="mt-8 p-4 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700">
                <p>✨ ส่วนนี้จะนำเสนอความน่าเชื่อถือด้วยผลลัพธ์การลดพลังงาน 20%-80%</p>
            </div>
        </div>
    );
}