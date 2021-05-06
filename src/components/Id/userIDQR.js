import React from 'react'
import head from '../../img/head.png';

const QRCode = ({ showQR, usr }) => {
    const QRCode = require('qrcode.react');

    const hideQR = (e) => {
        e.preventDefault()
        showQR = !showQR
    }

    return (
        <div>
            {showQR ?
                <div>
                    <QRCode fgColor="darkblue" value={JSON.stringify({
                        name: usr.name,
                        age: usr.age,
                        occupation: usr.occupation,
                    })} size={256} />

                    <div className="columns is-flex is-align-items-center is-justify-content-center">
                        <div className="column is-10">
                            <div className="card has-background-dark has-text-white-ter mt-4">
                                <div className="card-content is-success is-light ">
                                    <div className="content">
                                        <div className="columns is-flex is-align-items-center is-justify-content-center">

                                            <div className="column is-5">
                                                <figure class="image is-64x64">
                                                    <img src={head} alt="head" />
                                                </figure>
                                            </div>

                                            <div className="column is-7">
                                                <p className="has-text-left is-size-5">Name: {usr.name} </p>
                                                <p className="has-text-left is-size-5">Age: {usr.age} </p>
                                                <p className="has-text-left is-size-5">Occupation : {usr.occupation} </p>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                            </div>
                            <form onSubmit={hideQR}>
                                <div className="columns is-flex is-align-items-center is-justify-content-center">

                                    <div className="column pr-0">
                                        <button className="button is-fullwidth is-link has-text-weight-bold">Copy</button>
                                    </div>

                                    <div className="column pl-0">
                                        <button className="button is-fullwidth is-danger has-text-weight-bold">Regenerate</button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>


                    {/* <div className="card mt-4">
                        <div className="card-content">
                            <div className="content">

                                <div className="field">
                                    <label className="label has-text-left">Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder={name} disabled />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Age</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder={age} disabled />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label has-text-left">Occupation</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder={occupation} disabled />
                                    </div>
                                </div>

                                <div className="control">
                                    <button className="button is-fullwidth is-link has-text-weight-bold" onClick={Reg}>Regenerate</button>
                                </div>



                            </div>
                        </div>
                    </div> */}
                </div>


                :
                <div>
                    <h1 className="title mb-4">User ID</h1><br />
                    <span className="notification is-warning has-text-weight-bold">
                        Please enter information
                    </span>
                </div>
            }


        </div >
    )
};

export default QRCode;