export const ITEMS_PER_PAGE = 5;

export const IAP_HEADER_KEY = "x-goog-iap-jwt-assertion";

export const GCP_HEADERS = [
    "traceparent", 
    "forwarded", 
    "x-cloud-trace-context"
];

export const GCP_IAP_HEADERS = [
    "via", 
    "x-client-geo-location", 
    "cookie", 
    "x-goog-authenticated-user-id", 
    "x-goog-authenticated-user-email", 
    "x-goog-iap-jwt-assertion", 
    "x-serverless-authorization"
];

export const RESULTS_PER_PAGE: number[] = [
    5, 
    15, 
    30
];

export const FILTERS = [
    "All", 
    "IAP", 
    "GCP"
];