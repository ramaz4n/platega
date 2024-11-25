"use client"

import {useEffect, useState} from "react";

import cc from 'classcat';
import {useRouter} from "next/navigation";
import {apiRequest} from "@/shared/api/api-request.ts";
import {useMyContext} from "@/context/my-context.tsx";

export default function Home() {
  const {payType,setPayType, paymentMethods, setPaymentMethods} = useMyContext();

  const router = useRouter();

  const resumeBtnHandler = () => {
    if (payType) router.push(`/${payType}`)
  }

  const getPaymentMethods = async () => {

    const response = await apiRequest({
      url: 'transaction/payment_methods',
    })

    if (response) {
      setPaymentMethods(response.paymentMethods)
    }
  }

  useEffect(() => {
    getPaymentMethods()
  },[])


  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-[24px] font-semibold md:text-[14px]">Выберите метод оплаты</p>
      <div className="grid grid-cols-2 gap-y-[18px] gap-x-[10px] w-full mt-[30px] xs:gap-y-[6px] xs:gap-x-[4px] xs:mt-[11px]">
        <button
          onClick={() => setPayType('card')}
          className={cc([{'!bg-[#E4E4E4]' : payType === 'card'},  "w-full h-[85px] max-w-[327px] bg-[#F0F0F0] " +
          "font-medium flex items-center justify-center gap-x-[10px] rounded-[30px] hover:bg-[#E4E4E4] pr-[5px] pl-[5px] " +
          "transition ease delay-100 md:h-[50px] md:text-[14px] xs:text-[9px] xs:h-[33px]"])}
        >
          <img className="xs:size-[12px]" src="/images/ru.svg" alt="ru"/>
          P2P карты РФ
        </button>
        <button
          onClick={() => setPayType('sbp')}
          className={cc([{'!bg-[#E4E4E4]' : payType === 'sbp'},  "w-full h-[85px] max-w-[327px] bg-[#F0F0F0] " +
          "font-medium flex items-center justify-center gap-x-[10px] rounded-[30px] hover:bg-[#E4E4E4] pr-[5px] pl-[5px] " +
          "transition ease delay-100 md:h-[50px] md:text-[14px] xs:text-[9px] xs:h-[33px]"])}
        >
          <img className="xs:size-[12px]" src="/images/sbp.svg" alt="sbp"/>
          P2P СБП
        </button>
        <button
          onClick={() => setPayType('qr')}
          className={cc([{'!bg-[#E4E4E4]' : payType === 'qr'},  "w-full h-[85px] max-w-[327px] bg-[#F0F0F0] " +
          "font-medium flex items-center justify-center gap-x-[10px] rounded-[30px] hover:bg-[#E4E4E4] pr-[5px] pl-[5px] " +
          "transition ease delay-100 md:h-[50px] md:text-[14px] xs:text-[9px] xs:h-[33px]"])}
        >
          <img className="xs:size-[12px]" src="/images/sbp.svg" alt="sbp"/>
          СБП/QR
        </button>
        <button
          onClick={() => setPayType('clv')}
          className={cc([{'!bg-[#E4E4E4]' : payType === 'clv'},  "w-full h-[85px] max-w-[327px] bg-[#F0F0F0] " +
          "font-medium flex items-center justify-center gap-x-[10px] rounded-[30px] hover:bg-[#E4E4E4] pr-[5px] pl-[5px] " +
          "transition ease delay-100 md:h-[50px] md:text-[14px] xs:text-[9px] xs:h-[33px]"])}
        >
          <img className="xs:size-[12px]" src="/images/clv.svg" alt="clv"/>
          CLV
        </button>
      </div>
      <button
        onClick={() => resumeBtnHandler()}
        className="w-full h-[85px] max-w-[664px] bg-[#000000] text-[22px] text-[#FFFFFF] flex items-center
        justify-center gap-x-[10px] rounded-[30px] hover:text-[#808080] mt-[30px]
        transition ease delay-100 md:h-[50px] md:text-[14px] xs:text-[9px] xs:mt-[11px] xs:h-[33px]"
      >
        Продолжить
      </button>
    </div>
  );
}
