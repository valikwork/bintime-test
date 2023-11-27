import { Box } from '@mui/material'
import React from 'react'

export default function TruncatedText({children, clamp = "2"}) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: clamp,
        WebkitBoxOrient: "vertical",
      }}
    >
      {children}
    </Box>
  )
}
