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
				"id"   : "1",
				"name" : "Customer 1",
				"paymentDetails": {
					"number" : "4000 0000 0000 0002",
					"ccv"    : "123",
					"expiry" : "11/20"
				}
			}, done)
		});

		it('returns customer 2 details', (done) => {
			request(app)
			.get('/2')
			.expect(302)
			.expect({
				"id"  : "2",
				"name": "Customer 2",
				"paymentDetails": {
					"number" : "5100 0000 0000 0008",
					"ccv"    : "567",
					"expiry" : "11/20"
				}
			}, done)
		});

		it('returns 404 when customer not found', (done) => {
			request(app)
			.get('/abc')
			.expect(404, done);
		});
	});
});
