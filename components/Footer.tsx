// components/Footer.tsx (ส่วนที่แก้ไข)

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
    // ข้อมูลตัวอย่างสำหรับ Footer
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6 border-t border-green-500/50"> 
            <div className="container mx-auto px-4">
                {/* ส่วนบน: โลโก้, ลิงก์, ข้อมูลติดต่อ */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">

                    {/* คอลัมน์ที่ 1: โลโก้และโซเชียล */}
                    <div>
                        {/* ... (omitting Logo and social text for brevity) */}
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-500 transition-colors text-xl">
                                <FaFacebook />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-500 transition-colors text-xl">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:contactvcomm@gmail.com" aria-label="Email" className="text-gray-400 hover:text-green-500 transition-colors text-xl">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* คอลัมน์ที่ 2: Quick Links (แก้ไข: contact -> case) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-green-500"> 
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-gray-400 hover:text-green-500 transition-colors">เกี่ยวกับเรา</Link></li> 
                            <li><Link href="/products" className="text-gray-400 hover:text-green-500 transition-colors">สินค้า</Link></li> 
                            <li><Link href="/service" className="text-gray-400 hover:text-green-500 transition-colors">บริการ</Link></li> 
                            <li><Link href="/news" className="text-gray-400 hover:text-green-500 transition-colors">ข่าวสาร</Link></li> 
                            <li><Link href="/case" className="text-gray-400 hover:text-green-500 transition-colors">ผลงาน (Case Collection)</Link></li> {/* <--- แก้ไขตรงนี้ */}
                        </ul>
                    </div>

                    {/* คอลัมน์ที่ 3: Services (ตัวอย่าง) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-green-500"> 
                            Services
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/service/import" className="text-gray-400 hover:text-green-500 transition-colors">Import</Link></li> 
                            <li><Link href="/service/warehouse" className="text-gray-400 hover:text-green-500 transition-colors">Warehouse</Link></li> 
                            <li><Link href="/service/logistics" className="text-gray-400 hover:text-green-500 transition-colors">Logistics</Link></li> 
                        </ul>
                    </div>

                    {/* คอลัมน์ที่ 4: Contact Info (ปรับให้เป็นข้อมูลบริษัท) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-green-500"> 
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-green-500 flex-shrink-0" /> 
                                <span className="text-gray-400">516/132 Soi Ramkhamhang39 (Thepleela1), Wangtonglang, Bangkok THAILAND 10310</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-green-500" /> 
                                <a href="tel:0613289536" className="text-gray-400 hover:text-green-500 transition-colors">061-3289536</a> 
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-green-500" /> 
                                <a href="mailto:contactvcomm@gmail.com" className="text-gray-400 hover:text-green-500 transition-colors">contactvcomm@gmail.com</a> 
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ส่วนล่าง: Copyright */}
                <div className="text-center pt-4 text-xs text-gray-500">
                    &copy; {year} VCOMM DIGITAL (THAILAND) CO.,LTD. All rights reserved.
                </div>
            </div>
        </footer>
    );
}