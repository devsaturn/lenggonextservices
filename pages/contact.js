import React, {useEffect} from 'react'
import ContactForm from '../components/ContactForm'
import styles from '../styles/ContactForm.module.css'
import {motion} from 'framer-motion'

function contact() {
    

    useEffect(() => {
    },[])

    return (
        <div className={styles.main}>
            <ContactForm/>
        </div>
    )
}

export default contact
