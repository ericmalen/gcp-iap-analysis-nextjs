import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      
      {/* small top part of nav bar - for image or some sort of title */}
      <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40">

      </div>

      {/*long bottom part of nav bar - for actual links/tabs */}
      <div className="flex grow flex-row justify-between rounded-md space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-300 md:block"></div>
      </div>
    </div>
  );
}