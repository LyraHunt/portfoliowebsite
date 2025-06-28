class Creation {
    name = "";
    year = "";
    url = "";
    thumbnailUrl = "";

    typeTags = {
        traditional: false,

        interactive: false,
        simulation: false
    }
}

//array of all creations
var creations = [];

//verlet (creation)
creations.push(new Creation);
creations[0].name = "Verlet";
creations[0].year = 2022;
creations[0].url = "verletenginedesc.html";
creations[0].thumbnailUrl = "images/verlettest.png";
creations[0].typeTags = {
    traditional: false,
    mobileFriendly: true,
    simulation: true
}

//growth out of darkness (creation)
creations.push(new Creation);
creations[1].name = "Growth Out of Darkness";
creations[1].year = 2021;
creations[1].url = "growthoutofdarkness.html";
creations[1].thumbnailUrl = "images/Growth-Out-Of-Darkness-Horizontal-Square.png";
creations[1].typeTags = {
    traditional: true,
    mobileFriendly: true,
    simulation: false
}

//capstone (creation)
creations.push(new Creation);
creations[2].name = "Senior Capstone";
creations[2].year = 2024;
creations[2].url = "newgrowth.html";
creations[2].thumbnailUrl = "images/capstone-game-icon-circle-black.png";
creations[2].typeTags = {
    traditional: true,
    mobileFriendly: false,
    simulation: true
}

//capstone (creation)
creations.push(new Creation);
creations[3].name = "Through The Grapevine";
creations[3].year = 2022;
creations[3].url = "throughthegrapevinedesc.html";
creations[3].thumbnailUrl = "projects/throughthegrapevine/images/Art-Tiles-3-AAC-Finished.png";
creations[3].typeTags = {
    traditional: true,
    mobileFriendly: true,
    simulation: true
}
