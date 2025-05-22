import {collection, doc, setDoc, getDoc, getDocs, DocumentData} from 'firebase/firestore/lite'

// Firebase DB whit configs

import { db } from './index'

//


// Types

import { User } from "../types";

//

export const newUser = async (obj: User) => {

    console.log('hasta aca llega')

    try{

        await setDoc(doc(db, 'Users', obj.id.toString()), {
        
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

    console.log(`Searching info about => ${id}`)

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