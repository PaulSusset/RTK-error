import CssBaseline from '@mui/material/CssBaseline'
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './errorPage.tsx'
import { store } from './modules/store.ts'

import { createTheme, ThemeProvider } from '@mui/material'

const Dashboard = lazy(() => import('./routes/dashboard'))

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  { path: '*' },
])

const theme = createTheme({
  components: {
    MuiCssBaseline: {},
    MuiGrid2: {
      defaultProps: { spacing: 10, rowSpacing: 2, columnSpacing: 2 },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
