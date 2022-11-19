import React from 'react';
import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setEmail, setPassword} from "../../redux/action-creators/Password";
import styles from "./LoginEmail.module.css";

const LoginEmail = () => {

    const {password, email} = useSelector(({
                                               password: {password},
                                               email: {email}
                                           }) => ({password, email}));
    const dispatch = useDispatch();


    const createPassword = () => {
        const one = parseInt(Math.random() * (9 - 0) + 0);
        const two = parseInt(Math.random() * (9 - 0) + 0);
        const three = parseInt(Math.random() * (9 - 0) + 0);
        const four = parseInt(Math.random() * (9 - 0) + 0);

        console.log('one', one);
        console.log('two', two);
        console.log('three', three);
        console.log('four', four);
        const password = `${one}${two}${three}${four}`;
        console.log(password);
        return password
    };


    emailjs.init("zjyl1w2MBoCE6shQX");

    function sendMail() {
        const pass = createPassword();

        let params = {
            // name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: pass
        };

        dispatch(setEmail(params.email));
        dispatch(setPassword(params.message));

        console.log("password", password, "email", email);


        const serviceID = "service_vhny0vn";
        const templateID = "template_isbblxd";


        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    document.getElementById("email").value = "";
                    alert("your message successfully");
                    console.log(res);
                }
            )
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.main}>
            <div className={styles.mainDiv}>
                <input className={styles.inputDiv} type="text" placeholder="Enter your email" id="email"/>
                <Link to={"password"}>
                    <button className={styles.buttonDiv} onClick={sendMail}>Next</button>
                </Link>
            </div>
        </div>
    );
};

export default LoginEmail;