import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Paper from '@mui/material/Paper';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
const UsersList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getAllUsers();
  }, [data]);

  const getAllUsers = async ()=>{
    try{
      const response = await fetch('http://localhost:8000/users');
      const users = await response.json();
      setData(users);
    }catch(error){
      console.error(error);
    }
  }

  const handleDelete = async (id) => {
    if(confirm('Are you sure to delete this user?')){
      await fetch(`http://localhost:8000/users/${id}`,{
        method: 'DELETE'
      });
    }
  }
  return (
    <>
    <Heading title={'List All Users'}/>
    <Link to={'/users/create'}>
      <Button title={'Add User'} variant={'contained'}/>
    </Link>
    <Box
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    marginTop={'24px'}>
    <TableContainer component={Paper} sx={{width: '70vw'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sl. No.</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data && data.map((row, index) => {
             return <TableRow key={index} sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                },
              }}>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell>{row.name ?? ''}</TableCell>
                <TableCell>{row.email ?? ''}</TableCell>
                <TableCell>{row.number ?? ''}</TableCell>
                <TableCell>{row.location ?? ''}</TableCell>
                <TableCell align="center">
                  <Box display={'flex'} flexDirection={'column'}>
                    <Button title={<VisibilityOutlinedIcon titleAccess="View"/>} onclick={()=>navigate(`/users/${row.id}`)}/>
                    <Button title={<EditOutlinedIcon titleAccess="Edit"/>} onclick={()=>navigate(`/users/${row.id}/edit`)}/>
                    <Button title={<DeleteOutlineOutlinedIcon titleAccess="Delete"/> } onclick={()=>handleDelete(row.id)}/>
                  </Box>
                </TableCell>
            </TableRow>
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  )
}

export default UsersList