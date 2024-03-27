function TodoForm({ formInfo, onTitleChange, onDescriptionChange }) {
    return (
        <form>
            <h3>Add new todo</h3>
            <input type="text" placeholder="Title" value={formInfo.title} onChange={onTitleChange} />
            <textarea placeholder="Description" value={formInfo.description} onChange={onDescriptionChange}></textarea>
        </form>
    )
}

export default TodoForm