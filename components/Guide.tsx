import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
        <div className='padding-container max-container w-full pd-24'>
          <Image src="/camp.svg" alt="camp" height={50} width={50}  />
          <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>We are here for you</p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
            <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You To Easy Path</h2>
            <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Discover a world of effortless exploration with HiLink – your ultimate travel companion. Seamlessly plan, personalize, and navigate your journey with intuitive features tailored to your preferences. Stay connected with real-time updates, ensuring you never miss a beat. Capture and share your travel highlights effortlessly, turning every moment into a cherished memory.</p>
          </div>
        </div>

        <div className='flexCenter max-container  relative w-full mt-10 md:mt-0'>
          <Image src="/boat.png" 
          alt='boat'
          height={580}
          width={1440}
          className='w-full object-cover object-center 2xl:rounded-5xl'
          />
          <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
            <Image src="/meter.svg" alt='meter' width={16} height={158} className='h-full width-auto' />
            <div className='flexBetween flex-col'>
              <div className='flex w-full flex-col'>
                <div className='flexBetween w-full gap-3'>
                  <p className='regular-16 text-gray-20 '>Destination</p>
                  <p className='bold-16 text-green-50'>48 min</p>
                </div>
                <p className='bold-20 mt-2'>Nagpur</p>
              </div>

              <div className='flex w-full flex-col mt-4'>                
                  <p className='regular-16 text-gray-20'>Start Track</p>
                  <p className='bold-20 mt-2 whitespace-nowrap'>Civil Lines</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Guide