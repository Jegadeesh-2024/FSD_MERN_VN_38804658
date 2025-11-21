import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [form,setForm]= useState({
    name:"",
    age:"",
    phone:"",
    email:""
  })
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const navigate =useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/card')
  }
  return (
    <div>
      <h1>form</h1>
      <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input 
            type="number" 
            className="form-control"
            name="age"
            value={form.age}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input 
            type="text" 
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
  Submit
</button>


      </form>
    </div>
  )
}

export default Form
