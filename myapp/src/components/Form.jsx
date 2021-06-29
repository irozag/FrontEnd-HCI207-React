import React, { useState } from "react";
import SeatMap from "./SeatMap";
import PlayDates, { NoPosts } from "./PlayDates";

export default function Form(props) {


    const [post, setPost] = useState({ playId: "", name: "", surname: "", email: "", stage: "", seat: "", line: "", ticket: "", date: "" })

    const handleSelect = (e) => {
        setPost({ ...post, playId: e.target.value })
    }

    const handleName = (e) => {
        setPost({ ...post, name: e.target.value })
    }

    const handleSurname = (e) => {
        setPost({ ...post, surname: e.target.value })
    }

    const handleEmail = (e) => {
        setPost({ ...post, email: e.target.value })
    }

    const Submit = e => {
        e.preventDefault();
        console.log(post)
    }


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
                            console.log(post.playId)
                            if (post.playId !== "") {
                                return <PlayDates id={post.playId} />;
                            } else {
                                return <NoPosts />;
                            }
                        })()}
                        <SeatMap state={post}></SeatMap>
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



