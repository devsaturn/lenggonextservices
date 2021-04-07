import React, {useRef} from 'react'
import styles from '../styles/ContactForm.module.css'
import { useForm } from "react-hook-form";
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-scroll-parallax';
import Footer from './Footer';
import{motion} from 'framer-motion'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0.5),
        width: '50ch',
      },
    },
  }));


function ContactForm() {
    const ref = useRef()
    const classes = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    return (
    <div>
      <Parallax y={[-5, -20]} tagOuter="figure">
        <motion.div className={styles.main} 
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={variants}>
    
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <motion.div 
          className={styles.item}
          animate={{ x: [-80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
            <TextField id="outlined-basic" name="lastName" label="Nom" variant="outlined" {...register("lastName")}/>
            <TextField id="outlined-basic" name="firstName" label="Prénom" variant="outlined" {...register("firstName")}/>
        </motion.div>
        <motion.div 
          className={styles.item}
          animate={{ x: [80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
            <TextField id="outlined-basic" placeholder="Téléphone" label="Téléphone" variant="outlined" {...register("phoneNumber")} />
            <TextField id="outlined-basic" placeholder="Entreprise" label="Entreprise" variant="outlined" {...register("compagny")} />
        </motion.div>
        <motion.div 
          className={styles.item} 
          animate={{ x: [80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
            <TextField id="outlined-basic" fullWidth placeholder="E-mail" label="E-mail" variant="outlined" {...register("email", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>Ce champ est requis</span>}
        </motion.div>
        <motion.div 
          className={styles.item}
          animate={{ x: [-80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
            <TextField id="outlined-basic" 
              fullWidth multiline
              rows={6} 
              rowsMax={6} 
              placeholder="Parlez-nous de votre projet" 
              label="Parlez-nous de votre projet" 
              variant="outlined"
              {...register("projet")} />
        </motion.div>

        <motion.div 
          className={styles.item}
          animate={{ y: [80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
            <Button type="submit">Envoyer</Button>
        </motion.div>

    </form> 

          </motion.div>
      </Parallax>

      <Parallax className={styles.footer}  y={[10, -20]} tagOuter="figure">
        <Footer/>
      </Parallax>

    </div>
       )
}

export default ContactForm
