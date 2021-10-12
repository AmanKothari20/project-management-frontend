import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import {
  getRole,
  getToken,
} from '../../services/LocalStorageService/LocalStorageService'

function PublicRoute({ component: Component, ...rest }) {
  const userRole = getRole()
  return (
    <div className="pubr__app">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#455a64' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Project Manager
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Route
        {...rest}
        render={(props) =>
          !getToken() ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: `/${userRole}/dashboard` }} />
          )
        }
      />
    </div>
  )
}

export default PublicRoute
