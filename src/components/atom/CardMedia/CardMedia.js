import { CardMedia as CardMediaMui } from '@mui/material'

export function CardMedia(props){
  return (
    <CardMediaMui {...props}>
      {props.children}
    </CardMediaMui>
  )
}