'use client'

import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Modal, Switch } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const ResearchPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='w-full'>
      <h1 className='text-2xl text-white mb-8'>Research your favourite health influencer</h1>
      <div className='border p-8 w-fullrounded-lg border-[#252f3f]'>
        <div className='w-full'>
        <p className='text-[#9da0a6] text-sm'>Time Range</p>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox defaultChecked   sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Label" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }}/>} label="Required" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Disabled" />
</FormGroup>
<FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox defaultChecked   sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Label" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }}/>} label="Required" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Disabled" />
</FormGroup>
        </div>
        <div className='mt-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Influencer Name</p>
        <input type='text' placeholder='Enter influencer name' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className='mt-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Claims to Analyse per influencer</p>
        <input type='text' placeholder='Enter influencer name' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>

        <div className='w-full mt-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Scientific Journals</p>
        <FormGroup>
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox defaultChecked   sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Label" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }}/>} label="Required" />
  <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Disabled" />
    <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Disabled" />
    <FormControlLabel sx={{color: 'white'}} control={<Checkbox  sx={{
    
    color: '#9da0a6',
    '&.Mui-checked': {
      color: '#0eba80',
    },
  }} />} label="Disabled" />
</FormGroup>
</div>
<div className='mt-4'>
<FormControl>
      <FormGroup>
        <FormControlLabel
        sx={{color: 'white', margin: '0px'}}
          value="bottom"
          onChange={handleOpen}
          control={<Switch color="info" />}
          label="Research using my API keys"
          labelPlacement="start"
        />

      </FormGroup>
    </FormControl>

    <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div className=' absolute top-[50%] bg-[#17212f] p-8 flex flex-col gap-4 rounded-lg  w-[500px] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Open AI api key</p>
        <input type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Assembly AI api key</p>
        <input type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Perplexity AI api key</p>
        <input type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className=''>
        <p className='text-[#9da0a6] text-sm mb-2'>Twitter Bearer token</p>
        <input type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>
        <div className='mb-8'>
        <p className='text-[#9da0a6] text-sm mb-2'>Listen Note api key</p>
        <input type='text' className='w-full px-4 py-2 rounded-lg border bg-[#17212f]  border-[#252f3f]'/>
        </div>

        <Button variant="contained" sx={{  backgroundColor: '#0eba80', width: '100%'}}>
          <p>Save</p>
        </Button>

        </div>
      </Modal>

</div>
<div className='flex justify-end'>
        <Button variant="contained" sx={{  backgroundColor: '#0eba80'}}>
          <AddIcon />
          <p>Start</p>

        </Button>
      </div>
      </div>
    </div>
  )
}

export default ResearchPage