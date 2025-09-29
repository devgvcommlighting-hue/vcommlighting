// app/service/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'บริการ (Service) - VCOMM Lighting',
    description: 'บริการจัดการพลังงาน (IES), การให้คำปรึกษาด้าน LED และโซลูชันด้านการประหยัดพลังงานจากผู้เชี่ยวชาญ',
};

export default function ServicePage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">หน้าบริการ (Service)</h1>
            <p className="text-lg text-gray-600">กำลังอยู่ในระหว่างการพัฒนาและเพิ่มรายละเอียดบริการเร็วๆ นี้</p>
            <div className="mt-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
                <p>🛠️ ส่วนนี้จะแสดงรายละเอียดเกี่ยวกับบริการ IES Management, Energy Consulting และการออกแบบแสงสว่าง</p>
            </div>
        </div>
    );
}