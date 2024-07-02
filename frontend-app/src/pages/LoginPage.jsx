import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signin, errors: signinErrors } = useAuth();
    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div>
            <div>Login</div>
            <form className='form-users' onSubmit={onSubmit}>
                <input
                    type='email'
                    {...register('email', { required: true })}
                    placeholder='Email'
                />
                {errors.email && <p>Email is Required</p>}
                <input
                    type='password'
                    {...register('password', { required: true })}
                    placeholder='Password'
                />
                {errors.password && <p>Password is Required</p>}
                {signinErrors.map((error, i) => (
                    <div key={i}>{error}</div>
                ))}
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
