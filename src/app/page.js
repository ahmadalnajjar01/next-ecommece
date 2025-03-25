// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center p-10 bg-white rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">Our Store</span>!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover high-quality products at the best prices. Enjoy a seamless shopping experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow transition duration-200"
          >
            Browse Products
          </Link>
          
          <Link
            href="/about"
            className="inline-block px-6 py-3 text-lg font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-full transition duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
