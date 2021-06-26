
import React from "react";

export function FeaturePosts (props) {
    // console.log(shows)

    return (
        <div>
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
 
    return (
        <div>
            {/* {JSON.stringify(show)} */}
            <div> {props.show.composer}</div>
        </div>
    )

}
