import type { Metadata } from 'next';
import { Layout } from '@/components/layout';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Productivity Hub',
  description: 'Your all-in-one productivity dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
