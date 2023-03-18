import { List as ListMui, ListProps } from '@mui/material'

export function List(props: ListProps){
  return (
    <ListMui {...props}>
      {props.children}
    </ListMui>
  )
}