var can = document.getElementById("penCanvas");
var ctx = can.getContext("2d");

var width = 300;
var height = 300;

can.width = width;
can.height = height;

var color = 'beige';
ctx.fillStyle = color;
ctx.fillRect(0, 0, width, height);

function lerp(p0, p1, t) {
    return (p0 * (1 - t) + p1 * t);
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

let roughness = 0.5;

function line(x1, y1, x2, y2, width) {
    let dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let scale = 0.5;
    x1 += Math.random() / 1 - 0.5;
    x2 += Math.random() / 1 - 0.5;
    y1 += Math.random() / 1 - 0.5;
    y2 += Math.random() / 1 - 0.5;
    if (Math.random() > 0.95) {
        let blot = Math.random() + 1 + width;
        circle(x1 + Math.random() * Math.random() * roughness, y1 + Math.random() * Math.random() * roughness, width * blot);
        circle(lerp(x1, x2, 1 / dist) + Math.random() * Math.random() * roughness, lerp(y1, y2, 1 / dist) + Math.random() * Math.random() * roughness, width * (blot - 0.25));
        circle(lerp(x1, x2, 2 / dist) + Math.random() * Math.random() * roughness, lerp(y1, y2, 2 / dist) + Math.random() * Math.random() * roughness, width * (blot - 0.5));
    }
    if (Math.random() > 0.95) {
        let blot = Math.random() * 2 + 1;
        let endNum = dist;
        circle(x2 + Math.random() * Math.random() * roughness, y2 + Math.random() * Math.random() * roughness, width * blot);
        circle(lerp(x1, x2, (endNum - 1) / dist) + Math.random() * Math.random() * roughness, lerp(y1, y2, (endNum - 1) / dist) + Math.random() * Math.random() * roughness, width * (blot - 0.25));
        circle(lerp(x1, x2, (endNum - 2) / dist) + Math.random() * Math.random() * roughness, lerp(y1, y2, (endNum - 2) / dist) + Math.random() * Math.random() * roughness, width * (blot - 0.5));
    }
    for (let i = 0; i < dist; i += scale) {
        circle(lerp(x1, x2, i / dist) + Math.random() * Math.random() * roughness, lerp(y1, y2, i / dist) + Math.random() * Math.random() * roughness, width * (Math.random() / 4 + 1));
        ctx.globalAlpha = Math.random() * 0.2 + 0.6;
    }
}

ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';

var drawingsAmount = 4;

function square(x, y, size, width) {
    line(x - size / 2, y - size / 2, x + size / 2, y - size / 2, width);
    line(x + size / 2, y - size / 2, x + size / 2, y + size / 2, width);
    line(x + size / 2, y + size / 2, x - size / 2, y + size / 2, width);
    line(x - size / 2, y + size / 2, x - size / 2, y - size / 2, width);
}

function newDesign(drawing = 0) {
    var color = 'beige';
    ctx.globalAlpha = 1.0
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';

    if (drawing === 0) {
        drawing = getRandomFromRange(1,drawingsAmount);
    }

    // temp
    //drawing = 101

    switch (drawing) {
        case 1:
            concentricSquares();
            break;
        
        case 2:
            hatchingGradient();
            break;
        
        case 3:
            onePointPerspective();
            break;
        
        case 4:
            coffeeRings();
            break;

        case 101:
            concentricSquares(1);
            hatchingGradient(1);
            onePointPerspective();
            coffeeRings();
            break;
        
        case 102:
            //concentricSquares(1);
            hatchingGradient();
            coffeeRings();
            break;
    }
}

function concentricSquares(variationNum = 0) {
    if (variationNum === 0) {
        variationNum = getRandomFromRange(1, 2);
    }

    switch (variationNum) {
        case 1:
            // 3x3 grid of squares
            for (let a = -1; a < 2; a++) {
                for (let b = -1; b < 2; b++) {
                    for (let i = 0; i < (8 + Math.random() * 4); i++) {
                        let size = i * 6.5 + Math.random() * 5;
                        square(width / 2 + a * 90, height / 2 + b * 90, size, 0.5);
                    }
                }
            }
            break;
        
        case 2:
            // 2x2 grid of squares
            for (let a = -1; a < 2; a += 2) {
                for (let b = -1; b < 2; b += 2) {
                    for (let i = 0; i < (12 + Math.random() * 8); i++) {
                        let size = i * 7.5 + Math.random() * 8;
                        square(width / 2 + a * 75, height / 2 + b * 75, size, 0.5);
                    }
                }
            }
            break;
    }
}

function hatchingGradient(variationNum = 0) {
    if (variationNum === 0) {
        variationNum = getRandomFromRange(1, 3);
    }

    let lineDist = 0

    switch (variationNum) {
        case 1:
            lineDist = 0.5;
            for (let i = 15; i < 285; i += 0) {
                line(15, i, i, 15, 0.5);
                lineDist += 0.05;
                i += lineDist;
            }
            lineDist = 0.5;
            for (let i = 15; i < 285; i += 0) {
                line(285, 300 - i, 300 - i, 285, 0.5);
                lineDist += 0.05;
                i += lineDist;
            }
            line(285, 15, 15, 285, 0.5);
            break;
        
        case 2:
            for (let i = 15; i < 285; i += 0) {
                line(15, 15, 300 - i, 285, 0.5);
                i += 6;
            }
            for (let i = 15; i < 285; i += 0) {
                line(285, 285, i, 15, 0.5);
                i += 6;
            }
            break;
        
        case 3:
            for (let i = 15; i < 285; i += 0) {
                line(15, 15, 300 - i, i, 0.5);
                i += 6;
            }
            for (let i = 15; i < 285; i += 0) {
                line(15, 285, 300 - i, 300 - i, 0.5);
                i += 6;
            }
            break;
    }
}

function onePointPerspective() {
    let shapeArr = new Array(12);
    for (let i = 0; i < shapeArr.length; i++) {
        //let size = Math.random()*30+10;
        let size = 30;
        let x = Math.random() * (width - size) + size / 2;
        let y = Math.random() * (height - size) + size / 2;
        shapeArr[i] = { x: x, y: y, size: size };
    }
    for (let i = 0; i < shapeArr.length; i++) {
        shapeArr[i].dist = Math.sqrt((shapeArr[i].x - 150) ** 2 + (shapeArr[i].y - 150) ** 2);
        //shapeArr[i].size = 50/(((shapeArr[i].dist**2)*50)**0.1);
        shapeArr[i].size = (250 - shapeArr[i].dist) / 5;
    }
    function mycomparator(a, b) {
        return parseInt(b.dist, 10) - parseInt(a.dist, 10);
    }
    shapeArr.sort(mycomparator);
    for (let i = 0; i < shapeArr.length; i++) {
        let size = shapeArr[i].size;
        let x = shapeArr[i].x;
        let y = shapeArr[i].y;
        let droppedX = 0;
        let droppedY = 0;
        if (x < 150 - size / 2 || y < 150 - size / 2) {
            //line(150,150,x+size/2,y+size/2,0.5);
        }
        else {
            droppedX = 1;
            droppedY = 1;
        }
        if (x < 150 - size / 2 || y > 150 + size / 2) {
            //line(150,150,x+size/2,y-size/2,0.5);
        }
        else {
            droppedX = 1;
            droppedY = -1;
        }
        if (x > 150 + size / 2 || y < 150 - size / 2) {
            //line(150,150,x-size/2,y+size/2,0.5);
        }
        else {
            droppedX = -1;
            droppedY = 1;
        }
        if (x > 150 + size / 2 || y > 150 + size / 2) {
            //line(150,150,x-size/2,y-size/2,0.5);
        }
        else {
            droppedX = -1;
            droppedY = -1;
        }
        ctx.globalAlpha = 1;
        ctx.fillStyle = "beige";
        ctx.beginPath();
        ctx.moveTo(x + size / 2 * droppedX, y + size / 2 * droppedY);
        ctx.lineTo(x + size / 2 * droppedX * -1, y + size / 2 * droppedY);
        ctx.lineTo(150, 150);
        ctx.lineTo(x + size / 2 * droppedX, y + size / 2 * droppedY * -1);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "black";

        if (x < 150 - size / 2 || y < 150 - size / 2) {
            line(150, 150, x + size / 2, y + size / 2, 0.5);
        }
        else {
            droppedX = 1;
            droppedY = 1;
        }
        if (x < 150 - size / 2 || y > 150 + size / 2) {
            line(150, 150, x + size / 2, y - size / 2, 0.5);
        }
        else {
            droppedX = 1;
            droppedY = -1;
        }
        if (x > 150 + size / 2 || y < 150 - size / 2) {
            line(150, 150, x - size / 2, y + size / 2, 0.5);
        }
        else {
            droppedX = -1;
            droppedY = 1;
        }
        if (x > 150 + size / 2 || y > 150 + size / 2) {
            line(150, 150, x - size / 2, y - size / 2, 0.5);
        }
        else {
            droppedX = -1;
            droppedY = -1;
        }
        ctx.fillStyle = "beige";
        ctx.globalAlpha = 1;
        ctx.beginPath();
        //hmmmm
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
        ctx.fillStyle = "black";
        square(x, y, size, 0.5);
    }
}

function coffeeRings() {
    let circleAmount = Math.round(Math.random() * 4 + 6);
    let noiseSeed = Math.random() * 1000;

    for (let a = 0; a < circleAmount; a++) {
        let currentCircleX = Math.random() * (width - 40) + 20;
        let currentCircleY = Math.random() * (height - 40) + 20;
        let currentRadius = Math.random() * 60 + 40;
        let currentHatchAmount = currentRadius * Math.PI / 2 / 1.5;
        let currentHatchThickness = Math.random() * 10 + 3;

        for (let b = 0; b < currentHatchAmount; b += 0) {
            let noiseRadius = 3;
            let noiseX = Math.sin(b / currentHatchAmount * Math.PI * 2) * noiseRadius + currentCircleX;
            let noiseY = Math.cos(b / currentHatchAmount * Math.PI * 2) * noiseRadius + currentCircleY;
            let currentStartRadius = (ImprovedNoise.noise(noiseX, noiseY, noiseSeed) + 0.5) * currentRadius / 20 + currentRadius / 2;
            let currentEndRadius = currentStartRadius + (ImprovedNoise.noise(noiseX + 106.5, noiseY, noiseSeed) + 0.5) * 6 + currentHatchThickness;
            //currentEndRadius = currentStartRadius + 20;

            b += Math.random() * 0.4 + 0.6;

            let x1 = Math.sin(b / currentHatchAmount * Math.PI * 2) * currentStartRadius + currentCircleX;
            let y1 = Math.cos(b / currentHatchAmount * Math.PI * 2) * currentStartRadius + currentCircleY;
            let x2 = Math.sin(b / currentHatchAmount * Math.PI * 2) * currentEndRadius + currentCircleX;
            let y2 = Math.cos(b / currentHatchAmount * Math.PI * 2) * currentEndRadius + currentCircleY;

            line(x1, y1, x2, y2, 0.6);
        }
    }
}
