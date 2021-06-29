import React, { useRef, useEffect} from "react";
import Rect from "./Rect";
import Seat from "./Seat";


export default function SeatMap(props) {


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
            ctx.fillStyle = "#7602ce";
            nextDrawX += nextDrawX + 65;
            for (let z = 1; z <= 50; z++) {
                let type = "Πλατεία"
                var r = new Rect(nextDrawX, nextDrawY, width, height, { i, z, type });
                rects.current = r;
                r.drawRect(ctx);
                nextDrawX = r.x + r.width + 2;
            }
            nextDrawY = r.y + r.height + 2;
            nextDrawX = 0;
        }

        nextDrawY = nextDrawY + 10;

        for (let i = 1; i <= 5; i++) {
            ctx.fillStyle = "#000";
            ctx.fillText("σειρά: " + i, nextDrawX, nextDrawY + 15);
            ctx.fillStyle = "#10bbc7";
            nextDrawX += nextDrawX + 65;
            for (let z = 1; z <= 50; z++) {
                let type = "Εξώστης"
                r = new Rect(nextDrawX, nextDrawY, width, height, { i, z, type });
                r.drawRect(ctx);
                rects.current = r;
                nextDrawX = r.x + r.width + 2;
            }
            nextDrawY = r.y + r.height + 2;
            nextDrawX = 0;
        }
    }

    return (
        <div>
        <Canvas draw={draw} seatSelected={props.seatSelected} rects={rects.rectsArr} />
        <Seat state={props.state}/>
        </div>
    );

}


//canvas mount
export function Canvas(props) {

    const { draw, rects } = props
    const canvasRef = useRef(null)

    const handleClick = (e) => {
        const clickedItem = rects.find((rect) => {
            return rect.hasClick(e.nativeEvent.offsetX,e.nativeEvent.offsetY);
        });
        // console.log(clickedItem, "handler") 
        if (clickedItem) {
            props.seatSelected(clickedItem)
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our draw come here
        draw(context)
    }, [draw])

    return <canvas ref={canvasRef} onClick={handleClick} className="map" width="700" height="350" />
}




