import React from "react";
import Hero from './Hero';
import SearchPlay from './SearchPlay';
import Banners from './Banners';
import { shows } from '../shows';
import { FeaturePosts } from "./FeaturePosts";

function Home() {
        // console.log(shows)
    return (
        <div>
            <Hero></Hero>
            <SearchPlay></SearchPlay>
            <FeaturePosts shows={shows}></FeaturePosts>
            <Banners></Banners>
        </div>
    );
} export default Home;