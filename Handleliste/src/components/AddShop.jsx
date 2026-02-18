import "../style/form.scss"
export default function AddShop({shop, setShop, setShopList}){

    const handleChange = (e)=>{
        const {name, value} = e.target

        setShop((prev) => ({...prev,[name]: value}))


        console.log({[name]: value})
        console.log("Shop state:",Shop)

    }

    const handleClick = (e)=>{ 
        e.preventDefault()
        const uniqId = crypto.randomUUID
        setShopList((prev) => ([...prev, {id:uniqId,...shop}]))
        console.log(shop)
    }

    return (
        <form className="shopform" onSubmit={handleClick}>
            <label htmlFor="shoptitle">Todo tittel</label>
            <input name="title" type="text" id="shoptitle" placeholder="Melk" onChange={handleChange}></input>
            <label htmlFor="shopcontent">Beskrivelse:</label>
            <textarea name="content" id="shopcontent" onChange={handleChange}></textarea>
            <button>Add to shoplist</button>
        </form>
    )
}