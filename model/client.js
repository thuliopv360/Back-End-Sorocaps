import Sequelize from "sequelize";
import database from "./db";

const Client = database.define("client", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  razaoSocial: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  district: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Client