import { IconButton as IconButtonMui } from '@mui/material'

export function IconButton(props) {
  return (
    <IconButtonMui {...props}>
      {props.children}
    </IconButtonMui>
  )
}