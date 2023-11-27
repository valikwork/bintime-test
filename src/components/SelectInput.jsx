import { FormControl, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import React from 'react';

export default function SelectInput({
  labelText,
  options = [],
  defaultValue = '',
  onChange = () => ''
}) {

  const selectHandler = (event) => onChange(event.target.value)
  
  return (
    <FormControl sx={{ width: 230, textTransform: 'capitalize' }} size="small">
      {labelText && <Typography variant="caption" sx={{color: '#1A232E' }} size="small">{labelText}</Typography>}
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={defaultValue}
          onChange={selectHandler}
          sx={{height: 34}}
          input={
            <OutlinedInput label={labelText ?? ''} height={34} />
          }
        >
          {options.map((opt) => (
            <MenuItem
              key={opt?.value}
              value={opt?.value}
              sx={{textTransform: 'capitalize'}}
            >
              {opt?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  )
}
