import React from "react";

const MedicineContext = React.createContext({
    items: [],
    addItem: (item)=>{}
});

export default MedicineContext;