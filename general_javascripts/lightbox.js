var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightboxImg");
var lightboxImgContainer = document.getElementById("lightboxImgContainer");
var lightboxImgContainerInner =  document.getElementById("lightboxImgContainerInner");

var lightboxes = [];
var lightboxCount = 0;
var currentLightboxIndex = 0;
var currentLightboxImageIndex = 0;

var lightboxImages = [];

function getImagesInLightboxes() {
    let currentLightboxIndex = 0;

    // find each lightbox
    function findNextLightbox() {
        let isThereImagesInThisLightbox = document.getElementsByClassName("lightbox-image-" + currentLightboxIndex + "-0").length > 0;
        
        if (isThereImagesInThisLightbox) {
            lightboxes[currentLightboxIndex] = []
            lightboxImages[currentLightboxIndex] = []
            let currentLightboxImageIndex = 0;

            // find each image in this lightbox
            function findNextLightboxImage() {
                let imageExists = document.getElementsByClassName("lightbox-image-" + currentLightboxIndex + "-" + currentLightboxImageIndex).length > 0;
                if (imageExists) {
                    lightboxes[currentLightboxIndex][currentLightboxImageIndex] = document.getElementsByClassName("lightbox-image-" + currentLightboxIndex + "-" + currentLightboxImageIndex)[0]
                    lightboxes[currentLightboxIndex][currentLightboxImageIndex].style.cursor = "pointer";
                    lightboxImages[currentLightboxIndex][currentLightboxImageIndex] = new Image();
                    console.log(currentLightboxIndex + "-" + currentLightboxImageIndex);
                    
                    currentLightboxImageIndex++;
                    findNextLightboxImage();
                }
            }

            // start searching for images in this lightbox
            findNextLightboxImage();

            currentLightboxIndex++;
            let isThereImagesInNextLightbox = document.getElementsByClassName("lightbox-image-" + currentLightboxIndex + "-0").length > 0;
            if (isThereImagesInNextLightbox) {
                findNextLightbox();
            }
        }
    }

    // start searching for lightboxes
    findNextLightbox();

    lightboxCount = lightboxes.length;
}

function imagesOpenLightboxWhenClicked() {
    for (let lightboxIndex = 0; lightboxIndex < lightboxCount;lightboxIndex++) {
        for (let imageIndex = 0; imageIndex < lightboxes[lightboxIndex].length; imageIndex++) {
            lightboxes[lightboxIndex][imageIndex].onclick = function() {
                displayLightbox(lightboxes[lightboxIndex][imageIndex].src, lightboxIndex, imageIndex);
            }
        }
    }
}

function displayLightbox(imageSrc, lightboxIndex, imageIndex) {
    currentLightboxIndex = lightboxIndex;
    currentLightboxImageIndex = imageIndex;

    var currentImage = lightboxImages[lightboxIndex][imageIndex];
    if (currentImage.src == "") currentImage.src = imageSrc;

    let newImage = new Image();
    newImage.src = currentImage.src;
    newImage.onload = () => {
        lightboxImg.src = newImage.src;
        // use aspect ratio math to keep lightbox image contained
        lightboxImgContainerInner.style.aspectRatio = newImage.width / newImage.height;

        if (lightbox.style.display == "none") {
            lightbox.style.display = "flex"; // lightbox is just being opened
        }
    }

    scrollIntoViewIfNotVisible(lightboxes[lightboxIndex][imageIndex], { behavior: "smooth", block: "center" });
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function changeLightboxImg(changeAmount) {
    currentLightboxImageIndex += changeAmount;
    currentLightboxImageIndex = posmod(currentLightboxImageIndex, lightboxes[currentLightboxIndex].length);

    console.log(currentLightboxImageIndex)

    // display new selected lightbox image
    displayLightbox(lightboxes[currentLightboxIndex][currentLightboxImageIndex].src, currentLightboxIndex, currentLightboxImageIndex);
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

closeLightbox();
getImagesInLightboxes();
imagesOpenLightboxWhenClicked();
