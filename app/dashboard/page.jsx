import React from 'react'
import { UserButton } from '@clerk/nextjs'
function Dashboard() {
  return (
    <div>
        <h1>Hello Dashboard</h1>
        <UserButton/>
    </div>
    
  )
}

export default Dashboard