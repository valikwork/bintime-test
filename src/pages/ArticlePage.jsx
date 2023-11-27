import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ArticlePage() {
  const { state } = useLocation()
  const { article } = state;

  if(!article) return <Box sx={{py: 4, height: '100%'}}><Container><Typography variant='h1'>No Article was found</Typography></Container></Box>
  
  return (
    <Box sx={{py: 4, height: '100%'}}>
      <Container sx={{mb: 3}}>

        <Box display='flex' alignItems='center' mb={4}>
          <Link to='/' ><ArrowBackIcon /></Link>
          <Typography sx={{ml: 2}} variant='h5' component='h1'>{article.title}</Typography>
        </Box>

        <Box display='flex' justifyContent='space-between' sx={{mb: 2}}>
          <Typography sx={{color: 'rgba(33, 41, 50, 0.54)', fontWeight: 600}} variant='body1'>Source: {article.source?.name}</Typography>
          <Typography sx={{color: 'rgba(33, 41, 50, 0.54)', fontWeight: 600}}>Publication date: {article.publishedAt.split('T')[0]}</Typography>
        </Box>

        <Box>
          <Typography fontWeight={700} mb={1}>Description</Typography>
          <Typography fontWeight={500}>{article.description}</Typography>
        </Box>

      </Container>

      <Box maxWidth='100%' sx={{mb: 3, maxHeight: '500px', overflow: 'hidden'}}>
        <img width='100%' src={article.urlToImage} alt={article.title} />
      </Box>

      <Container sx={{mb: 4}}>
        <Box sx={{pb: 2, mb: 2, borderBottom: '1px solid #EFEFF3'}}>
          <Typography fontWeight={700} mb={1}>Content</Typography>
          <Typography fontWeight={500}>{article.content}</Typography>
        </Box>
        <Typography color='rgba(33, 41, 50, 0.54)' fontWeight={600} variant='body2'>Authors: {article.author}</Typography>
      </Container>
    </Box>
  )
}
