import { Link, useNavigate, useParams } from "react-router-dom"
import Heading from "../components/Heading"
import InputText from "../components/InputText"
import Button from "../components/Button"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"

const EditUser = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
      getUser();
    }, []);
    const getUser = async () => {
      try{
        const response = await fetch(`http://localhost:8000/users/${userId}`);
        const user = await response.json();
        setUser(user);
      }catch(error){
        console.error(`Error fetching: ${error}`);
      }
    }

    const handleChange = (e)=>{
      setUser({...user, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      try{
        fetch(`http://localhost:8000/users/${userId}`,{
          method: 'PUT',
          body: JSON.stringify(user)
        });
      }catch(error){
        console.error(`Error updating: ${error}`);
      }finally{
        navigate('/');
      }
    }
  return (
    <>
        <Heading title={'Edit User Details'}/>
        <InputText label={'Full Name'} variant={'outlined'} name={'name'} onchange={handleChange} value={user.name ?? ''}/>
        <InputText label={'Email address'} variant={'outlined'} name={'email'} onchange={handleChange} value={user.email ?? ''}/>
        <InputText label={'Phone Number'} variant={'outlined'} name={'number'} onchange={handleChange} value={user.number ?? ''}/>
        <InputText label={'City/Province'} variant={'outlined'} name={'location'} onchange={handleChange} value={user.location ?? ''}/>
        <Box display={'flex'} justifyContent={'center'} gap={'12px'}>
            <Button type={'submit'} title={'Update'} variant={'contained'} onclick={handleSubmit}/>
            <Button title={'Go Back to List'} variant={'outlined'} onclick={() => navigate('/')}/>
        </Box>
    </>
  )
}

export default EditUser