import InputText from "../components/InputText"
import Button from "../components/Button"
import { useNavigate, useParams } from "react-router-dom"
import Heading from "../components/Heading"
import { useEffect, useState } from "react"

const UserDetails = () => {
  const {userId} = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    getUser();
  }, []);
  
  const getUser = async () => {
    const response = await fetch(`http://localhost:8000/users/${userId}`);
    const user = await response.json();
    setData(user);
  }
  
  return (
    <>
    <Heading title={'View User Details'}/>
    <InputText label={'Full Name'} variant={'outlined'} value={data.name ?? ''} readonly/>
    <InputText label={'Email address'} variant={'outlined'} value={data.email ?? ''} readonly/>
    <InputText label={'Phone Number'} variant={'outlined'} value={data.number ?? ''} readonly/>
    <InputText label={'City/Province'} variant={'outlined'} value={data.location ?? ''} readonly/>
      <Button title='Go back to list' onclick={()=>navigate('/')}/>
    </>
  )
}

export default UserDetails