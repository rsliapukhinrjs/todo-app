function Preview({ formInfo }) {
    return (
        formInfo.title || formInfo.description ? <aside className="flex flex-col gap-4">
            <h2 className="text-xl">Preview:</h2>
            <div>
                <h3>{formInfo.title}</h3>
                <p>{formInfo.description}</p>
            </div>
        </aside> : null
    )
}

export default Preview