const request = require('supertest');
const app = require('../index.js'); // Adjust path if needed

let server;

beforeAll((done) => {
  server = app.listen(0, () => { // Let the OS assign an available port
    console.log(`Test server running on port ${server.address().port}`);
    done();
  });
});

afterAll((done) => {
  server.close(done); // Ensure the server is properly closed after the tests
});

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello this is review!');
  });
});
