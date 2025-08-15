var drawingsContainer = document.getElementById("drawingsContainer");

var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightboxImg");
var lightboxImgContainer = document.getElementById("lightboxImgContainer");

var drawingsFolderPath = "drawings/images/";

function generateDrawings() {
    for (let i = 0; i < drawings.length; i++) {
        var currentDrawingData = drawings[i]
        
        var newDrawing = document.createElement("div");
        newDrawing.classList.add("drawing");
        newDrawing.id = i
        drawingsContainer.appendChild(newDrawing);

        var newDrawingImg = document.createElement("img");
        newDrawingImg.src = drawingsFolderPath + drawings[i].filename + ".png";
        newDrawingImg.onclick = function() {
            displayLightbox(drawingsFolderPath + drawings[i].filename + ".png", i);
        }
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
    var drawingElements = drawingsContainer.children;
    var startingLength = drawingElements.length;
    for (let i = 0; i < startingLength; i++) {
        var currentDrawingElement = drawingElements[startingLength - i - 1];
        if (currentDrawingElement.classList.contains("blankDrawing")) {
            currentDrawingElement.remove();
        }
    }
}

function fillInGaps() {
    var isFilled = false
    for (let i = 0; i < 100; i++) {
        var previousHeight = drawingsContainer.offsetHeight
        if (!isFilled) {
            var newDrawing = document.createElement("div");
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
//generateDrawings();
//generateDrawings();
//generateDrawings();
reloadDrawingScales();
fillInGaps();

var mobileWindow = window.matchMedia("(max-width: 768px)");

mobileWindow.addEventListener("change", function() {
    reloadDrawingScales();
});

var lastDrawingContainerHeight = 0;

new ResizeObserver(function() {
    if (lastDrawingContainerHeight !== drawingsContainer.offsetHeight) {
        removeGaps();
        fillInGaps();
    }
    lastDrawingContainerHeight = drawingsContainer.offsetHeight;
}).observe(drawingsContainer);

var currentLightboxID = 0;

function displayLightbox(imageSrc, imageID) {
    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
    currentLightboxID = imageID;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeLightboxImg(changeAmount) {
    currentLightboxID += changeAmount;
    currentLightboxID = posmod(currentLightboxID, drawings.length);
    console.log(currentLightboxID)
    lightboxImg.src = drawingsFolderPath + drawings[currentLightboxID].filename + ".png";
}

lightboxImgContainer.click(function(e) {
   console.log("ya")
    e.stopPropagation();
});
