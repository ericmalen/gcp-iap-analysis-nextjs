'use client';

import { BarsArrowDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { FILTERS } from '../lib/constants';

// ADD SMT SO THAT WHEN CLICK ON PAGE DROPDOWN DISSAPEARS

export function FilterResults() {
  const [isOpen, setBool] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleClick = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('filter', filter);
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex flex-col">
      <button onClick={() => {setBool(!isOpen)}} className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        <span className="hidden md:block">Choose Filter</span>{' '}
        <BarsArrowDownIcon className="h-5 md:ml-4" />
      </button>
      
      {/* DROPDOWN DIV */}
      <div className={clsx(
        "bg-gray-200 rounded-lg mt-0.5 px-0.5 z-50",
        {
          "": isOpen === true,
          "hidden": isOpen === false
        }
      )}
      >
        {FILTERS.map((filter) => {
          return(
            <Link key={filter} href={handleClick(filter)} className="flex justify-center items-center hover:bg-sky-100 my-0.5 w-full bg-gray-50 h-10 rounded-lg">
              <p className="text-sm">{filter}</p>
            </Link>  
          );
        })}
      </div>

    </div>
  );
}