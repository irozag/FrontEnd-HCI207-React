import React from "react";

function Program() {
    return (
        <section id="calendar" >
        <h2>ΜΑΡΤΙΟΣ</h2>
        <table class="calendar">
            <tbody id="squares">
                <tr>
                    <th class="calendarTitle">
                        Δευτερα
                    </th>
                    <th class="calendarTitle">
                        Τριτη
                    </th>
                    <th class="calendarTitle">
                        Τεταρτη
                    </th>
                    <th class="calendarTitle">
                        Πεμπτη
                    </th>
                    <th class="calendarTitle">
                        Παρασκευη
                    </th>
                    <th class="calendarTitle">
                        Σαββατο
                    </th>
                    <th class="calendarTitle">
                        Κυριακη
                    </th>
                </tr>
            </tbody>
        </table>
    </section>
    );
} export default Program;