import { TextField } from "@mui/material"

const InputText = ({label, variant, value=null, readonly = false}) => {
  return (
    <>
        <TextField label={label} variant={variant} value={value} InputProps={readonly ? {readOnly:true} : undefined} InputLabelProps={readonly ? { shrink: true } : undefined}/>
    </>
  )
}

export default InputText