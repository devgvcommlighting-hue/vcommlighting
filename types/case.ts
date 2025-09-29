// types/case.ts

/**
 * กำหนดประเภทสำหรับข้อมูลการเปรียบเทียบประสิทธิภาพ
 */
export interface PerformanceData {
    oldModel: string; // ชื่อโมเดลเดิม เช่น 'Metal Halide Lamp'
    newModel: string; // ชื่อโมเดลใหม่ เช่น 'LED mining lamp'
    oldPower: string; // กำลังไฟเดิม เช่น '210W' หรือ '10-56W'
    newPower: string; // กำลังไฟใหม่ เช่น '80W' หรือ '5-18W'
    oldIllumination: string; // ค่าความสว่างเดิม เช่น '81Lux'
    newIllumination: string; // ค่าความสว่างใหม่ เช่น '175Lux'
    powerChartData: { now: number; new: number }; // ข้อมูลกราฟ Power (ตัวเลข)
    illuminationChartData: { now: number; new: number }; // ข้อมูลกราฟ Illumination (ตัวเลข)
}

/**
 * กำหนดประเภทสำหรับข้อมูลของแต่ละ Case
 */
export interface Case {
    id: string; 
    title: string; 
    imageSrc: string; 
    description: string; 
    detailContent: string; 
    category: string; // ชื่อโครงการ เช่น 'Private auto parts'
    performance: PerformanceData; // ข้อมูลประสิทธิภาพ
}

/**
 * ข้อมูลจำลองสำหรับ Case Collection ทั้ง 6 รายการ
 * อิงจากรูปภาพกราฟที่อัปโหลดมา (Xnip2568-08-17_...)
 */
export const caseData: Case[] = [
    {
        id: 'central-auto-parts-1',
        title: 'LED Mining Lamp',
        category: 'Central enterprise auto parts',
        imageSrc: '/images/cases/led-mining-lamp-1.jpg',
        description: 'การเปลี่ยนจาก Metal Halide Lamp เป็น LED Mining Lamp เพื่อเพิ่มความสว่างและลดการใช้พลังงานในโรงงานชิ้นส่วนรถยนต์ขนาดใหญ่',
        detailContent: 'โครงการปรับปรุงระบบแสงสว่างโดยรวมในพื้นที่การผลิตขนาดใหญ่ของบริษัทชิ้นส่วนรถยนต์กลาง เพื่อเพิ่มความปลอดภัยและประสิทธิภาพในการทำงานโดยมีการลดการใช้พลังงานอย่างเห็นได้ชัด',
        performance: {
            oldModel: 'Metal Halide Lamp',
            newModel: 'LED mining lamp',
            oldPower: '210W',
            newPower: '80W',
            oldIllumination: '81Lux',
            newIllumination: '175Lux',
            powerChartData: { now: 210, new: 80 },
            illuminationChartData: { now: 81, new: 175 },
        },
    },
    {
        id: 'private-auto-parts-2',
        title: 'LED Straight Tube Lamp',
        category: 'Private auto parts',
        imageSrc: '/images/cases/led-straight-tube-lamp.jpg', 
        description: 'การอัพเกรดหลอดไฟ Straight tube lamp เป็น LED ในโรงงานชิ้นส่วนรถยนต์เอกชน ช่วยประหยัดไฟและเพิ่มความสว่างเป็นเท่าตัว',
        detailContent: 'การเปลี่ยนหลอดไฟ T8/T5 เดิมทั้งหมดเป็น LED Straight Tube Lamp ที่ประหยัดพลังงานสูงและมีอายุการใช้งานยาวนาน ทำให้ค่าใช้จ่ายด้านพลังงานลดลงอย่างมาก',
        performance: {
            oldModel: 'Straight tube lamp',
            newModel: 'LED straight tube lamp',
            oldPower: '10-56W',
            newPower: '5-18W',
            oldIllumination: '157Lux',
            newIllumination: '314Lux',
            powerChartData: { now: 28, new: 15 }, // ใช้ค่าเฉลี่ย
            illuminationChartData: { now: 157, new: 314 },
        },
    },
    {
        id: 'private-auto-parts-3',
        title: 'LED Mining Lamp',
        category: 'Private auto parts',
        imageSrc: '/images/cases/led-mining-lamp-2.jpg', 
        description: 'เปลี่ยนจาก Metal Halide Lamp 450W เป็น LED Mining Lamp 80W ในพื้นที่การผลิต เพื่อการประหยัดไฟ 82% และเพิ่มความสว่าง',
        detailContent: 'โปรเจกต์นี้มุ่งเน้นการประหยัดพลังงานสูงสุดในพื้นที่ที่มีเพดานสูง โดยใช้ LED Mining Lamp ที่มีประสิทธิภาพสูงและทนทานต่อสภาพแวดล้อมโรงงาน',
        performance: {
            oldModel: 'Metal Halide Lamp',
            newModel: 'LED mining lamp',
            oldPower: '450W',
            newPower: '80W',
            oldIllumination: '17Lux',
            newIllumination: '194Lux',
            powerChartData: { now: 450, new: 80 },
            illuminationChartData: { now: 17, new: 194 },
        },
    },
    {
        id: 'private-auto-parts-4',
        title: 'LED Mining Lamp',
        category: 'Private auto parts',
        imageSrc: '/images/cases/led-mining-lamp-3.jpg', 
        description: 'การเปลี่ยนหลอด LED Mining Lamp รุ่นเดิม 80W เป็นรุ่นใหม่ 30W เพื่อประสิทธิภาพที่เหนือกว่าและประหยัดพลังงานเพิ่มขึ้นอีก',
        detailContent: 'เป็นการปรับปรุงต่อเนื่อง โดยเปลี่ยนหลอด LED Mining Lamp รุ่นเก่าเป็นรุ่นใหม่ที่มีเทคโนโลยีสูงขึ้น เพื่อการประหยัดพลังงานเพิ่มเติมและเพิ่มคุณภาพของแสง',
        performance: {
            oldModel: 'LED mining lamp',
            newModel: 'LED mining lamp',
            oldPower: '80W',
            newPower: '30W',
            oldIllumination: '167Lux',
            newIllumination: '256Lux',
            powerChartData: { now: 80, new: 30 },
            illuminationChartData: { now: 167, new: 256 },
        },
    },
    {
        id: 'foreign-machinery-1',
        title: 'Mechanical Equipment',
        category: 'Foreign-owned machinery and equipment',
        imageSrc: '/images/cases/mechanical-equipment.jpg', 
        description: 'โครงการแสงสว่างและอุปกรณ์กลไกในโรงงานเครื่องจักรต่างชาติ เปลี่ยน Straight tube lamp 45W เป็น LED 17W',
        detailContent: 'การจัดหาอุปกรณ์กลไกและระบบแสงสว่าง LED ที่มีมาตรฐานระดับสากล สำหรับโรงงานเครื่องจักรกลที่ดำเนินการโดยบริษัทต่างชาติ เพื่อให้สอดคล้องกับข้อกำหนดด้านพลังงาน',
        performance: {
            oldModel: 'Straight tube lamp',
            newModel: 'LED straight tube lamp',
            oldPower: '45W',
            newPower: '17W',
            oldIllumination: '350Lux',
            newIllumination: '560Lux',
            powerChartData: { now: 45, new: 17 },
            illuminationChartData: { now: 350, new: 560 },
        },
    },
    {
        id: 'private-daily-chemical-1',
        title: 'Daily Chemical Packaging',
        category: 'Private daily chemical packaging materials',
        imageSrc: '/images/cases/daily-chemical-packaging.jpg', 
        description: 'การติดตั้ง LED Straight tube lamp ในโรงงานบรรจุภัณฑ์เคมีภัณฑ์รายวัน เพื่อการประหยัดพลังงาน 57.5% และเพิ่มความสว่าง',
        detailContent: 'โซลูชันแสงสว่างที่ช่วยให้การทำงานในไลน์บรรจุภัณฑ์มีความละเอียดและแม่นยำยิ่งขึ้น พร้อมทั้งลดภาระค่าใช้จ่ายด้านพลังงานของโรงงานเคมีภัณฑ์',
        performance: {
            oldModel: 'Straight tube lamp',
            newModel: 'LED straight tube lamp',
            oldPower: '40W',
            newPower: '17W',
            oldIllumination: '390Lux',
            newIllumination: '663Lux',
            powerChartData: { now: 40, new: 17 },
            illuminationChartData: { now: 390, new: 663 },
        },
    },
];