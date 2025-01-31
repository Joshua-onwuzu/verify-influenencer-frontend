'use client'
import React from 'react'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import useInfluencerDetails from '@/hooks/use-influencer-details';
import Link from 'next/link';

const InfluencerDetailPage = () => {
  const {details, totalVerifiedClaims} = useInfluencerDetails()
  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='w-full gap-4 items-center flex'>
        <div className='w-24 h-24 rounded-full border'></div>
        <div className='flex-1'>
          <h1 className='text-xl mb-2 text-white'>{details?.detail.name}</h1>
          <div className='flex flex-wrap gap-2 mb-2'>
            {details?.categories.map((data, key) => (
            <div key={key} className='px-2 py-1 rounded-lg text-[#9da0a6] text-sm bg-[#17212f]'>{data}</div>
            ))}

          </div>
          <p className='text-[#9da0a6] max-w-[700px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

        </div>
      </div>
      <div className='grid grid-cols-3 gap-8'>
      <div className='grid-cols-1 border-[#252f3f] border items-center rounded-md p-8 bg-[#17212f]'>
          <p className='text-white text-sm font-semibold mb-2'>
Average Trust Score
          </p>
          <div>
          <p className='font-bold text-4xl mb-2 text-[#0eba80]'>{details?.average_trust_score}%</p>
          <p className=' text-xs text-[#9da0a6]'>Average trust score for this influencer</p>
          </div>

        </div>
        <div className='grid-cols-1 border-[#252f3f] border items-center rounded-md p-8 bg-[#17212f]'>
          <p className='text-white text-sm font-semibold mb-2'>
Total Claims
          </p>
          <div>
          <p className='font-bold text-4xl mb-2  text-[#0eba80]'>{details?.total_claims}</p>
          <p className=' text-xs text-[#9da0a6]'>Total claims made by this Influencer</p>
          </div>

        </div>
        <div className='grid-cols-1 border-[#252f3f] border items-center rounded-md p-8 bg-[#17212f]'>
          <p className='text-white text-sm font-semibold mb-2'>
Verified Claims
          </p>
          <div>
          <p className='font-bold text-4xl mb-2  text-[#0eba80]'>{totalVerifiedClaims?.length}</p>
          <p className=' text-xs text-[#9da0a6]'>Total claim verified</p>
          </div>

        </div>
      </div>
      <div>
        <div className='flex'>
          <div className=' text-white p-4 border-b border-[#0eba80]'>Claims</div>
          <div className='  p-4 text-[#9da0a6] cursor-not-allowed'>Recommended Products (Coming soon)</div>
          <div className='  p-4 text-[#9da0a6] cursor-not-allowed'>Monetization (Coming soon)</div>
        </div>
        <div>
          {details?.detail.claim.map((data, key) => (
          <div key={key} className='p-4 border-b border-[#252f3f] flex items-center justify-between'>
          <div>

          <p className='text-white'>{data.claim_summary}</p>
          <div className='flex'> <div className={` ${data.trust_score >= 75 ? 'text-[#0eba80]' : data.trust_score >= 60 ? 'text-[#efc416]' :  data.trust_score >= 30 ? 'text-orange-400' : 'text-red-500'} py-2 rounded-md`}>{data.verification_status} </div></div>
          <div className='flex items-center'>
            <Link target="_blank" href={data.link}>
            <div className='flex items-center'>
            <p className='text-[#0eba80] text-xs mr-2 cursor-pointer'>View Source</p>
            <OpenInNewOutlinedIcon sx={{ color: '#0eba80', width: '13px' }} />
            </div>
            </Link>
</div>
          </div>
          <div>
            <p className={`text-2xl text-end font-semibold mb-2 ${data.trust_score >= 75 ? 'text-[#0eba80]' : data.trust_score >= 60 ? 'text-[#efc416]' :  data.trust_score >= 30 ? 'text-orange-400' : 'text-red-500'}`}>{data.trust_score}%</p>
            <p className='text-[#9da0a6] text-sm'>Trust Score</p>
          </div>

        </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default InfluencerDetailPage