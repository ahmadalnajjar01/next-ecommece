// app/products/[id]/page.js
export const dynamic = 'force-dynamic'; // Force SSR

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductById } from '../../../lib/api';

export default async function ProductDetailsPage({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>

        <div className="text-gray-700 text-lg mb-6 leading-relaxed">
          {product.description}
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-extrabold text-blue-600">
            ${product.price}
          </span>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200 text-lg font-medium shadow">
            Add to Cart
          </button>
        </div>

        <hr className="my-6" />

        <div className="text-sm text-gray-500">
          <Link href="/products" className="hover:text-blue-600 transition">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
