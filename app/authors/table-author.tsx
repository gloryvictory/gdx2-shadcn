// components/GridComponent.tsx
"use client";

import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from "react";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useAuthor } from '@/hooks/useAuthor';
import { gdx2_urls } from '@/config/urls';
import { IData, IResult } from '@/types/models';
import axios, { AxiosError } from 'axios';
import { Spinner } from '@/components/ui/spinner';

ModuleRegistry.registerModules([AllCommunityModule]);

const DataTableDemo = () => {
  // const [data, setData] = useState<IResult>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [rowData, setRowData] = useState<IData[] >([]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "id" },
    { field: "name_ru" },
    { field: "lastupdate" },
  ]);

  
  // useEffect(() => {
  //   fetch("https://www.ag-grid.com/example-assets/olympic-winners.json") // Fetch data from server
  //     .then((result) => result.json()) // Convert to JSON
  //     .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  // }, []);
  async function fetchData() {
    const url = `${gdx2_urls.gdx2_url_report_author}`
    console.log(url)
    try {
      setError('')
      setLoading(true)     
      const data1 = window.localStorage.getItem(url); // Retrieve auth token from localStorage
      if (data1) {
        setRowData(JSON.parse(data1)) 
        // setData(JSON.parse(data1)) 
      }else{
        const response = await axios.get<IResult>(url)
        window.localStorage.setItem(url, JSON.stringify(response?.data?.data));
        // setData(response?.data)
        setRowData(response?.data?.data)  

      }


      // const counts:string = response.data['count']
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error?.message)
    }
  }


  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
    { loading && 
        <div className="flex w-full-5 flex-col text-center items-center justify-items-center content-center align-baseline">
          <Spinner size="lg" className="flex w-full-5  flex-col text-center items-center justify-items-center content-center align-baseline bg-black dark:bg-white" /> 
        </div>
      }
      
      { error && `Error: ${error}` }
      
      <div className='container w-full h-screen'>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
    </>
    // style={{ width: "100%", height: "100vh" }}
    
  );
};

export default DataTableDemo;
