import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    return (
        <div>
            <form className="container" onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
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
