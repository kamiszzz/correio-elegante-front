import { Box } from '@/components'
import { SwipeableDrawer as SwipeableDrawerMui, SwipeableDrawerProps } from '@mui/material'

export function SwipeableDrawer(props: SwipeableDrawerProps) {
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