"use client"

import {useEffect, useRef, useState} from "react";

import QRCode from 'react-qr-code';

export default function Page() {
  const codeBlockRef = useRef<HTMLSpanElement>(null);
  const [qrSize, setQrSize] = useState<number>(194);


  const handleCopy = (textToCopy: string | undefined | null) => {
    if (textToCopy === null) return;
    navigator.clipboard.writeText(textToCopy!).then(() => {

    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setQrSize(150)
    }

    if (window.innerWidth < 450) {
      setQrSize(75)
    }
  }, []);




  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-[24px] font-semibold md:text-[14px] xs:text-[11px]">Совершите перевод</p>
        <div className="flex items-center gap-x-[10px]">
          <div className="h-[44px] px-[10px] bg-black rounded-[30px] flex items-center justify-center gap-x-[10px]
          text-white text-[22px] font-medium md:text-[14px] md:h-[30px] xs:text-[9px] xs:h-[20px]">
            <img className="sm:size-[12px]" src="/images/sbp.svg" alt="ru"/>
            СБП/QR
          </div>
          <span className="px-[10px] h-[44px] bg-black rounded-[30px] flex items-center justify-center gap-x-[10px]
          text-white text-[22px] font-medium md:text-[14px] md:h-[30px] xs:text-[9px] xs:h-[20px]">30:00</span>
        </div>
      </div>

      <div className="h-[85px] flex items-center justify-between w-full mt-[30px] bg-transparent rounded-[30px]
      border-[1px] solid #808080] px-[50px]
      md:h-[50px] md:placeholder:text-[14px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px] xs:mt-[11px]
      "
      >
        <span
          ref={codeBlockRef}
          className="text-[22px] text-[#808080] font-medium md:text-[14px] xs:text-[9px]"
        >
          e14d00d6-d748-42c2-ac70-0b42b96aca30
        </span>
        <img
          onClick={() => handleCopy(codeBlockRef.current?.textContent)}
          className="cursor-pointer md:size-[16px] xs:size-[12px]"
          src="/images/copy.svg"
          alt="copy"
        />
      </div>

      <div
        className="size-[250px] flex items-center justify-center mt-[30px]
        bg-gradient-to-bl from-[#2B99FF] to-[#725BFF] rounded-[41px]
        md:size-[194px] xs:size-[98px] xs:rounded-[20px]
        "
      >
        <QRCode
          fgColor="white"
          bgColor={"transparent"}
          value="https://example.com"
          size={qrSize}
        />
      </div>

    </div>
  );
}
