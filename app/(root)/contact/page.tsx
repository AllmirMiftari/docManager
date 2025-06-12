import { SignedOut,SignInButton,SignedIn,UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
  return (
    <div>
<header className="bg-white shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-indigo-600">DocManager</Link>
      <nav className="space-x-6 hidden md:block">
        <Link href="/features" className="text-gray-700 hover:text-indigo-600">Features</Link>
        <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
      </nav>
      <div className="space-x-4">
        <SignedOut>
        <SignInButton mode='modal'/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  </header>
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          📧 Email: <a href="mailto:contact@documanage.com" className="text-blue-600 hover:underline">contact@documanage.com</a>
        </p>
        <p className="text-lg text-gray-700">
          🕒 Support Hours: Monday – Friday, 9:00 AM – 5:00 PM (UTC)
        </p>
      </div>
    </div>
    </div>
  );
}
