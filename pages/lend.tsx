import * as React from 'react';
import type { NextPage } from 'next'

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Lend: NextPage = () => {
  return (
    <div className='md:px-16 sm:px-1 2sm:px0'>
      <div className="md:flex flex-row my-8 sm:block 2sm:block">
        <div className="basis-1/2 text-center px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg">
          <h1 className=''>Lending description</h1>
          <h1 className=''>Lending description Lending description </h1>
        </div>
        <div className="basis-1/2 text-center px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
      </div>
      <div className="sm:grid grid-cols-5 gap-4 my-8 px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg items-center 2sm:block">
        <div>
          <h1>My Positions</h1>
          <h1>Pool</h1>
        </div>
        <div>
          <h1>APY</h1>
        </div>
        <div>
          <h1>Your Position</h1>
        </div>
      </div>
      <div className='my-8 px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg 1sm:block 2sm:hidden'>
        <h1>Lending Pools</h1>
        <table className="table-fixed text-left w-full">
          <thead>
            <tr>
              <th>Pool</th>
              <th>APY</th>
              <th>Total Supply</th>
              <th>Total Borrowed</th>
              <th>Utilization</th>
              <th>APY (14D)</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asset</td>
              <td>5%</td>
              <td><h1>xxxx Asset</h1><h1>$xxx</h1></td>
              <td><h1>xxxx Asset</h1><h1>$xxx</h1></td>
              <td>10%</td>
              <td>10%</td>
              <td><button className='border-1 border-[#e2e2e2] p-2 bg-[#68dd59]'>Deposit</button></td>
              <td><button className='border-1 border-[#e2e2e2] p-2 bg-[#68dd59]'>Chart</button></td>
            </tr>
            <tr>
              <td>Asset</td>
              <td>5%</td>
              <td><h1>xxxx Asset</h1><h1>$xxx</h1></td>
              <td><h1>xxxx Asset</h1><h1>$xxx</h1></td>
              <td>10%</td>
              <td>10%</td>
              <td><button className='border-1 border-[#e2e2e2] p-2 bg-[#68dd59]'>Deposit</button></td>
              <td><button className='border-1 border-[#e2e2e2] p-2 bg-[#68dd59]'>Chart</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Lend
