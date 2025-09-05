function setDynamicHrefs() {
    for (let a = 0; a < LinkSets.length; a++) {
        var currentLinkSet = LinkSets[a].data;
        var currentLinkClassKey = LinkSets[a].classKey;
        console.log(currentLinkClassKey)
        for (let i = 0; i < Object.keys(currentLinkSet).length; i++) {
            var currentClassName = Object.keys(currentLinkSet)[i];
            var elementsWithClass = document.getElementsByClassName(currentLinkClassKey + "-" + currentClassName);
            if (elementsWithClass.length > 0) {
                for (let j = 0; j < elementsWithClass.length; j++) {
                    elementsWithClass[j].href = currentLinkSet[currentClassName];
                }
            }
        }
    }
}

setDynamicHrefs();