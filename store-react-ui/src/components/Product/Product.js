
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from"axios"
import "./Prodcut.css"

export default function ProductDetail(){

    const {productId} = useParams();
    const [product,setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchProduct = async () => {
          setIsLoading(true)
    
          try {
            const res = await axios.get(`http://localhost:3000/store/${productId}`)
            if (res?.data?.product) {
              setProduct(res.data.product)
            }
          } catch (err) {
            setError(err)
          } finally {
            setIsLoading(false)
          }
        }
    
        fetchProduct()
      }, [productId])

      const renderProductContent = () => {
        if (isLoading) return <h1>Loading...</h1>
        if (error) return <p className="description">Product Not Found</p>
      }


    return(
        <div className="product">
            <div className="info">
              <div className="body">
                  <div className="image-container">
                     <img className="img"src={product.image} alt="product"/>
                  </div>
                  <div className = "info-container">
                    <div className="name">~{product?.name}~</div> 
                    <div className="description-container">
                        <div className="description">{product.description}</div> 
                    </div>
                    <div className="price">${product.price}</div> 
                  </div>
              </div>
              {renderProductContent()}
            </div>
            
        </div>

    )


}