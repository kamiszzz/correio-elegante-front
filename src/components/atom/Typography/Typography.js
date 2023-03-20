import { Typography as TypographyMui } from '@mui/material'

export function Typography(props) {
  return (
    <TypographyMui {...props}>
      {props.children}
    </TypographyMui>
  )
}