import { IconButton as IconButtonMui, IconButtonProps } from '@mui/material'

export function IconButton(props: IconButtonProps) {
  return (
    <IconButtonMui {...props}>
      {props.children}
    </IconButtonMui>
  )
}