import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import LinkIcon from '@mui/icons-material/Link';
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../assets/images/defaultNews.png';
import TableSkeleonLoader from './ui/TableSkeleonLoader';
import TruncatedText from './ui/TruncatedText';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function NewsTable({
  articles = [],
  pageSize = 5,
  setPageSize = () => '',
  page = 0,
  setPage = () => '',
  totalResults = 0,
  isLoading = false,
}) {

  const handleChangePage = ( _, newPage ) => setPage(++newPage);
  const handleChangeRowsPerPage = ( event ) => setPageSize(parseInt(event.target.value, 10))

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead sx={{borderRadius: '5px 5px 0px 0px', bgcolor: '#ECF0F6'}}>
          <TableRow>
            <TableCell sx={{p: 1.5}} component="th" scope="row" width={132}>
              <Typography sx={{color: '#212932', fontWeight: 500}}>Image</Typography>
            </TableCell>
            <TableCell sx={{p: 1.5}} component="th" scope="row" width={254}>
              <Typography sx={{color: '#212932', fontWeight: 500}}>Title</Typography>
            </TableCell>
            <TableCell sx={{p: 1.5}} component="th" scope="row" width={196}>
              <Typography sx={{color: '#212932', fontWeight: 500}}>Authors</Typography>
            </TableCell>
            <TableCell sx={{p: 1.5}} component="th" scope="row" width={323}>
              <Typography sx={{color: '#212932', fontWeight: 500}}>Description</Typography>
            </TableCell>
            <TableCell sx={{p: 1.5, textAlign: 'center'}} component="th" scope="row" width={144}>
              <Typography sx={{color: '#212932', fontWeight: 500}}>Publication date</Typography>
            </TableCell>
            <TableCell sx={{p: 1.5, textAlign: 'center'}} component="th" scope="row" width={119}>
              <Typography sx={{color: '#212932', fontWeight: 500}}>Original URL</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <TableSkeleonLoader />}
          {!isLoading && articles.length === 0 && <TableCell colSpan={100}><Typography variant='h4' textAlign="center">No Articles were found</Typography></TableCell> }
          {!isLoading && articles.map((article) => (
            <TableRow key={article.title}>
              <TableCell component="td" width={132}>
                <img src={article.urlToImage ? article.urlToImage : defaultImg} alt={article.title} style={{maxWidth: '100px'}} />
              </TableCell>
              <TableCell component="td" width={254}>
                <TruncatedText><Typography component='p'><Link to={`/${article.title}`} state={{ article }} >{article.title}</Link></Typography></TruncatedText>
              </TableCell>
              <TableCell component="td" width={196}>
                <TruncatedText><Typography component='p'>{article.author}</Typography></TruncatedText>
              </TableCell>
              <TableCell component="td" width={323}>
                <TruncatedText><Typography component='p'>{article.content}</Typography></TruncatedText>
              </TableCell>
              <TableCell component="td" width={144} sx={{textAlign: 'center'}}>
                <Typography component='p'>{article.publishedAt ? article.publishedAt.split('T')[0] : 'No date'}</Typography>
              </TableCell>
              <TableCell component="td" width={119} sx={{textAlign: 'center'}}>
                <a href={article.url} target='_blank' rel="noreferrer">
                  <LinkIcon sx={{fill:'#212932'}}/>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={6}
              count={totalResults}
              rowsPerPage={pageSize}
              page={page - 1}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
