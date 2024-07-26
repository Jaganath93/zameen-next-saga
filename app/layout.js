// import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import BootstrapClient from '@/components/BootstrapClient';
import { Providers } from '@/redux/provider';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        {/* {children} */}
        <BootstrapClient/>
      </body>
    </html>
  );
}
