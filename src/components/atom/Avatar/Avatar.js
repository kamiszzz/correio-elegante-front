import { Avatar as AvatarMui } from '@mui/material';

export function Avatar(props) {
  return (
    <AvatarMui {...props}>
      {props.children}
    </AvatarMui>
  )

}