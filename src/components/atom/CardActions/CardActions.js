import { CardActions as CardActionsMui } from '@mui/material'

export function CardActions(props){
  return (
    <CardActionsMui {...props}>
      {props.children}
    </CardActionsMui>
  )
}