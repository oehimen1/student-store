import {useState, useEffect} from "react"
import {BrowserRouter,Routes,Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
 import Product from "../Product/Product"
import './App.css';



export default function App() {
  
  const[products, setProducts] = useState([]);
  useEffect(()=>{

    const fetchProducts = async()=>{
      try{
        const res= await axios.get("http://localhost:3000/store")
        //console.log(res)
        const data = res.data
        if(data){
          setProducts(data.products)
        }
      }catch(err){
        console.log(err)
      }
    }
  
    fetchProducts()
  
  },[])

  //console.log(products)
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={ <Home products={products}/> }/>
         <Route path="/store/:productId" element={<Product />}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}


