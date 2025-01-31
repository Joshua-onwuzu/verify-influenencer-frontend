'use client'

import { Button } from '@mui/material'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Bounce, ToastContainer } from 'react-toastify'
const queryClient = new QueryClient()
const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full p-4 px-48 flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <h1 className=" text-white text-2xl">Verify Influencers</h1>
          <div className="flex gap-4">
            <Button
              href="/leaderboard"
              variant="outlined"
              sx={{ color: '#0eba80', borderColor: '#0eba80' }}
            >
              Go to Leaderboard
            </Button>

            <Button
              href="/research"
              variant="outlined"
              sx={{ color: '#0eba80', borderColor: '#0eba80' }}
            >
              Research
            </Button>
          </div>
        </div>
        {children}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </QueryClientProvider>
  )
}

export default LayoutWrapper
