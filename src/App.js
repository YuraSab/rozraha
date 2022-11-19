import React from 'react';
import emailjs from '@emailjs/browser';

const App = () => {


    emailjs.init("zjyl1w2MBoCE6shQX");



    function sendMail() {
        let params = {
            name: document.getElementById("name").value ,
            email: document.getElementById("email").value ,
            message: document.getElementById("message").value ,
        };

        const serviceID = "service_vhny0vn";
        const templateID = "template_isbblxd";


        emailjs.send(serviceID, templateID, params)
            .   then(
                res => {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                    alert("your message successfully");
                    console.log(res);
                }
            )
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <input type="text" placeholder="Enter your name" id="name"/>
            <input type="text" placeholder="Enter your email" id="email"/>
            <textarea id="message" rows="3"></textarea>
            <button onClick={sendMail}>Submit</button>
        </div>
    );
};

export default App;