var drawingsContainer = document.getElementById("drawingsContainer");

function generateDrawings() {
    for (let i = 0; i < drawings.length; i++) {
        var currentDrawingData = drawings[i]
        
        var newDrawing = document.createElement("div");
        newDrawing.classList.add("drawing");
        newDrawing.id = i
        drawingsContainer.appendChild(newDrawing);

        var newDrawingImg = document.createElement("img");
        newDrawingImg.src = "drawings/images/" + drawings[i].filename + ".png";
        newDrawing.appendChild(newDrawingImg);
    }
}

function reloadDrawingScales() {
    var drawingElements = drawingsContainer.children
    var currentWindowWidth = window.innerWidth

    removeGaps();

    for (let i = 0; i < drawingElements.length; i++) {
        var currentDrawingElement = drawingElements[i]
        var currentDrawingData = drawings[Number(currentDrawingElement.id)]
        var currentDrawingSize = {x: 1, y: 1, minWidth: -1}
        for (let j = 0; j < currentDrawingData.sizes.length; j++) {
            if (currentWindowWidth > currentDrawingData.sizes[j].minWidth && currentDrawingData.sizes[j].minWidth > currentDrawingSize.minWidth) {
                currentDrawingSize = currentDrawingData.sizes[j]
            }
        }
        currentDrawingElement.style.gridColumnEnd = "span " + currentDrawingSize.x
        currentDrawingElement.style.gridRowEnd = "span " + currentDrawingSize.y
    }

    fillInGaps();
}

function removeGaps() {
    var drawingElements = drawingsContainer.children
    var startingLength = drawingElements.length;
    for (let i = 0; i < startingLength; i++) {
        var currentDrawingElement = drawingElements[startingLength - i - 1];
        if (currentDrawingElement.classList.contains("blankDrawing")) {
            console.log("remove")
            currentDrawingElement.remove()
        }
    }
}

function fillInGaps() {
    var isFilled = false
    for (let i = 0; i < 100; i++) {
        var previousHeight = drawingsContainer.offsetHeight
        if (!isFilled) {
            var newDrawing = document.createElement("div");
            newDrawing.classList.add("drawing");
            newDrawing.classList.add("blankDrawing");
            drawingsContainer.appendChild(newDrawing);

            var newDrawingImg = document.createElement("img");
            newDrawingImg.src = "images/blank.png";
            newDrawing.appendChild(newDrawingImg);
        }
        if (drawingsContainer.offsetHeight > previousHeight) {
            isFilled = true;
            newDrawing.remove()
        }
    }
}

generateDrawings();
generateDrawings();
generateDrawings();
generateDrawings();
reloadDrawingScales();
fillInGaps();

var mobileWindow = window.matchMedia("(max-width: 768px)");

mobileWindow.addEventListener("change", function() {
    reloadDrawingScales();
});

var lastDrawingContainerHeight = 0

new ResizeObserver(function() {
    console.log("heen");
    if (lastDrawingContainerHeight !== drawingsContainer.offsetHeight) {
        removeGaps();
        fillInGaps();
    }
    lastDrawingContainerHeight = drawingsContainer.offsetHeight;
}).observe(drawingsContainer);