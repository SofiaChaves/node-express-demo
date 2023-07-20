import express, { Express, NextFunction, Request, Response } from 'express';

const app: Express = express();

// Decode JSON body
app.use(express.json());

// Console logging each request
app.use('/*', (req: Request, res: Response, next: NextFunction) => {
    console.log('A new request received at ' + new Date().toLocaleString());
    next();
});

// Hello World
app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.get('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).send('missing email or password');

    if (email === 'john@doe.com' && password === '1234') return res.send(200);

    return res.status(401).send('bad credentials');
});

// For invalid routes
app.get('*', (req: Request, res: Response) => {
    res.send('404! This is an invalid URL.');
});

export default app;
