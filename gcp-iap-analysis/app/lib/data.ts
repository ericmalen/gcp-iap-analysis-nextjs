import { headers } from 'next/headers'
import { GCP_IAP_HEADERS, GCP_HEADERS, IAP_HEADER_KEY} from './constants';
import { validateIapToken } from './auth';

export const getFilteredHeaders = (query: string, filter: string) => {
    const headerList = headers();

    const headerEntries = Array.from(headerList.entries());

    //DELETE - FOR TESTING ONLY
    headerEntries.push(["x-goog-iap-jwt-assertion", "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRfUG1rZyJ9.eyJhdWQiOiIvcHJvamVjdHMvNjg2NzkwMTk5ODg1L2dsb2JhbC9iYWNrZW5kU2VydmljZXMvMzY2NDc4MzQwMzY3NjQ5MDY0MiIsImF6cCI6Ii9wcm9qZWN0cy82ODY3OTAxOTk4ODUvZ2xvYmFsL2JhY2tlbmRTZXJ2aWNlcy8zNjY0NzgzNDAzNjc2NDkwNjQyIiwiZW1haWwiOiJlcmljbWFsZW5AZ21haWwuY29tIiwiZXhwIjoxNzA0NzQ4ODQxLCJpYXQiOjE3MDQ3NDgyNDEsImlkZW50aXR5X3NvdXJjZSI6IkdPT0dMRSIsImlzcyI6Imh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9pYXAiLCJzdWIiOiJhY2NvdW50cy5nb29nbGUuY29tOjEwMDUzNDc1Mjg5MTE1Mjc5MzIyOSJ9.Uu-hFYn3AHIxRGPFL3lPZYl7yOPuw8uplrIL_ZoZTwYBwXqO3XBci8O9ogdNHZUb6kOVyjQGfnX5lNNkZ27dWw"]);
    headerEntries.push(["x-serverless-authorization", "bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFmNDBmMGE4ZWYzZDg4MDk3OGRjODJmMjVjM2VjMzE3YzZhNWI3ODEiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiIvcHJvamVjdHMvNjg2NzkwMTk5ODg1L2xvY2F0aW9ucy9ub3J0aGFtZXJpY2Etbm9ydGhlYXN0MS9zZXJ2aWNlcy9nY3AtaWFwLWFuYWx5c2lzLW5leHRqcyIsImF6cCI6IjExNjIxMTgwOTI2NTEzNTg1NzA5MyIsImVtYWlsIjoic2VydmljZS02ODY3OTAxOTk4ODVAZ2NwLXNhLWlhcC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJleHAiOjE3MDUzODA3NzYsImlhdCI6MTcwNTM3NzE3NiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwic3ViIjoiMTE2MjExODA5MjY1MTM1ODU3MDkzIn0.SIGNATURE_REMOVED_BY_GOOGLE"]);
    
    if(filter === "IAP"){
        return headerEntries?.filter((header) => GCP_IAP_HEADERS.includes(header[0]) && (header[0].includes(query) || header[1].includes(query)));
    }
    else if(filter === "GCP"){
        return headerEntries?.filter((header) => GCP_HEADERS.includes(header[0]) && (header[0].includes(query) || header[1].includes(query)));
    }

    return headerEntries?.filter((header) => header[0].includes(query) || header[1].includes(query));
};

export const getHeader = (key: string) => {
    const headerList = headers();    
    const header = headerList.get(key);
    return header;
};

export const verification = (hasIapJwt: boolean, iapVerified:boolean) => {
    let verification ="";
    
    if(!hasIapJwt && !iapVerified){
        verification = "unverifiable";
    }
    else if(hasIapJwt && !iapVerified){
        verification = "unverified";
    }else{
        verification = "verified";
    }

    return verification;
}

export const revVerification = (verification: string) => {
    let isValidated = false;
    let hasToken = false;
    
    if(verification === "verified"){
        isValidated = true;
        hasToken = true;
    }
    else if(verification === "unverified"){
        isValidated = false;
        hasToken = true;
    }else{
        isValidated = false;
        hasToken = false;
    }

    return [isValidated, hasToken];
}

//figure out types - perfect example
export const getHeaderCardData = async () => {
    const allHeaders= headers();
    const allHeadersArr = Array.from(allHeaders.entries());
    const hasIapJwt = allHeaders.has("x-goog-iap-jwt-assertion");
    const iapVerified = await validateIapToken(allHeaders.get("x-goog-iap-jwt-assertion"));
    const totalHeadersCount = allHeadersArr.length;
    const totalGcpHeaders = allHeadersArr.filter((header) => GCP_HEADERS.includes(header[0])).length;
    const totalIapHeaders = allHeadersArr.filter((header) => GCP_IAP_HEADERS.includes(header[0])).length;
    let iapJwtVerification = verification(hasIapJwt, iapVerified);
    
    return [totalHeadersCount, totalGcpHeaders, totalIapHeaders, iapJwtVerification];
};

export const getRequestCardData = (): (string | boolean)[] => {
    const allHeaders= headers();
    const hasIapJwt = allHeaders.has("x-goog-iap-jwt-assertion") || "No";
    const host = allHeaders.has("host") ? String(allHeaders.get("host")?.split(":")[0]) : "N/A";
    const location = allHeaders.has("x-client-geo-location") ? String(allHeaders.get("x-client-geo-location")) : "N/A";
    const operatingSys = allHeaders.has("sec-ch-ua-platform") ? String(allHeaders.get("sec-ch-ua-platform")) : "N/A";
    const userAgent = allHeaders.has("user-agent") ? String(allHeaders.get("user-agent")?.split("/")[0]) : "N/A";
    console.log([host, location, hasIapJwt, operatingSys, userAgent]);
    
    return [host, location, hasIapJwt, operatingSys, userAgent];
};