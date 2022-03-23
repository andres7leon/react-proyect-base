import formJson from '../data/custom-form.json';
import {Formik, Form} from 'formik'
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components';
import * as Yup from 'yup';

console.log(formJson);

export const DynamicForm = () => {

    const initialValues: {[key: string]: any} = {}
    const requiredFields: {[key: string]: any} = {}

    const handleSubmit = (value: any) => {
        console.log(value)
    }

    formJson.map( (input:any) => {
        
        // for (const input of formJson) {
            initialValues[ input.name ] = input.value;
    
            if ( input.validations ) {
    
                let schema = Yup.string();
        
                for ( const rule of input.validations ) {
                    if ( rule.type === 'required' ) {
                        schema = schema.required('Este campo es reqerido');
                    }
                    if ( rule.type === 'minLength' ) {
                        schema = schema.min(rule.value || 5, 'Minimo 5 caracteres');
                    }
                    if ( rule.type === 'email' ) {
                        schema = schema.email('Porfavor ingrese un correo valido');
                    }
                }

                requiredFields[input.name] = schema;
            }
        // }
    })

    const validationSchema = Yup.object({...requiredFields});


  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik initialValues={initialValues} onSubmit={ handleSubmit } validationSchema={validationSchema}>
            {(formik) => (
                <Form>
                    {
                        formJson.map( ({type, name, placeholder, label, options}: any) => {

                            if ( type === 'input' || type === 'password' || type === 'email') {

                                return  <MyTextInput 
                                    key={name}
                                    type={(type as any)} 
                                    name={name} 
                                    label={label} 
                                    placeholder={placeholder}/>

                            } else if ( type === 'select') {

                                return (
                                    <MySelect key={name} name={name} label={label}>
                                        <option value="">Seleccione una opcion</option>
                                        {
                                            options?.map( (opt: any) => (
                                                <option key={opt.id} value={opt.id}>{opt.name}</option>
                                            ))
                                        }
                                    </MySelect>
                                )

                            }

                            return <span>El tipo de dato no es soportado</span>
                            
                        })
                    }
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
