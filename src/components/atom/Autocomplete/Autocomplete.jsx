import { Autocomplete as AutocompleteMui } from '@mui/material'


export const Autocomplete = (props ) => {

  return (
    <AutocompleteMui {...props}>
      {props.children}
    </AutocompleteMui>
  )
}
