// app/about/page.tsx

// **ไม่ต้อง import Header อีกต่อไป**
import ClientLogosSection from '@/components/ClientLogosSection';
import ContactCtaSection from '@/components/ContactCtaSection';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import ServicesSection from '@/components/ServicesSection';
import type { Metadata } from 'next';

// ... (Metadata เหมือนเดิม)

export default function AboutPage() {
    return (
        // ลบ className="min-h-screen flex flex-col pt-20" ออก
        <div className="py-12">
            {/*
                Header ถูกย้ายไปที่ layout.tsx แล้ว
                ลบ <Header /> ออก
                
                main component ก็ถูกย้ายไปที่ layout.tsx แล้ว
                ดังนั้นเนื้อหาในหน้านี้จะอยู่ใน div ที่เป็น children ของ <main>
            */}
            
            <HeroSection />
            <ServicesSection /> 
            <ContactCtaSection />
            <ProductsSection />
            <ClientLogosSection />
            
        </div>
    );
}