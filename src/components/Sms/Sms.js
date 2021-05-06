import React, { useState } from 'react';
import QRCode from './SmsQR';

const Sms = ({id}) => {


    const [to, setTo] = useState('');
    const [content, setContent] = useState('');

    const [showQRCode, setShowQRCode] = useState(false);

    const [sms, SetSms] = useState([{

    }])

    const addSms = (sm) => {

        const newSms = {...sm}
        
        SetSms([newSms]);
    }

    const changeTo = (event) => {
        setTo(event.target.value);
    }

    const changeContent = (event) => {
        setContent(event.target.value);
    }
    const submit= (e) => {
        e.preventDefault();
        setShowQRCode(true);

        addSms({to, content});

        setTo('');
        setContent('');


    }



    return (
        <div className="columns is-flex is-align-items-center is-justify-content-center" id={id}>
            <div className="column">
            {sms.map(sm => (
                <QRCode key={sm.to} showQR={showQRCode}  sm={sm} to={to} content={content} />
                    
                ))}
            </div>
            <div className="column">
                <div id="form2">
                    <form onSubmit={submit}>
                        <div className="field">
                            <label className="label has-text-left">To</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Receiver" value={to} onInput={changeTo} required />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left">SMS Content</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="SMS Content" value={content} onInput={changeContent} required></textarea>
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

export default Sms;