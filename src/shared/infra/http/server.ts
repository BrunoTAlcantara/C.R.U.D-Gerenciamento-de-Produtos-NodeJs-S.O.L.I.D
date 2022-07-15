import 'reflect-metadata';
import dotenv from 'dotenv';

import { db } from '../sequelize/db';
import { app } from './express';
import '../../container';

dotenv.config();

app.listen(process.env.PORT || 3333, async () => {
  await db.sync();
  console.log(
    'Express server listening on port %d in %s mode',
    app.settings.env
  );
});
