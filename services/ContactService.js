import firebase from 'firebase/app'
import 'firebase/firestore'
import {format} from 'date-fns'
import fr from 'date-fns/locale'




const sendMessage = (message) => {
    const currentDate = firebase.firestore.FieldValue.serverTimestamp() 
    const currentDateString = format(new Date(Date.now()), 'dd/mm/yyyy H:mm', {locale: fr}) 

    try{
            return firebase
            .firestore()
            .collection('messages')
            .add({...message, createAt: currentDate, createAtString: currentDateString, origin: 'conseil'})
            .then(doc => {
                if(doc.id){
                    return 'SUCCES'
                }
            })
            .catch(error => error.message)
    }
    catch(error){
        return error.message
    }
}


export default sendMessage