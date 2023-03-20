import { Link as LinkMui } from '@mui/material'

export function Link(props) {
  return (
    <LinkMui underline='none' {...props}>
      {props.children}
    </LinkMui>
  )
}