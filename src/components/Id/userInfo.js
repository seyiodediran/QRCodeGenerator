// imports

import React, { useState } from 'react';
import QRCode from './userIDQR';



// functional component. the new way of creating components as oppossed to using classes and then extending React.Component
const UserInfo = ({id}) => {

    // the various states that will be managed by react hook useState
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    // An array is used here so as to hold the values the user has supplied and display them 
    const [user, SetUser] = useState([{

    }])

    // A function that adds a new user information to our array
    const addUser = (usr) => {

        //spread operator used here to handle the addition of values to the array
        const newUser = {...usr}
        
        // Set the state of our array (user) to the new value which now holds our user supplied values
        SetUser([newUser]);
    }

    const [showQRCode, setShowQRCode] = useState(false);

    // function changeName takes "event" as a parameter and holds a function setName, which changes the state of name when updated
    const changeName = (event) => {
        setName(event.target.value);
    }

    // function changeAge takes "event" as a parameter and holds a function setAge, which changes the state of age when updated
    const changeAge = (event) => {
        setAge(event.target.value);
    }

    // function changeOccupation takes "event" as a parameter and holds a function setOccupation, which changes the state of occupation when updated
    const changeOccupation = (event) => {
        setOccupation(event.target.value);
    }


    // A form was used in my codes so this functions is called when the form is submitted 
    const submit = (e) => {

        // a form's default action refreshes the page every time the form is submitted but we don't want that. Hence we prevent the default action
        e.preventDefault();
       
        // i initially set the state of showQRcode to false so as to hide it from being visible on the page
        //when the form is submitted, it becomes visible
        setShowQRCode(true);
        
        //the addUser function is called and our values, name, age and occupation, are added to the array
        addUser({name, age, occupation});

        // I set the states to an empty string after adding them to the array so our text fields can be empty again
        setName('');
        setAge('');
        setOccupation('');


    }


    return (

        <div className="cont columns is-flex is-align-items-center is-justify-content-center" id={id}>

            <div className="column">

                {/* the array.map() function is used to map each user to the qrcode tag 
                in this case i set usr={usr} and passes as a prop so i can reference the user properties */}
                
                {user.map(usr => (
                //QRCode component embedded within the div, with props being passed
                <QRCode key={usr.name} showQR={showQRCode}  usr={usr}/>
                    
                ))}

            </div>

            <div className="column">
                <div className="columns">
                    <div className="column">
                        <div id="form">
                            <form onSubmit={submit}>
                                <div className="field">
                                    <label className="label has-text-left">Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Name" value={name} onInput={changeName} required /> {/* onInput is a javascript event handler which takes a function; In this case changeName */}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Age</label>
                                    <div className="control">
                                        <input className="input" type="number" placeholder="Age" value={age} onInput={changeAge} required /> {/* onInput is a javascript event handler which takes a function; In this case changeAge*/}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Occupation</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Occupation" value={occupation} onInput={changeOccupation} required /> {/* onInput is a javascript event handler which takes a function; In this case changeOccupation */}
                                    </div>
                                </div>

                                <div className="control">
                                    <button className="button is-fullwidth is-primary has-text-weight-bold">Generate QRCode</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>













    )
};


export default UserInfo; //The component UserInfo is exported for use in the Top-Level Component(App.tsx)