import { useEffect, useState, useRef } from 'react';
import { InitialValue, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValue;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    console.log(initialValues)
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );

    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {
        
        let newValue = Math.max( counter + value, 0 )

        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount );
        }

        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }
    
    useEffect(() => {
        
        if( !isMounted.current ) return;
        
        setCounter( value );
        
    }, [ value ])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    

    return {
        counter,
        increaseBy,
        reset,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    }

}