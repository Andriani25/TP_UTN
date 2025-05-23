import express from "express";
import routes from './routes/index';
const app = express();
// Express configs
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
//
app.use(routes);
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
