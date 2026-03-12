import type { Metadata } from 'next';
import { Layout } from '@/components/layout';
import { SessionProvider } from '@/components/providers/SessionProvider';
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
        <SessionProvider>
          <Layout>{children}</Layout>
        </SessionProvider>
      </body>
    </html>
  );
}
