import { headers } from 'next/headers'
import { GCP_IAP_HEADERS, GCP_HEADERS, IAP_HEADER_KEY} from './constants';
import { validateIapToken, getPayload } from './auth';

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
};

export const getFilteredPayload = async (query: string) => {
    const headerList = headers();
    const token = headerList.get("x-goog-iap-jwt-assertion");
    const payload = await getPayload(token);
    //console.log(payload);

    const headerEntries = Array.from(headerList.entries());    

    return headerEntries?.filter((header) => header[0].includes(query) || header[1].includes(query));
};

export const verification = (hasIapJwt: boolean, iapVerified:boolean) => {
    let verification ="";
    
    if(!hasIapJwt && !iapVerified){
        verification = "unverifiable";
    }
    else if(hasIapJwt && !iapVerified){
        verification = "unverified";
    }
    else{
        verification = "verified";
    }

    return verification;
}

export const addVerification = async (headers: [string, string][]) => {
    let verifiedHeaders = [];

    for(let index in headers){
        if(headers[index][0] === IAP_HEADER_KEY){
            if(await validateIapToken(headers[index][1])){
                verifiedHeaders.push([...headers[index], verification(true, true)])
            }
            else{
                verifiedHeaders.push([...headers[index], verification(true, false)])
            }
        }
        else{
            verifiedHeaders.push([...headers[index], verification(false, false)])
        }
    }

    return verifiedHeaders;
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
    const hasIapJwt = allHeaders.has("x-goog-iap-jwt-assertion") ? "Yes" : "No";
    const host = allHeaders.has("host") ? String(allHeaders.get("host")?.split(":")[0]) : "N/A";
    const location = allHeaders.has("x-client-geo-location") ? String(allHeaders.get("x-client-geo-location")) : "N/A";
    const operatingSys = allHeaders.has("sec-ch-ua-platform") ? String(allHeaders.get("sec-ch-ua-platform")) : "N/A";
    const userAgent = allHeaders.has("user-agent") ? String(allHeaders.get("user-agent")?.split("/")[0]) : "N/A";
    
    return [host, location, hasIapJwt, operatingSys, userAgent];
};