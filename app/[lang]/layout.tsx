import type { Metadata } from "next";
import { Anton, Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";
import { getDictionary, getLocale, locales } from "./dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const display = Anton({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-display-face",
});

const body = Be_Vietnam_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    // suppressHydrationWarning: the inline script below adds the "js" class before React hydrates
    <html lang={locale} className={`${display.variable} ${body.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <RevealOnScroll />
        <p className="bg-ink text-sand text-center text-xs py-2 px-4">{dict.demo}</p>
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
