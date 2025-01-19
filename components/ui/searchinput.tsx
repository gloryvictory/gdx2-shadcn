"use client"

import React, { useState } from "react";
import { IReport, IResultReport } from "@/types/models";
import { gdx2_urls } from "@/config/urls";
import axios, { AxiosError } from "axios";
import { Input } from "./input";
import { Button } from "./button";
import { Spinner } from "./spinner";
import CardReport from "./old/cardreport";
import MyCard from "./myCard";



export default function SearchInput() {
  
  const [inputValue, setInputValue] = React.useState("");
  const [msgError, setMsgError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [initialList, setInitialList] = useState<IReport[]>()

  const [open, setOpen] = useState(false);
  const [curentItem, setCurentItem] = useState<IReport>();
  
  
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    
    setInputValue(e.target.value);

  }
  
  const getData = async () => {
    setLoading(true)
    const url = `${gdx2_urls.gdx2_url_report_search}${inputValue}`
    try {
      const response = await axios.get<IResultReport>(url)
      setInitialList(response?.data.data)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setMsgError(error.message)
    }
    setLoading(false)
  }


  const onPress = ( ) => {
    getData()
  }

  const onEnterPress = (e : any) => {
    if (e.key === 'Enter' || e.keyCode === 13) { onPress()}
  }


  

// width:-webkit-fill-available
  return (
    <div className={"w-full"}> 
    
    <div className={"flex w-full-5 items-center justify-items-center content-center space-x-2 "}>
      <Input
        aria-label="Поиск"
        className="flex w-full bg-default-100 text-sm hover:outline-offset-1 hover:ring-2 hover:ring-blue-500/50 focus:ring-blue-500/50 "
        placeholder="Поиск..."
        type="search"
        onChange={onChange}
        value={inputValue}
        onKeyDown={onEnterPress}
        />
      <Button className="lg:inline-block hover:ring-blue-200/50  bg-slate-500 ring-blue-500/50" onClick={onPress}>Найти</Button>
    </div>

      {/* {Вы искали:      <strong>{inputValue.length > 3 ? inputValue : ''}</strong> } */}
      <div className='flex w-full-5 bg-slate-200 rounded-md p-2 text-center text-sm mt-1 dark:bg-slate-800 dark:hover:bg-slate-500 dark:text-white whitespace-normal' >
        Найдено отчетов: &nbsp; <strong>{initialList?.length ? ` ${initialList?.length}`: ' ' }</strong>  
      </div>    
    
      { isLoading && 
        <div className="flex w-full-5 flex-col text-center items-center justify-items-center content-center align-baseline">
          <Spinner size="lg" className="flex w-full-5  flex-col text-center items-center justify-items-center content-center align-baseline bg-black dark:bg-white" /> 
        </div>
      }
      
      { msgError && `Error: ${msgError}` }
      {/* <MyCard/> */}

      <div className="gap-2 grid grid-cols-3 sm:grid-cols-3 mt-1">
        {initialList?.length && initialList?.map((item: IReport ) => (
          // <CardReport key={item.id} item={item} onClick={()=>{setCurentItem(item); showDrawer(); console.log(item); } }  />
          <MyCard key={item.id} item={item} onClick={()=>{setCurentItem(item); showDrawer(); console.log(item); } }  />
        ))
        // setCurentItem(item); showDrawer()
        }
      </div>

      

    </div>
    
  );
}
// CardHeader


