import {doc, setDoc, getDoc} from 'firebase/firestore/lite'
import bcrypt from 'bcryptjs'

// Firebase DB whit configs

import { db } from './index'

//


// Types

import { User } from "../types";

//

export const newUser = async (obj: User) => {

    try{

        await setDoc(doc(db, 'Users', obj.email.toString()), {
        
            name: obj.name,
            email: obj.email,
            cellPhone: obj.cellPhone,
            password: obj.password
        })
        
        return console.log('New User created!')

    }catch(error){
      return console.error('ERROR AT src/firebaseConfig/index.ts newUser function!!', error)
    }


}

export const loginUser = async(email: string, password: string) => {

    try{

        const docRef = await getDoc(doc(db, 'Users', email))

        if(!docRef.exists()){
            return false
        }

        const validateHashPassword = bcrypt.compare(password, docRef.data().password)

        if(!validateHashPassword){
            return false
        }

        return docRef.data().name

    }catch(error){

        console.error(`Error at loginUser ==> ${error}`)

       return false 
        
    }
}

export const getUser = async(email: string) => {

    console.log(`Searching info about => ${email}`)

    try{

        const docRef = doc(db, 'Users', email)
       
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            
            console.log('Data finded!!')

            return docSnap.data()

        }

    }catch(error){
        return console.error()
    }


}