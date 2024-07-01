import { useForm } from 'react-hook-form';
import { registerResquest } from '../api/auth';

 const RegisterPage  = () => {

    // It generates and manage the Usestate for us
    const {register, handleSubmit} = useForm();
  return (
    <div>
        <h1>Register</h1>
        <form className='form-users' onSubmit={handleSubmit(async (values) => {
            console.log(values);
             const res = await registerResquest(values);
             console.log(res);
        })}>
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