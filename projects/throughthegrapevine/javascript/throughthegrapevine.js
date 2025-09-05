function randomArrayIndex(arrayLength) {
    let randNum = Math.floor(Math.random() * arrayLength);
    return randNum;
}

var tileData = {
    tile0: {
        connectFrom: "START",
        connectTo: "AAA",
        url: "images/Art-Tiles-1-AAA-Finished.png",
        amount: 0
    },

    tile1: {
        connectFrom: "AAA",
        connectTo: "AAB",
        url: "images/Art-Tiles-2-AAB-Finished.png",
        amount: 0
    },

    tile2: {
        connectFrom: "AAB",
        connectTo: "AAC",
        url: "images/Art-Tiles-3-AAC-Finished.png",
        amount: 0
    },

    tile3: {
        connectFrom: "AAC",
        connectTo: "AAA",
        url: "images/Art-Tiles-4-AAA-Finished.png",
        amount: 0
    },

    tile4: {
        connectFrom: "AAC",
        connectTo: "AAD",
        url: "images/Art-Tiles-5-AAD-Finished.png",
        amount: 0
    },

    tile5: {
        connectFrom: "AAD",
        connectTo: "AAA",
        url: "images/Art-Tiles-6-AAA-Finished.png",
        amount: 0
    }
}

var imageContainer = document.getElementById("imageContainer");
var imageContainerWidth = 0;

function reportWindowSize() {
    imageContainerWidth = Math.min(window.innerWidth,1200);
}

//when window is resized
window.onresize = reportWindowSize;

// bypass auto scrolling.
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

var nextConnection = "START";
var tileDataLength = Object.keys(tileData).length;
var tileAmount = 0;
var loadAheadAmount = 4;

function addTile() {
    var newTile = document.createElement("img");
    var potentialPicks = [];
    var lowestCountYet;

    for (let i = 0; i < tileDataLength; i++) {
        if (nextConnection === tileData["tile" + i].connectFrom) {
            //set lowest count yet if applicable
            if (lowestCountYet === undefined) {
                lowestCountYet = tileData["tile" + i].amount;
            }
            else {
                lowestCountYet = Math.min(lowestCountYet, tileData["tile" + i].amount);
            }

            potentialPicks.push(i);
        }
    }

    var leastCommonPicks = [];
    for (let i = 0; i < potentialPicks.length; i++) {
        if (tileData["tile" + potentialPicks[i]].amount === lowestCountYet) {
            leastCommonPicks.push(potentialPicks[i]);
        }
    }

    var tilePick = leastCommonPicks[randomArrayIndex(leastCommonPicks.length)];

    //load tile and adjust values
    tileData["tile" + tilePick].amount += 1;
    newTile.src = tileData["tile" + tilePick].url;
    nextConnection = tileData["tile" + tilePick].connectTo;

    imageContainer.appendChild(newTile);
    tileAmount += 1;
}

var relativeScroll = 0;
reportWindowSize();

function mainLoop () {
    if (window.scrollY + window.innerHeight > (tileAmount - loadAheadAmount) * imageContainerWidth) {
        addTile();
    }
}

setInterval(mainLoop,1000/60);
