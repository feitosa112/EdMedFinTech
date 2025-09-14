"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left: Copyright */}
        <div className="text-sm">
          © 2025 MyWebsite. All rights reserved.
        </div>

        {/* Center: Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/help" className="hover:text-gray-300">
            Help / FAQ
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Right: Legal */}
        <div className="flex space-x-6 text-sm">
          <Link href="/legal/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/legal/terms-of-service" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>

      </div>
    </footer>
  );
}
