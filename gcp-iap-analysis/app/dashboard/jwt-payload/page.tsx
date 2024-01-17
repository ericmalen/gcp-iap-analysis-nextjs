//import Table from '@/app/ui/user-info/table';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Information',
};

//add props if need be
export default async function Page() {

  return (
    <div className="w-full">
      
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">User Information</h1>
      </div>      
      
      {/* <Table query={query} currentPage={currentPage} /> */}

    </div>
  );
}