import path from 'path';

import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'

const app = express();

app.use(expressEjsLayouts)

app.set('layout','layouts/layout');
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

const PORT = 3000

app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.listen(PORT, () => {
  console.log('App is Running on ', PORT)
})
