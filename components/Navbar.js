import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const route = useRouter()
    const pathname = route.pathname

    return (
        <div className={styles.nav}>
            <Link href="/"><Image src="/logo.png" width={80} height={80}/></Link>
        </div>
    )
}
