'use strict';

const request = require('supertest');
const app     = require('../src/app');
const expect  = require('chai').expect;

describe("customers", () => {
	describe('get customer by id', () => {
		it('returns customer 1 details', (done) => {
			request(app)
				.get('/1')
				.expect(302)
				.expect({
					"id" : "1",
					"name": "Customer 1"
				}, done)
		});

		it('returns customer 2 details', (done) => {
			request(app)
				.get('/2')
				.expect(302)
				.expect({
					"id" : "2",
					"name": "Customer 2"
				}, done)
		});

    it('returns not found if customer cannot be found with given id', (done) => {
        request(app)
						.get('/abc')
						.expect(404)
						.expect({
								status: 404,
								developerMessage: 'customer not found'
						}, done);
    });
	});
});
