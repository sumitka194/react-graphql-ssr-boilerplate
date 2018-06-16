import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './server/graphql';

const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());

app.use('/api', graphqlHTTP(req => ({
  context: {
    req,
  },
  schema,
  graphiql: process.env.NODE_ENV === 'development',
})));

app.listen(4000, () => {
  console.log('Server is listening at port 4000');
});
