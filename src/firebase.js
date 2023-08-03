// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDt2_s3EswsbC5e-IpY-S9WVrn3t_WAoMQ',
  authDomain: 'agenda-8cc7d.firebaseapp.com',
  projectId: 'agenda-8cc7d',
  storageBucket: 'agenda-8cc7d.appspot.com',
  messagingSenderId: '308580553961',
  appId: '1:308580553961:web:13c69a108b41a5bd8a0c78'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const saveAgenda = async (week) => {
  const coll = collection(db, 'agenda')
  const docRef = doc(coll, 'agente')
  await setDoc(docRef, week)
}

export const getAgenda = async () => {
  const collectionAgenda = collection(db, 'agenda')
  const ref = await getDocs(collectionAgenda)
  const arr = []
  ref.forEach(x => {
    console.log(x.data())
    arr.push(x.data())
  })
  //   console.log('arr', arr[0].test)
  return arr[0].test
}
