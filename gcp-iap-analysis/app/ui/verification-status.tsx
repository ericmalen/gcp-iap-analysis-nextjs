import { ShieldCheckIcon, ShieldExclamationIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function VerificationStatus({ 
  status, 
  present 
}: { 
  status: boolean;
  present: boolean;
}) {
  return (
    <p
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-red-500 text-white': status === false && present === true,
          'bg-green-500 text-white': status === true,
          'bg-gray-300 text-white': present === false && status === false,
        },
      )}
    >
      
      {status === false ? (
        <>
          {present === true ? (
            <>
              JWT Unverified
              <ShieldExclamationIcon className="ml-1 w-4 text-white" />
            </>
          ) : 
            <>
              Unverifiable
              <XMarkIcon className="ml-1 w-4 text-white" />
            </>
          }
        </>
        
      ) :         
        <>
          JWT Verified
          <ShieldCheckIcon className="ml-1 w-4 text-white" />
        </>}
    </p>
  );
}