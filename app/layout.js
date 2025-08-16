import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/new/Navbar";
import { ThemeProvider } from "./theme-context";

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
  title: "Tarun Gupta | Web Developer Portfolio",
  description: "Explore the portfolio of Tarun Gupta, a skilled web developer creating amazing websites and web applications with innovative designs and high performance.",
  keywords: "Tarun Gupta, web developer, portfolio, website design, web applications, front-end developer, back-end developer, India",
  author: "Tarun Gupta",
  icons: {
    icon: "/programmer.png", // Path in your /public folder
  },
  openGraph: {
    title: "Tarun Gupta | Web Developer Portfolio",
    description: "Discover my work as a web developer, featuring innovative websites and web applications designed to elevate your digital presence.",
    url: "https://www.tarungupta.dev", // Replace with your actual domain
    siteName: "Tarun Gupta Portfolio",
    images: [
      {
        url: "/programmer.png", // Replace with a specific image path or use a dynamic image
        width: 1200,
        height: 630,
        alt: "Tarun Gupta Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Gupta | Web Developer Portfolio",
    description: "Check out my portfolio for stunning websites and web applications crafted with expertise.",
    images: ["/programmer.png"], // Same image as Open Graph
    creator: "@TarunGuptaDev", // Replace with your Twitter handle
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}