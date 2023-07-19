import dotenv from 'dotenv';
import express, { Express, NextFunction, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/pokemons', (req: Request, res: Response, next: NextFunction) => {
    console.log('A new request received at ' + new Date().toLocaleString());
    next();
});

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.get('/pokemons/:pokemonId', (req: Request, res: Response) => {
    return res.send(req.params);
});

// For invalid routes
app.get('*', (req: Request, res: Response) => {
    res.send('404! This is an invalid URL.');
});

app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`)
);
