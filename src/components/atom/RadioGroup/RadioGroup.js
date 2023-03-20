import { RadioGroup as RadioGroupMui } from '@mui/material'

export function RadioGroup(props){
  return (
    <RadioGroupMui {...props}>
      {props.children}
    </RadioGroupMui>
  )
}