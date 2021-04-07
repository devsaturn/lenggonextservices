import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'
import Button from '@material-ui/core/Button';
import Fondateur from '../components/Fondateur'
import TextDescription from '../components/TextDescription'
import {motion} from 'framer-motion'

export default function Navbar() {
    const route = useRouter()
    const pathname = route.pathname
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
  

    return (
        <div>
        <div className={styles.nav}>
            <Link href="/"><Image src="/logoCarre.png" width={60} height={60}/></Link>
            <h1 className={styles.title}>Bienvenu.e chez Lenggo</h1>

            {
                pathname && pathname === '/contact' ?
                <div></div>
                :  <Link href="/contact"><Button size="small" variant="contained" color="primary">Contact</Button></Link>

            }
        </div>
        <br/>
        <div className={styles.subtitle}>
            <Fondateur/>
        </div>
        <br/>
        <p className={styles.description}>
          <TextDescription/>
        </p>
  
        </div>
    )
}
