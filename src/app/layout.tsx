
import "./globals.css";
import {Metadata} from "next";
import {Layout} from "@/components/layout/layout.tsx";

export const metadata: Metadata = {
  description: 'Форма оплаты',
  title: 'Страница оплаты',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full flex flex-col min-h-screen items-center pb-[100px] font-regular px-[20px]"
      >
      <Layout>
        {children}
      </Layout>
      </body>
    </html>
  );
}
