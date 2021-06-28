import React, { useState } from "react";
// import { shows } from '../shows';



export default function Form() {

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }
    const [post, setPost] = useState({play:"", name:"", surname:"", email:""})

    const handleSelect = (e) => {
        setPost({ ...post, play: e.target.value })
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
        console.log("hello");
        e.preventDefault();
        // props.handleSubmit(post);
        console.log (post)
    }


    return (
        <div>
            <form onSubmit={Submit}>  {/*submit* onSubmit={this.handleSubmit}}   */}
                <div className="list">
                    <legend>Επιλέξτε Παράσταση:</legend>
                    <select id="plays" name="plays" onChange={handleSelect}>
                        <option value="">--Παράσταση--</option>
                        <option value="">Μαντάμα Μπαττερφλάι</option>
                        <option value="">Ντον Τζοβάννι</option>
                        <option value="">Δον Κιχώτης</option>
                    </select>
                    {/* <Select values="" state=""></Select> */}
                    {/* <div className="wrapper">
                        test
                        {/* <PlayDates></PlayDates>
                        <SeatMap></SeatMap> 
                    </div> */}
                    <div className="personalDetails container">
                        <div className="row">
                            <label htmlFor="name" >Όνομα:</label>
                            <input type="text" name="name" id="name" onChange={handleName} pattern="^[A-Za-zΑ-Ωα-ωΆ-Ώά-ώ]{3,}" placeholder="Type your name" required />
                            <label htmlFor="surname" >Επίθετο:</label>
                            <input type="text" name="surname" id="surname" onChange={handleSurname}  pattern="^[A-Za-zΑ-Ωα-ωΆ-Ώά-ώ]{3,}" placeholder="Type your surname" required />
                            <label htmlFor="email" >Ηλεκτρονικό Ταχυδρομείο:</label>
                            <input type="email" name="email" id="email" onChange={handleEmail} placeholder="email@example.com" required />
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

// export function Select(props) {

//     return (
//         <select id="plays" name="plays">
//             <option value="">--Παράσταση--</option>
        
//         </select>
//     )

// }

{/* export function userOptionSelecton() {
    // Αν ο χρηστης επιλέξει κάποια επιλογή απο τον επιλογέα
    const selectElement = document.querySelector('#plays');
    selectElement.addEventListener('change', (e) => {
                        let playSelect = e.target.value;

                    // σβήσε τις προηγουμενες επιλογές
                    let previous = document.querySelector('#dates');
                    previous.innerHTML = " ";
                    previous.classNameList.remove("dateSelected");
                    previous.classNameList.remove("col-xl-3");
                    previous.classNameList.remove("col-12");
                    let print = document.querySelector("#userSelection");
                    print.innerHTML = " ";
                    hideMap();

                    //εμφανισε την επιλογή και τις διαθέσημες ημερομινίες
                    // printSelection(playSelect);
                    displayAllPlays(playSelect);

                    //βάλε μπορντερ στην φωτογραφία για να φαίνεται επιλεγμένη
                    let selected = document.querySelectorAll(".feature")
        selected.forEach((element) => element.classNameList.remove("selected"));
        // .parentElement.classNameList.toggle("selected");

    });

} */}

