var additionalScriptsElement = document.getElementById("additionalScripts");

var GlobalScripts = [
"/general_javascripts/event_bus.js", 
"/general_javascripts/links_data.js",
"/general_javascripts/math.js",
"/general_javascripts/input.js",

"/general_javascripts/theme.js", 
"/general_javascripts/header_n_footer.js", 

"/general_javascripts/dynamic_links.js" // should go last, after all html is loaded
]

var AdditionalScriptsReference = {
    "drawings": "/drawings/drawings.js",
    "drawings_data": "/drawings/drawings_data.js",

    "projects": "/projects/projects.js",
    "workshop": "/projects/workshop.js"
}

var additionalScripts = [];

function loadGlobalScripts() {
    let currentScriptIndex = 0;

    function loadNextScript() {
        if (currentScriptIndex < GlobalScripts.length) {
            var currentScript = GlobalScripts[currentScriptIndex];

            var newScript = document.createElement('script');
            newScript.onload = () => {
                currentScriptIndex++;
                loadNextScript();
            };
            newScript.onerror = () => {
                console.error("Error loading script from: " + currentScript);
                currentScriptIndex++;
                loadNextScript();
            }
            newScript.src = currentScript;

            document.body.appendChild(newScript);
        }

        else {
            if (additionalScriptsElement !== null) {
                console.log("Found additional scripts: " + additionalScriptsElement.dataset.scriptList);
                additionalScripts = additionalScriptsElement.dataset.scriptList.split(", ");
                loadAdditionalScripts();
                console.log(additionalScripts[1])
                console.log(AdditionalScriptsReference[additionalScripts[1]]);
            }
        }
    }

    loadNextScript();
}

loadGlobalScripts();

function loadAdditionalScripts() {
    let currentScriptIndex = 0;

    function loadNextScript() {
        if (currentScriptIndex < additionalScripts.length) {
            var currentScript = additionalScripts[currentScriptIndex];

            var newScript = document.createElement('script');
            newScript.onload = () => {
                currentScriptIndex++;
                loadNextScript();
            };
            newScript.onerror = () => {
                console.error("Error loading script from: " + currentScript);
                currentScriptIndex++;
                loadNextScript();
            }
            newScript.src = AdditionalScriptsReference[currentScript];

            document.body.appendChild(newScript);
        }
    }

    loadNextScript();
}