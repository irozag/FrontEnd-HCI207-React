
import React from "react";

export function FeaturePosts(props) {
    // console.log(shows)

    return (
        <div id="row">
            {
                Object.entries(props.shows).map(([name, show]) => {
                    console.log(props.shows)
                    return <FeaturePost key={name} show={show} />
                })
            }
        </div>
    )

}


export function FeaturePost(props) {
    console.log(props.show.photo)
    return (
        <div>
            <div className="feature">
                <div className="dates">{props.show.mounth}</div>
                <div className="feature-photo" style={{ backgroundImage: `url("${props.show.photo}")` }}></div>
                <div className="room">{props.show.room}</div>
                <div className="title" >{props.show.name}</div>
                <div className="composer">{props.show.composer}</div>
            </div>
        </div>
    )

}
