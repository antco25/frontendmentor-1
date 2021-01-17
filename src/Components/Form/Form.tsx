import { ChangeEvent, useState } from 'react'
import './Form.scss';
import Card from '../Card/Card'
import Input from '../Input/Input'
import { FormEvent } from 'react';
import { isBlank, isEmail } from '../Utils/utils'

//TODO: Make this more reusable 

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false)

    function handleSubmit(e: FormEvent) {
        //Validate data
        const firstNameError = isBlank(firstName)
        const lastNameError = isBlank(lastName)
        const emailError = !isEmail(email)
        const passwordError = isBlank(password)

        if (!(firstNameError || lastNameError || emailError || passwordError))
            alert("Success")
        else {
            e.preventDefault();
            setFirstNameError(firstNameError)
            setLastNameError(lastNameError)
            setEmailError(emailError)
            setPasswordError(passwordError)
        }
    }

    function handleOnChange(e: ChangeEvent<HTMLInputElement>, id: number) {
        const value = e.target.value

        switch (id) {
            case 0:
                setFirstName(value)
                setFirstNameError(false)
                break;
            case 1:
                setLastName(value)
                setLastNameError(false)
                break;
            case 2:
                setEmail(value)
                setEmailError(false)
                break;
            case 3:
                setPassword(value)
                setPasswordError(false)
                break;
            default:
                return
        }
    }

    return (
        <div className="form">
            <Card>
                <form onSubmit={handleSubmit}>
                    <Input id={0} type="text" value="First Name" isError={firstNameError} errorMessage="First Name cannot be empty" onChange={handleOnChange} />
                    <Input id={1} type="text" value="Last Name" isError={lastNameError} errorMessage="Last Name cannot be empty" onChange={handleOnChange} />
                    <Input id={2} type="text" value="Email Address" isError={emailError} errorMessage="Looks like this is not an email" onChange={handleOnChange} />
                    <Input id={3} type="password" value="Password" isError={passwordError} errorMessage="Password cannot be empty" onChange={handleOnChange} />
                    <Input type="submit" value="Claim your free trial" />
                    <footer>
                        <p>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
                    </footer>
                </form>
            </Card>
        </div>
    )
}

export default Form;
