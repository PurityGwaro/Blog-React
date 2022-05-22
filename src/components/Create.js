import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [ title,setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [author, setAuthor ] = useState('yoshi');
    const [loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author };

        setLoading(true);
        
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)//turning blog into a JSON string
        }).then(()=>{
            console.log('new blog added');
            setLoading(false);
            //navigate(-1); - takes the user back to the previous page
            //redirecting the user back to the homepage
            //navigate.push('/'); - this didn't work
            navigate('/');
        })
        }, 2000)
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
               <label>Blog title:</label>
               <input
                  type="text"
                  required
                  value={ title }
                  onChange={e => setTitle(e.target.value)}
               /> 
                <label>Blog body:</label>
                <textarea 
                required
                value={ body }
                onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={ author }
                onChange={ e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding Blog ...</button>}
            </form>
        </div>
     );
}
 
export default Create;
 