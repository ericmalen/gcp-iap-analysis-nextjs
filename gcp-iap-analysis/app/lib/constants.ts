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

export const DUMMY_DATA_1 = [
    ["Host", " localhost | cloud run | IAP"], 
    ["Location", "user location | N/A"],
    ["Contains IAP JTW", "true | false"], 
    ["Operating System", "os"],
    ["User Agent", "user agent"]
];

export const REQUEST_CARD_KEYS = [
    "Host",
    "Location",
    "Contains IAP JTW",
    "Operating System",
    "User Agent"
];

export const DUMMY_DATA_2 = [
    ["Total Headers", "15"],
    ["Total GCP Headers", "2"], 
    ["Total IAP Headers", "7"], 
    ["IAP JTW Verification", "verified | unverified | unverifiable"],
];

export const HEADER_CARD_KEYS = [
    "Total Headers",
    "Total GCP Headers", 
    "Total IAP Headers",
    "IAP JTW Verification"
];