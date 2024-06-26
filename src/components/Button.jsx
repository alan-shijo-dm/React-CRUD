import {Button as MuiButton} from "@mui/material";
const Button = ({title, variant, type, onclick}) => {
  return (
    <MuiButton  type={type} variant={variant} onClick={onclick}>{title}</MuiButton>
  )
}

export default Button