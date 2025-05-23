import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload as DefaultJwtPayload} from 'jsonwebtoken'

// .env

process.loadEnvFile

const jwtSecret = process.env.JWT_SECRET || 'megasecret'

//

// Interface 

interface JwtPayload extends DefaultJwtPayload {

    userName: string

}

//

const auth = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers["authorization"]

    req.session = {userName: null}

    const token = authHeader?.split(" ")[1]

    if(!token){
        res.status(401).send('Not Authorized!')
        return
    }

    jwt.verify(token, jwtSecret) as JwtPayload

    next()

}

export default auth