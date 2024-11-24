import { useState, useEffect } from 'react'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppMain from './components/AppMain.jsx'
import AppOffCanvas from './components/AppOffCanvas.jsx'
import animes from './data/anime.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const api_server = 'http://localhost:3000/img/'
function App() {


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
    <>
      <AppHeader />
      <main className="bg-black">

        <AppMain />
        <AppOffCanvas />
        <div className="container bg-warning">
          <div className='row row-cols-1 row-cols-ms-2 row-cols-lg-3 g-3'>
            {characters.data ? characters.data.map((character, index) => (
              <div className='col' key={index}>
                <div className="card p-3 m-3">
                  <h3 className='mb-3'>{character.title}</h3>
                  <p>{character.slug}</p>
                  <p>{character.content}</p>
                  <img src={api_server + character.image} alt={character.name} />
                  <p>{character.tags}</p>
                  <div className="d-grid gap-2 d-md-block">
                    <button ttype="button" className="btn btn-danger" data-slug={character.slug} onClick={() => handleTrashpostClick(character.slug)}>Trash</button>
                  </div>
                </div>

              </div>
            )) :
              <p>No result yet</p>
            }
          </div>
        </div >
      </main >
      <AppFooter />
    </>
  )
}

export default App
