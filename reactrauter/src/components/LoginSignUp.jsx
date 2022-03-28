import axios from "axios";
import { useForm } from "react-hook-form";

export const LoginSignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    
    let users={
      name: data.name,
      email: data.email,
      password : data.password,
      username : data.username,
      description : data.description
    }
   axios.post("https://masai-api-mocker.herokuapp.com/auth/register",users).then((res)=>{
     console.log(res)
   }).catch((err)=>{console.log(err)})
    
  

  // axios.get("https://masai-api-mocker.herokuapp.com/auth/login").then((res)=>{
  //   console.log(res.data)
  // }).catch((err)=>{
  //   console.log(err)
  // })
  
  }
  return (
    <div className="loginSignUp">
      <form className="signUp border border-dark m-3 p-2 " onSubmit={handleSubmit(onSubmit)}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
         
          {...register("name", { required: true, maxLength: 20 })} 
          required
        />
        <br />
        <label>email</label>
        <input
          type="email"
          className="email"
         
          {...register("email", { required: true, maxLength: 20 })} 
          required
        />
        <br />
        <label>password</label>
        <input
          type="password"
          className="password"
         
          {...register("password", { required: true, maxLength: 20 })} 
          required
        />
        <br />
        <label>username</label>
        <input
          type="text"
          className="username"
         
          {...register("username", { required: true, maxLength: 20 })} 
          required
        />
        <br />
        <label>mobile</label>
        <input
          type="number"
          className="mobile"
         
          {...register("mobile",{ required: true})} 
          required
        />
        <br />
        <label>description</label>
        <input
          type="text"
          className="description"
         
          {...register("description",{ required: true})} 
          required
        />
        <br />
      
        
        
        
  
        <input type="submit" className="submitSignUpForm btn btn-warning" />
      </form>
      <form className="login border border-dark m-3 p-2" onSubmit={(e) => { }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
         
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
         
          required
        />
        <br />
        <input type="submit" className="submitLoginForm btn btn-primary" />
      </form>
    </div>
  );
};