import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

 const RegisterPage  = () => {

    // It generates and manage the Usestate for us
    const {register, handleSubmit} = useForm();
    const {signup, user} = useAuth();
    console.log(user);

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
         
        })

  return (
    <div>
        <h1>Register</h1>
        <form className='form-users' onSubmit={onSubmit}>
            <label htmlFor="Usename"></label>
            <input type="text" {...register("username", {required:true})} placeholder='Username'/>
            <label htmlFor="Email"></label>
            <input type="email" {...register("email", {required: true})} placeholder='Email'/>
            <label htmlFor=""></label>
            <input type="password" {...register("password", { required: true})} placeholder='Password'/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage;