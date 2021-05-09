import React from 'react';
import head from '../../img/head.png';

const QRCode = ({ showQR, mail }) => {
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
                    <QRCode value={`mailto:${mail.email}?subject=${mail.subject}&body=${mail.body}`} fgColor="darkblue" size={256} />
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
                                                {/* based on the mail prop we passed from Email Component we can now pick out the individual properties to be displayed */}
                                                <p className="has-text-left is-size-5">Email: {mail.email} </p> {/* email address mail is to be sent to */}
                                                <p className="has-text-left is-size-5">Subject: {mail.subject} </p> {/* subject of the email */}
                                                <p className="has-text-left is-size-5">Body: {mail.body} </p> {/* body of the email */}
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
                                        <button className="button is-fullwidth is-danger has-text-weight-bold" onClick={hideQR}>Regenerate</button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                :
                <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                    <h1 className="title mb-4">Email</h1><br />
                    <span className="notification is-warning has-text-weight-bold">
                        Please enter information
                </span>
                </div>
            }
        </div>
    )
};

export default QRCode; // Qrcode is a sub-component which we are exporting for use in the component Email