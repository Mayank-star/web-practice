import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
      
    const {register,handleSubmit}=useForm({
        defaultValues:{
            firstname:'',
            lastname:'',
            category:'',
            checkbox:[],
            radio:''
        }
    })

  return (
    <div>
        <form onSubmit={handleSubmit(console.log)}>
            <input type='text' {...register('firstname',{ required:true})} placeholder='first name' className='border-2 border-black'/><br/><br/>
            <input type='text' {...register('lastname',{ required:true})} placeholder='last name' className='border-2 border-black'/><br/>
            <select {...register('category')}>
                 <option value=''>select category</option>
                 <option value='A'>category A</option>
                 <option value='B'> category B</option>
            </select><br/>

            <input {...register('checkbox')} value='A' type='checkbox' />{" "}
            <input {...register('checkbox')} value='B' type='checkbox' />{"  "}
            <input {...register('checkbox')} value='C' type='checkbox' /><br/>

            <input {...register('radio')} value='A' type='radio' />{" "}
            <input {...register('radio')} value='B' type='radio' />{" "}
            <input {...register('radio')} value='C' type='radio' /><br/>

            <input type='submit'/>
        </form>
      
    </div>
  )
}

export default Register
