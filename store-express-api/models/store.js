const { storage } = require("../data/Storage");

class Store{

    static async listProducts(){
        // const products = 
        // return products;
        return storage.get("products").value();
    }

    static async fetchProductById(productId) {
        // fetch a single transaction
        const product = storage
          .get("products")
          .find({ id: Number(productId) })
          .value()
        return product
      }
    
}

module.exports = Store;