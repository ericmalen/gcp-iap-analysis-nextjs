import { getFilteredHeaders } from '@/app/lib/data';
import VerificationStatus from '../verification-status';
import { validateIapToken } from '@/app/lib/auth';
import { IAP_HEADER_KEY } from '@/app/lib/constants';
import { getHeader } from '@/app/lib/data';

export default async function HeadersTable({
  query,
  currentPage,
  currentResultsPerPage,
  filters,
}: {
  query: string;
  currentPage: number;
  currentResultsPerPage: number;
  filters: string;
}) {
  const offset = currentResultsPerPage * (currentPage - 1);
  const filteredHeaders = getFilteredHeaders(query, filters);
  const iapHeaderVal = getHeader(IAP_HEADER_KEY);
  const verificationStatus = await validateIapToken(iapHeaderVal);  

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        {/* greyed out container holding the table */}
        <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
          <div className="md:hidden">
            {filteredHeaders?.slice(offset, offset + currentResultsPerPage).map((header) => (
              
              <div
                key={header[0]}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                    <div className="mb-2 flex items-center">
                        <p>{header[0]}:</p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-between pt-4">
                    <div className="mb-2 flex items-center">
                        <p>{header[1]}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr className="flex">
                <th scope="col" className="flex-none w-80 px-4 py-5 font-medium sm:pl-6">
                  <p className="max-w-20">Key</p>
                </th>
                <th scope="col" className="grow px-3 py-5 font-medium">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {filteredHeaders?.slice(offset, offset + currentResultsPerPage).map((header) => (
                <tr
                  key={header[0]}
                  className="flex w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="flex-none w-80 whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{header[0]}:</p>
                    </div>
                  </td>
                  <td className="grow whitespace-wrap px-3 py-3 break-all max-w-2/4">
                    {header[1]}
                  </td>

                  {header[0] === IAP_HEADER_KEY ? (                
                  <td className="flex px-3 py-3 min-w-48 justify-center items-center">
                        <VerificationStatus status={verificationStatus}/>
                  </td> 
                  ) : <></>}
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
