// import React from 'react';
// import useForm from 'react-hook-form';
// import './SignUpStyle.css'

// // export default function SignUp() {
// //   const { register, handleSubmit, errors } = useForm();
// //   const onSubmit = data => console.log(data);
// //   console.log(errors);
  
// //   return (
   
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //        <h1>Register</h1>

// //       <input type="text" placeholder="Username" name="Username" ref={register({required: true, maxLength: 80})} />
// //       <input type="password" placeholder="Password " name="Password " ref={register({required: true, min: 8, maxLength: 100})} />
// //       <input type="text" placeholder="Full Name" name="Full Name" ref={register({required: true, maxLength: 100})} />
// //       <input type="text" placeholder="City" name="City" ref={register({required: true, maxLength: 100})} />
// //       <input type="email" placeholder="Email" name="Email" ref={register({required: true, pattern: />^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i})} />

// //       <input type="submit" />
// //     </form> 
// //   );
// // }

// export default function SignUp() {
//   const { register, handleSubmit, watch, errors } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//   }; // your form submit function which will invoke after successful validation

//   console.log(watch("example")); // you can watch individual input by pass the name of the input

//   return (
  
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>Register</h1>
//       <label>Username</label>
//       <input name="username" type='text' placeholder='Username' ref={register} />
//       {errors.Username && 'Username is required'}
//       <label>Password</label>
//       <input
//         name="password"
//         type='password'
//         placeholder='Password'
//         ref={register({required: true, min: 8, maxLength: 8})}
//       />
//       {errors.Password && <p>This field is required</p>}

//       <label>Full Name</label>
//       <input type='text' placeholder="Full Name" name="Full Name" ref={register({required: true, maxLength: 100})}/>

//       <label>City</label>
//       <input name='city' ref={register}/>
//       <label>Email</label>
//       <input name='email'ref={register}/>
//       <input name="submit" type="submit"/>
     
//     </form>
//   );
// }
