import React from "react";
import { shows } from '../shows';

function Play(props) {

    return (
        <div className="container">
            {/* <h3>ID: test {props.url}</h3> */}
            <section className="wrapper">
                <div className="play main">
                    <div className="room">{shows[props.url].room}</div>
                    <div className="title">{shows[props.url].name}</div>
                    <div className="composer">{shows[props.url].composer}</div>
                    <br />
                    <div className="month">{shows[props.url].mounth}</div>
                    <div className="dates"><Dates dates={shows[props.url].dates} /></div>
                    <br />
                    <div className="production">{shows[props.url].production}</div>
                    <div className="description">{shows[props.url].description}</div>
                    <br />
                    <div className="actors">Ηθοποιοί:</div>
                    <div id="actors"><Actors roles={shows[props.url].roles} /></div>
                    <br />
                    <button className="program btn"><a href="/program">Δείτε το πρόγγραμμα </a></button>
                    <button className="btn"><a href="/reservation" id="reserve">Κάντε κράτηση </a></button>
                    {/* TO DO URL TO RESERVATIONS */}
                </div>
                <div className="play photo">
                    <div className="feature-photo" style={{ backgroundImage: `url("${shows[props.url].photo}")` }}></div>
                </div>
              
                <div className="crew overlay"> 
                {
                    Object.entries(shows[props.url].crew).map(([crewRol, crewName]) => {
                        return <Crew key={crewRol} crewName={crewName}  crewRol={crewRol}/>
                    })
                }
                 </div>

            </section>
        </div>
    );
} export default Play;

export function Dates(props) {
    let stringDates ="";
    stringDates += props.dates;
    stringDates = stringDates.replaceAll(',', ', ');
    return (
        <div> {stringDates}</div>
    )
}

function Actors (props) {
    let actors = "";
    for (let role in props.roles) {
        for(let actor in props.roles[role]) {
            actors += actor;
            actors += ", ";
        }
    }
    return (
        <div> {actors}</div>
    )
}



function Crew (props) {
    let text;
    console.log(props.crewName)
    switch (props.crewRol) {
                case "conductor":
                    text = "Μαέστρος";
                    break;
                case "director":
                    text = "Σκηνοθέτης";
                    break;
                case "sets":
                    text = "Σετς";
                    break;
                case "costumes":
                    text = "Κοστούμια";
                    break;
                case "lighting designer":
                    text = "Σχεδιασμός φωτισμού";
                    break;
                case "chorus master":
                    text = "Χωροδός";
                    break;
                case "associate-director":
                    text = "Βοηθός Σκηνοθέτη";
                    break;
                case "choreographer":
                    text = "Χορογράφος";
                    break;
                case "programmer video":
                    text = "Προγραμματισμός βίντεο";
                    break;
                case "video designer":
                    text = "Σχεδιασμός βίντεο";
                    break;
                case "video projection designer":
                    text = "Σχεδιασμός βιντεοπροβολών";
                    break;
                default:
                    text = " ";
            }
         
    return (
        <div class="details">{text}<span id={props.crewRol}>{props.crewName}</span></div>
    )
}


// const crew = play['crew']
// for (person in crew) {
//     //     if(crew.person != undefined) 
//     // console.log(details[i]);
//     switch (person) {
//         case "conductor":
//             text = "Μαέστρος";
//             break;
//         case "director":
//             text = "Σκηνοθέτης";
//             break;
//         case "sets":
//             text = "Σετς";
//             break;
//         case "costumes":
//             text = "Κοστούμια";
//             break;
//         case "lighting designer":
//             text = "Σχεδιασμός φωτισμού";
//             break;
//         case "chorus master":
//             text = "Χωροδός";
//             break;
//         case "associate-director":
//             text = "Βοηθός Σκηνοθέτη";
//             break;
//         case "choreographer":
//             text = "Χορογράφος";
//             break;
//         case "programmer video":
//             text = "Προγραμματισμός βίντεο";
//             break;
//         case "video designer":
//             text = "Σχεδιασμός βίντεο";
//             break;
//         case "video projection designer":
//             text = "Σχεδιασμός βιντεοπροβολών";
//             break;
//         default:
//             text = " ";
//     }