import express, { Express } from "express";
import routes from './routes/index'

const app: Express = express()

app.use(routes)

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})
