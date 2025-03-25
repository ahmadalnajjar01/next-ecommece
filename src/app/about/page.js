// app/about/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          About <span className="text-blue-600">Our Store</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are a modern e-commerce platform powered by <strong>Next.js App Router</strong> and <strong>Axios</strong> for seamless data handling. Our mission is to provide a fast, elegant, and user-friendly shopping experience.
        </p>
        
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src="/about-us.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow transition duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
