import React, { useState } from "react";

export  default function Seat(props) {

    const [seat,setSeat] = useState({ stage: "", seat: "", line:"", ticket:"" })
    const handleSelect = (e) => {
        setSeat({ ...seat, ticket: e.target.value })
    }
   
    return (
        <div>
            <label htmlFor="ticket">Τοποθεσία:</label>
            <input type="text" name="stage" id="stage" disabled size="7"  />
            <label htmlFor="seat" >Θέση:</label>
            <input type="text" name="seat" disabled size="5" />
            <label htmlFor="seat" >Σειρά:</label>
            <input type="text" name="line" id="lineSelection" disabled size="5" />
            <label htmlFor="ticket" >Εισητήριο:</label>
            <select id="ticket" name="ticket" onChange={handleSelect}>
                <option value="regural">Κανονικό</option>
                <option value="student">Φοιτιτικό</option>
            </select >
        </div>
    );
}