import { Router, Request, Response } from "express";

// Firebase functions

import { newUser, getUser, getAllUsers } from "../firebaseConfig/userFireBaseFunctions";

//

// Types

import { User } from "../types";

//

const router = Router()

router.get('/ping', (req: Request, res: Response) => {
    res.send('pong')
})

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

router.get('/getUser:id', async (req: Request, res: Response) => {

    if(!req.body.userId){

        res.status(400).send('No id sended!')

    }

    const { userId } = req.body

    try{

        const userData = await getUser(userId.id)

        if(!userData){

            res.status(400).send('No information about the user!')

        }

        res.status(200).send(userData)

    }catch(error){

        console.error('Error with userDta()!!', error)

    }

})

router.post('/newUser', async(req: Request, res: Response) => {

    if(!req.body){

        res.status(401).send('No user information send!')

    }

    const userInfo: Required<User> = req.body.user


    try{

    await newUser(userInfo)

    res.status(200).send(`New user created!! ==> ${userInfo}`)

    }catch(error){

        res.status(400).send('Error at /newUSer with newUser() function!!')

    }

})

export default router