function TodoForm({ formInfo, onTitleChange, onDescriptionChange, onFormSubmit }) {
    return (
        <form onSubmit={onFormSubmit}>
            <h3>Add new todo</h3>
            <input type="text" placeholder="Title" value={formInfo.title} onChange={onTitleChange} />
            <textarea placeholder="Description" value={formInfo.description} onChange={onDescriptionChange}></textarea>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm