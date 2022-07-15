import { DataTypes } from 'sequelize';

import { db } from '../../../../../shared/infra/sequelize/db';
import { ClientsModel } from '../../../../Clients/infra/sequelize/models/ClientsModel';
import { ProductModel } from '../../../../Products/infra/sequelize/models/ProductModel';

export const SalesModel = db.define('sales', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },

  valor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quant: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

SalesModel.belongsTo(ClientsModel, {
  constraints: true,
  foreignKey: 'clients',
});
SalesModel.belongsTo(ProductModel, {
  constraints: true,
  foreignKey: 'products',
});
