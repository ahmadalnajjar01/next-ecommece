// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Simple E-commerce',
  description: 'A simple e-commerce website built with Next.js App Router using a mock API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
