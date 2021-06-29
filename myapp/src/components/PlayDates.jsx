import React, { useState } from "react";
import { shows } from '../shows';

export default function PlayDates(props) {

    // console.log(props.dates);
    // console.log(shows[props.id].dates);


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
    //     props.setPost({ ...props.post, date: e.target.value }) onChange={handleRadio} 
    // }
    console.log(props, "hello");

    return (
        <div>
            <input type="radio" name="fav_language" value={props.date} />
            <label htmlFor="html">{props.date}</label>
        </div>
    )
}

export function NoPosts() {
    return (<div>empy</div>)
}