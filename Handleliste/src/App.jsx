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
            title: "Gå på butikken",
            content: "Handle spagetthi og dorull"
        },
        {
            id: 1,
            title: "Skrive emnerapport",
            content: "Gå igjennom statestikk og skrive rapport basert på tall og tilbakemeldinger"
        },
                {
            id: 2,
            title: "Kjøpe kattemat",
            content: "Kjøpe nytt slankefor..."
        }
    ]

  const [shopList, setShopList] = useState(shopItems)
  const [shop, setShop] = useState()
  
  
  return (
    <main>
      <h1>Shoplist app</h1>
        {/* 
        Her bruker vi Todos-komponentet.
        Dette komponentet har ansvar for å hente inn og vise
        alle enkeltstående todo-elementer, slik at App-komponentet
        holder seg enkel og oversiktlig.
      */}
      <AddShop shop={shop} setShop={setShop} setShopList={setShopList}/>
      <Shops shopItems={shopList} setShopList={setShopList}/>
    </main>
  )
}

export default App
