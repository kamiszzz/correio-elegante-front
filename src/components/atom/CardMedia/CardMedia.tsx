import { CardMedia as CardMediaMui, CardMediaProps } from '@mui/material'

export function CardMedia(props: CardMediaProps){
  return (
    <CardMediaMui {...props}>
      {props.children}
    </CardMediaMui>
  )
}