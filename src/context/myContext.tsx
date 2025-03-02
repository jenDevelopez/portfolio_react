import React, { Dispatch, SetStateAction, createContext, useState } from "react";
interface StateContextType {
  content:string,
  openNav:boolean,
  setContent: Dispatch<SetStateAction<string>>
  setOpenNav: Dispatch<SetStateAction<boolean>>
  isSending:boolean,
  setIsSending: Dispatch<SetStateAction<boolean>>
}

interface ProviderProps {
  children: React.ReactNode;
}

export const MyContext = createContext<StateContextType>({
  content:'resume',
  setContent:()=>{},
  openNav:false,
  setOpenNav:()=>{}
  ,
  isSending:false,
  setIsSending:()=>{},

  

});

export const MyProvider = ({ children }: ProviderProps) => {
  const [content,setContent] = useState('about')
  const [openNav,setOpenNav] = useState(false)



  return (
    <MyContext.Provider
      value={{
        content,setContent,
        openNav,setOpenNav,
        isSending:false,
        setIsSending:()=>{}

      }}
    >
      {children}
    </MyContext.Provider>
  );
};