import {collection, doc, setDoc, getDoc, getDocs, deleteDoc, DocumentData} from 'firebase/firestore/lite'

// Firebase DB whit configs

import { db } from './index'

//


// Types

import { Game } from "../types";

//

class gamesFireBaseFunctions {

    static async newGame(obj: Required<Game>){

        try{
    
            await setDoc(doc(db, 'Games', obj.name), {
            
                name: obj.name,
                genere: obj.genere,
                developers: obj.developers,
                rating: obj.rating,
            })
            
            return console.log('New Game created!')
    
        }catch(error){
          return console.error('ERROR AT src/firebaseConfig/index.ts newGame function!!', error)
        }
    
    
    }
    
    static async deleteGame(gameName: string){
    
        try{
    
           await deleteDoc(doc(db, 'Games', gameName))
    
           return console.log('Game deleted!! =>', gameName)
    
        }catch(error){
    
            console.error('Failed attempt to delete a game', error)
    
        }
    
    
    }
    
    static async changeGameData(obj: Partial<Game>){
    
        try{
    
            // Typescript da error si no le aseguramos con el ! que obj.name estara si o si. Ya que al ser partial puede estar, o no, la propiedad name, que es extrictamente
            // necesaria para la funcion doc()
    
            await setDoc(doc(db, 'Games', obj.name!), {
                rating: obj.rating
            })
    
           return console.log(`Game rating updated!!, Game: ${obj.name} New Rating: ${obj.rating}`)
    
        }catch(error){
            return console.error('ERROR AT src/firebaseConfig/gamesFireBaseFunctions changeRating function!!', error)
        }
    
    }
    
    static async getAllGames(){
    
     let allDataGames: DocumentData[] = []
    
        try{
    
            const queryDataGames = await getDocs(collection(db, 'Games'))
    
            queryDataGames.forEach((doc) => {
             allDataGames.push(doc.data())
            })
    
            if(!allDataGames.length){
    
                return console.error('allDataGames empty!!')
    
            }
    
            return allDataGames
    
        }catch(error){
    
            console.error('Error at getAllGames function!!! ===>', error)
    
        }
    
    }
    
    static async getGame(name: string){
    
        console.log(`Searching info about => ${name}`)
    
        try{
    
            const docRef = doc(db, 'Games', name)
           
            const docSnap = await getDoc(docRef)
    
            if(docSnap.exists()){
                
                console.log('Data finded!!')
    
                return docSnap.data()
    
            }else{
    
                throw Error(`Data of ${name} dont exist!`)
    
            }
    
        }catch(error){
            return console.error('Data not finded or not exist')
        }
    
    
    }
    

}

export default gamesFireBaseFunctions