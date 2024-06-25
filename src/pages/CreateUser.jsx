import { Box } from "@mui/material"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputText from "../components/InputText"
import { Link } from "react-router-dom"

const CreateUser = () => {
  return (
    <>
        <Heading title={'Create a new User'}/>
        <InputText label={'Full Name'} variant={'outlined'}/>
        <InputText label={'Email Address'} variant={'outlined'}/>
        <InputText label={'Phone Number'} variant={'outlined'}/>
        <InputText label={'City/Province'} variant={'outlined'}/>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'12px'}>
            <Button title={'Create'} variant={'contained'}/>
            <Link to={'/'}>
                <Button title={'Go Back to List'} variant={'outlined'}/>
            </Link>
        </Box>
    </>
  )
}

export default CreateUser