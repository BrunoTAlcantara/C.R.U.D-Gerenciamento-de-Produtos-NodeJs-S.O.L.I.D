import 'reflect-metadata';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

import { app } from './express';
import '../../container';

dotenv.config();
const dbUrl = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : 'postgres://docker:bruno@localhost:5432/database';

const db = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(process.env.PORT || 3333, async () => {
  await db.sync();
  console.log(
    'Express server listening on port %d in %s mode',
    app.settings.env
  );
});
