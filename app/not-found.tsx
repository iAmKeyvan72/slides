import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Presentation Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The presentation you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-brand-orange text-white rounded hover:bg-orange-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
