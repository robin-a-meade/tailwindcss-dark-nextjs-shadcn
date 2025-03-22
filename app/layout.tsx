import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Image from 'next/image';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ModeToggle';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Demo of dark mode transition',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //           disableTransitionOnChange

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen transition-colors duration-[3s]`}
      >
        <p>Outside</p>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-h-screen">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
              {children}
            </main>

            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              <ModeToggle />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
