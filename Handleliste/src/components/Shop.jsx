export default function Shop({title, amount, id, setShopList}){
    const handleClick = ()=>{
        setShopList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return (
        <article className="shoplist-card">
            <input type="checkbox"></input>
            <h3>{title}</h3>
            <input type="number" value={amount}/>
        </article>
    )
}