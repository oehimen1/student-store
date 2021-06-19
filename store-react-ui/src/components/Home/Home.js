
import { Link } from "react-router-dom"
import "./Home.css"

 function Home({ products = [] }) {
     console.log(products)
    return(
        <div className="home">
            <div className="storeTitleBox">
                <div className="storeTitle">
                    <h5>
                        <div>
                        [CANDY STORE...]
                        </div>
                    </h5>
                </div>
            </div>
            <div className ="feedArea">
            <div className="feed">
                {products.map(product=>(
                   <Link className = "product-link" key={product.id} to={`/store/${product.id}`}>
                    <div className = "product-info"  >
                        <div className="product-img">
                        <img  className="retail-img"src={product.image} alt="product"/>
                        </div>
                        <div className = "product-details">
                            <div className="product-name">{product.name}</div>
                            <div className="description-container">
                                <div className="product-description-text">{product.description}</div>
                            </div>
                            <div className="product-price">${product.price}</div>
                        </div>
                        
                    </div>
                    </Link>
                ))}
            </div>
            </div>
            
        </div>
    )
}

export default Home;