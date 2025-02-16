import { useContext, useEffect } from "react"
import Cards from "../components/Cards"
import Categories from "../components/Categories"
import ProductContext from "../context/ProductContext"

const Home = () => {
 
  return (
    <div>
      <Categories />
      <Cards/>
    </div>
  )
}

export default Home