const {storage} = require("../data/Storage");

class Store{

    static async listProducts(){
        const products = storage.get("products").value();
        return products;
    }
}

module.exports = Store;