import {Form, Formik} from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css';
import {MyCheckBox, MySelect, MyTextInput} from '../components';

export const FormikAbstraction  = () => {

  return (
    <div>

        <h1>Formik Abstraction</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (values) => {
                console.log( values )
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('El Campos requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('El Campos requerido'),
                    email: Yup.string()
                        .email('Email no tiene un formatodo Valido')
                        .required('El Campos requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                        .notOneOf([ 'it-junior' ], 'Esta opcion no es permitida')
                        .required('Requerido')
                })
            }
        >
        {

            formik => (
                <Form>
                    <MyTextInput label="first Name" name='firstName' placeholder='Andres...'/>

                    <MyTextInput label="last Name" name='lastName' placeholder='Leon...'/>
                    
                    <MyTextInput label="email" name='email' type='email' placeholder='email@asdasd...'/>
                    
                    <MySelect label='job Type' name='jobType'>
                        <option value="developer">Developer</option>
                        <option value="desing">Designer</option>
                        <option value="senior">it-senior</option>
                        <option value="it-junior">it-junior</option>
                    </MySelect>
                    
                    <MyCheckBox label='Terminos y condiciones' name='terms' />

                    <button type='submit'> Submit </button>
                </Form>
            )

        }

        </Formik>


    </div>
  )
}
