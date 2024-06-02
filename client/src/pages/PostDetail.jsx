import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog100.jpg'
const PostDetail = ()=> {
    return (
       <section className='post-detail'>
        <div className='container post-detail_container'>
            <div className='post-detail_header'>
                <PostAuthor/>
                <div className='post-detail_buttons'>
                    <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
                    <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
                </div>
            </div>
            <h1>This is the post title</h1>
            <div className='post-detail_thumbnail'> 
            <img src={Thumbnail} alt=''/>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nesciunt aperiam distinctio optio, odit excepturi perspiciatis veritatis ex id temporibus velit ad minus illum corporis, quasi, repellat neque. Iusto commodi doloribus corporis quod molestiae corrupti perferendis incidunt qui tenetur reiciendis, exercitationem quam cupiditate numquam itaque quis aliquid ad amet vel asperiores ut, nam error odit. Recusandae suscipit a natus necessitatibus numquam totam, odio eveniet, consequuntur corrupti nemo ipsam quia modi commodi magnam obcaecati tenetur mollitia esse. Sunt maiores voluptatum molestias eum animi eligendi quod, eius magni ab velit dignissimos neque itaque, illo quibusdam cum unde nobis ut vero consectetur provident, impedit possimus omnis at? Optio a magni molestiae quod quos eveniet rem tempora architecto deserunt laboriosam totam, quas asperiores dolore, ratione voluptas vel dolorem? Assumenda, odit corrupti nihil ea esse ex tempora eius a mollitia veritatis iste id. Molestiae vel perferendis blanditiis maiores iure, modi dicta eum facere veniam autem placeat aliquam accusamus exercitationem repellat consectetur ab vitae asperiores unde quia aut. Autem distinctio porro ab perspiciatis. Dicta officia deleniti eum, impedit libero quas velit corrupti sint saepe deserunt et aliquid dolores explicabo, blanditiis, eligendi harum laboriosam neque quae cumque quibusdam ipsam. Iure, neque. Ratione saepe delectus molestias atque ab, exercitationem molestiae magni vero. Ipsa eligendi odit, voluptatibus necessitatibus quaerat cumque ut qui quis eum enim consectetur sapiente id nisi voluptate, in tenetur dicta, corrupti doloremque tempora excepturi? Animi accusantium non quod facilis commodi expedita rerum numquam amet a, ex quia id velit itaque deserunt illum atque fugiat odit sed distinctio obcaecati alias dolorem laboriosam ipsum. Inventore, illum, sequi reprehenderit ratione mollitia quidem provident recusandae quae magni consectetur adipisci. Id modi deleniti corrupti libero ratione provident, laborum suscipit eligendi vitae molestias at incidunt repellat quia perspiciatis? Quia ex, vel ut amet ad dicta natus quis in, aperiam totam modi accusantium.
            </p>
        </div>
       </section>
    )
}
export default PostDetail