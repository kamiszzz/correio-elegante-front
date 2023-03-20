import { CardContent as CardContentMui } from '@mui/material'

export function CardContent(props){
  return (
    <CardContentMui {...props}>
      {props.children}
    </CardContentMui>
  )
}