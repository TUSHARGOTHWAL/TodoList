import React from 'react'
import axios from 'axios'
import { useState } from 'react'




function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3000/create', {task: task})
       .then(result => console.log(result))
       .catch(err => console.log(err))
    }

  return (
    <div>
      <input type="text" placeholder='Enter your Todo' onChange={(e)=> setTask(e.target.value)}/>
      <button id='addbtn' onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default Create;   