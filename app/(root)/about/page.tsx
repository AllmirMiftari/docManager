import { SignedOut,SignInButton,SignedIn,UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
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
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About DocuManage</h1>
        <p className="text-lg text-gray-700 mb-4">
          DocuManage is a modern document management solution built for individuals and teams who value simplicity, security, and speed.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our platform allows you to create, edit, share, and collaborate on documents from any device, anywhere in the world. With features like real-time collaboration, auto-saving, and smart templates, DocuManage helps you stay productive and organized.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're a student, a professional, or a growing company, DocuManage adapts to your workflow and ensures your documents are always accessible and safe.
        </p>
      </div>
    </div>
    </div>
  );
}
