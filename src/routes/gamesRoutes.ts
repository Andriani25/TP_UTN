import { Router, Request, Response } from "express";
import { Game } from "../types";
import gameController from '../firebaseConfig/gamesFireBaseFunctions'
import auth from "../middlewares/auth";

const router = Router()

router.get('/getAllGames', auth, async (req: Request, res: Response) => {

   try{

    const allData = await gameController.getAllGames()

    if(!allData){
        res.status(400).send('No data finded')
    }

    res.status(200).send(allData)

   }catch(error){

    res.status(500).send(`Error at /getAllGames ==> ${error}`)

   }
    
})

router.get('/Game/:name', auth, async (req: Request, res: Response) => {

    const findGame: string = req.params.name

    if(!findGame){
        res.status(400).send('No name sended!!')
    }

    try{

        const gameData = await gameController.getGame(findGame)

        res.status(200).send(gameData)

    }catch(error){

        res.status(500).send(`Error at /Game/:name ==> ${error}`)

    }

})

router.post('/newGame', auth, async (req: Request, res: Response) => {
    
    if(!req.body) res.status(400).send('No game data sended!!')

    const gameData: Required<Game> = req.body.gameData

    if(!gameData.developers || !gameData.genere || !gameData.name || gameData.rating){
        res.status(400).send('Game data missing!')
    }

    try{

        await gameController.newGame(gameData)

        res.status(201).send(`New game created! ==> ${gameData.name}`)

    }catch(error){
        
        res.status(500).send(`Error at /newGame ==> ${error}`)

    }

})

router.patch('/modifyGame', auth, async (req: Request, res: Response) => {

    if(!req.body){
    res.status(400).send('No values sended!!')
    }

    const dataToModify: Partial<Game> = req.body.values

    try{

       gameController.changeGameData(dataToModify)

       res.status(200).send(`Data modified succesfully! ==> ${dataToModify}`)

    }catch(error){

        res.status(500).send(`Error at /modifyGame ==> ${error}`)

    }

})

router.delete('/deleteGame', auth, (req: Request, res: Response) => {

if(!req.body){
    res.status(400).send('No game to delet sended!!')
}

const gameName: string = req.body.gameName

try{

   gameController.deleteGame(gameName)

   res.status(200).send(`Game deleted ==> ${gameName}`)
    
}catch(error){

    res.status(500).send(`Error at /deleteGame ==> ${error}`)

}

})

export default router