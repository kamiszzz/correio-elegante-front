import { TextField as TextFieldMui, TextFieldProps } from '@mui/material'

export function TextField(props: TextFieldProps) {
  return (
    <TextFieldMui {...props} />
  )
}