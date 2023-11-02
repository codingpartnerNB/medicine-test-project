import { useContext, useState } from "react";
import Button from "../../UI/Button";
import MedicineContext from "../../../store/medicine-context";
import CartContext from "../../../store/cart-context";


const FormInput = ()=>{
    const medCtx = useContext(MedicineContext);
    const cartCtx = useContext(CartContext);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');

    const nameChangeHandler = (event)=>{
        setName(event.target.value);
    }
    const descChangeHandler = (event)=>{
        setDesc(event.target.value);
    }
    const priceChangeHandler = (event)=>{
        setPrice(event.target.value);
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const med = {
            id: Math.floor(Math.random()*20),
            name: name,
            desc: desc,
            price: +price,
            amount: 1
        }
        medCtx.addItem(med);
        cartCtx.addCartItem(med);
        setName('');
        setDesc('');
        setPrice('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Medicine Name</label>
                <input type="text" id="name" value={name} onChange={nameChangeHandler} />
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc" value={desc} onChange={descChangeHandler} />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" value={price} onChange={priceChangeHandler} />
            </div>
            <div>
                <Button type="submit">Add Product</Button>
            </div>
        </form>
    );
}

export default FormInput;