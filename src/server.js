import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import { matchPath } from 'react-router-dom';
import { allRoutes } from './client/routes';
import page from './server/index';
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('*', (req, res) => {
  const match = allRoutes.reduce((acc, route) =>
    matchPath(req.url, { path: route, exact: true }) || acc, null);

  if (!match) {
    return res.status(404).send('Page not found');
  }
  const context = {};
  return res.status(200).send(page(context, req.url));
});

app.use('/api', graphqlHTTP(req => ({
  context: {
    req,
  },
  schema,
  graphiql: process.env.NODE_ENV === 'development',
})));

app.listen(4000, () => {
  console.log('Server is listening at port 4000'); // eslint-disable-line no-console
});
