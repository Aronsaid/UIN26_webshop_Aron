import "../style/form.scss"
export default function AddToDo({todo, setTodo, setTodoList}){

    const handleChange = (e)=>{
        const {name, value} = e.target

        setTodo((prev) => ({...prev,[name]: value}))


        console.log({[name]: value})
        console.log("Todo state:",todo)

    }

    const handleClick = ()=>{ 
        e.preventDefault()
        const uniqId = Math.floor(Math.random() * (999 - 0 + 1) + 0)
        setTodoList((prev) => ([...prev, {id:uniqId,...todo}]))
        console.log(todo)
    }

    return (
        <form className="todoform" onSubmit={handleClick}>
            <label htmlFor="todotitle">Todo tittel</label>
            <input name="title" type="text" id="todotitle" placeholder="Dra på butikken" onChange={handleChange}></input>
            <label htmlFor="todocontent">Beskrivelse:</label>
            <textarea name="content" id="todocontent" onChange={handleChange}></textarea>
            <button>Make todo</button>
        </form>
    )
}