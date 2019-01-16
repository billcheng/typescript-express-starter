import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as expressGraphQL from 'express-graphql';
import { buildSchema } from 'graphql';
import { readFileSync } from 'fs';

import { getCourse } from './resolvers/getCourse';
import { getCourses } from './resolvers/getCourses';
import { updateCourseTopic } from './resolvers/updateCourseTopic';

const app: express.Express = express();

app.use(helmet.noCache());

console.log(`DEPLOYMENT_ENV = ${process.env.DEPLOYMENT_ENV}`);

// uncomment after placing your favicon in /public
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// graphql schema
const gql = readFileSync(`${__dirname}/schema.gql`, 'utf8');
const schema = buildSchema(gql);

const root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic
};

app.use('/graphql', expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true
}));

export default app;
