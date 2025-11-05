import './globals.css';
import Nav from './components/Nav';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
const metadata: Metadata = {
  title: "MySite",
  description: "A modern Next.js demo",
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header container">
          <a href="/" className="logo">
            MySite
          </a>
          <Nav />
        </header>

        <div className="wrapper">
          <main className="container">{children}</main>
        </div>

        <footer className="footer container">© {new Date().getFullYear()} MySite — Built with Next.js</footer>
      </body>
    </html>
  );
}
