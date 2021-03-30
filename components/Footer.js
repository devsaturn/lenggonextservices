import React from 'react'
import style from '../styles/Footer.module.css'
function Footer() {
    return (
        <div className={style.footer_container}>
          <p>
          Powered by <span className={style.footer_powerBy}>Lenggo</span>
        </p>

        </div>
    )
}

export default Footer
