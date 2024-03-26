import Item from './Item'

function TodoList() {
    return (
        <section>
            <Item title={'Learn React'} description={'First step is to learn React'} />
            <Item title={'Learn Node.js'} description={'Also I need to learn some backend'} />
            <Item title={'Learn SQL'} description={'Database for saving info'} />
        </section>
    )
}

export default TodoList