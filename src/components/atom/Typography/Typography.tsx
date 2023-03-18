import { Typography as TypographyMui, TypographyProps } from '@mui/material'

export function Typography(props: TypographyProps) {
  return (
    <TypographyMui {...props}>
      {props.children}
    </TypographyMui>
  )
}