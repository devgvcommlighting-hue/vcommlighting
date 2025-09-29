// components/BarChart.tsx
import React from 'react';

interface BarChartProps {
    title: string;
    data: { now: number; new: number };
    unit: string;
    maxRange?: number;
}

const BarChart: React.FC<BarChartProps> = ({ title, data, unit, maxRange }) => {
    // คำนวณค่า Max Range อัตโนมัติหากไม่ได้กำหนด
    const maxVal = maxRange || Math.max(data.now, data.new) * 1.2; 
    
    // คำนวณความสูงของแท่ง (เป็นเปอร์เซ็นต์ของ Max)
    // ผลลัพธ์จะเป็น String เช่น "38.095%"
    const nowHeight = `${(data.now / maxVal) * 100}%`;
    const newHeight = `${(data.new / maxVal) * 100}%`;

    return (
        <div className="flex flex-col items-center p-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-700 capitalize">{title} ({unit})</h4>
            
            <div className="flex space-x-8 h-48 items-end w-full max-w-xs">
                {/* แท่ง Now */}
                <div className="flex flex-col items-center w-1/2">
                    <span className="text-sm font-bold text-gray-800 mb-1">
                        {data.now}
                    </span>
                    <div 
                        // *** การใช้งาน Style ที่ถูกต้อง: กำหนดเฉพาะ CSS Variable ***
                        // ใช้ 'as React.CSSProperties' เพื่อให้ TypeScript ยอมรับ Custom Property
                        style={{ '--bar-height': nowHeight } as React.CSSProperties}
                        // *** ใช้ Tailwind Utility ที่อ้างอิง CSS Variable ***
                        className="w-full rounded-t-lg bg-teal-700 transition-all duration-700 ease-out h-[var(--bar-height)]" 
                        title={`Now: ${data.now} ${unit}`}
                    ></div>
                    <span className="mt-2 text-sm font-semibold text-gray-600">Now</span>
                </div>

                {/* แท่ง New */}
                <div className="flex flex-col items-center w-1/2">
                    <span className="text-sm font-bold text-gray-800 mb-1">
                        {data.new}
                    </span>
                    <div 
                        // *** การใช้งาน Style ที่ถูกต้อง: กำหนดเฉพาะ CSS Variable ***
                        style={{ '--bar-height': newHeight } as React.CSSProperties}
                        // *** ใช้ Tailwind Utility ที่อ้างอิง CSS Variable ***
                        className="w-full rounded-t-lg bg-yellow-500 transition-all duration-700 ease-out h-[var(--bar-height)]"
                        title={`New: ${data.new} ${unit}`}
                    ></div>
                    <span className="mt-2 text-sm font-semibold text-gray-600">New</span>
                </div>
            </div>
            
        </div>
    );
};

export default BarChart;