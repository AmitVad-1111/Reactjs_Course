import React, { Component } from 'react';

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.weeKDays = [
            "Sunday", "Monday", "Tuesday", "Wednesday"
            , "Thursday", "Friday", "Saturday"
        ]
        this.months = ["Januari", "Februari", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        //we use useState to store clock object every time when it 
        //update. so every time when clock update component re-render
        //and we get new time.
        this.state = {
            today: new Date()
        }

        this.Klock = this.state.today;

    }

    //here we check component rendered and ready to update
    componentDidMount() {
        this.updateClock();
    }

    updateClock() {
        setInterval(() => {
            this.setState({
                today: new Date()
            });
            this.Klock = this.state.today;
        }, 1000);
    }

    // javascript date functions return hour,minute,second and months etc in 1 to 9 in single digit
    // here we converts that in 01 to 09 format.
    leadingZero(n) {
        return n < 10 ? '0' + n : n;
    }

    render() {
        return (
            <div className="ClockBox">
                <div className="weekDayName">{this.weeKDays[this.Klock.getDay()]}</div>
                <div className="hourMinutes">{this.Klock.getHours() % 12 == 0 ? "12" : this.leadingZero(this.Klock.getHours() % 12)}:{this.leadingZero(this.Klock.getMinutes())}</div>
                <div className="ampm">{this.Klock.getHours() >= 12 ? "PM" : "AM"}</div>
                <div className="seconds">{this.leadingZero(this.Klock.getSeconds())}</div>
                <div className="clockdate">{this.months[this.Klock.getMonth()]} {this.leadingZero(this.Klock.getDate())} {this.Klock.getFullYear()}</div>
            </div>);
    }
}

export default Clock2;