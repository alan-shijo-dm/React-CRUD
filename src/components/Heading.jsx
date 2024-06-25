import { Typography } from "@mui/material"

const Heading = ({title}) => {
  return (
    <>
    <Typography variant="h4" component={'h1'} sx={{textDecoration: 'underline', marginBottom: '24px'}}>
        {title}
    </Typography>
    </>
  )
}

export default Heading