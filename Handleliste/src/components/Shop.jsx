export default function Shop({title, content, id, setShopList}){
    const handleClick = ()=>{
        setShopList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return (
        <article className="shop-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleClick}>Done</button>
        </article>
    )
}