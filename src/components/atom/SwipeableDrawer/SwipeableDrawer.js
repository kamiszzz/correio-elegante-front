import { Box } from '../..'
import { SwipeableDrawer as SwipeableDrawerMui } from '@mui/material'

export function SwipeableDrawer(props) {
  return (
    <SwipeableDrawerMui
      PaperProps={{
        variant: 'elevation',
        elevation: 0,
      }}
      {...props} >
      <Box sx={{ p: 2 }}>
        {props.children}
      </Box>
    </SwipeableDrawerMui>
  )
}