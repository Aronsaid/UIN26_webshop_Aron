import Shop from "./Shop";
export default function Shops({shopItems, setShopList}){

    

    return (
        <section className="flex-r">
            <h2>Shoplist</h2>
            {shopItems.map((item) => <Shop key={item.id} title={item.title} content={item.content} id={item.id} setShopList={setShopList}/>)}
        </section>
    )
}