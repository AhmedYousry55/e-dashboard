import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const addProduct =()=>{
        console.warn(name,price,category);
    }
    return (
        <div className='product'>
            <h1>Add product</h1>
            <input type="text" placeholder='Enter product name' className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder='Enter product price' className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            <input type="text" placeholder='Enter product category' className="inputBox" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            <button onClick={addProduct} className="appButton">Add product</button>
        </div>
    )

}
export default AddProduct;