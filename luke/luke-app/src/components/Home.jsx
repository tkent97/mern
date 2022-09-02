import react from "react";
import { useState } from "react"
import { useHistory } from "react-router-dom"

const Home = () => {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${category}/${id}`);
    };


    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    search for
                    <select name="category" id="" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select</option>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                    ID: <input type="number" id="" onChange={(e) => setId(e.target.value)}></input>
                    <button>search</button>
                </p>
            </form>
        </div>
    );
};
export default Home;