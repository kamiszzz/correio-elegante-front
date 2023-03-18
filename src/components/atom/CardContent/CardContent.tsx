import { CardContent as CardContentMui, CardContentProps } from '@mui/material'

export function CardContent(props: CardContentProps){
  return (
    <CardContentMui {...props}>
      {props.children}
    </CardContentMui>
  )
}