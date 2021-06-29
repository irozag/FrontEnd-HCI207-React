import React from "react";
import { shows } from '../shows';

export default function PlayDates(props) {

    return (
        <div>
            {
                Object.entries(shows[props.id].dates).map(([key, date]) => {
                    return <Radio key={key} date={date} />
                })
            }
        </div>
    );
}

export function Radio(props) {

    // const handleRadio = (e) => {
    //     setPost({ ...props.post, date: e.target.value }) onChange={handleRadio}
    // }
    console.log(props, "radio here");

    return (
        <div className="inline">
            <input type="radio" name="fav_language" value={props.date}   />
            <label htmlFor="html">{props.date}</label>
        </div>
    )
}

export function NoPosts() {
    return (<div></div>)
}