import { Request, Response } from 'express';
import { Route, HttpGet } from 'express-ts-mvc';
import { Get } from '../models';

@Route('/index')
export class Index {

    @HttpGet('')
    get(req: Request, res: Response) {
        return res.json(<Get>{ test: true });
    }

}