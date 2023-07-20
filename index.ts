import dotenv from 'dotenv';
import app from './src/app';

dotenv.config();
const port = process.env.PORT;

app.listen(port, () =>
    console.log(`App listening on http://localhost:${port}`)
);
