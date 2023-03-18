import { Drawer as DrawerMui, DrawerProps } from '@mui/material'
import { Box } from '@/components'

export function Drawer(props: DrawerProps) {
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