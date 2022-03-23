import { Form, Formik } from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    const initialValues = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }

    const validateShema = {
        name: Yup.string()
            .min(2, 'El nombre debe ser de minimo 3 caracteres')
            .max(15, 'El nombre debe ser de maximo 15 caracteres')
            .required('es requerido este campo'),
        email: Yup.string()
            .email('Correo invalido')
            .required('El campo es requerido'),
        password1: Yup.string()
            .min(6, 'Minimo de 6 caracteres')
            .required('Campo requerido'),
        password2: Yup.string()
            .oneOf([Yup.ref('password1')], ' las constrasenas no son iguales')
            .required('Requerido')
    }

    const handleSubmit = (values: any) => {
        console.log(values)
    }

  return (
    <div>
        <h1>Register Page</h1>

        <Formik initialValues={initialValues} onSubmit={ handleSubmit } validationSchema={Yup.object(validateShema)}>
            {
                ({handleReset}) => (
                    <Form>
                        <MyTextInput label="Nombre" name='name' placeholder='Andres...'/>
                        <MyTextInput label="Correo" name='email' placeholder='corre@test.com'/>
                        <MyTextInput label="Clave" name='password1' type='password'/>
                        <MyTextInput label="Confirmar Clave" name='password2' type='password'/>
                        <button type='submit'> Submit </button>
                        <button type="button" onClick={handleReset}> Reset Form </button>
                    </Form>
                )
            }
        </Formik>

    </div>
  )
}
