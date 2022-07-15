import { DataTypes } from 'sequelize';

import { db } from '../../../../../shared/infra/sequelize/db';

export const ClientsModel = db.define('clients', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  social: {
    type: DataTypes.STRING,
  },
  cnpj: {
    type: DataTypes.INTEGER,
  },
  ender: {
    type: DataTypes.STRING,
  },
});
