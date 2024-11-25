import {createContext, useContext} from "react";

type MyContextType = {
  payType: string,
  setPayType: (payType: string) => void,
  paymentMethods: object[],
  setPaymentMethods: (methods: object[]) => void,
};


export const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};
