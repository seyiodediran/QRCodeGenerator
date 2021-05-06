// imports
import React, { useState } from 'react';
import QRCode from './EmailQR';

// functional component 
const Email = ({id}) => {

    // the various states that will be managed by react hook useState
    const [email, SetEmail] = useState(null);
    const [subject, SetSubject] = useState(null);
    const [body, setBody] = useState(null);

    const [showQRCode, setShowQRCode] = useState(false);

    // An array is used here so as to hold the values the user has supplied and display them 
    const [emails, SetEmails] = useState([{

    }])

    // A function that adds a new email to our array
    const addEmail = (mail) => {

        //spread operator used here to handle the addition of values to the array
        const newEmail = {...mail}
        
        // Set the state of our array (emails) to the new value which now holds our user supplied values
        SetEmails([newEmail]);
    }

    // our functions that get the values our user has supplied directly from the input field
    const changeEmail = (event) => {
        SetEmail(event.target.value);
    };

    const changeSubject = (event) => {
        SetSubject(event.target.value);
    };

    const changeBody = (event) => {
        setBody(event.target.value);
    };

    // A form was used in my codes so this functions is called when the form is submitted 
    const submit = (e) => {

        // a form's default action refreshes the page every time the form is submitted but we don't want that. Hence we prevent the default action
        e.preventDefault();

        // i initially set the state of showQRcode to false so as to hide it from being visible on the page
        //when the form is submitted, it becomes visible
        setShowQRCode(true);

        //the addEmail function is called and our values, email, subject, and body, are added to the array
        addEmail({email, subject, body});

        // I set the states to an empty string after adding them to the array so our text fields can be empty again
        SetEmail('');
        SetSubject('');
        setBody('');
    }

    // return statement that holds all we see on the webpage. it uses JSX syntax that allows us embed javascript as well as variables into our html codes
    return (

        <div className="columns is-flex is-align-items-center is-justify-content-center" id={id}>

            <div className="column">
            {emails.map(mail => (
                <QRCode key={mail.email} showQR={showQRCode} email={email} subject={subject} body={body} mail={mail}/>
                    
                ))}
            </div>
            <div className="column">
                <div>
                    <form onSubmit={submit}>
                        <div className="field">
                            <label className="label has-text-left">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Someone@example.com" value={email} onInput={changeEmail} required />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>

                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left has-text-weight-bold">Subject</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Subject" value={subject} onInput={changeSubject} required />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left">body</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Subject" value={body} onInput={changeBody} required></textarea>
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
};

export default Email;