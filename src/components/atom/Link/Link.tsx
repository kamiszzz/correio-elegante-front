import { Link as LinkMui, LinkProps } from '@mui/material'

export function Link(props: LinkProps) {
  return (
    <LinkMui underline='none' {...props}>
      {props.children}
    </LinkMui>
  )
}