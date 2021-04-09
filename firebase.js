import firebase from 'firebase/app'
import "firebase/analytics"
import "firebase/performance"
import "firebase/firestore"


var firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAINE,
    projectId: process.env.NEXT_FIREBASE_PROJET_ID,
    storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_FIREBASE_MEASUREMENT_ID
  };


  export default function firebaseInit(){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig) 

            if(typeof window !== "undefined"){
                  if('measurementId' in firebaseConfig){
                        firebase.analytics()
                        firebase.performance()
                  }
            }
        }
        firebase.app()

        console.log('FIREBASE INIT SUCCESS !')
  } 
        




