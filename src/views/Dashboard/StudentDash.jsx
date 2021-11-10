import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  getRole,
  removeSession,
} from '../../services/LocalStorageService/LocalStorageService'
import { AnnouncementPanel } from '../../components/Announcement'
import CollapsibleTable from '../../components/Table'

function StudentDash() {
  const history = useHistory()
  useEffect(() => {
    let checkAuth = getRole() === '2'
    if (!checkAuth) {
      removeSession()
      history.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>

      <AnnouncementPanel />
      <CollapsibleTable />
    </div>
  )
}

export default StudentDash
