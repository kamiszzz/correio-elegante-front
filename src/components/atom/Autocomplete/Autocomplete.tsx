import { Autocomplete as AutocompleteMui, AutocompleteProps } from '@mui/material'


export const Autocomplete = (props: any ) => {

  return (
    <AutocompleteMui {...props}>
      {props.children}
    </AutocompleteMui>
  )
}
