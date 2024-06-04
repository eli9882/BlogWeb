import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/Gong.jpeg'
import Avatar3 from '../images/Toro.jpeg'

const authorsData = [
{id:1, avatar: Avatar1, name: 'Sofia Loria', posts: 3 },
{id:2, avatar: Avatar2, name: 'Gong', posts: 5 },
{id:3, avatar: Avatar3, name: 'Toro', posts: 1 }
]

const Author = ()=> {
    const [author, setAuthor] = useState(authorsData)
    return (
        <section className='authors'>
            {author.length > 0 ? <div className='container authors_container'>
                {
                    author.map(({id, avatar, name, posts}) =>{
                        return <Link to={`/posts/users/${id}`} className='author'>
                            <div className='author_avatar'>
                                <img src={avatar} alt={`Image of ${name}`}/>
                            </div>
                            <div className='author_info'>
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className='center'>No users/ author found.</h2>}
        </section>
    )
}
export default Author