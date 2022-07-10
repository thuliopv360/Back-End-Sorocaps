// (async () => {
//     database.default;
//     await database.sync();
// }) ();

import database from "./db";
import Product from "./model/product";
(async () => {
  //   const Produto = require("./produto");

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();
