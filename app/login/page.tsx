"use client";

import { useState } from "react";

export default function LoginPage() {
  const [step, setStep] = useState("login"); 
  // login | forgot | reset | verify | onboarding

  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-50">
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
            {step === "login" && "Login Page"}
            {step === "forgot" && "Forgot Password"}
            {step === "reset" && "Reset Password"}
            {step === "verify" && "Verify Email / Phone"}
            {step === "onboarding" && "Profile Setup"}
          </h1>

          {/* LOGIN */}
          {step === "login" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your password"
                />
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Login
              </button>

              <div className="flex justify-between text-sm mt-2">
                <button type="button" onClick={() => setStep("forgot")} className="text-blue-600 hover:underline">
                  Forgot Password?
                </button>
                <button type="button" onClick={() => setStep("reset")} className="text-blue-600 hover:underline">
                  Reset Password
                </button>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <button type="button" onClick={() => setStep("verify")} className="text-blue-600 hover:underline">
                  Verify Email/Phone
                </button>
                <button type="button" onClick={() => setStep("onboarding")} className="text-blue-600 hover:underline">
                  Profile Setup
                </button>
              </div>
            </form>
          )}

          {/* FORGOT PASSWORD */}
          {step === "forgot" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm font-medium text-gray-700">Enter your email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Send Reset Link
              </button>
              <button type="button" onClick={() => setStep("login")} className="text-blue-600 hover:underline block mt-2">
                Back to Login
              </button>
            </form>
          )}

          {/* RESET PASSWORD */}
          {step === "reset" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input type="password" className="block w-full px-3 py-2 border border-gray-300 rounded" />

              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" className="block w-full px-3 py-2 border border-gray-300 rounded" />

              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Reset Password
              </button>
              <button type="button" onClick={() => setStep("login")} className="text-blue-600 hover:underline block mt-2">
                Back to Login
              </button>
            </form>
          )}

          {/* VERIFY */}
          {step === "verify" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm font-medium text-gray-700">Enter verification code</label>
              <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded" placeholder="123456" />
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">Verify</button>
              <button type="button" onClick={() => setStep("login")} className="text-blue-600 hover:underline block mt-2">
                Back to Login
              </button>
            </form>
          )}

          {/* ONBOARDING */}
          {step === "onboarding" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded" placeholder="Choose a username" />

              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" className="block w-full px-3 py-2 border border-gray-300 rounded" placeholder="+387..." />

              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Save Profile</button>
              <button type="button" onClick={() => setStep("login")} className="text-blue-600 hover:underline block mt-2">
                Back to Login
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
