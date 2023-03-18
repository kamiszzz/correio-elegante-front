import { Chip as ChipMui, ChipProps } from '@mui/material'

export function Chip(props: ChipProps) {
  return (
    <ChipMui {...props}>
      {props.children}
    </ChipMui>
  )
}