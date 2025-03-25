// app/products/page.js
export const revalidate = 60;

import Link from 'next/link';
import { getProducts } from '../../lib/api';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Our Featured <span className="text-blue-600">Products</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link href={`/products/${product.id}`}>
                    <span className="hover:text-blue-600 transition">{product.title}</span>
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
              </div>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-blue-600">${product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
