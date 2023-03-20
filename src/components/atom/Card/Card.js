import { Card as CardMui } from '@mui/material'

export function Card(props){
  return (
    <CardMui {...props}>
      {props.children}
    </CardMui>
  )
}