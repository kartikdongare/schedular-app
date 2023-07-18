import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const WaitingList = () => {
    const waitingListData=useSelector((state)=>state.drReducer.waitingList
    );
  return (
    <Box>
        <Typography sx={{fontSize:'1.5rem',fontWeight:'bold',mt:'1rem',color:'#4e63f2'}}>Waiting List</Typography>
        <Box height={'80vh'} overflow={'auto'} sx={{"::-webkit-scrollbar":{display:'none'}}}>
        {waitingListData.map((curEle)=>(
            <Box boxShadow={'0 0 10px #e3e1dc'} mb='1.5rem'  p='.5rem'>
                <Typography fontWeight={'bold'}>{curEle.Name}</Typography>
                <Typography>{curEle.start.toLocaleString('default', { month: 'long' },)}&nbsp;&nbsp;{curEle.start.getDay()}&nbsp;&nbsp;{curEle.start.toLocaleString('en-IN', { hour: 'numeric',minute: 'numeric', hour12: true })}-{curEle.end.toLocaleString('en-IN', { hour: 'numeric',minute: 'numeric', hour12: true })}</Typography>
            </Box>
        ))}
        </Box>
    </Box>
  )
}

export default WaitingList
