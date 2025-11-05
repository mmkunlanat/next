import './globals.css';
import Nav from './components/Nav';
import Link from 'next/link';

export const metadata = {
  title: 'MyNext - Example Site',
  description: 'เว็บตัวอย่างด้วย Next.js (ไม่ใช้ Tailwind)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <header className="header">
          <div className="container">
            <Link href="/" className="logo">MyNext</Link>
            <Nav />
          </div>
        </header>

        <main className="container main">{children}</main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} MyNext | สร้างด้วย Next.js</p>
        </footer>
      </body>
    </html>
  );
}
