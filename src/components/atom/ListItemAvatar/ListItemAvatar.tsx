import { ListItemAvatar as ListItemAvatarMui, ListItemAvatarProps } from '@mui/material'

export function ListItemAvatar(props: ListItemAvatarProps){
  return (
    <ListItemAvatarMui {...props}>
      {props.children}
    </ListItemAvatarMui>
  )
}