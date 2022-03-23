import {useFormik, Field, ErrorMessage, Form, Formik} from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikComponents  = () => {

  return (
    <div>

        <h1>FormikComponents</h1>

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
                    <label htmlFor="firstName"> First Name </label>
                    <Field name='firstName' type="text" />
                    <ErrorMessage name='firstName' component="span"/>
                    
                    <label htmlFor="lastName"> Last Name </label>
                    <Field name='lastName' type="text" />
                    <ErrorMessage name='lastName' component="span"/>
                    
                    <label htmlFor="email"> First Name </label>
                    <Field name='email' type="email" />
                    <ErrorMessage name='email' component="span"/>
                    
                    <label htmlFor="jobType"> Job Type </label>
                    <Field name='jobType' as="select"> 
                        <option value="developer">Developer</option>
                        <option value="desing">Designer</option>
                        <option value="senior">it-senior</option>
                        <option value="it-junior">it-junior</option>
                    </Field>
                    <ErrorMessage name='jobType' component="span"/>
                    
                    <label> <Field name='terms' type="checkbox" /> terms and conditions </label>
                    <ErrorMessage name='terms' component="span"/>

                    <button type='submit'> Submit </button>
                </Form>
            )

        }

        </Formik>


    </div>
  )
}
