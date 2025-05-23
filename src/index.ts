import express, { Express} from "express";
import routes from './routes/index'
import cors from "cors"

const app: Express = express()

// Express configs

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//

// Middlewares

app.use(cors({
    origin: process.env.CLIENT || 'http://localhost:5173',

    credentials: true
}))

//

// Routes

app.use(routes)

//

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})
