import { getAllPresentations } from '@/lib/presentations';
import { PresentationCard } from '@/components/presentation-card';

export default function Home() {
  const presentations = getAllPresentations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header Navigation */}
      <header className="border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm bg-white/50 dark:bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎤</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                Slides
              </span>
            </div>
            <a
              href="https://keyvanmahmoudi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium text-sm transition-colors"
            >
              keyvanmahmoudi.com →
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Technical Presentations
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Conference talks, workshops, and technical presentations by{' '}
            <span className="font-semibold text-slate-900 dark:text-white">
              Keyvan Mahmoudi
            </span>
          </p>
        </div>

        {/* Presentations Grid */}
        {presentations.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {presentations.map((presentation) => (
              <PresentationCard
                key={presentation.slug}
                presentation={presentation}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600 dark:text-slate-400">
              No presentations yet. Check back soon!
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {new Date().getFullYear()} Keyvan Mahmoudi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/iAmKeyvan72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/keyvanmahmoudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
