"use client"

import {Controller, useForm} from "react-hook-form";
import {useRef} from "react";
import {Masks} from "@/shared/constants/masks";
import { maskito } from '@/shared/utils/maskito';

export default function Page() {
  const codeBlockRef = useRef<HTMLSpanElement>(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      cardNumber: '',
      sum: '',
      fio: '',
    },
    mode: 'all',
  });

  const cardNumber = watch('cardNumber');
  const sumValue = watch('sum');


  const onSubmit = () => {

  }

  const handleCopy = (textToCopy: string | undefined) => {
    navigator.clipboard.writeText(textToCopy!).then(() => {

    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-[24px] font-semibold md:text-[14px] xs:text-[11px]">Совершите перевод</p>
        <div className="flex items-center gap-x-[10px]">
          <div className="h-[44px] px-[10px] bg-black rounded-[30px] flex items-center justify-center gap-x-[10px]
          text-white text-[22px] font-medium md:text-[14px] md:h-[30px] xs:text-[9px] xs:h-[20px]">
            <img className="sm:size-[12px]" src="/images/ru.svg" alt="ru"/>
            P2P карта
          </div>
          <span className="px-[10px] h-[44px] bg-black rounded-[30px] flex items-center justify-center gap-x-[10px]
          text-white text-[22px] font-medium md:text-[14px] md:h-[30px] xs:text-[9px] xs:h-[20px]">30:00</span>
        </div>
      </div>

      <div className="flex flex-wrap w-full mt-[30px] relative">
        <div className="relative w-full">
          <Controller
            control={control}
            name='cardNumber'
            rules={{ required: 'Обязательное поле' }}
            render={({ field: { onChange, ...field } }) => (
              <input
                {...field}
                className="w-full h-[85px] cursor-text max-w-[664px] bg-[#f0f0f0] text-[22px]
                  text-[#808080] flex items-center justify-center gap-x-[10px] rounded-[30px] px-[50px]
                  placeholder:text-[22px] placeholder:text-[#808080]
                  font-medium md:h-[50px] md:placeholder:text-[14px] md:text-[14px] xs:placeholder:text-[9px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px]
                "
                placeholder="Номер карты"
                onChange={(e) =>
                  onChange(maskito.format(e.target.value, Masks.card))
                }
              />
            )}
          />
          <img
            onClick={() => handleCopy(cardNumber)}
            className="cursor-pointer absolute inset-y-0 m-auto right-[50px] md:size-[16px] xs:size-[12px] md:right-[30px] xs:right-[20px]"
            src="/images/copy.svg" alt="copy"
          />
        </div>
        {errors.cardNumber && <span className="text-red-500 md:text-[14px] xs:text-[6px]">{errors.cardNumber.message}</span>}
      </div>
      <div className="grid grid-cols-2 gap-x-[10px] w-full mt-[18px]">
        <div className="flex flex-col">
          <input
            className="w-full h-[85px] cursor-text max-w-[664px] bg-[#f0f0f0] text-[22px]
              text-[#808080] flex items-center justify-center gap-x-[10px] rounded-[30px] px-[50px]
              placeholder:text-[22px] placeholder:text-[#808080]
              font-medium md:h-[50px] md:placeholder:text-[14px] md:text-[14px] xs:placeholder:text-[9px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px]
            "
            type="text"
            placeholder="ФИО"
            {
              ...register('fio', {
                required: 'Обязательное поле'
              })
            }
          />
          {errors.fio && <span className="text-red-500 md:text-[14px] xs:text-[6px]">{errors.fio.message}</span>}
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <input
              className="w-full h-[85px] cursor-text max-w-[664px] bg-[#f0f0f0] text-[22px]
                text-[#808080] flex items-center justify-center gap-x-[10px] rounded-[30px] px-[50px]
                placeholder:text-[22px] placeholder:text-[#808080]
                font-medium md:h-[50px] md:placeholder:text-[14px] md:text-[14px] xs:placeholder:text-[9px] xs:text-[9px] xs:h-[33px] md:px-[30px] xs:px-[20px]
              "
              type="number"
              placeholder="Сумма"
              {
                ...register('sum', {
                  required: 'Обязательное поле'
                })
              }
            />
            <img
              onClick={() => handleCopy(sumValue)}
              className="cursor-pointer absolute inset-y-0 m-auto right-[50px] md:size-[16px] xs:size-[12px] md:right-[30px] xs:right-[20px]"
              src="/images/copy.svg"
              alt="copy"/>
          </div>
          {errors.sum && <span className="text-red-500 md:text-[14px] xs:text-[6px]">{errors.sum.message}</span>}
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

      <input
        className="w-full h-[85px] cursor-pointer max-w-[664px] bg-[#000000] text-[22px] text-[#FFFFFF]
        flex items-center justify-center gap-x-[10px] rounded-[30px] hover:text-[#808080] mt-[30px] transition ease delay-100
        md:h-[50px] md:text-[14px] xs:text-[9px] xs:mt-[11px] xs:h-[33px]
        "
        type="submit"
        value="Оплатить"
      />
    </form>
  );
}
