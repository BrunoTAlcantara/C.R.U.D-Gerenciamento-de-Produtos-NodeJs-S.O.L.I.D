import 'reflect-metadata';
import { db } from '../sequelize/db';
import { app } from './express';
import '../../container';

const port = process.env.PORT || 3333;

app.listen(port, async () => {
  await db.sync();
  console.log('App running on 3333');
});
