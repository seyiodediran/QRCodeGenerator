import React, { useState } from 'react';
import QRCode from './userIDQR';




const UserInfo = ({id}) => {


    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const [user, SetUser] = useState([{

    }])

    const addUser = (usr) => {

        const newUser = {...usr}
        
        SetUser([newUser]);
    }



    const [showQRCode, setShowQRCode] = useState(false);
    // const [hideQRCode, setHideQRCode] = useState(true);


    const changeName = (event) => {
        setName(event.target.value);
    }

    const changeAge = (event) => {
        setAge(event.target.value);
    }

    const changeOccupation = (event) => {
        setOccupation(event.target.value);
    }


    const display = (e) => {
        e.preventDefault();
        // const gen = document.getElementById('gen');
        setShowQRCode(true);
        
        addUser({name, age, occupation});

        // gen.classList.add('disabled');
        setName('');
        setAge('');
        setOccupation('');


    }
    // const hideQRCodes = (e) => {
    //     e.preventDefault()
    //     showQR = !showQR
    // }
 


    return (

        <div className="cont columns is-flex is-align-items-center is-justify-content-center" id={id}>

            <div className="column">
                {user.map(usr => (
                <QRCode key={usr.name} showQR={showQRCode}  usr={usr}/>
                    
                ))}

            </div>

            <div className="column">
                <div className="columns">
                    <div className="column">
                        <div id="form">
                            <form onSubmit={display}>
                                <div className="field">
                                    <label className="label has-text-left">Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Name" value={name} onInput={changeName} required />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Age</label>
                                    <div className="control">
                                        <input className="input" type="number" placeholder="Age" value={age} onInput={changeAge} required />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Occupation</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Occupation" value={occupation} onInput={changeOccupation} required />
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


export default UserInfo;