import { Request, Response } from 'express';
import { Route, HttpGet } from 'express-ts-mvc';

@Route('/index')
export class IndexController {

    @HttpGet()
    get(req: Request, res: Response) {
        res.sendStatus(200);
    }

}