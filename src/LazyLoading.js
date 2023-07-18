import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LazyLoading() {
  return (
    <Box sx={{ position:'relative',top:'50%',left:'50%'}}>
      <CircularProgress />
    </Box>
  );
}
