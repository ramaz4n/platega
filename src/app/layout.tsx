import "./globals.css";
import {Metadata} from "next";
import {Toaster} from "react-hot-toast";

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
        <div className="flex flex-col items-center mt-[67px] max-w-[764px] w-full">
          <img className="w-[288px] h-[74px] object-cover md:h-[30px] md:w-[120px]" src="/images/logo.svg" alt="logo"/>

          <div
            className="mt-[68px] w-full h-[104px] flex items-center justify-between
            rounded-[30px] bg-[#F9F9F9] px-[50px] md:h-[41px] md:px-[20px] md:mt-[30px]"
          >
            <p className="text-[22px] font-medium md:text-[14px]">NameMarket</p>
            <div className="flex flex-col items-end">
              <span className="text-[22px] font-medium leading-[11px] md:text-[11px]">100 ₽</span>
              <span className="text-[#808080] text-[16px] font-medium leading-normal md:text-[8px]">Комиссия 5 ₽</span>
            </div>
          </div>

          <div className="w-full mt-[20px] bg-[#F9F9F9] px-[50px] py-[40px] rounded-[30px] md:px-[20px] md:py-[20px]">
            {children}
          </div>

          <span className="text-[#E4E4E4] text-[22px] font-medium mt-[30px] md:text-[9px] md:mt-[20px] xs:mt-[11px]">platega.io</span>
        </div>

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  );
}
