import { Box as BoxMui, BoxProps } from '@mui/material'

export function Box(props: BoxProps) {
  return (
    <BoxMui {...props}>
      {props.children}
    </BoxMui>
  )
}