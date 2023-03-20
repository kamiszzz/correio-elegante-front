import { ListItem as ListItemMui } from '@mui/material'

export function ListItem(props){
  return (
    <ListItemMui {...props}>
      {props.children}
    </ListItemMui>
  )
}