import './App.css'
import UsersList from './pages/UsersList'
import UserDetails from './pages/UserDetails'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import ErrorPage from './pages/ErrorPage';
import EditUser from './pages/EditUser';

const App = () => {

  return (
    <>
    <Box
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={'14px'}>
    <Routes>
      <Route exact path='/' element={<UsersList/>}/>
      <Route path='/users/create' element={<CreateUser/>}/>
      <Route path='/users/:userId' element={<UserDetails/>}/>
      <Route path='/users/:userId/edit' element={<EditUser/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </Box>
    </>
  )
}

export default App
