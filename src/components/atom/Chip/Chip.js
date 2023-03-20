import { Chip as ChipMui } from '@mui/material'

export function Chip(props) {
  return (
    <ChipMui {...props}>
      {props.children}
    </ChipMui>
  )
}