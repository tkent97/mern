import React, { useState } from 'react';


const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);



    const handleValidations = (e) => {
        const name = e.target.value

        setFirstName(name)
        if (name.length <= 1) {
            setFirstNameError("first name must have more than 2 charachters")
        }
        if (name.length >= 2) {
            setFirstNameError('')
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //          "Thank you for submitting the form!";//State variables
    //     } else {
    //          "Welcome, please submit the form";
    //     }
    // };

    return (
        <div>
            <form className="container" onSubmit={createUser}>
                <h3>{hasBeenSubmitted ? "Thank you for submitting the form!" : "Welcome , please submit the form"}</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleValidations} value={firstName} />
                    {
                        firstNameError ?
                            <p style={{ color: 'red' }}>{firstNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h2>your info</h2>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </div>
    );
};


export default UserForm;
