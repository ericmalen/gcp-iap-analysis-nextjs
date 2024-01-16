import { headers } from 'next/headers'
import { GCP_IAP_HEADERS } from './constants';
import { GCP_HEADERS } from './constants';

export const getFilteredHeaders = (query: string, filter: string) => {
    const headerList = headers();
    const headerEntries = Array.from(headerList.entries());
    if(filter === "IAP"){
        return headerEntries?.filter((header) => GCP_IAP_HEADERS.includes(header[0]) && (header[0].includes(query) || header[1].includes(query)));
    }
    else if(filter === "GCP"){
        return headerEntries?.filter((header) => GCP_HEADERS.includes(header[0]) && (header[0].includes(query) || header[1].includes(query)));
    }

    return headerEntries?.filter((header) => header[0].includes(query) || header[1].includes(query));
}

export const getHeader = (key: string) => {
    const headerList = headers();
    const header = headerList.get(key);
    return header;
}