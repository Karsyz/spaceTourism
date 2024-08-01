import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Destination = () => {
  const [formData, setFormData] = useState({ id: 0, title: "", body: "" });
  const navigate = useNavigate()

  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:3115/api/writeToFile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response
      // console.log(result)
      
      if(result.ok) {
        navigate('/')
      }else {
        navigate('/technology')
      }
  
  
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-std-c3 text-xl">Input</h1>
        
        <div className="flex flex-col gap-1">
          <label htmlFor="id" className="text-sm text-std-c3">ID</label>
          <input
            id="id"
            className="rounded-md"
            type="text"
            value={formData.id}
            onChange={(evt) => setFormData(prev => ({...prev, id: evt.target.value}) )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm text-std-c3">Title</label>
          <input
            id="title"
            className="rounded-md"
            type="text"
            value={formData.title}
            onChange={(evt) => setFormData(prev => ({...prev, title: evt.target.value}) )}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="id" className="text-sm text-std-c3">Body</label>
          <textarea
            id="body"
            className="rounded-md"
            type="text"
            value={formData.body}
            onChange={(evt) => setFormData(prev => ({...prev, body: evt.target.value}) )}
          />
        </div>

        <button className="bg-green-500 px-3 py-2 rounded-md" onClick={sendData}>
          Add to JSON
        </button>
      </div>
    </div>
  );
};

export default Destination;
