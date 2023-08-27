import { useState } from "react";
import './CheckoutForm.css'

const CheckoutForm = ({onConfirm}) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,phone,email
        }

        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="label">
                    Nombre
                    <input type="text" className="Input" value={name} onChange={({target}) => setName(target.value)}/>
                </label>
                <label className="label">
                    Telefono
                    <input type="number" className="Input" value={phone} onChange={({target}) => setPhone(target.value)}/>
                </label>
                <label className="label">
                    Email
                    <input type="email" className="Input" value={email} onChange={({target}) => setEmail(target.value)}/>
                </label>
                <div className="Label">
                    <button type="submit" className="CreateOrder">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;