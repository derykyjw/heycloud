import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import "normalize.css"
import "../assets/css/main.css"


export default function Layout({children}) {
  return (
    <> {/* React.Fragments shorthand */}
        <Navbar /> 
        {children} {/* to display the children stuff between components*/}
        <Footer />

    </> /* React.Fragments shorthand */

  )
}
