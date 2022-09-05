import React, { useState } from 'react';


const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("")
    // const [person, setPerson] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            first,
            last,
            email,
            password
        }
        console.log("Welcome", newUser);
        setFirst("");
        setLast("")
        setEmail("")
        setPassword("")
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
        const emailTxt = e.target.value;
        if (emailTxt.length < 3) {
            setEmailErr("need more chars")
        } else {
            setEmail("")
        }
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={(e) => setFirst(e.target.value)} /><br />
                </div>

                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={(e) => setLast(e.target.value)} /><br />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => changeEmail(e)} /><br />
                    {
                        emailErr ? <span style={{ color: "red" }}>email err</span> : <span>&nbsp;</span>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div><br />
                <input type="submit" value="Create User" />
            </form>
            <p>
                First Name:{first}
            </p><br />
            <p>
                Last name:{last}
            </p><br />
            <p>
                Email:{email}
            </p><br />
            <p>
                Password:{password}
            </p><br />
            <p>
                Confirm password:
            </p><br />
            <hr />
        </div>

    );
};

export default UserForm;
