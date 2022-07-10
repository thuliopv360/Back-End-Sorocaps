// import Sequelize from "sequelize";

// const sequelize = new Sequelize("crud", "root", "thulio", {
//   dialect: "mysql",
//   host: "localhost",
//   port: 3306,
// });

// export default sequelize;

// feito com mysql
import Sequelize from 'sequelize';
const sequelize = new Sequelize('postgres://postgres@localhost:5432/crud', {dialect: 'postgres'});
 
export default sequelize;