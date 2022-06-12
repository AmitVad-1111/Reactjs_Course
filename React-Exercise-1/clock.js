import React,{useState} from 'react';
import "./clock.css";

function Clock() {
    //we use useState to store clock object every time when it 
    //update. so every time when clock update component re-render
    //and we get new time.
    const [Klock, setKlock] = useState(new Date());
    const weeKDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday"
        , "Thursday", "Friday", "Saturday"
    ]
    const months = ["Januari", "Februari", "March", "April", "May", "June", 
                     "July", "August", "September", "October","November", "December"];

    setInterval(() => {
        setKlock(new Date());
    },1000);
    

    return (
        <div className="ClockBox">
            <div className="weekDayName">{weeKDays[Klock.getDay()]}</div>
            <div className="hourMinutes">{ leadingZero(Klock.getHours() % 12) }:{leadingZero(Klock.getMinutes())}</div>
            <div className="ampm">{Klock.getHours() >= 12 ? "PM" : "AM"}</div>
            <div className="seconds">{leadingZero(Klock.getSeconds())}</div>
            <div className="clockdate">{months[Klock.getMonth()]} {leadingZero(Klock.getDate())} {Klock.getFullYear()}</div>
        </div>
    )
}

// javascript date functions return hour,minute,second and months etc in 1 to 9 in single digit
// here we converts that in 01 to 09 format.
function leadingZero(n) {
    return n < 10 ? '0' + n : n;
}

export default Clock;