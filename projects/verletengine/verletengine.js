var engineCan = CanvasJS.newCanvasElement("myCanvas", "canvasContainer1", 800, 800);
var engineCtx = engineCan.getContext("2d");

var colorArr = ["#bf7317","#28f215","#c2c017","#c3dc16","#49df6d","#008c49","#11f05a","#5d6772","#f3c90a","#e7be04","#227836","#caeb15","#73d024","#f388a9","#f1f20b","#708825","#6f6025","#ddc196","#ef860c","#4cef6e","#c09b17","#adab00","#01ee0b","#f360a8","#e89904","#01e947","#f0ce0c","#e7db04","#f2e30b","#71af25","#30d532","#25c335","#46c36c","#27de35","#00d248","#f3014e","#e5ee04","#f0ad0c","#b723c4","#948b80","#accd00","#16795d","#f1e60b","#239f36","#006449","#00b248","#81c722","#91627f","#c8f316","#15a15c","#4ff36f","#7ee222","#0ff35a","#0cd358","#d673bb","#db9d95","#29ef34","#c5ee16","#f2f10b","#d97595","#76e724","#f3afaa","#7bf123","#d84cbb","#13f203","#098d56","#79f323","#33b632","#01f346","#2bf334","#04a243","#02e045","#03c544","#02f045","#0ee959","#9ad182","#de635c","#2cce16","#703a25","#af7c87","#2eea33","#97b181","#43a06b","#a2e400","#58da00","#215136","#12e05b","#057a42","#ccd715","#de8e5c","#0bb357","#b15488","#40786b","#e1d803","#17515d","#8f0227","#369031","#e4f304","#e3ec04","#5f4273","#e9d857","#5abc00","#01f30a","#9fcb00","#4bbc00","#ccf335","#58b571","#a5f200","#ce8a35","#a9e500","#16cb03","#a7f200","#003e49","#e96a9c","#14c45c","#363918","#ef7eb0","#ee0d54","#211236","#eb249e","#ea449d","#060f0d","#56ed00","#03710c","#f1ef50","#c0e231","#318617","#b13088","#71eb22","#5b8f72","#ed56b1","#aca487","#bc6bc2","#854c25","#c8d134","#aac786","#ed32b2","#b15c00","#5e6f00","#004809","#eee242","#f2c346","#ef5d0c","#b944c3","#198203","#c12a17","#f0a5af","#af8400","#22ca14","#162e5d","#212e36","#e8929c","#a7e185","#e02003","#2b7415","#6a0026","#6958d3","#200160","#bf93c2","#6633d3","#e7b79b","#a61285","#e70d9b","#2395df","#f3140a","#216ddf","#00024a","#0a0d57","#cc0190","#52ea70","#1e46e0","#6d80d2","#5e2273","#d302bc","#f1040b","#790723","#0082e9","#12bcf0","#0e003d","#1497f0","#c5d7c0","#f0c8af","#005aea","#186df0","#70a7d1","#e5d69a","#00a9e9","#a20cc8","#55d470","#4f05d7","#c2b8c1","#74c9d1","#110de3","#a6bef3","#55acf3","#f1e2ae","#01cbe8","#11daef","#a1f383","#40006b","#26bade","#a4f084","#0118ec","#f302a7","#0106ec","#29d8de","#2825f1","#e4eb99","#ee3ced","#77e3d0","#5985f3","#e2f399","#2becdd","#2446f1","#01e4e8","#7bf1d0","#0fedef","#685df3","#bc4bf2","#f2f1ad","#7c9fd0","#ea88ee","#5317d6","#f2dde8","#e5afef","#b57fda","#52cdf3","#dfde97","#aa9af3","#e3cfef","#4ee6f3","#e2e7f0","#7cded0","#c7ebc0","#9de883","#78c2d0","#a3dbf3","#02f2e8","#2ef3dd","#f2efe9","#a0eef3","#c8d1de","#ef60ed","#caf3bf","#0df3ef","#f2c1e8","#f2f3ac","#35f0c2","#e0f2f0","#c7b0dd","#4bf2f3","#31eddc","#cef3de","#48f2f3","#9df3f3","#83f3d1","#f3f3e9","#00f3a7","#34dbdc","#03f2e7","#07df9e","#7ef2cf","#0ec49a","#e1ef98","#d6a4e0","#d0f1df","#82e6ce","#06d3b1","#cceebe","#cbe8de","#f3ebe9","#86ead2","#03e5e7","#03ebaf","#37e0c3","#d4c7e0","#f3d6ea","#d2e1df","#def1f0","#3ac5c3","#dce3f0","#89d5d3","#99ecf3","#0cedef","#08a19e","#3ca2c4","#45e4f3","#06b3b1","#dac9f0","#d87ce1","#f3b7ea","#42cbf3","#f3e7ab","#96d8f3","#3fa8f3","#06799f","#8db5d3","#f36aeb","#f392ea","#0965b3","#cfdcbe","#93b9f3","#d8a6f0","#09bbee","#0ad9ef","#04cce7","#37bedb","#85cece","#05abe6","#0896ee","#9094f3","#8845f3","#078db2","#f3d0ab","#3f7ac4","#8f8fd4","#d67ff1","#d1bfbd","#8b6cf3","#135397","#3c81f2","#066eee","#da55e1","#89adcd","#0e309a","#023fae","#9641d5","#e015e2","#4252c5","#3b2fc4","#d357f1","#d133f1","#3a99db","#0784e6","#9367d4","#0103a4","#f343eb","#3959f2","#07149e","#de31e2","#0547ed","#9d21d6","#d49bbc","#8c86cc","#ce16f1","#8524f3","#3d71da","#1000b6","#f322eb","#3317f2","#810cf3","#085be5","#3634f2","#0303af","#0426ed","#0937e5","#e104e3","#4d03c7","#0a19e5","#f30bec","#0720b2","#3005f2","#4b14c7","#0e0ab6","#a200d7","#030ded","#cc04f1","#1513b8","#f200ec","#9f0ad6","#c900f2","#e400e3","#7e01f3","#5100c8","#4049da","#f202ec","#9339cb","#5840ca","#e509e4","#ab52d8","#550ac9","#5620c9","#e864e4","#2e00f2","#a603d7","#905ecc","#a813d8","#4328d9","#e58de4","#460fd9","#971aca","#f112ec","#aa2ed8","#dc10b9","#e73ee4","#0c06e4","#7b02f3","#c708f2","#00dceb","#ef77ed","#1686e2","#e61fe4","#f02ded","#f050ed","#f19fec","#2b07f2","#da29ba","#7711f3","#c41df2","#f31ca7","#bf8af2","#0301ed","#2af2de","#291cf2","#73c1f3","#9a07ca","#d74e94","#c23cf2","#c4b1f2","#4901d8","#c062f2","#742bf3","#714df3","#d21192","#f33ba8","#6d9df3","#0202ec","#27e6de","#273af1","#010fec","#26d0f1","#d42b93","#22aff1","#6f75f3","#cff3be","#00bfeb","#f308a6","#82f1ce","#2460f1","#2388f1","#18cee1","#0129ec","#009aeb","#0d00e4","#de02b8","#b8ec8a","#0f06e3","#b6f389","#0073eb","#eff3a0","#d00291","#1238e3","#f300a5","#5227d7","#9d00c9","#4af36d","#111ae3","#004bec","#4f0ed7","#a636c7","#4c01d8","#145de2","#a006c9","#a319c8","#5549d6","#e001b8","#00f14b","#e20db7","#e425b6","#08f355","#17ace1","#5870d6","#f3f0ab","#5b98d5","#66f175","#e547b6","#cdeabe","#a95bc7","#7fe2cf","#5ebdd4","#ac83c6","#afaac5","#b2ccc5","#ede49f","#e76eb5","#e9bbb4","#ebd9b3","#19ea39","#e896b4","#efa8a1","#1eeb60","#f205a4","#c2e917","#bbd88b","#eecaa0","#49f22c","#f217a4","#f134a3","#f159a2","#f081a1","#ce0091","#0ef33d","#beb98c","#69e375","#cb0c90","#8d3d7e","#21d661","#c9248f","#c6458e","#6cc976","#8a1d7e","#c36b8d","#a8f31b","#c1948c","#5de028","#87087d","#00e14c","#83007c","#737e78","#70a677","#00c74d","#3b2d69","#80047b","#3d506a","#23b762","#7d167a","#7a327a","#765679","#381268","#086556","#f1ef0b","#073f55","#aed31a","#17d53a","#350367","#320067","#286963","#2a4264","#300b66","#259162","#2d2265","#065242","#061f54","#00a44e","#050953","#040052","#e6e804","#030452","#f0de0c","#021451","#e7c30f","#023050","#15b53a","#01544f","#5ac529","#017c4f","#aadd00","#138f3b","#57a12a","#072f41","#e9d004","#081440","#f0b106","#0a0340","#abb31b","#0b003f","#11673c","#537a2a","#0c0a3e","#a88d1b","#386730","#e69f0f","#10403d","#50522b","#17be03","#0e203d","#e47710","#3b4130","#a4641c","#3e212f","#59cf00","#84a521","#b1c000","#61ad00","#410a2e","#a13e1c","#4d2e2c","#c59d01","#44002e","#788800","#4a132c","#f18a07","#877d21","#1b9902","#e34f10","#47032d","#f26207","#8b5520","#c77501","#8e3120","#2c7201","#91151f","#98001e","#e12c10","#9e1f1d","#dd0211","#ceb814","#00a909","#94041f","#9b091d","#df1211","#d09214","#00820a","#d54313","#db0012","#f23c07","#d36a14","#f37f0a","#cd2a02","#2c7e16","#f30508","#f30808","#d72313","#cf1002","#f35709","#f31d07","#d90b12","#ca4d01","#f3a70a","#f30008","#f31609","#860700","#f33309","#8c0500","#d82402","#821b00","#da4503","#7b5f00","#901800","#d10202","#965a00","#d60c02","#933500","#489700","#dc6c03","#025d07","#d40102","#de9503","#3f2600","#998200","#e0ba03","#456f00","#9ca900","#3d0e01","#424800","#340f01","#7f3a00","#890000","#070605","#3a0101","#370101","#033806","#312801","#2e4b01","#145911","#041a06","#093705","#0c270f","#9b4029","#990d29","#040606","#49181b","#0b0e0f","#635f1f","#3f3b19","#03990c","#050005","#07010d","#c72433","#09010e","#0dab04","#4eda00","#081905","#0a5c04","#0c8404","#e40e3d","#45061a","#3c0719","#3f0019","#0fcd04","#f10245","#9b0129","#da0039","#8b1026","#e7093e","#391b18","#05280d","#51ed00","#044a0c","#882a26","#d31d37","#335e17","#f3244b","#53f300","#d13c36","#e33c5a","#827425","#11f203","#f35048","#02be0b","#ce6135","#10e504","#01db0b","#2fad16","#809c24","#f37848","#cbb034","#7bdd23","#7cc024","#14e403","#2ae615","#f3a047","#e2b45a","#00ec0a","#e97104","#90ef27","#f3f349","#26f115","#00d90a","#dff03b","#24e314","#eded41","#74f322","#00bb0a","#6ed721","#bf4c17","#17aa03","#5c9700","#21a814","#bdc831","#e94805","#6bb821","#61931f","#009609","#f2300b","#001f49","#006d0a","#195a03","#163103","#574300","#af3700","#711c25","#531f00","#a31200","#e30904","#c20117","#c81016","#270335","#050053","#eb0fb2","#4d0b6e","#740178","#a90086","#eb009d","#ea00b3","#8b00cd","#1325e2","#0036eb","#2b0df2","#7136f3","#7818f3","#c328f2","#b672f2","#e361e3","#eb93e5","#2ad0bf","#80efd1","#03f0af","#2ce8c0","#32f3c1"];

engineCtx.translate(400,400);

var engineFps = 40;

var radius = 300;
var diameter = radius*2;

var particleDiameter = 20;

//initialize grid array and values
//amount of cells in grid, each cell is the same size as a particle's diameter
var gridX = diameter/particleDiameter;
var gridY = diameter/particleDiameter;

//create array
var gridArr = new Array (Math.ceil(gridX));
for (let i = 0; i < gridArr.length; i++) {
    gridArr[i] = new Array (Math.ceil(gridY));
}

//particle setup
var particleAmt = 0;
var particleArr = [];
particleAmt++;

var ticks = 0;
var particleMax = 780;

function mainLoop() {
    //increment tick counter
    ticks++;

    //clear canvas
    CanvasJS.fillCanvas("black", engineCan, engineCtx);


    engineCtx.strokeStyle = "white";
    CanvasJS.strokeCircle(0,0,radius+6,5,engineCtx);

    //subSteps let us run collision checks multiple times in one frame to make the simulation smoother
    let subSteps = 4;

    for (let step = 0; step < subSteps; step++) {
        //reset grid array
        for (let i = 0; i < gridArr.length; i++) {
            gridArr[i] = new Array (Math.ceil(gridY));
            for (let j = 0; j < gridArr[i].length; j++) {
                gridArr[i][j] = [];
            }
        }


        //run through full list of particles and enter them into a 2d array for collision management (it's technically 3d, because multiple particles can exist in the same cell)
        for (let i = 0; i < particleArr.length; i++) {
            //push current particle to collision array
            let currentParticleXPos = Math.floor(particleArr[i].currentPos.x/particleDiameter+radius/particleDiameter);
            let currentParticleYPos = Math.floor(particleArr[i].currentPos.y/particleDiameter+radius/particleDiameter);
            gridArr[currentParticleXPos][currentParticleYPos].push(particleArr[i]);
        }

        //clear particle array
        let particleArrLength = particleArr.length;
        particleArr = new Array(particleArrLength);


        //COLLISION CHECKS
        for (let a = 1; a < gridArr.length-1; a++) { //check each cell except for the ones at the borders
            for (let b = 1; b < gridArr[a].length-1; b++) { //check each cell except for the ones at the borders

                let collisionArr = []; //this array will be filled with all possible collidable particles from the 8 surrounding cells
                
                for (let c = -1; c < 2; c++) { //loop through the current cell and the 8 surrounding ones in a 3x3 grid
                    for (let d = -1; d < 2; d++) { //loop through the current cell and the 8 surrounding ones in a 3x3 grid
                        var nearbyParticleCount = gridArr[a+c][b+d].length //amount of nearby particles
                        if (nearbyParticleCount > 0) { //if there's more than one particle here there is a possibility of a collision
                            for (let e = 0; e < nearbyParticleCount; e++) { //loop through all nearby particles
                                collisionArr.push(gridArr[a+c][b+d][e]); //push all particles into the array that stores all possible collisions
                            }
                        }
                    }
                }

                if (collisionArr.length > 1) { //check if there is a possibility for a collision, collisionArr contains all particles in the 8 surrounding cells
                    for (let i = 0; i < collisionArr.length; i++) { //check each particle against each other
                        for (let j = 0; j < collisionArr.length; j++) { //check each particle against each other
                            let currentParticle = collisionArr[i];
                            let otherParticle = collisionArr[j];
                            if (i !== j) { //don't check a particle against itself
                                let distance = Vector.sub(otherParticle.currentPos,currentParticle.currentPos).mag(); //distance from current particle to the other
                                if (distance < particleDiameter && distance !== 0) { //check if the particles are colliding and aren't in exactly the same place
                                    let differenceVector = Vector.sub(otherParticle.currentPos,currentParticle.currentPos); //get distance from centers
                                    let magToSet = (differenceVector.mag() - particleDiameter)/2; //calculate how much to move each particle
                                    
                                    differenceVector.setMag(magToSet); //set the distance-from-center vector's magnitude
                                    
                                    currentParticle.currentPos = Vector.add(currentParticle.currentPos,differenceVector); //add the changes to each particle
                                    otherParticle.currentPos = Vector.sub(otherParticle.currentPos,differenceVector);
                                    
                                    //collisionArr[i] = currentParticle; //enter the new values back into the array for both particles
                                    //collisionArr[j] = otherParticle;
                                }
                            }
                        }
                    }
                }
            }
        }

        //populate particle array with new positions post-collision
        for (let i = 0; i < gridArr.length; i++) {
            for (let j = 0; j < gridArr[i].length; j++) {
                for (let k = 0; k < gridArr[i][j].length; k++) {
                    particleArr[gridArr[i][j][k].id] = gridArr[i][j][k]; //enter every particle back into main array to be drawn and simulated
                }
            }
        }

        let simSpeed = 0.5;

        //run through full list of particles, simulate their velocities and keep them within the engine boundaries
        for (let i = 0; i < particleArr.length; i++) {
            particleArr[i].updatePos(simSpeed/subSteps);
            particleArr[i].currentPos.limit(radius-particleDiameter/2);
        }
    }

    //run through full list of particles and draw them
    for (let i = 0; i < particleArr.length; i++) {
        engineCtx.fillStyle = particleArr[i].color;
        CanvasJS.drawCircle(particleArr[i].currentPos.x,particleArr[i].currentPos.y,particleDiameter/2,engineCtx);
    }
    
    if (ticks > 3 && particleArr.length < particleMax) {
        let particleNum = particleArr.length;
        //particleArr.push(new VerletParticle(-190,-200,particleNum,colorArr6[particleNum]));
        particleArr.push(new VerletParticle(-190,-200,particleNum,colorArr[particleNum]));
        particleArr[particleNum].lastPos = new Vector(-192,-199);
        ticks = 0;
    }
}

setInterval(mainLoop,1000/engineFps);