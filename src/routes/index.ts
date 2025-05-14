import { Router, Request, Response } from "express";

// Firebase functions

import { newUser, getUser, getAllUsers } from "../firebaseConfig";

//

const router = Router()

router.get('/getAllUsers', async (req: Request, res: Response) => {
    
    try{

       const data = await getAllUsers()

       if(!data){

        throw console.error('Problem at /getAllUsers!!');
        

       }

       res.status(200).send(data)

    }catch(error){

        console.error('Problem with /getAllUsers with getAllUsers()!!! ==>', error)

    }

})

router.get('/getUser', async (req: Request, res: Response) => {

    const { userId } = req.body

    try{

        const userData = await getUser(userId)

        if(!userData){

            res.status(400).send('No information about the user!')

        }

        res.status(200).send(userData)

    }catch(error){

        console.error('Error with userDta()!!', error)

    }

})

export default router