'use strict';

const request = require('supertest');
const app     = require('../src/app');
const expect  = require('chai').expect;

describe('Hello World Server', () => {
	describe('GET /', () => {
		it('returns status code 200', (done) => {
			request(app)
				.get('/')
				.expect(200, done)
		});
	});
});
