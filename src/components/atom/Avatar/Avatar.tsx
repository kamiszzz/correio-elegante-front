import { Avatar as AvatarMui, AvatarProps } from '@mui/material';

export function Avatar(props: AvatarProps) {
  return (
    <AvatarMui {...props}>
      {props.children}
    </AvatarMui>
  )

}