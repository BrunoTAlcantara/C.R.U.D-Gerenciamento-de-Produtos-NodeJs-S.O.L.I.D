import 'reflect-metadata';
import dotenv from 'dotenv';

import { db } from '../sequelize/db';
import { app } from './express';
import '../../container';

dotenv.config();
const port = process.env.PORT || 3333;

app.listen(port, async () => {
  await db.sync();
  console.log('App running on 3333');
});
