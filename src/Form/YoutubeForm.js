import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const YoutubeForm = () => {
  const form = useForm({
    defaultValues:async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
        const data = await response.json();
        return {
            username:data.username,
            email:data.email,
            channel:'knocknok',
        }
    }
  });
  const { register, handleSubmit ,control ,formState } = form;
  const{errors}=formState
  const onSubmit = (data) => {
    console.log("Form is submitted",data);
  };

  return (
    <div>
      <form  noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="border-2  border-black rounded-md flex flex-col justify-evenly gap-2 py-1 items-start w-1/2 px-2 bg-gray-300 "
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          {...register('username',{
            required:{
                value:'true',
                message:'Username is required'
            }
          })}
         
          className="border-2 border-black pl-1"
        />
        <p className="text-red-600">{errors.username?.message}</p>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name=""
          id="email"
          {...register("email" ,{
            pattern:{
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:'Invalid Email format'
            }
          })}
          className="border-2 border-black pl-1"
        />
         <p className="text-red-600">{errors.email?.message}</p>

        <label htmlFor="channel">Channel:</label>
        <input
          type="text"
          name="channel"
          id="channel"
          {...register("channel",{
            required:'channel name is required'
          })}
          className="border-2 border-black pl-1"
        />
         <p className="text-red-600">{errors.channel?.message}</p>

        <button className="border-2 border-black mb-3 px-2 py-1 rounded-xl bg-blue-200">
          Submit
        </button>
         <DevTool control={control}/>
      </form>
    </div>
  );
};

export default YoutubeForm;
