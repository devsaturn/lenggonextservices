import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextDescription from '../components/TextDescription'
import Prestation from '../components/Prestation'
import References from '../components/References'
import Fondateur from '../components/Fondateur'
import Footer from '../components/Footer'
import Expert from '../components/Expert'
import Atouts from '../components/Atouts'
import ContactForm from '../components/ContactForm'

export default function Home() {
  const [prestations, setPrestation] = useState([])
  const dataPrestations = [
    {
      id: 1,
      title: 'Ingénierie sociale',
      description: '',
      image: '',
      icon:'',
      type: 'ingenierie'
    },
    {
      id: 2,
      title: 'Assitance à maîtrise d\'ouvrage insertion',
      description: '/assistance.jpg',
      image: '',
      icon:'',
      type:'assistance'
    },
    {
      id: 3,
      title: 'Formation clauses sociales',
      description: '',
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

      <main className={styles.main}>
        

        <div className={styles.grid}>
          <section className={styles.prestation}>
            {
              prestations && prestations.map(prestation => <Prestation key={prestation.id} prestation={prestation}/>)
            }
            
          </section>
          <section>
            <Atouts/>
          </section>
          <section>
            <Expert/>
          </section>
          <section>
            <ContactForm/>
          </section>

        </div>
      </main>

      <Footer/>
    </div>
  )
}
