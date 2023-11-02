import { useState } from "react";
import MedicineContext from "./medicine-context";


const MedicineContextProvider = (props)=>{
    const [items, setItems] = useState([]);
    const addMedicineItemHandler = (item)=>{
        setItems(prevItems=>[...prevItems, item]);
    }
    const medicines = {
        items: items,
        addItem: addMedicineItemHandler
    }
    return(
        <MedicineContext.Provider value={medicines}>
            {props.children}
        </MedicineContext.Provider>
    );
}

export default MedicineContextProvider;