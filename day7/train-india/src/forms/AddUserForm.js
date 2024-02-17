import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '',salary:'',department:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		const { salary, value1 } = event.target
		const { department, value2 } = event.target

		setUser({ ...user, [name]: value ,[salary]:value1,[department]:value2})
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.salary || !user.department) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Salary</label>
			<input type="text" name="salary" value={user.salary} onChange={handleInputChange} />
			<label>Department</label>
			<input type="text" name="department" value={user.department} onChange={handleInputChange} />
		
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
