import { Tooltip as TooltipMui, TooltipProps } from '@mui/material'

export function Tooltip(props: TooltipProps){
  return (
    <TooltipMui {...props}>
      {props.children}
    </TooltipMui>
  )
}