import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item
    return (
        <div className='flex space-x-5'>
            <img style={{width: '118px', borderRadius: '0 200px 200px 200px'}} src={image} alt="recipe-image" />
            <div>
                <h4 className='text-xl uppercase m-2'>{name} ------------------</h4>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>
                ${price}
            </p>
        </div>
    );
};

export default MenuItem;