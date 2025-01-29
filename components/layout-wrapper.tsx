import React, { ReactNode } from 'react'

const LayoutWrapper = ({children}:{children: ReactNode}) => {
  return (
    <div className='w-full p-4 px-24 flex flex-col gap-12'>
        <div>
            <h1 className=' text-white text-2xl'>Verify Influencers</h1>
        </div>
{children}
    </div>
  )
}

export default LayoutWrapper