import { MouseEventHandler } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { IReport } from "@/types/models";



export interface ReportCardProps  {
  onClick?: MouseEventHandler<HTMLDivElement>;
  item: IReport;
}

// export const ReportCard = (report_props: ReportCardProps ) => {
// 
export default function CardReport({item, onClick } : ReportCardProps ) {
  // const {item, onClick } = report_props;


  return (
    <>
      <Card className="max-w-[400px] hover:shadow-large  hover:outline-offset-1	 hover:ring-2 hover:ring-blue-500/50 focus:shadow-large focus:outline  focus:ring-2 focus:ring-blue-500/50 ">
        <CardHeader className="flex gap-3">
          <CardTitle className="text-small">{`${item.author_name.length ? `${item.author_name}` : 'Автор не указан.'} `}</CardTitle>
        </CardHeader>
        <CardContent className="text-small text-default-500">
          {item.report_name}
        </CardContent>       
        <div className="bottom-0">
          <CardFooter className="p-2 flex flex-row gap-1 items-center justify-between space-x-6  text-small bottom-0">
            <div className="text-small" >№ РГФ: <strong>{`${item.rgf.length ? `${item.rgf}` : ''} `}</strong></div>
            <div className="text-small" ><strong>{`${item.tgf.length ? `${item.tgf}` : ''} `}</strong></div>
            <div className="text-small" >Год: <strong>{`${item.year_str.length ? `${item.year_str}` : ''}`}</strong></div>
          </CardFooter>
        </div>
      </Card>     
    </>
  );
}

