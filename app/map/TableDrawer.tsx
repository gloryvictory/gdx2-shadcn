'use client'

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { IReport } from "@/types/models";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import type { ColDef } from "ag-grid-community";



type PropsDrawer = {
  open:boolean,
  onClose: () => void,
  showDrawer: () => void, 
  dataSource: IReport[]| undefined
}


const pagination = true;
const paginationPageSize = 500;
const paginationPageSizeSelector = [500, 1000, 5000, 10000];
const [columnDefs, setColumnDefs] = useState<ColDef[]>([
  { headerName: "№",                field: "id",          filter: true, sortable: true, resizable: true },
  { headerName: "Наименование",     field: "report_name",     filter: true, sortable: true, resizable: true },
  { headerName: "Автор",     field: "author_name",     filter: true, sortable: true, resizable: true },
  { headerName: "Автор",     field: "author_name",     filter: true, sortable: true, resizable: true },
  { headerName: "РГФ",     field: "rgf",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_hmao",     field: "tgf_hmao",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_ynao",     field: "tgf_ynao",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_kras",     field: "tgf_kras",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_ekat",     field: "tgf_ekat",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_omsk",     field: "tgf_omsk",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_novo",     field: "tgf_novo",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_tomsk",     field: "tgf_tomsk",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_more",     field: "tgf_more",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_tmn",     field: "tgf_tmn",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf_kurgan",     field: "tgf_kurgan",     filter: true, sortable: true, resizable: true },
  { headerName: "tgf",     field: "tgf",     filter: true, sortable: true, resizable: true },
  { headerName: "subrf_name",     field: "subrf_name",     filter: true, sortable: true, resizable: true },
  { headerName: "areaoil",     field: "areaoil",     filter: true, sortable: true, resizable: true },
  { headerName: "field",     field: "field",     filter: true, sortable: true, resizable: true },
  { headerName: "pi_name",     field: "pi_name",     filter: true, sortable: true, resizable: true },
  { headerName: "territory_name",     field: "territory_name",     filter: true, sortable: true, resizable: true },
  { headerName: "fin_name",     field: "fin_name",     filter: true, sortable: true, resizable: true },
  { headerName: "is_alive",     field: "is_alive",     filter: true, sortable: true, resizable: true },
  { headerName: "org_name",     field: "org_name",     filter: true, sortable: true, resizable: true },
  { headerName: "list_name",     field: "list_name",     filter: true, sortable: true, resizable: true },
  { headerName: "zsniigg_report",     field: "zsniigg_report",     filter: true, sortable: true, resizable: true },
  { headerName: "part_name",     field: "part_name",     filter: true, sortable: true, resizable: true },
  { headerName: "vid_rab",     field: "vid_rab",     filter: true, sortable: true, resizable: true },
  { headerName: "inf_report",     field: "inf_report",     filter: true, sortable: true, resizable: true },
  { headerName: "folder_root",     field: "folder_root",     filter: true, sortable: true, resizable: true },
  { headerName: "folder_name",     field: "folder_name",     filter: true, sortable: true, resizable: true },
  { headerName: "folder_short",     field: "folder_short",     filter: true, sortable: true, resizable: true },
  { headerName: "folder_link",     field: "folder_link",     filter: true, sortable: true, resizable: true },
  { headerName: "year_str",     field: "year_str",     filter: true, sortable: true, resizable: true },
  { headerName: "comments",     field: "comments",     filter: true, sortable: true, resizable: true },
  { headerName: "lu",     field: "lu",     filter: true, sortable: true, resizable: true },
  { headerName: "Дата обновления",  field: "lastupdate",  filter: true, sortable: true, resizable: true },
]);

export default function TableDrawer({open, onClose, dataSource}:PropsDrawer) {

  // open={open} onOpenChange={setOpen}
  return (

    
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerTrigger asChild>open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{dataSource?.length} items</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <AgGridReact 
          rowData={dataSource} 
          columnDefs={columnDefs}  
          // rowClassRules={rowClassRules}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}/>
        

        <DrawerFooter>
          {/* <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline" onClick={onClose}>Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>


  );
}
