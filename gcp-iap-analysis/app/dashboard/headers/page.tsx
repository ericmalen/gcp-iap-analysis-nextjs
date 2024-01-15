import Pagination from '@/app/ui/headers/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/headers/table';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { getFilteredHeaders } from '@/app/lib/data';
import { getHeaderPages } from '@/app/lib/utils';
import { ITEMS_PER_PAGE } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Headers',
};

//maybe need to add "results per page" param
//depends how "results per page" will be implemented
export default async function Page({
  searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const headers = getFilteredHeaders(query);
  const totalPages = getHeaderPages(headers, ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Headers</h1>
      </div>
      
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search headers..." />
      </div>
 
      <Table query={query} currentPage={currentPage} headers={headers}/>
      
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}