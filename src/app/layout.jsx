import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/provider/NextAuthProvider";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { ToastContainer } from "react-toastify";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care Nest",
  description: "A care center",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <NextAuthProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <header>
            <Navbar />
          </header>
          <main className="md:w-11/12 mx-auto min-h-[calc(100vh-265px)]">
            <p className="text-2xl">{JSON.stringify(session)}</p>
            {children}
            <ToastContainer />
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
