import React from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld9 = () => {
    const QRCode = require('qrcode-react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    return (
        <div>
            {/* 1. You can pass any string as prop named value to QRCode, including JSON string, like that commented out below, to QRCode */}
                {/*
                <QRCode value={JSON.stringify({
                    name: "Employee Name",
                    age: 27,
                    department: "Police",
                    id: "aisuoiqu3234738jdhf100223"
                })} size={256}/>
                */}

                {/*
                The size={256} prop passed above is to specify the size of the qrcode displayed which defaults to 128
                */}

                {/*
                    <QRCode value="This is just an ordinary string example" />
                */}


            {/* 2. You can also pass SMS as value */}
                {/* <QRCode value="SMS:+2348175930381:This is a SMS stored in a QR Code!" size={256}/> */}
                {/* You can also use SMSTO instead of SMS. Both will normally work */}
            
            
            {/* 3. You can also pass email address WITH or WITHOUT email subject, email body, cc, bcc, as value */}
                {/* <QRCode value={`mailto:someone@mysite.com?subject=Subject goes here&body=Body goes here.`} size={256} /> */}
                {/* cc, bcc, below  may also be captured but your decoder software has to be able to read them
                    mailto:someone@yoursite.com?cc=someoneelse@theirsite.com,another@thatsite.com,me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body%20goes%20here.
                */}
            
            {/* 4. You can also pass URL as value */}
                {/* <QRCode value="https://www.pau.edu.ng" size={256}/> */}
                {/* Below URL is for whatsapp */}
                {/* <QRCode value="https://wa.me/08175930381?text=I would like to buy a pair of shoes from you" size={256}/> */}
                {/* Below URL is for App Google play store. For more info, see https://support.google.com/admob/answer/3086746?hl=en */}
                 {/* <QRCode value="https://play.google.com/store/apps/details?id=com.gidimo" size={256}/> */}
                {/* Below URL if for Apple app store}
                 <QRCode value="https://apps.apple.com/us/app/twitter/id333903271" size={256}/> 

            {/* 5. You can also pass Geographical location as value */}
                {/* <QRCode value="geo:-36.4902,-13.85382, 10"/> */}
                {/* format is deg N latitude, deg W longitude, altitude in meters */}

            {/* 6. You can also capture calendar events but the decoder software available may not always invoke the calendar*/}
                {/*
                <QRCode value={`BEGIN:VEVENT
                SUMMARY:Summer+Vacation!
                DTSTART:20180601T070000Z
                DTEND:20180831T070000Z
                END:VEVENT`} size={256}/>
                */}

                {/* 7. You can also do Vcard.
                    <QRCode value={`BEGIN:VCARD
                    VERSION:3.0
                    N:Owen;Sean;;;
                    FN:Sean Owen
                    TITLE:Software Engineer
                    EMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=PREF:srowen@google.com
                    URL;TYPE=Homepage:https://example.com
                    END:VCARD`
                    } size={256}/>
                */}

                {/*
                etc. Sea without shores
                 */}

                 {/* Besides size, you can set more properties for QRCode, including logo image overlay. See  https://www.npmjs.com/package/qrcode.react*/}
                 <QRCode value="https://www.pau.edu.ng" size={256} fgColor="darkblue"/>

                 {/* Additional useful reference: https://github.com/zxing/zxing/wiki/Barcode-Contents */}

        </div>
    )
}
export default HelloWorld9;

