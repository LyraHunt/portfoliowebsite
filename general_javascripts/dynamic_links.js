function setDynamicHrefs() {
    for (let i = 0; i < Object.keys(InternalLinks).length; i++) {
        var currentClassName = Object.keys(InternalLinks)[i];
        var elementsWithClass = document.getElementsByClassName("page-link-" + currentClassName);
        if (elementsWithClass.length > 0) {
            for (let j = 0; j < elementsWithClass.length; j++) {
                elementsWithClass[j].href = InternalLinks[currentClassName];
            }
        }
    }
}

setDynamicHrefs();