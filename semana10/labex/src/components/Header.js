import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return(
    <>
      <Link to='/admin/trips/create'>CreateTripPage</Link>
    </>
  )
}