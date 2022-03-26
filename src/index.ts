import path from 'path';

import dotenv from 'dotenv';

import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import RoutingRegisteration from './routes/Index.routes';

const app = express();
// CONFIGURATIONS
dotenv.config()
// process.env.SERVER_PORT

app.use(expressEjsLayouts)

app.set('layout','layouts/layout');
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

RoutingRegisteration(app);


app.listen(process.env.SERVER_PORT, () => {
  console.log(`App is Running on , http://localhost:${process.env.SERVER_PORT}`)
})
