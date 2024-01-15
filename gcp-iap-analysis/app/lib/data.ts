import { headers } from 'next/headers'

export const getFilteredHeaders = (query: string) => {
    const headerList = headers();
    const headerEntries = Array.from(headerList.entries());
    return headerEntries?.filter((header) => header[0].includes(query) || header[1].includes(query));
}