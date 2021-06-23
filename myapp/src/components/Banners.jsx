import React from "react";
import banner_600_el from '../images/banner_600_el.jpeg';
import banner_leukoma_GR_Β from '../images/banner_leukoma_GR_Β.jpeg'
import banner_museum_GR_Β from '../images/banner_museum_GR_Β.jpeg'

function Banners() {
    return (
        <div>
            <section id="banners">
                <a href="/"><img src={banner_600_el} alt="Επανεκίνηση" /></a>
                <a href="/"><img src={banner_leukoma_GR_Β} alt="1821-Λεύκομα" /></a>
                <a href="/"><img src={banner_museum_GR_Β} alt="Μουσείο" /></a>
            </section>
        </div>
    );
} export default Banners;