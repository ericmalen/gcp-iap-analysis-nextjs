import { getHeaderCardData, getRequestCardData, revVerification } from '@/app/lib/data';
import { HEADER_CARD_KEYS, REQUEST_CARD_KEYS } from '@/app/lib/constants';
import VerificationStatus from '../verification-status';

export default async function CardWrapper(){
    const headerCardData = await getHeaderCardData();
    const requestCardData = await getRequestCardData();

    return (
      <>
      <Card type="req" data={requestCardData} title="HTTP Request Information"/>
      <Card type="header" data={headerCardData} title="Headers Information"/>
      </>
    );
}
// CHECK NAV_LINKS FOR HOW TO DUPLICATE BETTER WITHOUT CONDITIONAL STATEMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function Card({
  type,
  title,
  data,
}: {
  type: string;
  title: string;
  data: (string | number | boolean)[];
}) {
  
  
  
  return (
    <>
        <div className="flex flex-col lg:row-span-4 rounded-md bg-gray-300">
          {/* header */}
          <div className="flex grow items-center h-2/12 m-2 rounded-md">
            <p className="ml-4 text-lg">{title}</p>
          </div>
          {/* body */}
          <div className="flex flex-col grow h-5/6 mx-2 mb-2 rounded-md bg-gray-100">
            {data.map((data, index) => {
              return type === "req" ? (
              <CardField key={index} data={[REQUEST_CARD_KEYS[index], String(data)]}/>
              ) : 
              <CardField key={index} data={[HEADER_CARD_KEYS[index], String(data)]}/>;
            })}
          </div>        
        </div>
    </>
  );
}

export function CardField({
  data,
}: {
  data: (string | number)[];
}) {
  let verificationValues = [false, false];
  if(data[0] === "IAP JTW Verification" && typeof data[1] === "string"){
    verificationValues = revVerification(data[1]);
  }

  return (
    <div className="flex grow">
      <div className="flex items-center w-1/3">
        <p className="ml-4 mr-2">{data[0]}:</p>
      </div>
      <div className="flex items-center w-2/3">
        {data[0] === "IAP JTW Verification" ? (
          <VerificationStatus status={verificationValues[0]} present={verificationValues[1]}/>
        ) :
        <p>{data[1]}</p>
        }
      </div>
    
    </div>
  );
}