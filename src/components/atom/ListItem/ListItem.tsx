import { ListItem as ListItemMui, ListItemProps } from '@mui/material'

export function ListItem(props: ListItemProps){
  return (
    <ListItemMui {...props}>
      {props.children}
    </ListItemMui>
  )
}