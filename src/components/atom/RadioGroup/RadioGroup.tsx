import { RadioGroup as RadioGroupMui, RadioGroupProps } from '@mui/material'

export function RadioGroup(props: RadioGroupProps){
  return (
    <RadioGroupMui {...props}>
      {props.children}
    </RadioGroupMui>
  )
}