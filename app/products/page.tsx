// app/products/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'สินค้า (Products) - VCOMM Lighting',
    description: 'ค้นพบผลิตภัณฑ์ LED และโซลูชันแสงสว่างประหยัดพลังงานคุณภาพสูงจาก VCOMM',
};

export default function ProductsPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">หน้าสินค้า (Products)</h1>
            <p className="text-lg text-gray-600">กำลังอยู่ในระหว่างการพัฒนาและเพิ่มรายการสินค้าเร็วๆ นี้</p>
            <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                <p>💡 ส่วนนี้จะแสดงแคตตาล็อกผลิตภัณฑ์ LED และข้อมูลจำเพาะ</p>
            </div>
        </div>
    );
}