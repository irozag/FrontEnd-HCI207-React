import React, { useState } from "react";
import SeatMap from "./SeatMap";
import PlayDates, { NoPosts } from "./PlayDates";

export default function Form(props) {


    const [state, setState] = useState({ playId: "", name: "", surname: "", email: "", stage: "", seat: "", line: "", ticket: "", date: "" })

    const handleSelect = (e) => {
        setState({ ...state, playId: e.target.value })
    }

    const handleName = (e) => {
        setState({ ...state, name: e.target.value })
    }

    const handleSurname = (e) => {
        setState({ ...state, surname: e.target.value })
    }

    const handleEmail = (e) => {
        setState({ ...state, email: e.target.value })
    }

    const Submit = e => {
        e.preventDefault();
        console.log(state)
    }

    const seatSelected = (rect) => {
        setState({ ...state, stage: rect.id.type, line: rect.id.i, seat: rect.id.z })
    }

    const dateSelected = (date) => {
        setState({ ...state, date: date })
        console.log(date)
    }

    // const handleTicket = (ticket) => {
    //     setState({ ...state, ticket: ticket.type })
    // }

    return (
        <div>
            <form onSubmit={Submit}>
                <div className="list">
                    <legend>Επιλέξτε Παράσταση:</legend>
                    <select name="plays" onChange={handleSelect}>
                        <option value="">--Παράσταση--</option>
                        {
                            Object.entries(props.shows).map(([title, show]) => {
                                return <Option key={title} show={show} id={title} />
                            })
                        }
                    </select>
                    <div className="container">
                        {(() => {
                            console.log(state.playId)
                            if (state.playId !== "") {
                                return <PlayDates id={state.playId} dateSelected={dateSelected}/>;
                            } else {
                                return <NoPosts />;
                            }
                        })()}
                        <SeatMap state={state} seatSelected={seatSelected}></SeatMap>
                    </div>
                    <div className="personalDetails container">
                        <div className="row">
                            <label htmlFor="name" >Όνομα:</label>
                            <input type="text" name="name" onChange={handleName} pattern="^[A-Za-zΑ-Ωα-ωΆ-Ώά-ώ]{3,}" placeholder="Type your name" required />
                            <label htmlFor="surname" >Επίθετο:</label>
                            <input type="text" name="surname" onChange={handleSurname} pattern="^[A-Za-zΑ-Ωα-ωΆ-Ώά-ώ]{3,}" placeholder="Type your surname" required />
                            <label htmlFor="email" >Ηλεκτρονικό Ταχυδρομείο:</label>
                            <input type="email" name="email" onChange={handleEmail} placeholder="email@example.com" required />
                            <output id="message"></output>
                        </div>
                        <div className="row">
                            <button className="btn" type="submit">Κράτηση</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export function Option(props) {
    return (
        <option value={props.id}>{props.show.name}</option>
    )

}



