import { DataTypes } from 'sequelize';

import { db } from '../../../../../shared/infra/sequelize/db';

export const LogModel = db.define('logs', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  log: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
