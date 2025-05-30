import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/new/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tarun's Portfolio",
  description: "NEXTJS Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body 
        className=  
        {`${geistSans.variable}  ${geistMono.variable} antialiased`}
      > <Navbar/>
        {children}
        </body>
      
    </html>
  );
}
