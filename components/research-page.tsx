'use client'

import { AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Journal, ResearchInfluencerPayload, Time } from '@/types';
import useResearch from '@/hooks/use-research';
import { toast } from 'react-toastify';
import Accordion from '@mui/material/Accordion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ResearchPage = () => {




  const {research} = useResearch()
  const journals = [
    Journal.NEJM,
    Journal.Lancet,
    Journal.JAMA,
    Journal.BMJ,
    Journal.NatureMedicine,
    Journal.PLOSMedicine,
    Journal.CID,
    Journal.AnnalsIM,
  ]

  const [apiPayload, setApiPayload] = useState<ResearchInfluencerPayload>({
    time: Time.ALL_TIME,
    name: '',
    claim_size: 10,
    selected_journals: journals,
    openAi_key: '',
    assemblyAi_key: '',
    perplexity_key: '',
    twitter_bearer_token: '',
    listen_notes_key: ''
  })



  const selectJournal = (value: Journal) => {
    if(apiPayload.selected_journals.includes(value)){
      setApiPayload((prev) => {
        return {...prev, selected_journals: prev.selected_journals.filter(u => u !== value)}
      })
    }else{
      setApiPayload((prev) => {
        return {...prev, selected_journals: [...prev.selected_journals, value]}
      })
    }
  }



  const onStart = async () => {
    if(!apiPayload.name || !apiPayload.time || !apiPayload.selected_journals.length){
      toast("Name, Number of claims and seleted journals are required")
    } else {
      const handler  = async () => {
        await research(apiPayload)
      }

      toast.promise(handler(), {
        pending: 'Researching ...',
        success: 'Research Completed',
        error: 'Research Failed'
      })
    }
  }
const  setTimeRange = (t: Time) => {
  setApiPayload((prev) => {return {...prev, time: t}})
}
const timeRange = apiPayload.time

const setName = (t: string) => {
  setApiPayload((prev) => {return {...prev, name: t}})
}
  const setClaimSize = (t: number) => {
    setApiPayload((prev) => {return {...prev, claim_size: t}})
  }

  return (
    <div className='w-full'>
      <h1 className='text-2xl text-white mb-8'>Research your favourite health influencer</h1>
      <div className='border p-8 w-fullrounded-lg border-[#252f3f]'>
        <div className='w-full'>
        <p className='text-[#9da0a6] text-sm'>Time Range</p>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox checked={timeRange === Time.LAST_YEAR} onChange={() => {
    if(timeRange === Time.LAST_YEAR){
      setTimeRange(Time.ALL_TIME)
    } else {
      setTimeRange(Time.LAST_YEAR)
    }
  }}   sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Last Year" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox onChange={() => {
      setTimeRange(Time.ALL_TIME)
  }} checked={timeRange === Time.ALL_TIME}  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }}/>} label="All Time" />
        </FormGroup>
<FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox  onChange={() => {
    if(timeRange === Time.LAST_MONTH){
      setTimeRange(Time.ALL_TIME)
    } else {
      setTimeRange(Time.LAST_MONTH)
    }
  }} checked={timeRange === Time.LAST_MONTH} sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Last Month" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox onChange={() => {
    if(timeRange === Time.LAST_WEEK){
      setTimeRange(Time.ALL_TIME)
    } else {
      setTimeRange(Time.LAST_WEEK)
    }
  }} checked={timeRange === Time.LAST_WEEK}  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }}/>} label="Last Week" />
</FormGroup>
        </div>
        <div className='mt-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Influencer Name</p>
        <input type='text' value={apiPayload.name} onChange={(e) => setName(e.target.value)}  placeholder='Enter influencer name' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className='mt-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Claims to Analyse per influencer</p>
        <input type='number' value={apiPayload.claim_size} onChange={(e) => setClaimSize(Number(e.target.value))} placeholder='e.g 10' className='w-full  px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>

        <div className='w-full mt-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Scientific Journals</p>
        <FormGroup>
          {journals.map((journal) => (
                    <FormControlLabel key={journal} sx={{color: 'white'}} control={<Checkbox onChange={() => {
                      selectJournal(journal)
                    }} checked={ apiPayload.selected_journals.includes(journal)}  sx={{
                      
                      color: '#9da0a6',
                      '&.Mui-checked': {
                        color: '#0eba80',
                      },
                    }}/>} label={journal} />
                          
          ))}
</FormGroup>
</div>
<Accordion sx={{backgroundColor: '#17212f', marginTop: '2rem'}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{color: 'white'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{color: 'white'}} component="span">Research using my API keys ( Optional )</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Open AI api key</p>
        <input type='text' value={apiPayload.openAi_key} onChange={(e) => setApiPayload((prev) => {
          return {...prev, openAi_key: e.target.value}
        })}  className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Assembly AI api key</p>
        <input value={apiPayload.assemblyAi_key} onChange={(e) => setApiPayload((prev) => {
          return {...prev, assemblyAi_key: e.target.value}
        })} type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Perplexity AI api key</p>
        <input value={apiPayload.perplexity_key} onChange={(e) => setApiPayload((prev) => {
          return {...prev, perplexity_key: e.target.value}
        })}  type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Twitter Bearer token</p>
        <input value={apiPayload.twitter_bearer_token} onChange={(e) => setApiPayload((prev) => {
          return {...prev, twitter_bearer_token: e.target.value}
        })} type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className='mb-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Listen Note api key</p>
        <input value={apiPayload.listen_notes_key} onChange={(e) => setApiPayload((prev) => {
          return {...prev, listen_notes_key: e.target.value}
        })} type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        </div>
        </AccordionDetails>
      </Accordion>

<div className='flex justify-end mt-48'>
        <Button onClick={onStart} variant="contained" sx={{  backgroundColor: '#0eba80'}}>
          <AddIcon />
          <p>Start</p>

        </Button>
      </div>
      </div>
    </div>
  )
}

export default ResearchPage