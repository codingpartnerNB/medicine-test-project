import React, {useContext} from "react";
import CartContext from "../../../store/cart-context";
import Button from "../../UI/Button";


const MedItem = (props)=>{
    const price = `Rs ${props.price.toFixed(2)}`;
    const amount = props.amount;
    const cartCtx = useContext(CartContext);
    const cartHandler = ()=>{
        cartCtx.addCartItem({
            id: props.id,
            name: props.name,
            amount: +amount,
            price: props.price
        })
    }
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.desc}</td>
            <td>{price}</td>
            <td>{props.amount}</td>
            <td>{<Button onClick={cartHandler}>Add To Cart</Button>}</td>
        </tr>
    );
}

export default MedItem;