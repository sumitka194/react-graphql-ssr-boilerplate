import React from 'react';
import { renderToString } from 'react-dom/server';
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
    <script src="../dist/app.bundle.js"></script>
  </body>
</html>
`;

export default renderInitialPage(renderToString(<Routes />));
