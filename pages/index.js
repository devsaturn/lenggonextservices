import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Prestation from '../components/Prestation'
import Footer from '../components/Footer'
import Expert from '../components/Expert'
import Atouts from '../components/Atouts'
import { Parallax } from 'react-scroll-parallax';
import {motion} from 'framer-motion'


export default function Home() {
  const [prestations, setPrestation] = useState([])
  const dataPrestations = [
    {
      id: 1,
      title: 'Ingénierie sociale',
      description: 'Informer, conseiller et accompagner sur le cadre de mise en oeuvre et la stratégie insertion RSE.',
      image: '',
      icon:'',
      type: 'ingenierie'
    },
    {
      id: 2,
      title: 'Assitance à maîtrise d\'ouvrage insertion',
      description: 'Piloter la mise en oeuvre opérationelle des clauses d\'insertion avec les intervenants et les opérateurs locaux. Assurer l\'interface entre les différents acteurs.',
      image: '',
      icon:'',
      type:'assistance'
    },
    {
      id: 3,
      title: 'Formation clauses sociales',
      description: 'Formation interactives s\'appuyant sur des apports théoriques et des réalités opérationnelles. De l\'origine des clauses sociales à la mesure d\'impacts.',
      image: '',
      icon:'FcDiploma1',
      type:'formation'
    }
  ]

  useEffect(() => {
    setPrestation(dataPrestations)
    

  }, [])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Lenggo conseils</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Parallax  y={[-20, 20]} tagOuter="figure">
      <main className={styles.main}>
        

        <div className={styles.grid}>
        <Parallax className={styles.section2} y={[-5, 20]} tagOuter="figure">
          <motion.section className={styles.prestation}
          animate={{ x: [100,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
            {
              prestations && prestations.map(prestation => <Prestation key={prestation.id} prestation={prestation}/>)
            }
            
          </motion.section>
          </Parallax>
          <Parallax className={styles.section} y={[-5, 20]} tagOuter="figure">
          <section>
            <Atouts/>
          </section>
          </Parallax>
          <Parallax className={styles.section}  y={[0, 20]} tagOuter="figure">
          <section>
            <Expert/>
          </section>
          </Parallax>

        </div>
      </main>
</Parallax>
<Parallax className={styles.footer}  y={[10, -20]} tagOuter="figure">
      <Footer/>
      </Parallax>
    </div>
  )
}
