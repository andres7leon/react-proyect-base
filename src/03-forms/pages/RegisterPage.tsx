import '../styles/styles.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const {
        onChanges, formData, resetForm, isValidEmail , 
        email, name, password1, password2} = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ (e) => onSubmit(e)}>
            <input 
                type="text" 
                placeholder="Name"
                value={name}
                name='name'
                onChange={ onChanges }
                className={`${ name.trim().length <= 0 && 'has-error' } `}
            />
            { 
                name.trim().length <= 0 &&  
                <span>Este campo es necesario</span>
            }
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                name='email'
                onChange={ onChanges }
                className={`${ !isValidEmail(email) && 'has-error' } `}
            />
            { 
                !isValidEmail(email) &&  
                <span>Este campo es necesario</span>
            }
            <input 
                type="password" 
                placeholder="Password"
                value={password1}
                name='password1'
                onChange={ onChanges }
            />
            { 
                password1.trim().length <= 0 &&  
                <span>Este campo es necesario</span>
            }
            { 
                password1.trim().length < 5 &&  
                <span>La pass debe tener mas de 5 caracteres</span>
            }
            <input 
                type="password" 
                placeholder="Password repeat"
                value={password2}
                name='password2'
                onChange={ onChanges }
            />
            { 
                password2.trim().length <= 0 &&  
                <span>Este campo es necesario</span>
            }
            { 
                password2.trim().length < 5 &&  
                <span>La pass debe tener mas de 5 caracteres</span>
            }
            { 
                password2 !== password1 &&  
                <span>La pass no es igual</span>
            }
            <button type="submit"> Create user </button>
            <button type="button" onClick={resetForm}> Reset Form </button>
        </form>
    </div>
  )
}
