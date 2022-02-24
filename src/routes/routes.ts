import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JXSComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JXSComponent> | JXSComponent;
    name: string
}

const LazyLayout = lazy(/* webpackChunkName: "Lazypageee1" */ () => import('../01-lazyload/layout/LazyLayaout') )
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
    }
]