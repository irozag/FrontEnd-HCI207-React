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
    
    drawRect (ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    } 
    hasClick = function (click) {
                if (this.x <= click.x && click.x <= this.x + this.width && this.y <= click.y && click.y <= this.y + this.height) {
                    // this.isSelected(this.x, this.y);
                    return true;
                } else return false;
            }
 }

//  export default class Rect {
//     constructor(size = "", coordinates = "", seat = "") {
//         this.size = size;
//         this.coordinates = coordinates;
//         this.seat = seat;
//     }
//     set setSize(size) {
//         [this.width, this.height] = [this.size[0], this.size[1]];
//     }
//     get getSize() {
//         return [this.width, this.height] = [this.size[0], this.size[1]];
//     }
//     set setCoordinates(coordinates) {
//         [this.x, this.y] = [this.coordinates[0], this.coordinates[1]];
//     }
//     get getCoordinates() {
//         return [this.x, this.y] = [this.coordinates[0], this.coordinates[1]];
//     }
//     set setSeat(seat) {
//         [this.number, this.series, this.stage, this.state] = [this.seat[0], this.seat[1], this.seat[2], this.seat[3]];
//     }
//     get getSeat() {
//         return [this.number, this.series, this.stage, this.state] = [this.seat[0], this.seat[1], this.seat[2], this.seat[3]];
//     }

//     draw = function (ctx) {
//         this.getSeat;
//         let number = Math.floor(Math.random() * 100) + 1;
//         if (number < this.number) { this.state = true }
//         if (this.stage == "platia") {
//             ctx.fillStyle = "#7602ce";
//         } else ctx.fillStyle = "#10bbc7";
//         if (this.state == true) {
//             ctx.fillStyle = "#bbb";
//         }
//         this.getCoordinates;
//         this.getSize;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }

//     hasClick = function (x, y) {
//         if (this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height & this.state == false) {
//             this.isSelected(this.x, this.y);
//             return true;
//         } else return false;
//     }

//     isSelected = function (ctx, x, y) {
//         if (localStorage.length != 0) {
//             let previousCoo = localStorage.getItem("clickedItem").split(",");
//             let previousSt = localStorage.getItem("clickedItemStage");

//             ctx.clearRect(previousCoo[0], previousCoo[1], this.width, this.height);
//             if (previousSt == "platia") {
//                 ctx.fillStyle = "#7602ce";
//             } else ctx.fillStyle = "#10bbc7";
//             ctx.fillRect(previousCoo[0], previousCoo[1], this.width, this.height);
//         }
//         ctx.fillStyle = "#000";
//         ctx.fillRect(x, y, this.width, this.height);
//         localStorage.setItem('clickedItem', [x, y]);
//         localStorage.setItem('clickedItemStage', this.stage);
//     }

//     // isBooked = function () {
//     //    let booked = randomBookedSeats();
//     //    if (this.state){
//     //      return true;
//     //   } else return false;  
//     // }

// }