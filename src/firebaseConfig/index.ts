// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, setDoc, getDoc, getDocs, DocumentData} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Types

import { User } from "../types";

//

// Your web app's Firebase configuration

process.loadEnvFile()

const {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} = process.env

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

// Create users function

// New document | user

export const newUser = async (obj: User) => {

    try{

        await setDoc(doc(db, 'Users', obj.id), {
        
            name: obj.name,
            email: obj.email,
            cellPhone: obj.cellPhone,
            id: obj.id
        })
        
        return console.log('New User created!')

    }catch(error){
      return console.error('ERROR AT src/firebaseConfig/index.ts newUser function!!', error)
    }


}

export const getAllUsers = async() => {

 let allDataUsers: DocumentData[] = []

    try{

        const queryDataUsers = await getDocs(collection(db, 'Users'))

        queryDataUsers.forEach((doc) => {
         allDataUsers.push(doc.data())
        })

        if(!allDataUsers.length){

            return console.error('allDataUsers empty!!')

        }

        return allDataUsers

    }catch(error){

        console.error('Error at getAllUsers function!!! ===>', error)

    }

}

export const getUser = async(id: string) => {

    try{

        const docRef = doc(db, 'Users', id)
       
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            
            console.log('Data finded!!')

            return docSnap.data()

        }

    }catch(error){
        return console.error()
    }


}