import CardWrapper from '@/app/ui/dashboard/cards';
 
export default async function Page() {

  return (
    <main className="flex flex-col h-full">

      <h1 className='h-10 w-full mb-4 text-xl md:text-2xl'>
        Dashboard
      </h1>

      <div className="grid grow gap-5 sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-11">
        
        <CardWrapper/>

        <div className="flex flex-col lg:row-span-7 lg:col-span-2 rounded-md bg-gray-300">
          {/* header */}
          <div className="flex grow items-center h-2/12 m-2 rounded-md">
            <p className="ml-4 text-lg"></p>
          </div>
          {/* body */}
          <div className="flex justify-center items-center grow h-5/6 mx-2 mb-2 rounded-md bg-gray-100">
            <p className="ml-4 text-lg">Under Construction</p>
          </div>        
        </div>

      </div>

      {/* main dashboard UI */}

    </main>
  );
}