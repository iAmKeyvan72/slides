import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Slides by Keyvan Mahmoudi',
  description: 'Technical presentations and talks by Keyvan Mahmoudi',
  authors: [{ name: 'Keyvan Mahmoudi', url: 'https://keyvanmahmoudi.com' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Slides by Keyvan Mahmoudi',
    description: 'Technical presentations and talks by Keyvan Mahmoudi',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
