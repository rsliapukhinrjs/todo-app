import Item from './Item'

function TodoList({ todoData }) {
    return (
        <section className='grid grid-cols-2 gap-4 p-4'>
            {todoData.map(item => <Item key={item.id} title={item.title} description={item.description} />)}
        </section>
    )
}

export default TodoList