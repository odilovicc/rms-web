import { InputText } from "primereact/inputtext"
import './customInput.css'
export default function CustomInput(){
    return(
        <div>
            <InputText pt={{
                root: {
                    className: 'customInput'
                }
            }}  />
        </div>
    )
}