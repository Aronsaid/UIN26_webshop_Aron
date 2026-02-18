import './App.css'
import './style/todocard.scss'
import './style/layout.scss'
import { useState } from 'react'
import Shoplists from './components/Shoplists'

function App() {
  const [ShopList, setShopList] = useState(ListItems)
  const [Shop, setShop] = useState()

  return (
    <main>
     <h1> ShopList App</h1>
     <AddShopList ShopList={Shoplist} setShopList={setTodo} setShopList={setShopList}/>
     <Shoplists ShoplistItems={ShopLists} setShopList={setShopList}/>
    </main>
  )
}

export default App
