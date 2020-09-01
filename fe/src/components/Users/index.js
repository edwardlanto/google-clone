import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Users = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.post('/users/add', data)
			.then((res) => {
				console.log('res', res);
			})
			.catch((err) => {
				console.log(`err ${err}`);
			});
	};

	return (
		<div className="user">
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<input name="username" defaultValue="test" ref={register} />

				{/* include validation with required or other standard HTML validation rules */}
				{/* <input name="exampleRequired" ref={register({ required: true })} /> */}
				{/* errors will return when field validation fails  */}
				{/* {errors.exampleRequired && <span>This field is required</span>} */}

				<input type="submit" />
			</form>
		</div>
	);
};

export default Users;
