import { TextField } from "@mui/material"

const InputText = ({label, name, variant, value=null, readonly = false, onchange}) => {
  return (
    <>
        <TextField onChange={onchange} name={name} label={label} variant={variant} value={value} InputProps={readonly ? {readOnly:true} : undefined} InputLabelProps={readonly ? { shrink: true } : undefined}/>
    </>
  )
}

export default InputText