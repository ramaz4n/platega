"use client"

import {useRef, useState} from "react";

export default function Page() {
  const codeBlockRef = useRef<HTMLSpanElement>(null);
  const [status] = useState({
    text: 'Платеж не прошел',
    color: 'red',
    icon: 'error'
  });


  const handleCopy = (textToCopy: string | undefined) => {
    navigator.clipboard.writeText(textToCopy!).then(() => {

    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };


  return (
    <div className="flex flex-col items-center w-full">
      <p className="flex items-center justify-center w-full text-[24px] font-semiBold">Ваш чек</p>

      <div className="grid grid-cols-2 gap-x-[10px] w-full mt-[30px]">
        <div
          className="h-[85px] flex items-center justify-between w-full bg-[#f0f0f0] text-[22px]
            rounded-[30px] px-[50px] font-medium
            md:h-[50px] md:placeholder:text-[14px] md:text-[14px] xs:placeholder:text-[9px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px]
          "
        >
          <span>Платеж</span>
          <span>#1133</span>
        </div>
        <div
          className="h-[85px] flex items-center justify-between w-full bg-[#f0f0f0] text-[22px]
            rounded-[30px] px-[50px] font-medium
            md:h-[50px] md:placeholder:text-[14px] md:text-[14px] xs:placeholder:text-[9px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px]
          "
        >
          <span>Сумма</span>
          <span>100 ₽</span>
        </div>
      </div>

      <div
        className={`h-[85px] flex items-center justify-between w-full bg-[#f0f0f0] text-[22px]
          rounded-[30px] px-[50px] font-medium mt-[10px] border-[1px] border-[${status.color? status.color: '#f0f0f0'}]
          md:h-[50px] md:placeholder:text-[14px] md:text-[14px] xs:placeholder:text-[9px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px]
        `}
      >
        <span>Статус</span>

        <div
          className="flex items-center gap-x-[15px] text-[22px] font-medium
            md:text-[14px] xs:text-[9px]
          "
        >
          {status.text}
          <img className="md:h-[14px] xs:h-[9px]" src={`/images/${status.icon}.svg`} alt="wait"/>
        </div>
      </div>

      <div
        className="h-[85px] flex items-center justify-between w-full mt-[18px] bg-transparent rounded-[30px]
        border-[1px] solid #808080] px-[50px]
        md:h-[50px] md:placeholder:text-[14px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px]
        "
      >
        <span
          ref={codeBlockRef}
          className="text-[22px] text-[#808080] font-medium
          md:text-[14px] xs:text-[9px]
          "
        >e14d00d6-d748-42c2-ac70-0b42b96aca30</span>
        <img
          onClick={() => handleCopy(codeBlockRef.current?.textContent)}
          className="cursor-pointer md:size-[16px] xs:size-[12px]"
          src="/images/copy.svg"
          alt="copy"/>
      </div>

      <button
        className="w-full h-[85px] cursor-pointer max-w-[664px] bg-[#000000] text-[22px] text-[#FFFFFF]
        flex items-center justify-center gap-x-[10px] rounded-[30px] hover:text-[#808080] mt-[30px] transition ease delay-100
        md:h-[50px] md:text-[14px] xs:text-[9px] xs:mt-[11px] xs:h-[33px]
        "
      >
        Вернуться
      </button>

      <a
        className="mt-[30px] text-[#3C89FA] text-[22px] font-medium md:text-[14px] xs:text-[9px] xs:mt-[11px] xs:h-[33px]"
        href=""
      >
        Связаться с поддержкой
      </a>

    </div>
  );
}
