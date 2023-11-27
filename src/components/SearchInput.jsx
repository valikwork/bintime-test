import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const SearchInput = ({
  value = '',
  onChange = () => '',
}) => {

  const [inputValue, setInputValue] = useState(value);
  const [showClearIcon, setShowClearIcon] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value)
    setShowClearIcon(event.target.value === "" ? false : true);
  };

  const handleClear = () => {
    setInputValue('')
    onChange && onChange('')
  };

  useEffect(() => {
    onChange && onChange(inputValue)
  }, [inputValue, onChange])

  return (
    <div className="search-input">
      <FormControl sx={{m: 0}}>
        <TextField
          value={inputValue}
          size="small"
          onChange={handleChange}
          sx={{"& .MuiOutlinedInput-notchedOutline":{border: '1px solid #D3D3E2'}}}
          placeholder="Search articles"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handleClear}
                sx={{cursor: 'pointer'}}
              >
                {showClearIcon && <ClearIcon />}
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </div>
  );
};

export default SearchInput;
