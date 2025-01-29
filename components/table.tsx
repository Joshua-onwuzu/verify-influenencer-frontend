import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';

const SimpleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table className='bg-[#1b2432]'>
        <TableHead>
          <TableRow>
              <TableCell ><p className='text-white'>Influencer</p></TableCell>
              <TableCell><p className='text-white'>Trust Score</p></TableCell>
              <TableCell><p className='text-white'>Verified claim</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell>
                <div className='flex gap-4'>
                <div>
            a
            </div>
            <p className='text-white'>Joshua Onwuzu</p>
                </div>


        </TableCell>
        <TableCell>
            <p className='text-white'>90%</p>
        </TableCell>
        <TableCell>
            <p className='text-white'>203</p>
        </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
