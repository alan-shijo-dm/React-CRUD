import { Link, useParams } from "react-router-dom"
import Heading from "../components/Heading"
import InputText from "../components/InputText"
import Button from "../components/Button"
import useFetch from "../hooks/useFetch"
import { Box } from "@mui/material"

const EditUser = () => {
    const {userId} = useParams();
    const user = useFetch(`https://localhost:8000/users/${userId}`);
  return (
    <>
        <Heading title={'Edit User Details'}/>
        <InputText label={'Full Name'} variant={'outlined'} value={user.name}/>
        <InputText label={'Email address'} variant={'outlined'} value={user.email}/>
        <InputText label={'Phone Number'} variant={'outlined'} value={user.number}/>
        <InputText label={'City/Province'} variant={'outlined'} value={user.location}/>
        <Box display={'flex'} justifyContent={'center'} gap={'12px'}>
            <Button title={'Update'} variant={'contained'}/>
            <Link to={'/'}>
                <Button title={'Go Back to List'} variant={'outlined'}/>
            </Link>
        </Box>
    </>
  )
}

export default EditUser