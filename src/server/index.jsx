import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/routes';

// Renders Static HTML
const renderInitialPage = html => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <title>React GraphQL Isomorphic Boilerplate</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="./app.bundle.js"></script>
  </body>
</html>
`;

export default (context, url) =>
  renderInitialPage(renderToString(<StaticRouter context={context} location={url}><Routes /></StaticRouter>)); // eslint-disable-line max-len
