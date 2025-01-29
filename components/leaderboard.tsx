
import React from 'react'
import SimpleTable from './table'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { IconButton } from '@mui/material';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

const LeaderboardPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
      <p className='text-white text-2xl'>Influencer Trust LeaderBoard</p>
      <p className='text-[#9da0a6]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>

      <div className='  grid grid-cols-3 gap-8'>
      <div className='grid-cols-1 flex border-[#252f3f] border gap-4 items-center rounded-md p-8 bg-[#17212f]'>
          <div>
          <IconButton sx={{ color: '#0eba80' }}>
          <PeopleOutlinedIcon />
    </IconButton>

          </div>
          <div>
          <p className='font-bold text-xl mb-2 text-white'>13309</p>
          <p className=' text-sm text-[#9da0a6]'>Active Influencers</p>
          </div>

        </div>
        <div className='grid-cols-1 flex border-[#252f3f] items-center border rounded-md p-8 bg-[#17212f]'>
        <div>
          <IconButton sx={{ color: '#0eba80' }}>
          <TaskAltOutlinedIcon />
    </IconButton>

          </div>
          <div>
          <p className='font-bold text-xl mb-2 text-white'>13309</p>
          <p className=' text-sm text-[#9da0a6]'>Verified Claims</p>
          </div>

        </div>
        <div className='grid-cols-1 flex border-[#252f3f] border rounded-md p-8 items-center bg-[#17212f]'>
        <div>
          <IconButton sx={{ color: '#0eba80' }}>
          <BarChartOutlinedIcon />
    </IconButton>

          </div>
          <div>
          <p className='font-bold text-xl mb-2 text-white'>13309</p>
          <p className=' text-sm text-[#9da0a6]'>Average Trust Score</p>
          </div>

        </div>
      </div>

      <div className='flex gap-4'>
        <div className='p-2 px-4 text-white min-w-[60px] text-sm flex justify-center items-center rounded-3xl bg-[#0eba80]'>
          All
        </div>
        <div className='p-2 px-4 text-white min-w-[60px] text-sm flex justify-center items-center rounded-3xl bg-[#0eba80]'>
          Nutrition
        </div>
        <div className='p-2 px-4 text-white min-w-[60px] text-sm flex justify-center items-center rounded-3xl bg-[#0eba80]'>
          Fitness
        </div>
      </div>

<SimpleTable />

    </div>
  )
}

export default LeaderboardPage