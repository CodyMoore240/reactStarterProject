import * as firebase from 'firebase'

//firebase config
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

//initialize firebase
const initDB = firebase.initializeApp(config)

//initialize cloud functions
export const cloudFunctions = initDB.functions()


//references
//root only needed in unique situations
export const firebaseRoot = firebase 

//database
export const db = initDB.firestore()

//auth
export const auth = initDB.auth()

//storage
export const storage = firebase.storage().ref()

// TEMP settings for error dsplayed in the console
const settings = {
  /* your settings... */ 
  timestampsInSnapshots: true
}
db.settings(settings)