import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import "./globals.css";
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Skem",
  description: "Detect skemmy website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>

      <body className={inter.className}>
          <div className="min-h-screen bg-[#FCF4D7]">
            <Navbar />
            {children}
          </div>
      </body>
      </Providers>
    </html>
  );
}
