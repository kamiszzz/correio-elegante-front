import { Button as ButtonMui, ButtonProps} from '@mui/material'

export function Button(props: ButtonProps){
  return (
    <ButtonMui variant='contained' {...props}>
      {props.children}
    </ButtonMui>
  )
}