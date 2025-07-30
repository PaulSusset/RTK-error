import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Breadcrumbs,
  Link as MUILink,
  LinkProps,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { outilsList } from 'src/routes/dashboard'
import { logOut } from '@redux/session/session.slice'
import { useAppDispatch, useAppSelector } from 'hooks/index'

export interface LinkRouterProps extends LinkProps {
  to: string
  replace?: boolean
}

export function LinkRouter(props: LinkRouterProps) {
  return <MUILink {...props} component={Link as any} />
}

const Header = () => {
  const dispatch = useAppDispatch()
  const pathnames = location.pathname.split('/').filter((x) => x)
  const resourceTitle = 'test'
  const breadcrumbNameMap: { [key: string]: string } = useMemo(() => {
    let obj = {}
    for (const outil of outilsList) {
      Object.assign(obj, { [outil.link]: outil.name })
    }
    return obj
  }, [])

  useEffect(() => {
    document.title =
      'RTK Error' +
      (resourceTitle || breadcrumbNameMap['/' + pathnames[0]] || 'Test')
  }, [pathnames, resourceTitle])
  return (
    <Box sx={{ flexGrow: 1, height: '64px' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to={'/'}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Breadcrumbs
            aria-label="breadcrumb"
            maxItems={4}
            color="white"
            sx={{ flexGrow: 1 }}
            separator="›"
          >
            <LinkRouter underline="hover" color="inherit" to="/">
              Accueil
            </LinkRouter>
          </Breadcrumbs>
          <Button
            onClick={() => dispatch(logOut(null))}
            variant={'text'}
            sx={{ color: 'white' }}
          >
            Déconnexion
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
