import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'
import Button from '@material-ui/core/Button';
import Fondateur from '../components/Fondateur'
import TextDescription from '../components/TextDescription'


export default function Navbar() {
    const route = useRouter()
    const pathname = route.pathname

    return (
        <div>
        <div className={styles.nav}>
            <Link href="/"><Image src="/logoCarre.png" width={60} height={60}/></Link>
            <h1 className={styles.title}>Bienvenu.e chez Lenggo</h1>
            <Button variant="contained" size="small" color="primary" href="#contained-buttons">
                Contactez-nous
            </Button>
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
