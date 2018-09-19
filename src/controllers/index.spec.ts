import { Request, Response } from 'express';
import { createRequest, createResponse, MockResponse, MockRequest } from 'node-mocks-http';

import { IndexController } from './index';

describe('Index', () => {

    let index: IndexController;
    let req: MockRequest<Request>;
    let res: MockResponse<Response>;

    beforeEach(() => {

        index = new IndexController();
        req = createRequest();
        res = createResponse();

    });


    describe('GIVEN', () => {

        describe('WHEN', () => {

            beforeEach(() => {
                index.get(req, res);
            });

            it('THEN', () => {
                expect(res.statusCode).toBe(200);
            });

        });

    });

});

