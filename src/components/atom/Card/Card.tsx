import { Card as CardMui, CardProps } from '@mui/material'

export function Card(props: CardProps){
  return (
    <CardMui {...props}>
      {props.children}
    </CardMui>
  )
}