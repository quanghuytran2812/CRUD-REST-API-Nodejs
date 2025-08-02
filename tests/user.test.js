const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('User API', () => {
    let userId;

    test('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'John Doe', email: 'john@example.com' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('John Doe');
        expect(res.body.email).toBe('john@example.com');
        userId = res.body.id;
    });

    test('should get all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    test('should get a user by id', async () => {
        const res = await request(app).get(`/api/users/${userId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', userId);
    });

    test('should update a user', async () => {
        const res = await request(app)
            .put(`/api/users/${userId}`)
            .send({ name: 'Jane Doe', email: 'jane@example.com' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('Jane Doe');
        expect(res.body.email).toBe('jane@example.com');
    });

    test('should delete a user', async () => {
        const res = await request(app).delete(`/api/users/${userId}`);
        expect(res.statusCode).toEqual(204);
        // Confirm deletion
        const getRes = await request(app).get(`/api/users/${userId}`);
        expect(getRes.statusCode).toEqual(404);
    });
});