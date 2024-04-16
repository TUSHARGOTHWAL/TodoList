import React, { useState } from 'react';
import Create from './create';
import { useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [todos, setTodos] = useState([]);  // Moved inside the component
    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))


    }, []);

    return (
        <>
            <Create />
            {
                todos.length === 0 ? <div> No Todos</div> :
                todos.map((todo, index) => (
                    <div key={index}> 
                        {todo.task}
                    </div>
                ))
            } 
        </>
    );
}

export default Home;
