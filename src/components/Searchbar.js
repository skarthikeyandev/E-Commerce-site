import React from 'react'
import { ProductConsumer } from '../context';
import EmptyCart from '../components/Cart/EmptyCart';

export default function Searchbar() {
    
    return (
        <div className="text-capitalize text-center container p-3">
            <ProductConsumer>
                {value => (<div className="form-outline mb-4">
                    <input type="search" className="form-control" id="datatable-search-input" placeholder='search..' onChange={(e) => value.handleChange(e.target.value)} />
                </div>)}
            </ProductConsumer>
            <ProductConsumer>
                {(value) => {
                    const { products } = value;
                    if(products.length === 0) {
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </div>
    )
}
