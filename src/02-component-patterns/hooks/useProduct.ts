import { useEffect, useState, useRef } from 'react';
import { Product, onChangesArgs } from '../interfaces/interfaces';
export interface useProductArgs {
    product: Product;
    onChanges?: ( args: onChangesArgs ) => void;
    value?: number
}

export const useProduct = ( {onChanges, product, value = 0}: useProductArgs ) => {
  
    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChanges );

    const increaseBy = ( value: number ) => {

        if ( isControlled.current ) {
            return onChanges!({count: value, product});
        }

        const newValue = Math.max(counter + value, 0)
        setCounter( prev => Math.max( prev + value, 0))
        onChanges && onChanges( {count: newValue, product});
    }

    useEffect(() => {
      setCounter(value);
    }, [value])
    

    return {counter, increaseBy};

}
