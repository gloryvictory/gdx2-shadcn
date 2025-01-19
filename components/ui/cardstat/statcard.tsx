'use client'

import { gdx2_urls } from "@/config/urls";
import { useCounts } from "@/hooks/useCounts";
import { Card, CardFooter, CardHeader } from "../card";
import { Spinner } from "../spinner";
import Link from "next/link";

const url = gdx2_urls.gdx2_url_report_author_count

interface StatCardProps {
  title : string , 
  url   : string, 
  link?: string
}

export default function StatCard ({ title, url, link }: StatCardProps ) {

  const { stat_count, loading, error,} = useCounts(url)

  return (        
        <Card key={title}  className="hover:bg-slate-200 dark:hover:bg-slate-600">
          {/* <CardHeader className="flex gap-3">  </CardHeader> */}
          <Link                
                // className="flex items-center gap-1 text-current"
                href="/authors"
                title="Подробнее..."
              >
          <CardHeader className="overflow-visible p-3">
          <b>{title}</b>
          </CardHeader>
          <CardFooter className="text-small justify-between">
            { loading && <Spinner size="md" className="bg-black dark:bg-white" /> }
            { error && `Error: ${error}` }
            <p className="text-default-500">{`${stat_count?.count}`}</p>
          </CardFooter>
          </Link>
        </Card>
  );
}

