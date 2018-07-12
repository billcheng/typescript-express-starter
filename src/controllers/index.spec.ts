import * as express from 'express';
import { Request, Response } from 'express';
import { createRequest, createResponse, MockResponse } from 'node-mocks-http';
import { expect } from 'chai';

import { Index } from './index';
import { Get } from '../models';

describe('Index', () => {

    let index: Index;
    let req: Request;
    let res: MockResponse<Response>;

    beforeEach(() => {
        req = createRequest({
            headers: { 'Authorization': 'Bearer Access-Token' }, // optional: oauth
            route: { // optional to mock the path
                path: 'the-path'
            }
        });
        req.app = express();
        res = createResponse();

        index = new Index();
    });

    it('get()', () => {

        index.get(req, res);

        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(res._getData())).to.eql(<Get>{ test: true });
    });

});

