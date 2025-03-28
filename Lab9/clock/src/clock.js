import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date() 
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    render() {
        const { time } = this.state;
        const hourRotation = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5; // Adjusts for minutes
        const minuteRotation = time.getMinutes() * 6;
        const secondRotation = time.getSeconds() * 6;

        return (
            <div className="clock">
                <div className="analog-clock">
                    <div
                        className="hour_hand"
                        style={{ transform: `rotateZ(${hourRotation}deg)` }}
                    />
                    <div
                        className="min_hand"
                        style={{ transform: `rotateZ(${minuteRotation}deg)` }}
                    />
                    <div
                        className="sec_hand"
                        style={{ transform: `rotateZ(${secondRotation}deg)` }}
                    />
                    <span className="twelve">12</span>
                    <span className="one">1</span>
                    <span className="two">2</span>
                    <span className="three">3</span>
                    <span className="four">4</span>
                    <span className="five">5</span>
                    <span className="six">6</span>
                    <span className="seven">7</span>
                    <span className="eight">8</span>
                    <span className="nine">9</span>
                    <span className="ten">10</span>
                    <span className="eleven">11</span>
                </div>
            </div>
        );
    }
}
