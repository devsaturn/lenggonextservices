import * as React from 'react'
import styles from '../styles/ContactForm.module.css'
import { useForm, Controller } from "react-hook-form";
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-scroll-parallax';
import Footer from './Footer';
import{motion} from 'framer-motion'
import sendMessage from '../services/contactService'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0.5),
        width: '50ch',
      },
    },
  }));


function ContactForm() {
    const classes = useStyles();
    const { register, control,  handleSubmit,getValues , reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => send(data);

    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }

    async function send(message) {
      if(message){
        const newMessage = await sendMessage(message)
        reset
      }
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
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField  fullWidth name="lastName" label="Nom" variant="outlined" {...field}/>}
            />

            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField fullWidth name="firstName" label="Prénom" variant="outlined" {...field}/>}
            />

        </motion.div>
        <motion.div 
          className={styles.item}
          animate={{ x: [80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
                        <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField  fullWidth type="number" placeholder="Téléphone" label="Téléphone" variant="outlined" {...field} />

            }
            />

          <Controller
              name="compagny"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField  fullWidth placeholder="Entreprise" label="Entreprise" variant="outlined" {...field} />
            }/>

        </motion.div>
        <motion.div 
          className={styles.item} 
          animate={{ x: [80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
             <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField  fullWidth placeholder="E-mail" label="E-mail" variant="outlined" {...field} />
            }/>

            {/* errors will return when field validation fails  */}
            {errors.email && <span>E-mail invalide</span>}
        </motion.div>
        <motion.div 
          className={styles.item}
          animate={{ x: [-80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
                      <Controller
              name="projet"
              control={control}
              rules={{ required: true }}
              render={({ field }) => 
              <TextField 
              fullWidth multiline
              rows={6} 
              rowsMax={6} 
              placeholder="Parlez-nous de votre projet" 
              label="Parlez-nous de votre projet" 
              variant="outlined"
              {...field}  />
            }/>



            
        </motion.div>

        <motion.div 
          className={styles.item}
          animate={{ y: [80,0] }}
          transition={{ ease: "easeOut", duration: 2 }}>
            <Button type="submit" color="primary">Envoyer</Button>
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
