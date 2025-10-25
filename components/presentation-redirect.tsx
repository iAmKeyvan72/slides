'use client';

import { useEffect } from 'react';

interface PresentationRedirectProps {
  slug: string;
}

export function PresentationRedirect({ slug }: PresentationRedirectProps) {
  useEffect(() => {
    // Redirect to the actual Slidev presentation
    window.location.href = `/slides/${slug}/index.html`;
  }, [slug]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Loading presentation...
        </p>
      </div>
    </div>
  );
}
