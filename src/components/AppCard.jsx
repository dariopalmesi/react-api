const api_server = 'http://localhost:3000/img/'


export default function AppCard({ character, handleTrashpostClick }) {
    return (
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
    )
}

