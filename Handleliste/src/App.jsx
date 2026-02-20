import './App.css'
import './style/shoplistcard.scss'
import './style/layout.scss'
import Shops from './components/Shops'
import AddShop from './components/AddShop'
import { useState } from 'react'


function App() {

  const shopItems = [
        {
            id: 0,
            title: "Brød",
            amount: 1
        },
        {
            id: 1,
            title: "Shampo",
            amount: 2
        },
    ]

  const [shopList, setShopList] = useState(shopItems)
  const [shop, setShop] = useState({
    amount: ""
  })

  
  
  return (
    <main>
      <h1>Handleliste</h1>
      <AddShop shop={shop} setShop={setShop} setShopList={setShopList}/>
      <Shops shopItems={shopList} setShopList={setShopList}/>
    </main>
  )
}

export default App
