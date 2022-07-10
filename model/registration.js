import Sequelize from "sequelize";
import database from "./db";

const Registration = database.define("registration", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  measurementUnit: {
    //unidade de medida
    type: Sequelize.STRING,
    allowNull: false,
  },
  purchaseValue: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  salePrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});


export default Registration; 