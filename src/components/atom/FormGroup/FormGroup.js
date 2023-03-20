import { FormGroup as FormGroupMui } from '@mui/material';

export function FormGroup(props) {
  return (
    <FormGroupMui {...props}>
      {props.children}
    </FormGroupMui>
  )
}