import { useState, useEffect } from "react"

const initialFormData = {
    title: '',
    slug: '',
    content: '',
    image: '',
    tags: '',
    avaible: ''
}
export default function AppOffCanvas() {

    const [formData, setFormData] = useState(initialFormData)
    const [characters, setCharacters] = useState({})


    function fetchData(url = 'http://localhost:3000/posts') {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data);
                setCharacters(data)

            })
    }
    useEffect(fetchData, [])


    function addPost(e) {
        e.preventDefault()
        console.log('Form sent', formData);


        const newPost = {
            title: formData.title,
            slug: formData.slug,
            content: formData.content,
            image: formData.image,
            tags: formData.tags,
            avaible: formData.avaible
        }


        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPost),
        })
            .then((res) => res.json())
            .then(data => {
                console.log('Post added', data);


                setFormData(initialFormData)

                fetchData()



            })
    }


    function handleFormField(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }
    return (
        <div id="off-canvas-form" popover='true' className='p-3'>
            <div className="d-flex justify-content-between align-items-center gap-5">
                <h3>Add a new anime</h3>
                <button className="btn btn-primary " type="button" popovertarget='off-canvas-form' popovertargetaction='hide'>
                    <i className="bi bi-x"></i> Close
                </button>
            </div>
            <p>Description to anime</p>
            <form onSubmit={addPost}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        aria-describedby="titlehelper"
                        placeholder="Title"
                        required
                        value={formData.title}
                        onChange={handleFormField}
                    />
                    <small id="namehelper" className="form-text text-muted">Type Title of Post</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="slug" className="form-label">Slug</label>
                    <input
                        type="text"
                        className="form-control"
                        name="slug"
                        id="slug"
                        aria-describedby="slughelper"
                        placeholder="Slug"
                        value={formData.slug}
                        onChange={handleFormField}
                    />
                    <small id="slughelper" className="form-text text-muted">Type Slug of Post</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        id="image"
                        aria-describedby="imagehelper"
                        placeholder="ciambellone.jpeg"
                        value={formData.image}
                        onChange={handleFormField}
                    />
                    <small id="imagehelper" className="form-text text-muted">Type image path of Torta</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        name="content"
                        id="content"
                        aria-describedby="contenthelper"
                        placeholder="Content"
                        value={formData.content}
                        onChange={handleFormField}
                    />
                    <small id="contenthelper" className="form-text text-muted">Type Content Anime</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="stags" className="form-label">Torte</label>
                    <select
                        className="form-select form-select-lg"
                        name="tags"
                        id="tags"
                        value={formData.tags}
                        onChange={handleFormField}
                    >
                        <option>Select a tags</option>
                        <option defaultValue="">Antipasti</option>
                        <option defaultValue="">Ricette vegetariane</option>
                        <option defaultValue="">Ricette al forno</option>
                    </select>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={formData.avaible} onChange={handleFormField} name='avaible' id="avaible" />
                    <label className="form-check-label" htmlFor="">Avaible</label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}