import MedicineContextProvider from '../../store/MedicineContextProvider';
import FormInput from './Form/FormInput';
import MedicineItems from './Items/MedicineItems';

const Medicines = ()=>{
    return <MedicineContextProvider>
        <FormInput />
        <MedicineItems/>
    </MedicineContextProvider>
}

export default Medicines;