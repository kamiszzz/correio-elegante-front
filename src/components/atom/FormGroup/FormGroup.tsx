import { FormGroup as FormGroupMui, FormGroupProps } from '@mui/material';

export function FormGroup(props: FormGroupProps) {
  return (
    <FormGroupMui {...props}>
      {props.children}
    </FormGroupMui>
  )
}