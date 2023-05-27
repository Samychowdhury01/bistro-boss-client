import React from 'react';
import FoodCard from '../../Shared/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-5'>
        {
           items.map(item => <FoodCard key={item?._id} item={item}/>)
         }
        </div>
    );
};

export default OrderTab;