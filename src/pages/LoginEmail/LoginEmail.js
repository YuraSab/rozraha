import React from 'react';
import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setEmail, setPassword} from "../../redux/action-creators/Password";

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
                    // document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    // document.getElementById("message").value = "";
                    alert("your message successfully");
                    console.log(res);
                }
            )
            .catch((err) => console.log(err));
    }

    return (
        <div>
            {/*<input type="text" placeholder="Enter your name" id="name"/>*/}
            <input type="text" placeholder="Enter your email" id="email"/>
            {/*<textarea id="message" rows="3"></textarea>*/}

            <Link to={"password"}>
                <button onClick={sendMail}>Next</button>
            </Link>
        </div>
    );
};

export default LoginEmail;