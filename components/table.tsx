import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import Link from 'next/link';
import { IGetLeaderboardResponse } from '@/types';

const SimpleTable = ({claims}: {claims: IGetLeaderboardResponse['data']['claims']}) => {
  return (
    <TableContainer component={Paper}>
      <Table className='bg-[#1b2432]'>
        <TableHead>
          <TableRow>
              <TableCell ><p className='text-[#9da0a6]'>Influencer</p></TableCell>
              <TableCell><p className='text-[#9da0a6]'>Average Trust Score</p></TableCell>
              <TableCell><p className='text-[#9da0a6]'>Total claims ( based on categories filter )</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claims.map((claim) => (
            <TableRow key={claim._id}>
            <TableCell>
                <Link href={`/leaderboard/${claim._id}`}>
                <div className='flex items-center gap-4'>
                <div className='w-16 h-16 rounded-full border'></div>
            <p className='text-white'>{claim.name}</p>
                </div>
                </Link>



        </TableCell>
        <TableCell>
            <p className='text-white'>{claim.average_trust_score}%</p>
        </TableCell>
        <TableCell>
            <p className='text-white'>{claim.claim.length}</p>
        </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
