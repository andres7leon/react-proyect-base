import styles from "../styles/styles.module.css"
import { useProduct } from '../hooks/useProduct';
import { createContext } from "react";
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButton } from './ProductsButtons';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

   const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{counter, increaseBy, product}}>
        <div className={ styles.productCard }>
            { children }
        </div>
    </Provider>
  )
}


ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButton;