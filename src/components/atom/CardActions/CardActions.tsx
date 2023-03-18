import { CardActions as CardActionsMui, CardActionsProps } from '@mui/material'

export function CardActions(props: CardActionsProps){
  return (
    <CardActionsMui {...props}>
      {props.children}
    </CardActionsMui>
  )
}