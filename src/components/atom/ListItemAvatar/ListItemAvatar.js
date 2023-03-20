import { ListItemAvatar as ListItemAvatarMui } from '@mui/material'

export function ListItemAvatar(props){
  return (
    <ListItemAvatarMui {...props}>
      {props.children}
    </ListItemAvatarMui>
  )
}