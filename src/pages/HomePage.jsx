import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import NewsTable from '../components/NewsTable'
import SearchInput from '../components/SearchInput'
import SelectInput from '../components/SelectInput'
import FilterButton from '../components/ui/FilterButton'
import COUNTRIES from '../constants/countries'
import NEWS_CATEGORIES from '../constants/newsCategories'
import useNewsQuery from '../hooks/useNewsQuery'

export default function HomePage() {

  const [showFilters, setShowFilters] = useState(false)

  const { 
    isLoading,
    newsList, 
    category, 
    setCategory, 
    country, 
    setCountry,
    pageSize, 
    setPageSize,
    page,
    setPage,
    queryString,
    setQueryString,
    totalResults,
  } = useNewsQuery()

  return (
    <Container>
      <Box sx={{py: 4, height: '100%'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px'}}>
          <Typography variant='h4' sx={{fontSize: '22px', fontWeight: 500}}>Formula Top Headlines</Typography>
          <Box display="flex" gap={4}>
            <SearchInput value={queryString} onChange={setQueryString} />
            <FilterButton onClick={() => setShowFilters(prev => !prev)} />
          </Box>
        </Box>
          {showFilters && (
            <Box className="filters" display='flex' gap={4} mb={3}>
              <SelectInput labelText="Category" defaultValue={category} options={NEWS_CATEGORIES} onChange={setCategory} />
              <SelectInput labelText="Country" defaultValue={country} options={COUNTRIES} onChange={setCountry} />
            </Box>
          )}
        <Box className='news-table'>
          <NewsTable 
            articles={newsList} 
            pageSize={pageSize} 
            setPageSize={setPageSize} 
            page={page}
            setPage={setPage}
            totalResults={totalResults}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </Container>
  )
}
