import { List as ListMui } from '@mui/material'

export function List(props){
  return (
    <ListMui {...props}>
      {props.children}
    </ListMui>
  )
}