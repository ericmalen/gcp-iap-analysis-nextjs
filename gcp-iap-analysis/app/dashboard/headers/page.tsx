import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/headers/table';
import ResultsPerPage from '@/app/ui/results-per-page';
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
      num?: string;
    };
  }) {
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const currentResultsPerPage = Number(searchParams?.num) || 5;
  const headers = getFilteredHeaders(query);
  const totalPages = getHeaderPages(headers, currentResultsPerPage);

  return (
    <div className="w-full">
      
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Headers</h1>
      </div>
      
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search headers..." />
      </div>
 
      <Table query={query} currentPage={currentPage} headers={headers} currentResultsPerPage={currentResultsPerPage}/>
      
      <div className="mt-5 flex items-center justify-center">
        
        <div className="flex-1"></div>
         
        <div className="mt-5 flex justify-center">
          <Pagination totalPages={totalPages} />
        </div>
        
        <div className="flex-1 mt-5 flex justify-end">
          <h3 className="flex items-center ml-2 mr-2 text-md text-gray-500 ">Results per page:</h3>
          <ResultsPerPage />
        </div>

      </div>
    </div>
  );
}