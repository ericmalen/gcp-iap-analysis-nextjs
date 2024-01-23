import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/payload/table';
import ResultsPerPage from '@/app/ui/results-per-page';
import { Metadata } from 'next';
import { getFilteredPayload } from '@/app/lib/data';
import { getHeaderPages } from '@/app/lib/utils';

export const metadata: Metadata = {
  title: 'JWT Payload',
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
      filter?: string;
    };
  }) {
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const currentResultsPerPage = Number(searchParams?.num) || 5;
  const headers = await getFilteredPayload(query);
  const totalPages = getHeaderPages(headers, currentResultsPerPage);
  
  //CREATE TYPE FOR TABLE VARIABLES

  return (
    <div className="w-full">
      
      <div className="flex w-full">
        <h1 className="text-2xl">JWT Payload</h1>
      </div>
      
      <div className="mt-4 flex gap-2 md:mt-8">
        <Search placeholder="Search payload..." />
      </div>
 
      <Table currentPage={currentPage} currentResultsPerPage={currentResultsPerPage} filteredHeaders={headers}/>
      
      <div className="mt-5 flex items-center justify-center">
        <div className="flex-1"></div>
         
        <div className="mt-5 justify-center">
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