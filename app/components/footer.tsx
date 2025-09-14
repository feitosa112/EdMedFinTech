"use client";

import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left: Copyright */}
        <div className="text-sm">
          © 2025 MyWebsite. All rights reserved.
        </div>

        {/* Center: Links */}
        <div className="flex space-x-6 text-sm">
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={(e) => e.preventDefault()}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={(e) => e.preventDefault()}
          >
            Help / FAQ
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={(e) => e.preventDefault()}
          >
            Contact
          </a>
        </div>

        {/* Right: Legal */}
        <div className="flex space-x-6 text-sm">
          <button
            onClick={() => setOpenSection(openSection === "privacy" ? null : "privacy")}
            className="hover:text-yellow-400 transition"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setOpenSection(openSection === "terms" ? null : "terms")}
            className="hover:text-yellow-400 transition"
          >
            Terms of Service
          </button>
        </div>
      </div>

      {/* Legal content */}
      <div className="max-w-6xl mx-auto px-6 mt-4 space-y-4">
        {openSection === "privacy" && (
          <div className="bg-gray-700 p-4 rounded">
            <h4 className="font-bold mb-2">Privacy Policy</h4>
            <p>
              Your privacy is important to us. We collect information only to improve your experience on our site.
              We never share your personal data with third parties without your consent. Cookies may be used to 
              enhance functionality and track analytics. By using our website, you agree to our privacy practices.
            </p>
          </div>
        )}
        {openSection === "terms" && (
          <div className="bg-gray-700 p-4 rounded">
            <h4 className="font-bold mb-2">Terms of Service</h4>
            <p>
              By using our website, you agree to comply with our Terms of Service. You may not use the site for illegal
              activities or to infringe on others' rights. We reserve the right to modify these terms at any time. 
              Continued use of the website constitutes acceptance of the updated terms.
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
