import {useFormik} from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikYupPage  = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('El Campos requerido'),
            lastName: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('El Campos requerido'),
            email: Yup.string()
                .email('Email no tiene un formatodo Valido')
                .required('El Campos requerido')
        })
    });

  return (
    <div>

        <h1>Formik Yup tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName"> First Name </label>
            <input type="text" {...getFieldProps('firstName')} />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            <label htmlFor="firstName"> Last Name </label>
            <input type="text" {...getFieldProps('lastName')}/>
            { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
            <label htmlFor="firstName"> Email </label>
            <input type="email" {...getFieldProps('email')}/>
            { touched.email && errors.email && <span>{errors.email}</span>}
            <button type='submit'> Submit </button>
        </form>

    </div>
  )
}
