import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home({ livros, setLivros }) {

    const handleDelete = (id) => {
        const novosLivros = livros.filter(livro => livro.id !== id);
        setLivros(novosLivros);
    };

    return (
        <div>
            <h1>Lista de Livros</h1>
            <Link to="/create"><button type="button" className='btnEditar'>📜Adicionar novo livro</button></Link>
            <ul>
                {livros.map(livro => (
                    <li key={livro.id}>

                        <Link to={`/view/${livro.id}`}>
                            {livro.titulo} - {livro.autor} ({livro.ano})
                        </Link>
                        {" | "}
                        <Link to={`/edit/${livro.id}`}><button type="button" className='btnEditar'>🤩Editar</button></Link>
                        {" | "}
                        <Link onClick={() => handleDelete(livro.id)}><button type="button" className='btnExcluir'>🚮Excluir</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home