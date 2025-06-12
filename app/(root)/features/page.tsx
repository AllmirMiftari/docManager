import { SignedOut,SignInButton,SignedIn,UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const features = [
  {
    title: 'Real-time Collaboration',
    description: 'Work with your team on the same document at the same time.',
  },
  {
    title: 'Auto Save & Versioning',
    description: 'Your changes are saved automatically. Revert to any version anytime.',
  },
  {
    title: 'Access Anywhere',
    description: 'Edit and view your documents on desktop, tablet, or mobile.',
  },
  {
    title: 'Secure Sharing',
    description: 'Set edit/view permissions and share documents safely.',
  },
  {
    title: 'Smart Templates',
    description: 'Speed up your work with reusable templates for any need.',
  },
  {
    title: 'PDF Export & Import',
    description: 'Easily convert your documents to and from PDF format.',
  },
];

export default function FeaturesPage() {
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
    <div className="min-h-screen bg-white text-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Features</h1>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
  );
}
