import { Fab as FabMui } from '@mui/material'

export function Fab(props) {
  return (
    <FabMui {...props}>
      {props.children}
    </FabMui>
  )
}