import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
const dbUrl = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : 'postgres://docker:bruno@localhost:5432/database';

export const db = new Sequelize(dbUrl, {
  dialect: 'postgres',
});
