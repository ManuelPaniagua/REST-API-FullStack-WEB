import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => signin(data);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/task');
        }
    }, [isAuthenticated]);
    return (
        <div>
            <h1>Login</h1>
            <form className='form-users' onSubmit={handleSubmit(onSubmit)}>
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
