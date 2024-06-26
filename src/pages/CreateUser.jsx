import { Box } from "@mui/material";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputText from "../components/InputText";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateUser = () => {
  const [data, setData] = useState({
    id: uuidv4()
  });

  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value});
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      fetch('http://localhost:8000/users',{
        method: 'POST',
        body: JSON.stringify(data)
      });
    }catch(error){
      console.error(error);
    }finally{
      navigate('/');
    }
  }
  return (
    <>
      <Heading title={"Create a new User"} />
      <form method="post" onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection={"column"} gap={'12px'}>
          <InputText label={"Full Name"} variant={"outlined"} name={'name'} onchange={handleChange} value={data.name ?? ''}/>
          <InputText label={"Email Address"} variant={"outlined"} name={'email'} onchange={handleChange} value={data.email ?? ''} />
          <InputText label={"Phone Number"} variant={"outlined"} name={'number'} onchange={handleChange} value={data.number ?? ''} />
          <InputText label={"City/Province"} variant={"outlined"} name={'location'} onchange={handleChange} value={data.location ?? ''} />
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"12px"}
          >
            <Button type={'submit'} title={"Create"} variant={"contained"} />
            <Button title={"Go Back to List"} variant={"outlined"} onclick={()=>navigate('/')}/>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default CreateUser;
