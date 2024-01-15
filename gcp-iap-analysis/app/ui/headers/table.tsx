import Image from 'next/image';
//import InvoiceStatus from '@/app/ui/invoices/status';
import { ITEMS_PER_PAGE } from '@/app/lib/constants';
import { getFilteredHeaders } from '@/app/lib/data';

//CHECK SEARCH BUG ON PAGE RELOAD - RANDOM ENTRY BEING ADDED TO TABLE
export default async function HeadersTable({
  query,
  currentPage,
  headers
}: {
  query: string;
  currentPage: number;
  headers: [string, string][]
}) {
  const offset = ITEMS_PER_PAGE * (currentPage - 1);
  //const filteredHeaders = getFilteredHeaders(query);
  const filteredHeaders = [
    [ 'host', 'localhost:3000' ],
    [
      'user-agent',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0'
    ],
    [ 'accept', '*/*' ],
    [ 'accept-language', 'en-CA,en-US;q=0.7,en;q=0.3' ],
    [ 'accept-encoding', 'gzip, deflate, br' ],
    [ 'referer', 'http://localhost:3000/dashboard/headers?page=3' ],
    [ 'next-url', '/dashboard/headers' ],
    [ 'dnt', '1' ],
    [ 'connection', 'keep-alive' ],
    [
      'cookie',
      'authjs.csrf-token=e0a10aa8a08c9da90237182a6206d463b6bad4961e320806aa094c10f6fcaf8f%7C46940bb756d6f5c2680531620bc76273dc8831f186f3cd2d6ec39b1753883fad; authjs.callback-url=http%3A%2F%2Flocalhost%3A3000%2Flogin%3FcallbackUrl%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fdashboard; authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..4GN6vPNM3EGAGFHV.7_8cPqLFBtYJNRYdAe3_vbnCxXsVf5-7Mg2uVDv8dhaQOCudgaqEPXXZrF-wat_1O6kR12_NZq9-ScQrRU9knWMdOEWw_G7eO88DuZqx2LrB4pG6Gr73GTi9XYIyCTh7SZP9Hk0J_C8Ea-YOJahD9wfVYa37xF0Z8lG9M0L2BPlqvL2qdUy68B-x-sGulL_1G93q_PuR_gKn3kxvPMvdMA53zlSgbhI.tfweelDusVTykX9nwxyWYg'
    ],
    [ 'sec-fetch-dest', 'empty' ],
    [ 'sec-fetch-mode', 'cors' ],
    [ 'sec-fetch-site', 'same-origin' ],
    [ 'x-forwarded-host', 'localhost:3000' ],
    [ 'x-forwarded-port', '3000' ],
    [ 'x-forwarded-proto', 'http' ],
    [ 'x-forwarded-for', '::ffff:127.0.0.1' ]
  ]

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        {/* greyed out container holding the table */}
        <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
          <div className="md:hidden">
            {filteredHeaders?.slice(offset, offset + ITEMS_PER_PAGE).map((header) => (
              
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
          <table className="hidden min-w-full text-gray-900 md:table">
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
              {filteredHeaders?.slice(offset, offset + ITEMS_PER_PAGE).map((header) => (
                <tr
                  key={header[0]}
                  className="flex w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="flex-none w-80 whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{header[0]}:</p>
                    </div>
                  </td>
                  <td className="grow whitespace-wrap px-3 py-3">
                    {header[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
