import React, { useRef, useEffect, useState } from "react";
import Rect from "./Rect";
import Seat from "./Seat";


export default function SeatMap() {

    const rects = {
        set current(rect) {
            this.rectsArr.push(rect);
        },
        rectsArr: [],
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

    const rectClicked =0;

    return (
        <div>
        <Canvas draw={draw} rects={rects.rectsArr} />
        <Seat seat={rectClicked} />
        </div>
    );

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
  
        // return  <Seat seat={rectClicked} />;
       
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our draw come here
        draw(context)
    }, [draw])

    return <canvas ref={canvasRef} onClick={handleClick} className="map" width="700" height="400" />
}




// <div class="container">
// <div class="row  g-3 justify-content-md-center">
//     <div class="col-lg-3 col-12">
//         <label for="ticket" class="form-label">Τοποθεσία:</label>
//         <input type="text" name="stage" class="form-control p-2" id="stage" disabled
//             size="7">
//     </div>
//     <div class="col-lg-3 col-12">
//         <label for="seat" class="form-label">Θέση:</label>
//         <input type="text" name="seat" class="form-control p-2" id="seatSelection"
//             disabled size="5">
//     </div>
//     <div class="col-lg-3 col-12">
//         <label for="seat" class="form-label">Σειρά:</label>
//         <input type="text" name="line" class="form-control p-2" id="lineSelection"
//             disabled size="5">
//     </div>
//     <div class="col-lg-3 col-12">
//         <label for="ticket" class="form-label">Εισητήριο:</label>
//         <select id="ticket" class="form-select p-2" name="ticket">
//             <option value="regural">Κανονικό</option>
//             <option value="student">Φοιτιτικό</option>
//         </select>
//     </div>
// </div><!-- row -->
// </div><!-- conteiner -->