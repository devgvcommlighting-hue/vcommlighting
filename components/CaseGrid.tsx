// components/CaseGrid.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Case, caseData } from '@/types/case'; // สมมติว่าไฟล์อยู่ใน types/case.ts
import CaseDetailModal from './CaseDetailModal'; // จะสร้างในขั้นตอนที่ 3

// *************************************************************
// Component: CaseCard
// *************************************************************
interface CaseCardProps {
    caseItem: Case;
    onClick: (caseItem: Case) => void;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseItem, onClick }) => {
    return (
        <div 
            className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl bg-white/10"
            onClick={() => onClick(caseItem)}
            role="button"
            aria-label={`View details for ${caseItem.title}`}
        >
            {/* Image */}
            <div className="w-full h-48 sm:h-64 relative">
                <Image
                    src={caseItem.imageSrc}
                    alt={caseItem.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity duration-500 group-hover:opacity-80"
                />
                
                {/* Overlay Text Container */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white relative z-10 transition-colors duration-300">
                        {caseItem.title}
                    </h3>
                </div>
                
                {/* Hover Effect - Subtle Highlight */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-green-500/20 transition-colors duration-300"></div>
            </div>
            
        </div>
    );
};

// *************************************************************
// Component: CaseGrid (Main Component)
// *************************************************************
const CaseGrid: React.FC = () => {
    const [selectedCase, setSelectedCase] = useState<Case | null>(null);

    const handleCardClick = (caseItem: Case) => {
        setSelectedCase(caseItem);
    };

    const handleCloseModal = () => {
        setSelectedCase(null);
    };

    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-10">
                Our Successful Case Collections
            </h2>
            
            {/* Case Grid Layout: 3 คอลัมน์สำหรับ Desktop, 2 คอลัมน์สำหรับ Tablet, 1 คอลัมน์สำหรับ Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseData.map((caseItem) => (
                    <CaseCard 
                        key={caseItem.id} 
                        caseItem={caseItem} 
                        onClick={handleCardClick}
                    />
                ))}
            </div>

            {/* Modal Component */}
            {selectedCase && (
                <CaseDetailModal 
                    caseItem={selectedCase} 
                    isOpen={!!selectedCase} 
                    onClose={handleCloseModal} 
                />
            )}
        </section>
    );
};

export default CaseGrid;