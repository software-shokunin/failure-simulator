'use strict';

const supertest = require('supertest');
const app       = require('../src/app');
const BASE_URL  = "http://localhost:3000/"

describe('Hello World Server', () => {
	describe('GET /', () => {
		it('returns status code 200', (done) => {
			supertest(app)
				.get('/')
				.expect(200)
				.end((err, res) => {
					err ? done.fail(err) : done();
				});
		});
	});
});
