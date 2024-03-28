function TodoForm({ formInfo, onTitleChange, onDescriptionChange, onFormSubmit }) {
    return (
        <form onSubmit={onFormSubmit} className="flex flex-col gap-4 self-center min-w-96">
            <h3 className="text-xl">Add new todo</h3>
            <input className="px-4 py-2 rounded text-teal-900" type="text" placeholder="Title" value={formInfo.title} onChange={onTitleChange} />
            <textarea className="px-4 py-2 rounded text-teal-900" placeholder="Description" value={formInfo.description} onChange={onDescriptionChange}></textarea>
            <button className="bg-white hover:bg-teal-100 self-center px-4 py-2 rounded text-teal-900" type="submit">Add</button>
        </form>
    )
}

export default TodoForm