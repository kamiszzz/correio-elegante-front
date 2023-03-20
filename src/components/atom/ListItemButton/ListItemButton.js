import { ListItemButton as ListItemButtonMui } from '@mui/material'

export function ListItemButton(props){
  return (
    <ListItemButtonMui {...props}>
      {props.children}
    </ListItemButtonMui>
  )
}