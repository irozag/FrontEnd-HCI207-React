import React from "react";
import { shows } from '../shows';

export default function PlayDates(props) {

    return (
        <div>
            {
                Object.entries(shows[props.id].dates).map(([key, date]) => {
                    return <Radio key={key} date={date} dateSelected={props.dateSelected}/>
                })
            }
        </div>
    );
}

export function Radio(props) {

    const handleRadio = (e) => {
            props.dateSelected(e.target.value)
    }


    return (
        <div className="inline">
            <input type="radio" name="fav_language" value={props.date} onChange={handleRadio}  required />
            <label htmlFor="html">{props.date}</label>
        </div>
    )
}

export function NoPosts() {
    return (<div></div>)
}