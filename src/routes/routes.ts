import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';
import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from '../03-forms/pages';

type JXSComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JXSComponent> | JXSComponent;
    name: string
}

const LazyLayout = lazy(/* webpackChunkName: "Lazypageee1" */ () => import('../01-lazyload/layout/LazyLayaout') )
// const LazyRegsiter = lazy(/* webpackChunkName: "Lazypageee1" */ () => import('../03-forms/pages') )
// const Lazy2 = lazy( () => import('../01-lazyload/pages/LazyPage2') )
// const Lazy3 = lazy( () => import('../01-lazyload/pages/LazyPage3') )


export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy load'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: NoLazy,
        name: 'No Lazy'
    },
    {
        to: '/registro',
        path: 'registro',
        Component: RegisterPage,
        name: 'Registro'
    },
    {
        to: '/registro-formik',
        path: 'registro-formik',
        Component: FormikBasicPage,
        name: 'Registro Formik'
    },
    {
        to: '/registro-formik-yup',
        path: 'registro-formik-yup',
        Component: FormikYupPage,
        name: 'Registro Formik yup'
    },
    {
        to: '/registro-components',
        path: 'registro-components',
        Component: FormikComponents,
        name: 'Registro Formik Components'
    },
    {
        to: '/registro-abtraction',
        path: 'registro-abtraction',
        Component: FormikAbstraction,
        name: 'Registro abtraction'
    },
    {
        to: '/formik-register',
        path: 'formik-register',
        Component: RegisterFormikPage,
        name: 'Registro Formik'
    },
    {
        to: '/dynamic-form',
        path: 'dynamic-form',
        Component: DynamicForm,
        name: 'Formulario dinamico'
    }
]