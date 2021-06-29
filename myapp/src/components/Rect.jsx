// import React from "react";
export default class Rect {
    constructor(x, y, width, height, id) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = id;
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

