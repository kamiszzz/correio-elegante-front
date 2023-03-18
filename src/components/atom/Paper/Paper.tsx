import { Paper as PaperMui, PaperProps } from '@mui/material'

export function Paper(props: PaperProps) {
  return (
    <PaperMui {...props}>
      {props.children}
    </PaperMui>
  )
}