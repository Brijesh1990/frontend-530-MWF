import React from 'react'
import { FaUserCheck,FaBackspace } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HeaderApp from './HeaderApp'
export default function AddTask() {
return (
<>
<div className='lg:w-1/2 md:w-1/2 sm:w-full p-15 mx-auto mt-2'>
<HeaderApp />
<div className='lg:w-full md:w-full sm:w-full p-0 mx-auto mt-0'>
<div className='bg-white p-5'>
<p className='text-3xl font-extrabold float-end text-blue-400'><Link to="/dashboard"><FaBackspace /></Link></p>   
<p className='text-center text-6xl font-extrabold'><FaUserCheck /></p>   
<h1 className='text-4xl text-black font-extrabold'>Add New Task</h1>
<form>

<div className="mt-2 p-2">
<input
type="text"
name="title"
placeholder="Task Title *"
className="w-full border rounded-2xl p-3"
required
/>
</div>

<div className="mt-2 p-2">
<textarea
name="description"
placeholder="Task Description *"
className="w-full border rounded-2xl p-3"
rows="4"
required
></textarea>
</div>

<div className="mt-2 p-2">
<select
name="employee"
className="w-full border rounded-2xl p-3"
required
>
<option value="">Assign Employee</option>
<option value="John">John</option>
<option value="Rahul">Rahul</option>
<option value="Amit">Amit</option>
<option value="Priya">Priya</option>
</select>
</div>

<div className="mt-2 p-2">
<select
name="priority"
className="w-full border rounded-2xl p-3"
required
>
<option value="">Select Priority</option>
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="Low">Low</option>
</select>
</div>

<div className="mt-2 p-2">
<input
type="date"
name="dueDate"
className="w-full border rounded-2xl p-3"
required
/>
</div>

<div className="mt-2 p-2">
<select
name="status"
className="w-full border rounded-2xl p-3"
>
<option value="Pending">Pending</option>
<option value="In Progress">In Progress</option>
<option value="Completed">Completed</option>
</select>
</div>

<div className="mt-4 p-2">
<button
type="submit"
className="bg-yellow-400 p-3 rounded-2xl w-full text-black font-bold"
>
Add Task
</button>
</div>
</form>
</div>
</div>
</div>
</>
)
}
