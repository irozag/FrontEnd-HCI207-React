import React from "react";
import { shows } from '../shows';

function Play(props) {
    console.log("test:", shows[props.url]);
    return (
        <div>
            <h3>ID: test {props.url}</h3>
            <section id="play" className="wrapper">
                <div className="play main">
                    <div className="room">{shows[props.url].room}</div>
                    <div className="title">{shows[props.url].name}</div>
                    <div className="composer">{shows[props.url].composer}</div>
                    <br />
                    <div className="month">{shows[props.url].mounth}</div>
                    <div className="dates"></div>
                    <br />
                    <div className="production">{shows[props.url].production}</div>
                    <div className="description">{shows[props.url].description}</div>
                    <br />
                    <div className="actors">Ηθοποιοί:</div>
                    <div id="actors"></div>
                    <br />
                    {/* <button className="program btn"><a >Δείτε το πρόγγραμμα </a></button>
                    <button className="btn"><a id="reserve">Κάντε κράτηση </a></button> */}
                </div>
                <div className="play photo">
                    <div className="feature-photo" style={{ backgroundImage: `url("${shows[props.url].photo}")` }}></div>
                </div>

                <div className="crew overlay">  </div>

            </section>
        </div>
    );
} export default Play;