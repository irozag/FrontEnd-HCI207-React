import React, { useRef, useEffect, useState } from "react";
import Rect from "./Rect";


export default function SeatMap() {
       
        const  rects = {
                set current(rect){
                    this.rectsArr.push(rect);
                },
                 rectsArr:[],
                get latest() {
                    return rects;
                  }
            }

        const draw = (ctx) => {
            ctx.font = "14px sans-serif";
            const width = 10;
            const height = 20;
            let nextDrawX = 0;
            let nextDrawY = 0;

            for (let i = 1; i <= 10; i++) {
                ctx.fillStyle = "#000";
                ctx.fillText("σειρά: " + i, nextDrawX, nextDrawY + 15);
                nextDrawX += nextDrawX + 65;
                for (let z = 1; z <= 50; z++) {
                    let type = "stage1"
                    var r = new Rect(nextDrawX, nextDrawY, width, height, { i, z, type });
                    rects.current = r;
                    r.drawRect(ctx);
                    nextDrawX = r.x + r.width + 2;
                }
                nextDrawY = r.y + r.height + 2;
                nextDrawX = 0;
            }

            for (let i = 1; i <= 5; i++) {
                ctx.fillStyle = "#000";
                ctx.fillText("σειρά: " + i, nextDrawX, nextDrawY + 15);
                nextDrawX += nextDrawX + 65;
                for (let z = 1; z <= 50; z++) {
                    let type = "stage2"
                    r = new Rect(nextDrawX, nextDrawY, width, height, { i, z, type });
                    r.drawRect(ctx);
                    rects.current = r;
                    nextDrawX = r.x + r.width + 2;
                }
                nextDrawY = r.y + r.height + 2;
                nextDrawX = 0;
            }
        }

    return <Canvas draw={draw} rects={rects.rectsArr} />

}


//canvas mount
export function Canvas(props) {

    const { draw, rects } = props
    console.log(props)
    const canvasRef = useRef(null)
    const [click, setClick] = useState({ x: "", y: "" })
    //Γιατί την πρώτη φορά χάνει το κλικ;

    const handleClick = (e) => {
        setClick({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        const rectClicked = rects.find((rect) => {
            return rect.hasClick(click);
        });
        console.log(rectClicked)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our draw come here
        draw(context)
    }, [draw])

    return <canvas ref={canvasRef} onClick={handleClick} className="map" width="700" height="400" />
}


// function getClickedSeat(x, y, rects) {
//     rectClicked = rects.find((rect) => {
//         return rect.hasClick(x, y);
//     });
//     if (rectClicked !== undefined) {
//         return seat = rectClicked.seat;
//     } else return seat = ["", "", "", ""];
// }

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



