import React, { useState } from 'react'
import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog10.jpg'
import Thumbnail3 from '../images/blog100.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id:'1',
        thumbnail: Thumbnail1,
        category: 'art',
        title: 'Art of my granpa',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
        authorID: 3
    },
    {
        id:'2',
        thumbnail: Thumbnail2,
        category: 'education',
        title: 'this is a tile about education',
        description: 's un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).',
        authorID: 1
    },
    {
        id:'3',
        thumbnail: Thumbnail3,
        category: 'science',
        title: 'this is a tile about dgdfhjhfjhfhhhsdh',
        description: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.',
        authorID: 1
    },
   
]
const Posts = () =>{
    const[posts, setPosts] = useState(DUMMY_POSTS)
    return(
        <section className='posts'>
           <div className='container posts_container'>
           {
                posts.map(({id, thumbnail, category, title, description, authorID}) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} 
                description ={description} authorID={authorID} />)
            }
           </div>
        </section>
    )
}
export default Posts