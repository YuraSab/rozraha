import React, {useState} from 'react';
import {useSelector} from "react-redux";

const LoginPassword = () => {


    const {password, email} = useSelector(({
                                               password: {password},
                                               email: {email}
                                           }) => ({password, email}));
    const [pass, setPass] = useState('');

    const checkPass = (e) => {
        e.preventDefault()
        if (pass.toString() ===  password.toString()){
            alert("Successful!");
        }else{
            alert("Password is wrong!");
        }
    }

    return (
        <div>
            {/*<h1>{password}</h1>*/}
            <h1>{email}</h1>
            <div>
                <form onSubmit={checkPass}>
                    <input
                        type={"number"}
                        onChange={(e) => setPass(prevState => e.target.value)}
                        maxLength={4}
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginPassword;