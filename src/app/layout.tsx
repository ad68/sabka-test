import type { Metadata } from "next";
import Providers from '@/providers'
import "../styles/globals.css";
import localFont from 'next/font/local'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/components/layout/home/Header'
import Footer from '@/components/layout/home/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "صندوق بیمه کشاورزی",
  description: "صندوق بیمه کشاورزی",
  robots: {
    index: false,
    follow: false,
  },
};

const iranYekan = localFont({
  src: [
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/iranyekan/Woff2/IRANYekanXFaNum-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iranYekan',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranYekan.variable}   antialiased`}
      >
        <Providers>
          <Header />
          <main className={`pt-[60px] xl:pt-[82px]`}>
            {children}
            <Footer />
          </main>

        </Providers>
      </body>
    </html>
  );
}
