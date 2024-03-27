function Preview({ formInfo }) {
    return (
        <section>
            <h2>New Todo's title is: {formInfo.title}</h2>
            <p>New description is: {formInfo.description}</p>
        </section>
    )
}

export default Preview