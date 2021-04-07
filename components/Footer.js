import React from 'react'
import style from '../styles/Footer.module.css'
function Footer() {
  const currentDate = new Date(Date.now())
  const currentYear = currentDate.getFullYear()
    return (
        <div className={style.footer_container}>
          <p>
          Powered by <span className={style.footer_powerBy}>Lenggo</span>
        </p>
        <p>
          Copyright© {currentYear} Lenggo.
        </p>

        </div>
    )
}

export default Footer
