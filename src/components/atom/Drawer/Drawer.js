import { Drawer as DrawerMui } from '@mui/material'
import { Box } from '../Box'

export function Drawer(props) {
  return (
    <DrawerMui {...props}>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#151515' }}
      >
        {props.children}
      </Box>
    </DrawerMui>
  )
}