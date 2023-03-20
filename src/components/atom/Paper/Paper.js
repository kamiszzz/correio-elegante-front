import { Paper as PaperMui } from '@mui/material'

export function Paper(props) {
  return (
    <PaperMui {...props}>
      {props.children}
    </PaperMui>
  )
}