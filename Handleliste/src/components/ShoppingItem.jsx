import Shop from "./ShoppingList";
export default function Shops({shopItems, setShopList}){


    return (
        <section className="flex-r">
            {shopItems.map((item) => <Shop key={item.id} title={item.title} amount={item.amount} id={item.id} setShopList={setShopList}/>)}
        </section>
    )
}