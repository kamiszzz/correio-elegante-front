import { Fab as FabMui, FabProps } from '@mui/material'

export function Fab(props: FabProps) {
  return (
    <FabMui {...props}>
      {props.children}
    </FabMui>
  )
}