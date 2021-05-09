import React from 'react'
import head from '../../img/head.png';

const QRCode = ({ showQR, usr }) => {
    const QRCode = require('qrcode.react');

    //hideQR function here is a function i defined to hide the QRCode from displaying on the page
    const hideQR = (e) => {
        e.preventDefault()
        showQR = !showQR
    }

    return (
        <div>
            {/* tenary operator used here to decide what to display based on the boolean value currently stored in our state showQR */}
            {showQR ?
                <div className="columns is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
                    <QRCode fgColor="darkblue" value={JSON.stringify({
                        name: usr.name,
                        age: usr.age,
                        occupation: usr.occupation,
                    })} size={256} />

                    <div className="columns is-flex is-align-items-center is-justify-content-center">
                        <div className="column">
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
                                                {/* based on the usr prop we passed from UserInfo Component we can now pick out the individual properties to be displayed */}
                                                <p className="has-text-left is-size-5">Name: {usr.name} </p> {/*name of user */}
                                                <p className="has-text-left is-size-5">Age: {usr.age} </p> {/*age of user */}
                                                <p className="has-text-left is-size-5">Occupation : {usr.occupation} </p> {/*occupation of user */}
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


                   
                </div>


                :
                <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                    <h1 className="title mb-4">User ID</h1><br />
                    <span className="notification is-warning has-text-weight-bold">
                        Please enter information
                    </span>
                </div>
            }


        </div >
    )
};

export default QRCode; // Qrcode is a sub-component which we are exporting for use in the component UserInfo