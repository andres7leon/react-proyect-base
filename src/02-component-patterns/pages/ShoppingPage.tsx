import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButton } from '../components/ProductsButtons';

import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

const product1 = {
    id: '1',
    title: 'Coffe Mug card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffe Mug card',
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {

        setShoppingCart( oldShoppingCart => {

            const productInCart:ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0};

            if( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // if ( count === 0 ) {

            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;

            //     return rest;
            // } 
            // console.log('oldShoppingCart', oldShoppingCart)
            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, count }
            // } 
        })
    }

    return (<div>
        <h1>ShopingPage</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            
        {

            products.map( product => (

                <ProductCard product={product}
                    className="bg-dark color"
                    onChanges={ onProductCountChange }
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductImage style={{padding: '20px'}}/>
                    <ProductTitle title='esste es un titulssso' />
                    <ProductButton />
                </ProductCard>

            ))

        }   
        </div>

        <div className="shopping-cart">

        {   

            
            Object.entries( shoppingCart ).map( ([key, product]) => (
                <ProductCard 
                    key={key}
                    product={product}
                    className="color"
                    style={{width: '100px', overflow: 'hidden'}}
                    value={ product.count }
                    onChanges={ onProductCountChange }
                    >
                    <ProductImage />
                    <ProductButton />
                </ProductCard>
            ))
        }

        </div>

    </div>)
}
