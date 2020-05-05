const request = require('supertest');
const server = require('../../../src/app');

beforeAll(async () => {
   console.log('running docker env to local integration');
 });

 afterAll(() => {
server.close();
console.log('killing docker env');
});


describe('Event controller CRUD Test', () => {
    test('get', async () => {
      const response = await request(server).get('/events');
      expect(response.status).toEqual(200);
   });
});