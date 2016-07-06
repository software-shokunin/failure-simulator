let request    = require('request');
const BASE_URL = "http://localhost:3000/"

describe('Hello World Server', () => {
	describe('GET /', () => {
		it('returns status code 200', () => {
			request.get(BASE_URL, (error, response, body) => {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
	});
});
