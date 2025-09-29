// components/CaseDetailModal.tsx
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Case } from '@/types/case'; 
import { X, Zap, Sun } from 'lucide-react'; // Import icons
import BarChart from './BarChart'; // นำเข้า BarChart

interface CaseDetailModalProps {
    caseItem: Case;
    isOpen: boolean;
    onClose: () => void;
}

const CaseDetailModal: React.FC<CaseDetailModalProps> = ({ caseItem, isOpen, onClose }) => {
    // ... (ส่วน useEffect และ if (!isOpen) เหมือนเดิม)
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    
    // คำนวณการประหยัดพลังงาน (เป็นเปอร์เซ็นต์)
    const powerNow = caseItem.performance.powerChartData.now;
    const powerNew = caseItem.performance.powerChartData.new;
    const powerSavings = powerNow > 0 
        ? ((powerNow - powerNew) / powerNow) * 100 
        : 0;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                ref={modalRef}
                className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* Header */}
                <div className="sticky top-0 p-4 border-b flex justify-between items-center bg-white z-10">
                    <h2 id="modal-title" className="text-2xl font-bold text-teal-700">
                        {caseItem.title} - {caseItem.category}
                    </h2>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        aria-label="Close detail modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* เนื้อหา Modal */}
                <div className="p-6 space-y-8">
                    
                    {/* ส่วนรายละเอียดโครงการ */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-700">ภาพรวมโครงการ</h3>
                        <p className="text-gray-600 mb-4">{caseItem.description}</p>
                        
                        <h3 className="text-xl font-semibold mb-3 text-gray-700 border-t pt-4">รายละเอียด</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">{caseItem.detailContent}</p>
                    </div>

                    {/* ส่วนสรุปประสิทธิภาพ (ตารางและกราฟ) */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                        <h3 className="text-2xl font-bold mb-6 text-green-700 text-center">
                            Performance Comparison (Now vs. New)
                        </h3>
                        
                        {/* Summary Block */}
                        <div className="flex justify-center items-center text-center space-x-12 mb-8">
                            <div className="flex flex-col items-center">
                                <Zap className="text-red-500 w-8 h-8 mb-2" />
                                <p className="text-3xl font-extrabold text-teal-600">
                                    {powerSavings.toFixed(0)}%
                                </p>
                                <p className="text-sm text-gray-500">Power Savings</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Sun className="text-yellow-500 w-8 h-8 mb-2" />
                                <p className="text-3xl font-extrabold text-teal-600">
                                    {caseItem.performance.newIllumination}
                                </p>
                                <p className="text-sm text-gray-500">New Illumination (Lux)</p>
                            </div>
                        </div>

                        {/* Performance Details - Table */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 border-t pt-4">
                            <PerformanceItem label="Model" oldValue={caseItem.performance.oldModel} newValue={caseItem.performance.newModel} />
                            <PerformanceItem label="Power" oldValue={caseItem.performance.oldPower} newValue={caseItem.performance.newPower} />
                            <PerformanceItem label="Illumination" oldValue={caseItem.performance.oldIllumination} newValue={caseItem.performance.newIllumination} />
                        </div>

                        {/* Performance Charts */}
                        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8">
                            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md">
                                <BarChart 
                                    title="Power" 
                                    data={caseItem.performance.powerChartData} 
                                    unit="W" 
                                />
                            </div>
                            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md">
                                <BarChart 
                                    title="Illumination" 
                                    data={caseItem.performance.illuminationChartData} 
                                    unit="Lux" 
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* รูปภาพหลัก (ถ้ามี) */}
                    <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={caseItem.imageSrc}
                            alt={`Project: ${caseItem.title}`}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>

                {/* Footer (ปุ่มปิด) */}
                <div className="p-4 border-t flex justify-end">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                    >
                        ปิด
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseDetailModal;


// Helper Component สำหรับแสดงข้อมูลประสิทธิภาพเป็นตาราง
const PerformanceItem: React.FC<{ label: string; oldValue: string; newValue: string }> = ({ label, oldValue, newValue }) => (
    <div className="p-3 bg-white rounded-lg border flex flex-col">
        <span className="text-xs font-medium text-gray-500 uppercase">{label}</span>
        <div className="flex justify-between items-center mt-1">
            <span className="text-base text-teal-700 font-semibold">{oldValue}</span>
            <span className="text-gray-400 mx-2">→</span>
            <span className="text-lg text-yellow-600 font-bold">{newValue}</span>
        </div>
    </div>
);