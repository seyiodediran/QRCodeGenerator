// imports
import React, { useState } from 'react';
import QRCode from './SmsQR';

// functional component. the new way of creating components as oppossed to using classes and then extending React.Component
const Sms = ({ id }) => {

    // the various states that will be managed by react hook useState
    const [to, setTo] = useState('');
    const [content, setContent] = useState('');

    const [showQRCode, setShowQRCode] = useState(false);

    // An array is used here so as to hold the values the user has supplied and display them 
    const [sms, SetSms] = useState([{

    }])
    // A function that adds a new message to our array
    const addSms = (sm) => {

        //spread operator used here to handle the addition of values to the array
        const newSms = { ...sm }

        // Set the state of our array (user) to the new value which now holds our user supplied values
        SetSms([newSms]);
    }
    // function changeTo takes "event" as a parameter and holds a function setTo, which changes the state of to when updated
    const changeTo = (event) => {
        setTo(event.target.value);
    }

    // function changeContent takes "event" as a parameter and holds a function setContent, which changes the state of content when updated
    const changeContent = (event) => {
        setContent(event.target.value);
    }

    // A form was used in my codes so this functions is called when the form is submitted 
    const submit = (e) => {

        // a form's default action refreshes the page every time the form is submitted but we don't want that. Hence we prevent the default action
        e.preventDefault();

        // i initially set the state of showQRcode to false so as to hide it from being visible on the page
        //when the form is submitted, it becomes visible
        setShowQRCode(true);

        //the addSms function is called and our values, to and content, are added to the array
        addSms({ to, content });

        // I set the states to an empty string after adding them to the array so our text fields can be empty again
        setTo('');
        setContent('');


    }



    return (
        <div className="columns columns-sms is-flex is-align-items-center is-justify-content-center" id={id}>
            <div className="column">
                {/* the array.map() function is used to map each user to the qrcode tag 
                in this case i set sm={sm} and passes as a prop so i can reference the sms properties */}
                {sms.map(sm => (
                    //QRCode component embedded within the div, with props being passed
                    <QRCode key={sm.to} showQR={showQRCode} sm={sm} to={to} content={content} />

                ))}
            </div>
            <div className="column">
                <div id="form2">
                    <form onSubmit={submit}>
                        <div className="field">
                            <label className="label has-text-left">To</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Receiver" value={to} onInput={changeTo} required /> {/* onInput is a javascript event handler which takes a function; In this case changeTo */}
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left">SMS Content</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="SMS Content" value={content} onInput={changeContent} required></textarea> {/* onInput is a javascript event handler which takes a function; In this case changeContent */}
                            </div>
                        </div>

                        <div className="control">
                            <button className="button is-fullwidth is-primary has-text-weight-bold">Generate QRCode</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sms; //The component Sms is exported for use in the Top-Level Component(App.tsx)