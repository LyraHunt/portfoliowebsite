/*
var can = document.getElementById("myCanvas");
var ctx = can.getContext("2d");

var canX = 1920;
var canY = 1080;
can.width = canX;
can.height = canY;


var screenScale = 1;
*/

//all canvas-related methods
var CanvasJS = {
    componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },

    rgbToHex(r, g, b) {
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        if (r !== undefined && g == undefined && b == undefined) {
            return "#" + componentToHex(r) + componentToHex(r) + componentToHex(r);
        }
        else {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
    },

    fillCanvas(color, canvas, ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(0 - (canvas.width / 2), 0 - (canvas.height / 2), canvas.width, canvas.height);
    },

    drawSquare(x1, y1, size, ctx) {
        ctx.beginPath();
        ctx.fillRect(x1, y1, size, size);
        ctx.closePath();
    },

    drawCircle(x,y,r,ctx) {
        ctx.beginPath();
        ctx.arc(x,y,r,0,360);
        ctx.fill();
        ctx.closePath();
    },

    strokeCircle(x,y,r,w,ctx) {
        ctx.beginPath();
        ctx.arc(x,y,r,0,360);
        ctx.lineWidth = w;
        ctx.stroke();
        ctx.closePath();
    },

    newCanvasElement(id,divId,width,height) {
        let canvas = document.createElement("canvas");
        canvas.id = id;
        canvas.width = width;
        canvas.height = height;

        let aspectRatio = width/height;
        canvas.style = "aspect-ratio: " + aspectRatio + "; width: min(100%, calc(100vh - 48px) * " + aspectRatio + ")";

        document.getElementById(divId).appendChild(canvas);
        return canvas;
    }
}

//class to generate new canvas data (takes id and creates a reference to the canvas element)
class Canvas {
    constructor(elementId, width, height) {
        this.can = document.getElementById(elementId);
        this.ctx = this.can.getContext("2d");

        this.width = width;
        this.height = height;
        this.can.width = width;
        this.can.height = height;
    }
}



/*
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    if (r !== undefined && g == undefined && b == undefined) {
        return "#" + componentToHex(r) + componentToHex(r) + componentToHex(r);
    }
    else {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
}

function clearCanvas(color,id,x,y) {
    let ctxId = id || ctx;
    if (ctxId !== ctx) {
        ctxId.fillStyle = color;
        ctxId.fillRect(0, 0, x, y);
    }
    else {
        ctxId.fillStyle = color;
        ctxId.fillRect(0 - (canX / 2)/screenScale, 0 - (canY / 2)/screenScale, canX/screenScale, canY/screenScale);
    }
}

function drawSquare(x1, y1, size, ctxObj) {
    if (ctxObj === undefined) {
        ctx.beginPath();
        ctx.fillRect(x1, y1, size, size);
        ctx.closePath();
    }
    else {
        ctxObj.beginPath();
        ctxObj.fillRect(x1, y1, size, size);
        ctxObj.closePath();
    }
}

function drawCircle(x,y,r,ctxObj) {
    ctxObj.beginPath();
    ctxObj.arc(x,y,r,0,360);
    ctxObj.fill();
    ctxObj.closePath();
}

function strokeCircle(x,y,r,w,ctxObj) {
    ctxObj.beginPath();
    ctxObj.arc(x,y,r,0,360);
    ctxObj.lineWidth = w;
    ctxObj.stroke();
    ctxObj.closePath();
}

function newCanvas(id,divId,width,height) {
    let canvas = document.createElement("canvas");
    canvas.id = id;
    canvas.width = width;
    canvas.height = height;
    document.getElementById(divId).appendChild(canvas);
    return canvas;
}

function outline(x,y) {
    ctx.beginPath();
    ctx.rect(x*256-player.x,y*256+player.y,256,256);
    ctx.stroke();
}
*/