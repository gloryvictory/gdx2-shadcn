import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IReport } from "@/types/models";


type PropsDrawer = {
  open:boolean,
  onClose: () => void,
  showDrawer: () => void, 
  item: IReport| undefined
}


// export const TheDrawer: React.FC<PropsDrawer> = ({open, onClose,showDrawer, item }:PropsDrawer) => {

export default function ReportDrawer({open, onClose,showDrawer, item }:PropsDrawer) {


  return (
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure? {`${item?.id}`}</SheetTitle>
                <SheetDescription>
                  {`${item?.report_name}`}
                  
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

  );
}
