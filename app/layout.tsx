import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Dewan Haque Real Estate",
    template: "%s | Dewan Haque Real Estate",
  },
  description:
    "Helping families buy and sell homes with confidence across the Greater Toronto Area.",
  keywords: [
    "Real Estate",
    "Toronto",
    "Homes",
    "Buying",
    "Selling",
    "Mortgage",
    "Realtor",
  ],
  authors: [
    {
      name: "Dewan Haque",
    },
  ],
  openGraph: {
    title: "Dewan Haque Real Estate",
    description:
      "Helping families buy and sell homes with confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans bg-[#F8F8F8] text-[#111827] antialiased`}
      >
        {children}
          <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }}
        />
        <Analytics/>
      </body>
    </html>
  );
}