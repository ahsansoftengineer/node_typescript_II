import path from 'path';

import dotenv from 'dotenv';

import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import RoutingRegisteration from './routes/index.routes';

const app = express();
// CONFIGURATIONS
dotenv.config()
// process.env.SERVER_PORT

app.use(expressEjsLayouts)

app.set('layout','layouts/layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

RoutingRegisteration(app);


app.listen(process.env.SERVER_PORT, () => {
  console.log(`App is Running on , http://localhost:${process.env.SERVER_PORT}`)
})
