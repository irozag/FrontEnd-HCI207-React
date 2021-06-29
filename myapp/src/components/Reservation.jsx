import React from "react";
import { shows } from '../shows';
// import { FeaturePosts } from "./FeaturePosts";
import Form from "./Form";

function Reservation() {
    return (
        <div>
              {/* <FeaturePosts shows={shows}></FeaturePosts> */}
              <section id="reservation" ><Form shows={shows}></Form></section>
         
       </div>
    );
} export default Reservation;