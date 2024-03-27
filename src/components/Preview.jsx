function Preview({ formInfo }) {
    return (
        formInfo.title || formInfo.description ? <section>
            <h2>Preview title: {formInfo.title}</h2>
            <p>Preview description: {formInfo.description}</p>
        </section> : null
    )
}

export default Preview