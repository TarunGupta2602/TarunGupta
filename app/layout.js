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
  title: "I'm Tarun Gupta a Web Developer.",
  description: "I create And amazing Websites and Web Applications.",
   icons: {
    icon: "/programmer.png", // Path in your /public folder
   
  },
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
