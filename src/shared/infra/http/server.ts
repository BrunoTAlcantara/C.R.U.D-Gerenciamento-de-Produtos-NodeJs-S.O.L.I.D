import 'reflect-metadata';
import dotenv from 'dotenv';

import { db } from '../sequelize/db';
import { app } from './express';
import '../../container';

dotenv.config();

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const port = process.env.PORT || 3333;

app.listen(port, async () => {
  await db.sync();
  console.log('Conectado a porta:', port);
});
