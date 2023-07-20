import request from 'supertest';
import app from './app';

describe('/', () => {
    describe('GET', () => {
        it('should be 200', async () => {
            const res = await request(app).get('/');

            expect(res.statusCode).toEqual(200);
        });
        it('should say hello', async () => {
            const res = await request(app).get('/');

            expect(res.text).toEqual('Hello World!');
        });
    });
});

describe('/login', () => {
    describe('GET', () => {
        it('should log in the user', async () => {
            const res = await request(app)
                .get('/login')
                .send({ email: 'john@doe.com', password: '1234' });

            expect(res.statusCode).toEqual(200);
        });

        it('should 401 on bad email', async () => {
            const res = await request(app)
                .get('/login')
                .send({ email: '👎', password: '1234' });

            expect(res.statusCode).toEqual(401);
        });

        it('should 401 on bad password', async () => {
            const res = await request(app)
                .get('/login')
                .send({ email: 'john@doe.com', password: '👎' });

            expect(res.statusCode).toEqual(401);
        });

        it('should 400 when no password is sent', async () => {
            const res = await request(app)
                .get('/login')
                .send({ email: 'john@doe.com' });

            expect(res.statusCode).toEqual(400);
        });

        it('should 400 when no email is sent', async () => {
            const res = await request(app)
                .get('/login')
                .send({ password: '1234' });

            expect(res.statusCode).toEqual(400);
        });
    });
});
