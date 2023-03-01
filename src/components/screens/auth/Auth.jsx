import { useForm } from 'react-hook-form'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<Layout heading='Sign in' bgImage='/images/auth-bg.png'>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='email'
						placeholder='Enter email'
						{...register('email', { required: 'Email is required' })}
					/>
					<div style={{ color: 'red' }}></div>
					<Button>Lets go</Button>
				</form>
			</div>
		</Layout>
	)
}

export default Auth
