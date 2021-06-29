// import React from "react";
export default class Rect {
    constructor(x, y, width, height, id) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = id;
        // this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    drawRect(ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    hasClick = function (x, y) {
        if (this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height) {
            
            return true;
        } else return false;
    }


}

//  isSelected = function (x, y) {
//     if (localStorage.length != 0) {
//         let clickedItem = localStorage.getItem("clickedItem").split(",");
//         let previousSt = localStorage.getItem("clickedItemStage");

//         ctx.clearRect(previousCoo[0], previousCoo[1], this.width, this.height);
//         if (previousSt == "platia") {
//             ctx.fillStyle = "#7602ce";
//         } else ctx.fillStyle = "#10bbc7";
//         ctx.fillRect(previousCoo[0], previousCoo[1], this.width, this.height);
//     }
//     ctx.fillStyle = "#000";
//     ctx.fillRect(x, y, this.width, this.height);
//     localStorage.setItem('clickedItem', [x, y]);
//     localStorage.setItem('clickedItemStage', this.stage);
// }