// declarations.d.ts

/**
 * Declares all .css files as modules.
 * This tells TypeScript that importing a .css file is valid, even though
 * there are no explicit TypeScript definitions for it.
 */
declare module '*.css' {
    // สำหรับ Next.js/Webpack ที่จัดการ CSS/SCSS files
    // การ import ไฟล์ CSS มักจะไม่มีค่าคืนกลับ (return value)
    // แต่ถ้าใช้ CSS Modules, อาจจะกำหนดให้เป็น Record<string, string>
    // แต่สำหรับ globals.css ที่เป็น side-effect import, ใช้ an empty module ได้
}