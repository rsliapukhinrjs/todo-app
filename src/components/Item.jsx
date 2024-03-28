function Item({ title, description }) {
    return (
        <article className="border-2 p-4 rounded">
            <h2 className="text-2xl">{title}</h2>
            <p>{description}</p>
        </article>
    )
}

export default Item