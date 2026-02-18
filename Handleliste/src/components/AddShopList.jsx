import "../style/form.scss"
export default function AddShoplist({Shoplist, setShoplist, setShopList}){

    const handleChange = (e)=>{
        const {name, value} = e.target

        setShoplist((prev) => ({...prev,[name]: value}))


        console.log({[name]: value})
        console.log("shoplist state:",Shoplist)

    }

    const handleClick = (e)=>{ 
        e.preventDefault()
        const uniqId = crypto.randomUUID
        setShopList((prev) => ([...prev, {id:uniqId,...Shoplist}]))
        console.log(Shoplist)
    }

    return (
        <form className="shoplistform" onSubmit={handleClick}>
            <label htmlFor="shoplisttitle">Shoplist tittel</label>
            <input name="ammount" type="string" id="shoplisttitle" placeholder="1" onChange={handleChange}></input>
            <textarea name="content" id="todocontent" onChange={handleChange}></textarea>
            <button>Make todo</button>
        </form>
    )
}