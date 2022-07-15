import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
const dbUrl = process.env.DATABASE_URL;

export const db = new Sequelize(dbUrl, {
  dialect: 'postgres',
});
