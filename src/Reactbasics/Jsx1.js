import React from 'react';

const Basics = ()=>{
    const firstName = 'joe';
    const lastName = 'mbugua';
    const time = new Date();
    const hours = time.getHours();
    let timetodisplay;
    if(hours<12){
        timetodisplay = "Good Morning";
    }else if(hours >= 12 && hours < 17){
        timetodisplay = "Good Afternoon";
    }else {
        timetodisplay = "Goodnight";
    }
    return (
        <>
        <h1> Hello {firstName} {lastName}</h1>
        {/* one can also run regular javascript inside jsx code */}
        <p>its currenty {time.getHours() % 12} oclock </p>
        <h1>{timetodisplay}</h1>
        </>
    );
}

export default Basics;