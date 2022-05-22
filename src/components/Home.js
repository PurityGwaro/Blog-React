import BlogList from './BlogList';
import useFetch from '../useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className='home'>

            {error && <div>{ error }</div>}
            {isPending && <div>Loading ...</div>}
            { blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            {/* if the left side of the logical equation above is true then the right side is executed otherwise it won't be executed */}

        </div>
     );
}
 
export default Home;