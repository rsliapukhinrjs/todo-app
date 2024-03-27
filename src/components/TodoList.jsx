import Item from './Item'

function TodoList({ todoData }) {
    return (
        <section>
            {todoData.map(item => <Item key={item.id} title={item.title} description={item.description} />)}
        </section>
    )
}

export default TodoList