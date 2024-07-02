import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
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
                {errors.email && (
                    <p className='errors-form'>Email is Required</p>
                )}
                <input
                    type='password'
                    {...register('password', { required: true })}
                    placeholder='Password'
                />
                {errors.password && (
                    <p className='errors-form'>Password is Required</p>
                )}
                {signinErrors.map((error, i) => (
                    <div key={i} className='errors-form'>
                        {error}
                    </div>
                ))}
                <button type='submit'>Login</button>
            </form>

            <p>
                Do not have an account ? <Link to='/register'>Signin</Link>
            </p>
        </div>
    );
}

export default LoginPage;
