const request = require('supertest')

const app = require('../src/app')

test('it should list all users', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty('name', 'John Doe');
            expect(res.body[0]).toHaveProperty('email', 'john@email.com');
        });
});