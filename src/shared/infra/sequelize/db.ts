import { Sequelize } from 'sequelize';

export const db = new Sequelize('database', 'docker', 'bruno', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});
