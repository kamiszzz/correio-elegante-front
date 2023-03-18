import { ListItemButton as ListItemButtonMui, ListItemButtonProps } from '@mui/material'

export function ListItemButton(props: ListItemButtonProps){
  return (
    <ListItemButtonMui {...props}>
      {props.children}
    </ListItemButtonMui>
  )
}