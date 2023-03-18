import { AccessibilityNew, Article, LocalHospital, MedicalInformation, Error, AssignmentTurnedIn, CurrencyExchange, Dashboard, ExitToApp, Favorite, Groups, Layers, MedicalServices, Menu, MenuOpen, PriorityHigh, WorkspacePremium, History } from '@mui/icons-material'
import { Box, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function Layout(props: any) {
  const { children } = props
  const navigate = useNavigate()
  const location: any = useLocation()

  const breadcrumbsPaths: any = location.pathname.split('/').filter((path: any) => path)

  const menu: any = [
    {
      text: 'Dashboard',
      icon: <Dashboard />,
      path: '/dashboard',
      cy: 'sidebar-dashboard'
    },
    {
      text: 'Reembolsos e Prévias',
      icon: <CurrencyExchange />,
      path: '/refund',
      cy: 'sidebar-refund'
    },
    {
      text: 'Pendências',
      icon: <Error />,
      path: '/pending',
      cy: 'sidebar-pending'
    },
    {
      text: 'Histórico',
      icon: <History />,
      path: '/history',
      cy: 'sidebar-history'
    },
    {
      text: 'Clínicas',
      icon: <Favorite />,
      path: '/clinic',
      cy: 'sidebar-clinic'
    },
    {
      text: 'Médicos',
      icon: <MedicalServices />,
      path: '/doctor',
      cy: 'sidebar-doctor'
    },
    {
      text: 'Pacientes',
      icon: <AccessibilityNew />,
      path: '/patient',
      cy: 'sidebar-patient'
    },
    // {
    //   text: 'Financeiro',
    //   icon: <AttachMoney />,
    //   path: '/finance'
    // },
    {
      text: 'Procedimentos',
      icon: <AssignmentTurnedIn />,
      path: '/procedure',
      cy: 'sidebar-procedure'
    },
    {
      text: 'Especialidades',
      icon: <WorkspacePremium />,
      path: '/speciality',
      cy: 'sidebar-speciality'
    },
    {
      text: 'Convênios',
      icon: <MedicalInformation />,
      path: '/insurance',
      cy: 'sidebar-insurance'
    },
    {
      text: 'Planos',
      icon: <LocalHospital />,
      path: '/plan',
      cy: 'sidebar-plan'
    },
    {
      text: 'Equipe',
      icon: <Groups />,
      path: '/staff',
      cy: 'sidebar-staff'
    },
    {
      text: 'Termos',
      icon: <Article />,
      path: '/terms',
      cy: 'sidebar-terms'
    },

  ]

  return (
    <>
      <Drawer variant="permanent" anchor="left"  >
        <List
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
            p: 0,
            margin: 0,
            listStyle: 'none',
            backgroundColor: 'primary.700',
          }}
        >

          <Box sx={{ height: '100%', transition: 'width ease 200ms', width: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <ListItem sx={{ height: '4rem', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'primary.light' }}>
              {/* <img hidden={!isSidebarExpanded} style={{ width: '100%', maxWidth: '90px' }} src={logo} alt="logo" /> */}
              {/* <Icon sx={{ cursor: 'pointer', color: 'primary.light' }} onClick={() => setIsSidebarExpanded((state: any) => !state)}>
                {isSidebarExpanded ? <MenuOpen /> : <Menu />}
              </Icon> */}
              SGB
            </ListItem>

            <Box sx={{
              flex: 1,
              overflowY: 'auto'
            }}>
              {menu?.map((item: any, index: number) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => navigate(item.path)}
                  sx={{
                    p: 2, borderBottom: '1px solid', borderColor: 'primary.light', gap: 2, height: '3.5rem'
                  }}
                  data-cy={item.cy}
                >
                  <ListItemText primary={item.text} sx={{ fontSize: '0.8125rem', fontWeight: 400, color: 'primary.contrastText' }} />
                </ListItem>
              ))}
            </Box>

            <ListItem
              button
              data-cy="sidebar-logout"
              sx={{ p: 2, gap: 2, height: '4rem' }}
            // onClick={handleLogout}
            >
              <ListItemText sx={{ color: 'primary.contrastText' }} primary="Sair da conta" />
              <ListItemIcon sx={{ minWidth: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'primary.contrastText' }}><ExitToApp /></ListItemIcon>
            </ListItem>
          </Box>
        </List>
      </Drawer>

      <Box sx={{ pl: '240px ' }}>
        {children}
      </Box>
    </>

  )
}