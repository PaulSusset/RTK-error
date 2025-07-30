import React, { useLayoutEffect } from 'react'
import Container from '@mui/material/Container'
import { useAppDispatch } from 'hooks/index'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import Header from './components/header'
function App() {
  const isLoggedIn = true //useAppSelector(getIsLoggedIn)
  const location = useLocation()
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const dispatch = useAppDispatch()
  const params = useParams()
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Container
            sx={{
              paddingY: '16px',
              minHeight: 'calc(100vh - 64px)',
            }}
            maxWidth={Object.keys(params).length ? 'lg' : 'xl'}
          >
            <React.Suspense fallback={<div />}>
              <Outlet />
            </React.Suspense>
          </Container>
        </>
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  )
}

export default App
