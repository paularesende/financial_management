const request = require('supertest');

const app = require('../src/app');

test('it should listen to root', () => {
    return request(app).get('/')
        .then((res) => {
        expect(res.status).toBe(200);
    });
});