import InputText from "../components/InputText"
import Button from "../components/Button"
import { Link, useParams } from "react-router-dom"
import Heading from "../components/Heading"
import useFetch from "../hooks/useFetch"

const UserDetails = () => {
  const {userId} = useParams();
  const data = useFetch(`http://localhost:8000/users/${userId}`);
  
  return (
    <>
    <Heading title={'View User Details'}/>
    <InputText label={'Full Name'} variant={'outlined'} value={data.name ?? ''} readonly/>
    <InputText label={'Email address'} variant={'outlined'} value={data.email ?? ''} readonly/>
    <InputText label={'Phone Number'} variant={'outlined'} value={data.number ?? ''} readonly/>
    <InputText label={'City/Province'} variant={'outlined'} value={data.location ?? ''} readonly/>
    <Link to={'/'}>
      <Button title='Go back to list'/>
    </Link>
    </>
  )
}

export default UserDetails