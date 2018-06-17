import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackDevConfig from '../webpack.dev.babel';
import schema from './server/graphql';

const app = express();

// check the mode of the server
const isDev = process.env.NODE_ENV === 'development';
// const isProd = process.env.NODE_ENV === 'production';

// Webpack configuration
if (isDev) {
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
  }));
}

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
