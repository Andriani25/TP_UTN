import { Router, Request, Response } from "express";
import { Game } from "../types";
import { newGame, changeRating, getAllGames, deleteGame, getGame } from "../firebaseConfig/gamesFireBaseFunctions";

const router = Router()

router.get('/getAllGames', async (req: Request, res: Response) => {

    res.send('Here will be all my games')
    
})

router.get('/Game/:name', async (req: Request, res: Response) => {

    const findGame: string = req.params.name

    if(!findGame){
        res.status(400).send('No name sended!!')
    }

    try{

        const gameData = await getGame(findGame)

        res.status(200).send(gameData)

    }catch(error){

        res.status(500).send(`Error at /Game/:name ==> ${error}`)

    }

})

router.post('/newGame', async (req: Request, res: Response) => {
    
    if(!req.body) res.status(400).send('No game data sended!!')

    const gameData: Required<Game> = req.body.gameData

    try{

        await newGame(gameData)

        res.status(201).send(`New game created! ==> ${gameData}`)

    }catch(error){
        
        res.status(500).send(`Error at /newGame ==> ${error}`)

    }

})

router.patch('/modifyGame', async (req: Request, res: Response) => {

    if(!req.body){
    res.status(400).send('No values sended!!')
    }

    const dataToModify: Partial<Game> = req.body.values

    try{

       changeRating(dataToModify)

       res.status(200).send(`Data modified succesfully! ==> ${dataToModify}`)

    }catch(error){

        res.status(500).send(`Error at /modifyGame ==> ${error}`)

    }

})

export default router