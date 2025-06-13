import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

function page() {

  return (
    <main>

    
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

  <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">Manage Documents Effortlessly</h2>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Create, edit, collaborate and organize your documents with ease—anytime, anywhere.
      </p>
      <SignedIn>
      <Link href="/documents" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition">
        Go to documents
      </Link>
      </SignedIn>
    </div>
  </section>

  <section id="features" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-12">Features Built for Productivity</h3>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">Real-time Collaboration</h4>
          <p className="text-gray-600">Work with your team simultaneously on the same document.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">Auto Save & Versioning</h4>
          <p className="text-gray-600">Never lose work again. Access past versions anytime.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">Access Anywhere</h4>
          <p className="text-gray-600">Edit and manage your documents on any device, anywhere.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">Secure Sharing</h4>
          <p className="text-gray-600">Control who sees and edits your documents with granular permissions.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">Smart Templates</h4>
          <p className="text-gray-600">Use pre-built templates to speed up your work and maintain consistency.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">PDF Export & Import</h4>
          <p className="text-gray-600">Convert documents to PDF or import files in seconds.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="about" className="py-20 bg-indigo-50">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-6">About DocuManage</h3>
      <p className="text-gray-700 text-lg">
        DocuManage is a powerful cloud-based platform that helps individuals and teams create and collaborate on documents in real time. Whether you're a student, professional, or business owner, our tools are designed to make your workflow smoother, faster, and smarter.
      </p>
    </div>
  </section>

  <section id="contact" className="py-20 bg-white">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
      <p className="text-gray-700 mb-4">Have questions or feedback? We'd love to hear from you.</p>
      <a href="mailto:contact@documanage.com" className="text-indigo-600 font-medium hover:underline">
        contact@documanage.com
      </a>
    </div>
  </section>

  <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
    &copy; 2025 DocuManage. All rights reserved.
  </footer>  
  </main>)
}

export default page