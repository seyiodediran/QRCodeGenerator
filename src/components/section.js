import React from 'react';
import hand from '../img/hand.png'

// react scroll library was used for aesthetics
import { Link } from "react-scroll";


const Section = () => {

    return (
        <div>
            <div className="section columns is-flex is-justify-content-center is-align-items-center">
                <div className="column hand">
                    <img src={hand} alt="hand" />
                </div>

                <div className="column">
                    <h1 className="main title has-text-left">Generate Your <br />QRCodes <br /> Here</h1>
                    <p className="has-text-left">QR Code is a two-dimensional version of the barcode, typically made up of black and
                    white pixel patterns. Denso Wave, a Japanese subsidiary of the Toyota supplier Denso,
                    developed them for marking components in order to accelerate logistics processes for
                    their automobile production. .</p>
                    <br />
                    <button className="button is-primary is-large mt-4 has-text-weight-bold" >
                        <Link
                            activeClass="active"
                            to="userid"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{color:'white'}}
                        >
                            Get Started
                        </Link> 
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Section;

// extre text

// Now, it has found its way into mobile marketing with the 
// widespread adoption of smartphones. "QR" stands for "Quick Response", which refers to 
// the instant access to the information hidden in the Code