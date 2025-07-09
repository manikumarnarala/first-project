import React from 'react'
import { Outlet } from 'react-router-dom'
import './Branches.css'
function Branches() {
  return (
    <div >
        <Outlet/>
    </div>
  )
}

export default Branches