import "../style/form.scss"
export default function AddShop({shop, setShop, setShopList}){

    const handleChange = (e)=>{
        const {name, value} = e.target

        setShopList(prev =>
  prev.map(item =>
    item.id === id
      ? { ...item, amount: newAmount }
      : item
  )
)


        console.log({[name]: value})
        console.log("Shop state:",shop)
        

    }

    const handleClick = (e)=>{ 
        e.preventDefault()
        const uniqId = crypto.randomUUID()
        setShopList((prev) => ([...prev, {id:uniqId,...shop}]))
        console.log(shop)
    }

    return (
        <form className="shopform" onSubmit={handleClick}>
            <label htmlFor="shoptitle">Vare</label>
            <input name="title" type="text" placeholder="Melk" onChange={handleChange} required></input>
            <label htmlFor="shopamount">Antall</label>
            <input name="amount" type="number" placeholder="2" onChange={handleChange} required></input>
            <button>Add to shoplist</button>
        </form>
    )
}