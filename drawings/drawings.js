var drawingsContainer = document.getElementById("drawingsContainer");
var drawingsSortedAppearance = [];

var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightboxImg");
var lightboxImgContainer = document.getElementById("lightboxImgContainer");
var lightboxImgContainerInner =  document.getElementById("lightboxImgContainerInner");

var drawingsFolderPath = "/drawings/images/";

function generateDrawings() {
    for (let i = 0; i < drawings.length; i++) {
        var currentDrawingData = drawings[i]
        
        var newDrawing = document.createElement("div");
        newDrawing.classList.add("drawing");
        newDrawing.id = i
        drawingsContainer.appendChild(newDrawing);

        var newDrawingImg = document.createElement("img");
        newDrawingImg.loading = "lazy";
        newDrawingImg.src = drawingsFolderPath + drawings[i].filename + ".png";
        newDrawingImg.onclick = function() {
            displayLightbox(drawingsFolderPath + drawings[i].filename + ".png", i);
        }
        newDrawing.appendChild(newDrawingImg);

        drawingsSortedAppearance.push(newDrawing);
    }

    drawingsContainer.children[drawingsContainer.children.length - 1].children[0].onload = () => {
        updateDrawingsSortedAppearance();
    };
}

function updateDrawingsSortedAppearance() {
    drawingsSortedAppearance.sort((a, b) => {
        //first, sort by y position
        if (a.getBoundingClientRect().top === b.getBoundingClientRect().top) {
            if (a.getBoundingClientRect().left > b.getBoundingClientRect().left) {
                return 1;
            }

            else {
                return -1;
            }
        }
        else if (a.getBoundingClientRect().top > b.getBoundingClientRect().top) {
            return 1;
        }

        else {
            return -1;
        }
    });

    for (let i = 0; i < drawingsSortedAppearance.length; i++) {
        drawingsSortedAppearance[i].setAttribute("appearance", i);
    }
}

function reloadDrawingScales() {
    var drawingElements = drawingsContainer.children;
    var currentWindowWidth = window.innerWidth;

    removeGaps();

    for (let i = 0; i < drawingElements.length; i++) {
        var currentDrawingElement = drawingElements[i];
        var currentDrawingData = drawings[Number(currentDrawingElement.id)];
        var currentDrawingSize = {x: 1, y: 1, minWidth: -1};
        for (let j = 0; j < currentDrawingData.sizes.length; j++) {
            if (currentWindowWidth > currentDrawingData.sizes[j].minWidth && currentDrawingData.sizes[j].minWidth > currentDrawingSize.minWidth) {
                currentDrawingSize = currentDrawingData.sizes[j];
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
        var previousHeight = drawingsContainer.offsetHeight;
        if (!isFilled) {
            var newDrawing = document.createElement("div");
            newDrawing.classList.add("blankDrawing");
            drawingsContainer.appendChild(newDrawing);

            var newDrawingImg = document.createElement("img");
            newDrawingImg.src = "/images/blank.png";
            newDrawing.appendChild(newDrawingImg);
            newDrawingImg.style.display = "none";
        }
        if (drawingsContainer.offsetHeight > previousHeight) {
            isFilled = true;
            newDrawing.remove();
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
        updateDrawingsSortedAppearance();
    }
    lastDrawingContainerHeight = drawingsContainer.offsetHeight;
}).observe(drawingsContainer);

var currentLightboxID = 0;

function displayLightbox(imageSrc, imageID) {
    //currentLightboxID = Number(drawingsSortedAppearance[imageID].id);
    //currentLightboxID = drawingsSortedAppearance.findIndex((drawingsIndex) => {Number(drawingsIndex.id) == imageID});
    currentLightboxID = Number(drawingsContainer.children[imageID].getAttribute("appearance"));

    // use aspect ratio math to keep lightbox image contained
    var currentImage = new Image();
    currentImage.src = imageSrc;
    currentImage.onload = () => {
        lightbox.style.display = "flex";
        lightboxImg.src = imageSrc;
        lightboxImgContainerInner.style.aspectRatio = currentImage.width / currentImage.height;
    }

    scrollIntoViewIfNotVisible(drawingsContainer.children[drawingsSortedAppearance[currentLightboxID].id], { behavior: "smooth", block: "center" });
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function scrollIntoViewIfNotVisible(target, options) { 
    if (target.getBoundingClientRect().bottom > window.innerHeight) {
        target.scrollIntoView(options);
    }
    
    if (target.getBoundingClientRect().top < 0) {
        target.scrollIntoView(options);
    } 
}

function changeLightboxImg(changeAmount) {
    currentLightboxID += changeAmount;
    currentLightboxID = posmod(currentLightboxID, drawings.length);

    // use aspect ratio math to keep lightbox image contained
    var currentImage = new Image();
    currentImage.src = drawingsFolderPath + drawings[drawingsSortedAppearance[currentLightboxID].id].filename + ".png";
    currentImage.onload = () => {
        lightboxImg.src = drawingsFolderPath + drawings[drawingsSortedAppearance[currentLightboxID].id].filename + ".png";
        lightboxImgContainerInner.style.aspectRatio = currentImage.width / currentImage.height;
    }

    scrollIntoViewIfNotVisible(drawingsContainer.children[drawingsSortedAppearance[currentLightboxID].id], { behavior: "smooth", block: "center" });
}

lightboxImgContainer.click(function(e) {
    e.stopPropagation();
});

InputJS.inputEventBus.subscribe("keyInput", keyPressed => {
    if (keyPressed == "ArrowRight") {
        if (lightbox.style.display !== "none") {
            changeLightboxImg(1);
        }
    }

    else if (keyPressed == "ArrowLeft") {
        if (lightbox.style.display !== "none") {
            changeLightboxImg(-1);
        }
    }

    else if (keyPressed == "Escape") {
        closeLightbox();
    }
})
