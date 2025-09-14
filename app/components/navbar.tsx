"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const notifications = [
    "New comment on your post",
    "Your password was changed",
    "New follower: John Doe",
  ];

  const messages = [
    "Message from Alice",
    "Message from Bob",
    "Message from Charlie",
  ];

  const linkClass = (path: string) =>
    pathname === path ? "text-yellow-400 font-semibold" : "hover:text-gray-200";

  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 relative">
      {/* Lijeva strana */}
      <div className="flex items-center space-x-6">
        <Link href="/">
          <span className={linkClass("/") + " font-bold text-xl cursor-pointer"}>MyApp</span>
        </Link>
        <Link href="/" className={linkClass("/")}>Home</Link>
        <Link href="/about" className={linkClass("/about")}>About</Link>
        <Link href="/help" className={linkClass("/help")}>Help</Link>
        <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
      </div>

      {/* Desna strana */}
      <div className="flex items-center space-x-6 relative">
        {/* Notifications & Messages */}
        <div className="flex items-center space-x-4 relative">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <BellIcon className="h-6 w-6 hover:text-gray-200" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full h-3 w-3"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
                <h4 className="font-semibold p-2 border-b">Notifications</h4>
                <ul>
                  {notifications.map((n, index) => (
                    <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="relative">
            <button
              onClick={() => setShowMessages(!showMessages)}
              className="relative"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 hover:text-gray-200" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full h-3 w-3"></span>
            </button>

            {showMessages && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
                <h4 className="font-semibold p-2 border-b">Messages</h4>
                <ul>
                  {messages.map((m, index) => (
                    <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Login/Register */}
        <div className="flex items-center space-x-2">
          <Link
            href="/login"
            className={`px-3 py-1 rounded transition ${linkClass("/login")} bg-white text-blue-600 hover:bg-gray-100`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`px-3 py-1 rounded transition ${linkClass("/register")} bg-white text-blue-600 hover:bg-gray-100`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
