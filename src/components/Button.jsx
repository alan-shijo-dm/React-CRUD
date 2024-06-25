import {Button as MuiButton} from "@mui/material";
const Button = ({title, variant, onclick}) => {
  return (
    <MuiButton variant={variant} onClick={onclick}>{title}</MuiButton>
  )
}

export default Button