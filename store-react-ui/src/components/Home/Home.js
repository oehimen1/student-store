
import { Link } from "react-router-dom"
import "./Home.css"

 function Home({ products = [] }) {
     console.log(products)
    return(
        <div className="home">
            <div className="storeTitleBox">
                <img className="lollipop1" src="https://media1.thehungryjpeg.com/thumbs2/ori_3843894_3mbdkdbqjods7hrdi3k0ed3j0ij91w99xvrj7t98_christmas-lollipop-vector-illustrations.jpg"  alt="lollipop"/>
                <div className="storeTitle">
                    <h5>
                        <div>
                        [CANDY STORE...]
                        </div>
                    </h5>
                </div>
                <img className="lollipop2" src="https://media1.thehungryjpeg.com/thumbs2/ori_3843894_3mbdkdbqjods7hrdi3k0ed3j0ij91w99xvrj7t98_christmas-lollipop-vector-illustrations.jpg"  alt="lollipop2"/>
            </div>
            <div className ="feedArea">
            <div className="feed">
                {products.map(product=>(
                   <Link className = "product-link" key={product.id} to={`/store/${product.id}`}>
                     <div className = "product-info">
                     <div className="product-img">
                        <div className = "product-details"></div>
                         <img  className="retail-img"src={product.image} alt="product"/>
                            <div className="product-name">~{product.name}~</div>
                            {/* <div className="description-container">
                                <div className="product-description-text">{product.description}</div>
                            </div> */}
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