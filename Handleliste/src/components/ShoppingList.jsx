export default function Shop({title, amount, id, setShopList}){
        
    const handleAmountChange = (e) => {
        const newAmount = Number(e.target.value)

        //Denne delen er googlet, lignende mange deler av det som var ukjent, har blitt googlet, ikke brukt AI.
        setShopList(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, amount: newAmount }
                    : item
            )
        )
    }

    return (
        <article className="shoplist-card">
            <input type="checkbox" defaultChecked={title === "Brød"} ></input>
            <h3>{title}</h3>
            <input type="number" value={amount} min="1" onChange={handleAmountChange} />
        </article>
    )
}