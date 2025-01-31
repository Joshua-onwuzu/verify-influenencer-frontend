'use client'
import React from 'react'
import SimpleTable from './table'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { IconButton } from '@mui/material'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import useLeaderBoard from '@/hooks/use-leaderboard'

const LeaderboardPage = () => {
  const {
    averageTrustScore,
    totalClaims,
    verifiedClaims,
    categories,
    categoryQuery,
    setQueryByCategory,
    claims,
  } = useLeaderBoard()
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-white text-2xl">Influencer Trust LeaderBoard</p>
        <p className="text-[#9da0a6]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.{' '}
        </p>
      </div>

      <div className="  grid grid-cols-3 gap-8">
        <div className="grid-cols-1 flex border-[#252f3f] border gap-4 items-center rounded-md p-8 bg-[#17212f]">
          <div>
            <PeopleOutlinedIcon sx={{ color: '#0eba80' }} />
          </div>
          <div>
            <p className="font-bold text-2xl mb-2 text-white">{totalClaims}</p>
            <p className=" text-sm text-[#9da0a6]">Active Influencers</p>
          </div>
        </div>
        <div className="grid-cols-1 flex border-[#252f3f] items-center border rounded-md p-8 bg-[#17212f]">
          <div>
            <IconButton sx={{ color: '#0eba80' }}>
              <TaskAltOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <p className="font-bold text-2xl mb-2 text-white">{verifiedClaims}</p>
            <p className=" text-sm text-[#9da0a6]">Verified Claims</p>
          </div>
        </div>
        <div className="grid-cols-1 flex border-[#252f3f] border rounded-md p-8 items-center bg-[#17212f]">
          <div>
            <IconButton sx={{ color: '#0eba80' }}>
              <BarChartOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <p className="font-bold text-2xl mb-2 text-white">{averageTrustScore}%</p>
            <p className=" text-sm text-[#9da0a6]">Average Trust Score</p>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar w-full gap-4 whitespace-nowrap">
        <button
          onClick={() => setQueryByCategory('All')}
          className={`p-2 px-4 text-white w-auto text-sm flex justify-center items-center rounded-3xl ${categoryQuery === 'All' && 'bg-[#0eba80]'}  `}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setQueryByCategory(category)}
            className={`p-2 px-4 text-white  w-auto text-sm flex justify-center items-center rounded-3xl ${categoryQuery === category && 'bg-[#0eba80]'} `}
          >
            {category}
          </button>
        ))}
      </div>

      <SimpleTable claims={claims || []} />
    </div>
  )
}

export default LeaderboardPage
