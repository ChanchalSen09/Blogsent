import React from 'react'
import logoImage from "../assets/Logo.png"
function Logo({ width = '100px' }) {
  return (
    <img src={logoImage} alt="Logo" style={{ width: width }} />
  )
}

export default Logo