import AppJumbotron from "./AppJumbotron";
import AppOffCanvas from "./AppOffCanvas";
import AppCard from "./AppCard";
import { useState } from "react";
import { useEffect } from "react";


const initialFormData = {
    title: '',
    slug: '',
    content: '',
    image: '',
    tags: '',
    avaible: ''
}
export default function AppMain() {


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


    function fetchData(url = 'http://localhost:3000/posts') {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setCharacters(data)

            })
    }
    useEffect(fetchData, [])

    function handleTrashpostClick(slug) {
        console.log('Deleting post with slug:', characters);

        fetch(`http://localhost:3000/posts/${slug}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => {
                console.log('Post deleted', data);
                const newPosts = characters.data.filter(character => character.slug != slug)
                console.log(newPosts);
                setCharacters({ ...characters, data: newPosts });

            })



    }





    return (
        <div>
            <AppJumbotron />
            <AppOffCanvas formData={formData} handleFormField={handleFormField} addPost={addPost} />

            <div className="container bg-warning">
                <div className='row row-cols-1 row-cols-ms-2 row-cols-lg-3 g-3'>
                    {characters.data ? characters.data.map((character, index) => (
                        <div className='col' key={index}>
                            <AppCard character={character} handleTrashpostClick={handleTrashpostClick} />
                        </div>
                    )) :
                        <p>No result yet</p>
                    }
                </div>
            </div >
        </div>

    );
}
