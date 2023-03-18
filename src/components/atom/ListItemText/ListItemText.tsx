import { ListItemText as ListItemTextMui, ListItemTextProps } from '@mui/material'

export function ListItemText(props: ListItemTextProps){
  return (
    <ListItemTextMui {...props}>
      {props.children}
    </ListItemTextMui>
  )
}