
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
            <div className="product-info">
              <div className="product-body">
                  <div className="product-image-container">
                     <img className="product-img"src={product.image} alt="product"/>
                  </div>
                  <div className = "product-info-container">
                    <div>{product?.name}</div> 
                    <div className="product-description-container">
                        <div>{product.description}</div> 
                    </div>
                    <div>{product.price}</div> 
                  </div>
              </div>
              {renderProductContent()}
            </div>
            
        </div>

    )


}