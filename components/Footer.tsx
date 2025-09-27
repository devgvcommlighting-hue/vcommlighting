import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
    // ข้อมูลตัวอย่างสำหรับ Footer
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-10 pb-6 border-t border-yellow-500/50">
            <div className="container mx-auto px-4">
                {/* ส่วนบน: โลโก้, ลิงก์, ข้อมูลติดต่อ */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">

                    {/* คอลัมน์ที่ 1: โลโก้และโซเชียล */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            {/* ใช้โลโก้เดียวกันกับ Header */}
                            <Image
                                src="/vcommlighting-logo-placeholder.svg" // แก้ Path ให้ตรงกับที่คุณเก็บ
                                alt="Vcommlighting Logo"
                                width={120}
                                height={50}
                                className="invert"
                            />
                        </Link>
                        <p className="text-sm text-gray-400 mb-4">
                            ผู้นำด้านวัตถุดิบคุณภาพสูงสำหรับอุตสาหกรรมผลิตภัณฑ์นม.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-500 transition-colors text-xl">
                                <FaFacebook />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-yellow-500 transition-colors text-xl">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:info@vcommlighting.com" aria-label="Email" className="text-gray-400 hover:text-yellow-500 transition-colors text-xl">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* คอลัมน์ที่ 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-yellow-500">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">เกี่ยวกับเรา</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-yellow-500 transition-colors">สินค้าของเรา</Link></li>
                            <li><Link href="/service" className="text-gray-400 hover:text-yellow-500 transition-colors">บริการ</Link></li>
                            <li><Link href="/news" className="text-gray-400 hover:text-yellow-500 transition-colors">ข่าวสาร</Link></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ที่ 3: Legal & Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-yellow-500">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="text-gray-400 hover:text-yellow-500 transition-colors">นโยบายความเป็นส่วนตัว</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-yellow-500 transition-colors">ข้อกำหนดและเงื่อนไข</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-yellow-500 transition-colors">คำถามที่พบบ่อย</Link></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ที่ 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-widest text-yellow-500">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-500 flex-shrink-0" />
                                <span className="text-gray-400">123 ถนนวิคอมไลท์ติ้ง, กรุงเทพฯ, 10110</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-yellow-500" />
                                <a href="tel:+6621234567" className="text-gray-400 hover:text-yellow-500 transition-colors">+66 (0) 2 123 4567</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-yellow-500" />
                                <a href="mailto:info@vcommlighting.com" className="text-gray-400 hover:text-yellow-500 transition-colors">info@vcommlighting.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ส่วนล่าง: Copyright */}
                <div className="text-center pt-4">
                    <p className="text-sm text-gray-500">
                        &copy; {year} Vcommlighting.com. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}