import { ReactElement } from "react";



export interface ProductCardProps {
    children?: ReactElement | ReactElement[] ; 
    product: Product;
    className?: string;
    style?: React.CSSProperties;
    onChanges?: ( args: onChangesArgs ) => void;
    value?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product
}

export interface onChangesArgs {
    product: Product;
    count: number
}