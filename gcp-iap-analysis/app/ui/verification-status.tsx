import { ShieldCheckIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function VerificationStatus({ status }: { status: boolean }) {

  return (
    <p
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-red-500 text-white': status === false,
          'bg-green-500 text-white': status === true,
        },
      )}
    >

      {status === false ? (
        <>
          JWT Token Unverified
          <ShieldExclamationIcon className="ml-1 w-4 text-white" />
        </>
      ) :         
        <>
          JWT Token Verified
          <ShieldCheckIcon className="ml-1 w-4 text-white" />
        </>}
    </p>
  );
}