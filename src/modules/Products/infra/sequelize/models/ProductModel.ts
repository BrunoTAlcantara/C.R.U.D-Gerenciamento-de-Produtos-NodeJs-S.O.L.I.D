import { DataTypes } from 'sequelize';

import { db } from '../../../../../shared/infra/sequelize/db';

export const ProductModel = db.define('product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unMed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
