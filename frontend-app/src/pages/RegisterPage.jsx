import { useForm } from 'react-hook-form';

 const RegisterPage  = () => {

    // It generates and manage the Usestate for us
    const {register, handleSubmit} = useForm();
  return (
    <div>
        <h1>Register</h1>
        <form className='form-users' onSubmit={handleSubmit((values) => {
            console.log(values);
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