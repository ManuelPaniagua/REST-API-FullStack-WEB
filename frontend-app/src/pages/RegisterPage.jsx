import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
    // It generates and manage the Usestate for us
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, user, isAuthenticated, errors: RegisterErrors } = useAuth();
    console.log(user);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/task');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div>
            <h1>Register</h1>
            {RegisterErrors.map((error, i) => (
                <div key={i}>{error}</div>
            ))}
            <form className='form-users' onSubmit={onSubmit}>
                <input
                    type='text'
                    {...register('username', { required: true })}
                    placeholder='Username'
                />
                {errors.username && (
                    <p className='errors-form'>Username is Required</p>
                )}
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
                <button type='submit'>Register</button>
            </form>
            <p>
                Already have an account ? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
