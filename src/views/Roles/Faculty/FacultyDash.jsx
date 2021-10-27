import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AnnouncementPanel } from '../../../components/compIndex'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import {
  getRole,
  removeSession,
} from '../../../services/LocalStorageService/LocalStorageService'

function FacultyDash() {
  const history = useHistory()
  useEffect(() => {
    let checkAuth = getRole() === '1'
    if (!checkAuth) {
      removeSession()
      history.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#455a64' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Faculty
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                removeSession()
                history.push('/login')
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1> Announcement </h1>
      <AnnouncementPanel />
    </div>
  )
}

export default FacultyDash
