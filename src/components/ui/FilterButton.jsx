import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, Typography } from '@mui/material';
import React from 'react';

export default function FilterButton({
  text = 'Filters',
  onClick = () => '',
}) {
  return (
    <Button 
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        bgcolor: '#ECF0F6',
        borderRadius: '7px',
        color: '#1A232E'
      }}
    >
      <FilterAltIcon />
      <Typography sx={{textTransform: 'none'}}>{text}</Typography>
    </Button>
  )
}
