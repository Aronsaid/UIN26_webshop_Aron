import Todo from "./Todo";
export default function Todos(){

    const todoItems = [
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

    return (
        <section>
            <h2>Todos</h2>
            <Todo />
        </section>
    )
}