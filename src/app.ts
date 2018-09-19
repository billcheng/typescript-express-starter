import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { initialize } from 'express-ts-mvc';

import { IndexController } from './controllers';

const app: express.Express = express();

app.use(helmet.noCache());

console.log(`DEPLOYMENT_ENV = ${process.env.DEPLOYMENT_ENV}`);

// uncomment after placing your favicon in /public
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

initialize(app, IndexController);

export default app;