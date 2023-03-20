import { Button as ButtonMui} from '@mui/material'

export function Button(props){
  return (
    <ButtonMui variant='contained' {...props}>
      {props.children}
    </ButtonMui>
  )
}