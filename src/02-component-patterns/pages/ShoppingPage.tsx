import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductButton } from '../components/ProductsButtons';

import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => (
    <div>
        <h1>ShopingPage</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>
            
            <ProductCard product={product}
                className="bg-dark color"
            >
                <ProductImage style={{padding: '20px'}}/>
                <ProductTitle title='esste es un titulssso' />
                <ProductButton />
            </ProductCard>
            
        </div>
    </div>
)
