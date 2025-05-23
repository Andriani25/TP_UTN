import { Router, Request, Response } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// .env

process.loadEnvFile()

const jwtSecret = process.env.JWT_SECRET || "megasecret"

//

// Firebase functions

import { newUser, loginUser } from "../firebaseConfig/userFireBaseFunctions";

//

// Types

import { User } from "../types";

//

const router = Router()

router.post('/login', async (req: Request, res: Response) => {

    if(!req.body.userData){

        res.status(400).send('No user data sended!')

    }

    const userData: Partial<User> = req.body.userData

    if(!userData.email || !userData.password){
        res.status(400).send("Email or password not sended!")
    }

    try{

        const data = await loginUser(userData.email!, userData.password!)

        if(!data){

            res.status(400).send('No information about the user!')

        }

        const token = jwt.sign({userName: data}, jwtSecret, {expiresIn: '1h'})

        res.status(200).json({data: {token: token}})

    }catch(error){

        console.error('Error with userDta()!!', error)

    }

})

router.post('/newUser', async(req: Request, res: Response) => {

    if(!req.body){

        res.status(401).send('No user information send!')

    }

    const userInfo: Required<User> = req.body.user

    if(!userInfo.cellPhone || !userInfo.email || !userInfo.name || !userInfo.password){
        res.status(400).send('User data missing!')
    }

    try{

    const hashPassword = await bcrypt.hash(userInfo.password, 10)    

    let userData: Required<User> = {
    name: userInfo.name,
    email: userInfo.email,
    cellPhone: userInfo.cellPhone,
    password: hashPassword
    }

    await newUser(userData)

    res.status(201).send(`New user created!! ==> ${userData.name}`)

    }catch(error){

        res.status(400).send('Error at /newUSer with newUser() function!!')

    }

})

export default router