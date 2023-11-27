import {useState, useEffect} from 'react'
import { useQuery } from '@tanstack/react-query'

const useNewsQuery = () => {
  const [newsList, setNewsList] = useState([])
  const [queryString, setQueryString] = useState('')
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')
  const [pageSize, setPageSize] = useState(5)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const params = new URLSearchParams({
    // eslint-disable-next-line no-undef
    apiKey: process.env.API_KEY,
    country: country,
    category: category,
    ...(pageSize ? {pageSize: pageSize} : {}),
    ...(page ? {page: page} : {}),
    ...(queryString ? {q: queryString} : {})
  });


  const { data, error, isFetching } = useQuery({
    queryKey: ['top-headlines', category, country, pageSize, page, queryString], 
    queryFn: () => fetch(`https://newsapi.org/v2/top-headlines?${params.toString()}`).then(data => data.json()),
  })

  useEffect(() => {
    error && console.log('useNewsQuery error', error);
  }, [error])

  useEffect(() => {
    console.log('data', data);
    data && data.articles && setNewsList([...data.articles])
    data && data.totalResults && setTotalResults(data.totalResults)
  }, [data])
  
  return {
    isLoading: isFetching,
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
  }
}

export default useNewsQuery