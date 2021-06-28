import React, { useRef, useEffect } from "react";
import Rect from "./Rect";

//canvas mount
export function Canvas(props) {
  
    const { draw } = props
    const canvasRef = useRef(null)

    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        //Our draw come here
        draw(context)
      }, [draw])
    
    return <canvas ref={canvasRef} className="map" width="700" height="400"/>
}


export default function SeatMap() {

    const draw = (ctx) => {
        ctx.font = "14px sans-serif";
        const width = 10;
        const height = 20;
        let nextDrawX = 0;
        let nextDrawY = 0;
        let rects = [];
    
        for (let i = 1; i <= 10; i++) {
            ctx.fillStyle = "#000";
            ctx.fillText("σειρά: " + i, nextDrawX, nextDrawY + 15);
            nextDrawX += nextDrawX + 65;
            for (let z = 1; z <= 50; z++) {
                // let seat = [z, i, "platia", false];
                var r = new Rect(nextDrawX, nextDrawY, width, height, {i,z});
                r.drawRect(ctx);
                rects.push(r);
                nextDrawX = r.x + r.width + 2;
            }
            nextDrawY = r.y + r.height + 2;
            nextDrawX = 0;
        }
      }

    return <Canvas draw={draw} />

 }


  



// export function CreateSeatMap(props) {

// let ctx = document.querySelector("#canvas").getContext("2d");
// ctx.font = "14px sans-serif";
// const size = [10, 20];
// let nextDrawX = 0;
// let nextDrawY = 0;
// let coordinates = [nextDrawX, nextDrawY];
// let rects = [];


// for (i = 1; i <= 10; i++) {
//     ctx.fillStyle = "#000";
//     ctx.fillText("σειρά: " + i, nextDrawX, nextDrawY + 15);
//     nextDrawX += nextDrawX + 65;
//     coordinates = [nextDrawX, nextDrawY];
//     for (z = 1; z <= 50; z++) {
//         let seat = [z, i, "platia", false];
//         var r = new Rect(size, coordinates, seat);
//         r.draw();
//         rects.push(r);
//         nextDrawX = r.x + r.width + 2;
//         coordinates = [nextDrawX, nextDrawY];
//     }
//     nextDrawY = r.y + r.height + 2;
//     nextDrawX = 0;
//     coordinates = [nextDrawX, nextDrawY];
// }


// for (i = 1; i <= 5; i++) {
//     ctx.fillStyle = "#000";
//     ctx.fillText("σειρά: " + i, nextDrawX, nextDrawY + 15);
//     nextDrawX += nextDrawX + 65;
//     coordinates = [nextDrawX, nextDrawY];
//     for (z = 1; z <= 50; z++) {
//         let seat = [z, i, "eksostis", false];
//         r = new Rect(size, coordinates, seat);
//         r.draw();
//         rects.push(r);
//         nextDrawX = r.x + r.width + 2;
//         coordinates = [nextDrawX, nextDrawY];
//     }
//     nextDrawY = r.y + r.height + 2;
//     nextDrawX = 0;
//     coordinates = [nextDrawX, nextDrawY];
// }

// return rects;
// }



