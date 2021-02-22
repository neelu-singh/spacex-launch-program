import path from 'path';
import fs from 'fs';
import url from 'url';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
var express = require("express");

import App from './src/App';
import configureStore from './src/redux/configureStore'


const app = express();

app.get('/', (req, res) => {

    const queryString = url.parse(req.url, true).search;
    const store = configureStore();
    const renderedApp = ReactDOMServer.renderToString(
            <Provider store={store}>
                <App location={{ search: queryString }} />
            </Provider>
    );

    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log("Error", err);
            return res.status(500).send("Something went wrong",err);
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`)
        )
    })
})

app.use(express.static('./build'));

app.listen(process.env.PORT || 5001, function () {
    console.log("Assessment Author app listening on port 5001!");
});
  