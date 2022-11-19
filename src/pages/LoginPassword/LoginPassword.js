import React, {useState} from 'react';
import {useSelector} from "react-redux";
import styles from "../LoginEmail/LoginEmail.module.css";

const LoginPassword = () => {


    const {password, email} = useSelector(({
                                               password: {password},
                                               email: {email}
                                           }) => ({password, email}));
    const [pass, setPass] = useState('');

    const checkPass = (e) => {
        e.preventDefault()
        if (pass.toString() === password.toString()) {
            alert("Successful!");
        } else {
            alert("Password is wrong!");
        }
    }

    return (
        <div>

            <div className={styles.main}>
                <div className={styles.mainDiv}>
                    <form onSubmit={checkPass}>
                        <h2 style={{display: "flex", justifyContent: "center", color: "white"}}>We send code on your email:</h2>
                        <h2 style={{display: "flex", justifyContent: "center", color: "white", textDecoration: "underline"}}>{email}</h2>
                        <input
                            className={styles.inputDiv}
                            type={"number"}
                            onChange={(e) => setPass(prevState => e.target.value)}
                            maxLength={4}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPassword;