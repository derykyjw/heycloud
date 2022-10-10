import React from 'react'

export default function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear() }
        <span> HeyCloud</span>
      </p>
      <div>
        <a href="https://www.vecteezy.com/free-vector/cloud-computing">Cloud Computing Vectors by Vecteezy</a>
      </div>
    </footer>
  )
}
