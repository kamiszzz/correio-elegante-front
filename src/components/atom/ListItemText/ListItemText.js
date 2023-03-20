import { ListItemText as ListItemTextMui } from '@mui/material'

export function ListItemText(props){
  return (
    <ListItemTextMui {...props}>
      {props.children}
    </ListItemTextMui>
  )
}