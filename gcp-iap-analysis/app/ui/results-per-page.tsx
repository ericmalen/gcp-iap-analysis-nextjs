'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { RESULTS_PER_PAGE } from '../lib/constants';

export default function ResultsPerPage() {
  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentResultsPerPage = Number(searchParams.get('num')) || 5;
  const allResultsPerPage = RESULTS_PER_PAGE;
  
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('num', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <div className="inline-flex">

        <div className="flex items-center -space-x-px">
          {allResultsPerPage.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allResultsPerPage.length - 1) position = 'last';
            if (allResultsPerPage.length === 1) position = 'single';

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentResultsPerPage === page}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-7 w-7 items-center justify-center text-sm border text-gray-600',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-blue-500 border-blue-500 text-gray-50': isActive,
      'hover:bg-gray-100': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}
