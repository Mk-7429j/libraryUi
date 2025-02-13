// eslint-disable-next-line no-unused-vars
import React from 'react'
import Nav from '../nav/nav'
import { Outlet } from 'react-router-dom'
import Foot from '../foot/Foot'

const Client_layout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Foot/>
    </div>
  )
}

export default Client_layout