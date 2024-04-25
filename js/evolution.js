//Initialising variables
{
    var types = [];
    var bodyId2;
    var headId2;

    var bodyEvolveMethod = []
    var bodyEvolveFromRef;
    var bodyEvolveIntoRef;

    var evolveBody = [];
    var evolveBodyString = [];
    var bodyType1;
    var bodyType2;
    var bodyCatchRate;
    var bodyStats;
    var bodyAbilities;
    var bodyLearnMoves;
    var bodyTmMoves;
    var bodyName
    var bodyPartName;

    var bodyEvolveChain = [];


    var headEvolveMethod;
    var headEvolveFromRef;
    var headEvolveIntoRef;

    var evolveHead = [];
    var evolveHeadString = []
    var headType1;
    var headType2;
    var headCatchRate;
    var headStats
    var headAbilities;
    var headLearnMoves;
    var headTmMoves;
    var headName;
    var headPartName;

    var headEvolveChain = [];

    //Initialise images
    var H0B0img;
    var H1B0img;
    var H2B0img;
    var H0B1img;
    var H1B1img;
    var H2B1img;
    var H0B2img;
    var H1B2img;
    var H2B2img;

    //On click variables
    var clickH0B0;
    var clickH1B0;
    var clickH2B0;
    var clickH0B1;
    var clickH1B1;
    var clickH2B1;
    var clickH0B2;
    var clickH1B2;
    var clickH2B2;
    var clickHeadPrev;
    var clickBodyPrev;
    var clickHeadNext;
    var clickBodyNext;
    var clickRev;
    var clickRand;

    var h0b0BodyListen
    var h0b0HeadListen
    var h1b0BodyListen
    var h1b0HeadListen
    var h2b0BodyListen
    var h2b0HeadListen
    var h0b1BodyListen
    var h0b1HeadListen
    var h1b1BodyListen
    var h1b1HeadListen
    var h2b1BodyListen
    var h2b1HeadListen
    var h0b2BodyListen
    var h0b2HeadListen
    var h1b2BodyListen
    var h1b2HeadListen
    var h2b2BodyListen
    var h2b2HeadListen

    var icon1BodyId
    var icon2BodyId
    var icon3BodyId
    var icon4BodyId
    var icon5BodyId
    var icon6BodyId
    var icon7BodyId
    var icon8BodyId

    var clickIconBody1
    var clickIconBody2
    var clickIconBody3
    var clickIconBody4
    var clickIconBody5
    var clickIconBody6
    var clickIconBody7
    var clickIconBody8

    var icon1HeadId
    var icon2HeadId
    var icon3HeadId
    var icon4HeadId
    var icon5HeadId
    var icon6HeadId
    var icon7HeadId
    var icon8HeadId

    var clickIconHead1
    var clickIconHead2
    var clickIconHead3
    var clickIconHead4
    var clickIconHead5
    var clickIconHead6
    var clickIconHead7
    var clickIconHead8

    //Move Function
    var elementCount;
    var iAtElementCount = -1;
    var bodyMoveNameArray = [];
    var bodyMoveLevelArray = [];
    var headMoveNameArray = [];
    var headMoveLevelArray = [];

    var fusion = {
        "abilities": [],
        "catchRate": "",
        "name": "",
        "typeEffectiveness": []
    };

    var fusionImagesLength;
    var iconImagesLength;
    var hideList;
    var scaledStats = [];
    var hideElements = [];
    var typeEffective = [

        //EFFECTIVENESS WHEN THIS TYPE IS ATTACKING
        //Normal - 0
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],

        //Fire - 1
        [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],

        //Water - 2
        [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 1],

        //Electric - 3
        [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],

        //Grass - 4
        [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],

        //Ice - 5
        [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],

        //Fighting - 6
        [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],

        //Poison - 7
        [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],

        //Ground - 8
        [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],

        //Flying - 9
        [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],

        //Psychic - 10
        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],

        //Bug - 11
        [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],

        //Rock - 12
        [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],

        //Ghost - 13
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],

        //Dragon - 14
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],

        //Dark - 15
        [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],

        //Steel - 16
        [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],

        //Fairy - 17
        [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]










    ];
    var typeIndex;
    var showId;
    var showHideH;
    var randNum1;
    var randNum2;

    //BRANCHING
    var branchEvolveBody;
    var branchEvolveHead;
    var branchIndexBody;
    var branchIndexHead;
    var stageBodyIndex;
    var stageHeadIndex;
    var firstBranchHead;
    var firstBranchBody;

    var allHideIds = ["h0b0", "h1b0", "h2b0", "h0b1", "h1b1", "h2b1", "h0b2", "h1b2", "h2b2"]

}


/*Evolutions prioritise Body if B & H evolve at same level.
determines what evolves first B or H and adds them to a 
hideElement list to hide unachievable evolutions in the chart*/
function DeterminePossibleEvolutions(evolveBody, evolveHead) {
    //3 STAGE EVOLUTIONS BODY + HEAD
    if (evolveBody.length == 2 && evolveHead.length == 2) {


        //Changing function to only hide non-existent evolutions rather than impossible ones

        // if (evolveHead[0] >= evolveBody[0]) {

        //     // //hide h1b0 & h2b0s
        //     // console.log("this should hide h1b0 & h2b0 (top row)")

        //     // //SELECT ALL ELEMENTS BY CLASS REQUIRED
        //     // document.getElementById("h1b0").style.display = "none";
        //     // document.getElementById("h2b0").style.display = "none";

        //     hideElements.push("h1b0");
        //     hideElements.push("h2b0");

        //     if (evolveHead[0] >= evolveBody[1]) {

        //         //hide h1b1 & h2b1
        //         // console.log("this should hide h1b1 & h2b1 (middle row)")
        //         // document.getElementById("h1b1").style.display = "none";
        //         // document.getElementById("h2b1").style.display = "none";

        //         hideElements.push("h1b1");
        //         hideElements.push("h2b1");
        //     }
        // }
        // if (evolveHead[1] >= evolveBody[0]) {

        //     //hide h2b0
        //     // console.log("this should hide h2b0")
        //     // document.getElementById("h2b0").style.display = "none";

        //     hideElements.push("h2b0");

        //     if (evolveHead[1] >= evolveBody[1]) {
        //         //hide h2b1
        //         // console.log("this should hide h2b1")
        //         // document.getElementById("h2b1").style.display = "none";

        //         hideElements.push("h2b1");
        //     }
        // }
    }

    //2 Stage Body - MAJOR STYLE CHANGES REQUIRED MAKE DIVISIONS BIGGER AND TAKE UP WHOLE SPACE COL-LG-5 Each
    else if (evolveBody.length == 1) {

        if (evolveBody[0] <= evolveHead[0]) {
            // console.log("Hiding h1b0 as body evolves first")
            // document.getElementById("h1b0").style.display = "none";

            //Changing function to only hide non-existent evolutions rather than impossible ones
            // hideElements.push("h1b0");
        }

        // console.log("Only has 2 body evolution stages, remove bottom row")

        // document.getElementById("h0b2").style.display = "none";
        // document.getElementById("h1b2").style.display = "none";
        // document.getElementById("h2b2").style.display = "none";

        hideElements.push("h0b2");
        hideElements.push("h1b2");
        hideElements.push("h2b2");

        if (evolveHead.length == 0) {
            // document.getElementById("h1b0").style.display = "none";
            // document.getElementById("h2b0").style.display = "none";
            // document.getElementById("h1b1").style.display = "none";
            // document.getElementById("h2b1").style.display = "none";

            hideElements.push("h1b0");
            hideElements.push("h2b0");
            hideElements.push("h1b1");
            hideElements.push("h2b1");
        }
        else if (evolveHead.length == 1) {
            // document.getElementById("h2b0").style.display = "none";
            // document.getElementById("h2b1").style.display = "none";

            hideElements.push("h2b0");
            hideElements.push("h2b1");
        }
        else if (evolveHead.length == 2) {
            if (evolveBody[0] <= evolveHead[1]) {
                // document.getElementById("h2b0").style.display = "none";
                //Changing function to only hide non-existent evolutions rather than impossible ones
                // hideElements.push("h2b0");
            }
        }
    }

    //2 Stage Head - MAJOR STYLE CHANGES REQUIRED MAKE DIVISIONS BIGGER AND TAKE UP WHOLE SPACE COL-LG-5 Each
    else if (evolveHead.length == 1) {

        if (evolveBody[0] <= evolveHead[0]) {
            //Changing function to only hide non-existent evolutions rather than impossible ones
            // // console.log("Hiding h1b0 as body evolves first")
            // // document.getElementById("h1b0").style.display = "none";

            // hideElements.push("h1b0");
        }

        // document.getElementById("h2b0").style.display = "none";
        // document.getElementById("h2b1").style.display = "none";
        // document.getElementById("h2b2").style.display = "none";

        hideElements.push("h2b0");
        hideElements.push("h2b1");
        hideElements.push("h2b2");

        if (evolveBody.length == 0) {
            // document.getElementById("h0b1").style.display = "none";
            // document.getElementById("h1b2").style.display = "none";
            // document.getElementById("h0b1").style.display = "none";
            // document.getElementById("h1b2").style.display = "none";

            hideElements.push("h0b1");
            hideElements.push("h1b1");
            hideElements.push("h1b2");
            hideElements.push("h0b2");
        }
        else if (evolveBody.length == 1) {
            // document.getElementById("h0b2").style.display = "none";
            // document.getElementById("h1b2").style.display = "none";

            hideElements.push("h0b2");
            hideElements.push("h1b2");

        }
        else if (evolveBody.length == 2) {

            //Changing function to only hide non-existent evolutions rather than impossible ones
            // if (evolveBody[1] <= evolveHead[0]) {

            //     // console.log("Hiding h1b1 as body evolves before second head evolution")
            //     // document.getElementById("h1b1").style.display = "none";

            //     hideElements.push("h1b1");

            // }
        }
    }

    //1 STAGE EVOLUTION BODY
    else if (evolveBody.length == 0) {

        // document.getElementById("h0b1").style.display = "none";
        // document.getElementById("h1b1").style.display = "none";
        // document.getElementById("h2b1").style.display = "none";

        // document.getElementById("h0b2").style.display = "none";
        // document.getElementById("h1b2").style.display = "none";
        // document.getElementById("h2b2").style.display = "none";


        //Middle Row
        hideElements.push("h0b1");
        hideElements.push("h1b1");
        hideElements.push("h2b1");

        //Bottom Row
        hideElements.push("h0b2");
        hideElements.push("h1b2");
        hideElements.push("h2b2");

        if (evolveHead.length == 0) {
            //Changing function to only hide non-existent evolutions rather than impossible ones
            // document.getElementById("h1b0").style.display = "none";
            // document.getElementById("h2b0").style.display = "none";

            hideElements.push("h1b0");
            hideElements.push("h2b0");
        }
        else if (evolveHead.length == 1) {

            //Changing function to only hide non-existent evolutions rather than impossible ones
            // document.getElementById("h2b0").style.display = "none";

            hideElements.push("h2b0");
        }
    }

    //1 STAGE EVOLUTION HEAD 
    else if (evolveHead.length == 0) {

        // console.log("Only has 1 head evolution stage, remove right two columns")
        // document.getElementById("h1b0").style.display = "none";
        // document.getElementById("h1b1").style.display = "none";
        // document.getElementById("h1b2").style.display = "none";

        // document.getElementById("h2b0").style.display = "none";
        // document.getElementById("h2b1").style.display = "none";
        // document.getElementById("h2b2").style.display = "none";

        //Middle Column
        hideElements.push("h1b0");
        hideElements.push("h1b1");
        hideElements.push("h1b2");

        //Right Column
        hideElements.push("h2b0");
        hideElements.push("h2b1")
        hideElements.push("h2b2");

        if (evolveBody.length == 0) {
            // document.getElementById("h0b1").style.display = "none";
            // document.getElementById("h0b2").style.display = "none";

            hideElements.push("h0b1");
            hideElements.push("h0b2");
        }
        else if (evolveBody.length == 1) {

            // console.log("Hiding H0B2")
            // document.getElementById("h0b2").style.display = "none";

            hideElements.push("h0b2");

        }
    }

    return hideElements;
}
//Consider Evolution methods that have inputs as strings. 
//Consider already evolved pokemon that may be hidden from view !!
//Consider other evolution forms such as eevee or shedinja and split evolution or any special evolutions that may exist.
//Consider how different evolutions paths should change the formatting of the site


function HideIrrelevantEvolutions(hideElements, newState) {

    if (newState) {


        showHideH = document.getElementsByClassName("hide-h")
        for (let i = 0; i < allHideIds.length; i++) {
            showId = document.getElementsByClassName(allHideIds[i])

            showId[0].style.display = "block"
            showId[1].style.display = "block"
            if (showId[2] !== undefined) {
                showId[2].style.display = "block"
            }
            if (showId[3] !== undefined) {
                showId[3].style.display = "block"
            }

        }

        //console.log(showHideH)

        for (let i = 0; i < showHideH.length; i++) {
            showHideH[i].style.display = "block"
            console.log(showHideH[i])
        }

    }

    console.log("hideElements")
    console.log(hideElements)

    //Hiding elements if they are in the hideElements array.
    for (let i = 0; i < hideElements.length; i++) {

        for (let j = 0; j < document.getElementsByClassName(hideElements[i]).length; j++) {

            hideList = document.getElementsByClassName(hideElements[i])[j];
            hideList.style.display = "none";
        }


    }
}

/*Create a function which takes input of evolution method of
B & H and feeds that into the html as text which describes evolution method
Uses same array of evolveBody & evolveHead
*/
function EvolveMethod(evolveBody, evolveHead, bodyId, headId) {

    //Splitting multiple evolutions into seperate elements

    //BODY
    //BRANCH Evolutions
    //console.log(evolveBody)
    var newBranch1 = [];
    var stopiIndex = 0;
    var stopjIndex = 0;
    firstBranchHead = true;
    firstBranchBody = true;
    branchEvolveBody = false;
    branchEvolveHead = false;
    branchIndexHead = undefined;
    branchIndexBody = undefined;


    //Determine stageindex for different branch evolutions
    //How many stages to show for branch evolutions


    //BODY
    //Oddish, Poliwag, Ralts
    if ([43, 60, 285].includes(bodyEvolveChain[0])) {
        stageBodyIndex = 3
        // console.log("branch evolution should show 3 pokemon")
    }
    //Slowpoke, Eevee, Tyrogue, Shedinja, Rockruff
    else if ([79, 133, 236, 382, 464].includes(bodyEvolveChain[0])) {
        stageBodyIndex = 2
        // console.log("branch evolution should show 2 pokemon")
    }

    //HEAD
    //Oddish, Poliwag, Ralts
    if ([43, 60, 285].includes(headEvolveChain[0])) {
        stageHeadIndex = 3
        // console.log("branch evolution should show 3 pokemon")
    }
    //Slowpoke, Eevee, Tyrogue, Shedinja, Rockruff
    else if ([79, 133, 236, 382, 464].includes(headEvolveChain[0])) {
        stageHeadIndex = 2
        // console.log("branch evolution should show 2 pokemon")
    }









    // console.log("original evolveBody")
    // console.log(evolveBody)
    // console.log('')
    for (let i = 0; i < evolveBody.length; i++) {
        for (let j = 0; j < evolveBody[i].length; j++) {
            //  console.log("looking inside : " + evolveBody[i])
            //  console.log("j = " + j + ",  letter = " + evolveBody[i][j])
            if (evolveBody[i][j] == ",") {

                if (firstBranchBody) {
                    newBranch1.push(evolveBody[i].slice(stopjIndex, j))
                    firstBranchBody = false;
                    //branchEvolveBody = true;
                }
                else {
                    //console.log("we are trying to branch this evolution")
                    newBranch1.push(evolveBody[i].slice(stopjIndex + 1, j))
                }

                //newBranch2 = evolveBody[i].slice(j+1,evolveBody[i].length)
                stopjIndex = j
                stopiIndex = i



                // console.log("slice indices = " + (j + 1) + "," + evolveBody[i].length)
                //console.log("newBranch1")
                //console.log(newBranch1)

            }
        }

    }

    if (stopjIndex !== 0) {
        newBranch1.push(evolveBody[stopiIndex].slice(stopjIndex + 1, evolveBody[stopiIndex].length))
    }

    if (newBranch1[0] !== undefined) {
        // console.log("")
        // console.log("evolveBody")
        // console.log(evolveBody)
        evolveBody.pop()
        for (let i = 0; i < newBranch1.length; i++) {
            evolveBody.push(newBranch1[i])
            //console.log(evolveBody)
        }


    }
    // console.log("evolveBody = " + evolveBody)


    //HEAD
    //BRANCH EVOLUTIONS
    //console.log("original evolveHead")
    // console.log(evolveHead)
    // console.log('')
    newBranch1 = [];
    stopjIndex = 0;
    stopiIndex = 0;
    var prevEvolveHeadLength = evolveHead.length;
    for (let i = 0; i < evolveHead.length; i++) {
        for (let j = 0; j < evolveHead[i].length; j++) {
            //console.log("looking inside : " + evolveHead[i])
            //console.log("j = " + j)
            //console.log(evolveHead[i][j])
            if (evolveHead[i][j] == ",") {

                if (firstBranchHead) {
                    newBranch1.push(evolveHead[i].slice(stopjIndex, j))
                    firstBranchHead = false;
                    //console.log(newBranch1)

                }
                else {
                    //console.log("we are trying to branch this evolution")
                    newBranch1.push(evolveHead[i].slice(stopjIndex + 1, j))
                }

                //newBranch2 = evolveHead[i].slice(j+1,evolveHead[i].length)
                stopjIndex = j
                stopiIndex = i



                //console.log("slice indices = " + (j + 1) + "," + evolveHead[i].length)
                // console.log("newBranch1")
                // console.log(newBranch1)

            }
        }

    }

    if (stopjIndex !== 0) {
        newBranch1.push(evolveHead[stopiIndex].slice(stopjIndex + 1, evolveHead[stopiIndex].length))
    }

    if (newBranch1[0] !== undefined) {
        // console.log("")
        // console.log("evolveHead")
        // console.log(evolveHead)
        evolveHead.pop()
        for (let i = 0; i < newBranch1.length; i++) {
            evolveHead.push(newBranch1[i])
            //console.log(evolveHead)
        }

    }
    //console.log("evolveHead = " + evolveHead)





    //HEAD
    // console.log("")
    // console.log("firstBranchHead : " + firstBranchHead)
    if (!firstBranchHead) {


        for (let i = 0; i < headEvolveChain.length; i++) {
            //console.log(headEvolveChain[i])

            if (Number(headEvolveChain[i]) == headId &&
                Number(headEvolveChain[i]) !== 43 && //oddish
                Number(headEvolveChain[i]) !== 44 && //gloom
                Number(headEvolveChain[i]) !== 45 && //vileplume
                Number(headEvolveChain[i]) !== 60 && //poliwag
                Number(headEvolveChain[i]) !== 61 && //poliwhirl
                Number(headEvolveChain[i]) !== 62 && //poliwrath
                Number(headEvolveChain[i]) !== 79 && //slowpoke
                Number(headEvolveChain[i]) !== 80 && //slowbro
                Number(headEvolveChain[i]) !== 133 && //eevee
                Number(headEvolveChain[i]) !== 236 && //tyrogue
                Number(headEvolveChain[i]) !== 106 && //hitmonlee
                Number(headEvolveChain[i]) !== 285 && //ralts
                Number(headEvolveChain[i]) !== 286 && //kirlia
                Number(headEvolveChain[i]) !== 287 && //gardevoir
                Number(headEvolveChain[i]) !== 356 && //ninjask
                Number(headEvolveChain[i]) !== 382 && //nincada
                Number(headEvolveChain[i]) !== 464) { //rockruff
                branchIndexHead = i
                branchEvolveHead = true
                // console.log("branchEvolveHead is true")
                // console.log("branch index head = " + branchIndexHead)
                console.log(headEvolveChain)
                if (Number(headEvolveChain[i]) == 107 /*hitmonchan*/) {
                    branchIndexHead = 2
                }
            }
            else {
            }
        }
        // console.log(headEvolveChain)


    }
    //BODY
    if (!firstBranchBody) {


        for (let i = 0; i < bodyEvolveChain.length; i++) {
            // console.log(bodyEvolveChain[i])
            // console.log(bodyId)
            // console.log(bodyEvolveChain[i] == bodyId)
            //console.log("body id : " + bodyId)
            if (Number(bodyEvolveChain[i]) == bodyId &&
                Number(bodyEvolveChain[i]) !== 43 && //oddish
                Number(bodyEvolveChain[i]) !== 44 && //gloom
                Number(bodyEvolveChain[i]) !== 45 && //vileplume
                Number(bodyEvolveChain[i]) !== 60 && //poliwag
                Number(bodyEvolveChain[i]) !== 61 && //poliwhirl
                Number(bodyEvolveChain[i]) !== 62 && //poliwrath
                Number(bodyEvolveChain[i]) !== 79 && //slowpoke
                Number(bodyEvolveChain[i]) !== 80 && //slowbro
                Number(bodyEvolveChain[i]) !== 133 && //eevee
                Number(bodyEvolveChain[i]) !== 134 && //vaporeon
                Number(bodyEvolveChain[i]) !== 236 && //tyrogue
                Number(bodyEvolveChain[i]) !== 106 && //hitmonlee
                Number(bodyEvolveChain[i]) !== 285 && //ralts
                Number(bodyEvolveChain[i]) !== 286 && //kirlia
                Number(bodyEvolveChain[i]) !== 287 && //gardevoir
                Number(bodyEvolveChain[i]) !== 356 && //ninjask
                Number(bodyEvolveChain[i]) !== 382 && //nincada
                Number(bodyEvolveChain[i]) !== 464) { //rockruff
                branchIndexBody = i
                branchEvolveBody = true
                // console.log("branchEvolveBody is true")
                // console.log("branch index body = " + branchIndexBody)
                // console.log(bodyEvolveChain)
                if (Number(bodyEvolveChain[i]) == 135 || /*jolteon*/
                    Number(bodyEvolveChain[i]) == 136 || /*flareon*/
                    Number(bodyEvolveChain[i]) == 196 || /*espeon*/
                    Number(bodyEvolveChain[i]) == 197 || /*umbreon*/
                    Number(bodyEvolveChain[i]) == 271 || /*leafeon*/
                    Number(bodyEvolveChain[i]) == 272 || /*glaceon*/
                    Number(bodyEvolveChain[i]) == 339  /*sylveon*/) {
                    branchIndexBody = i

                    // console.log("what the heck!")
                    // console.log(evolveBodyString)
                    // console.log(branchIndexBody)
                }
            }
            else {
                // console.log("didnt see body as a branch")
            }
        }
        console.log(bodyEvolveChain)


    }





    // //BODY
    // for (let i = 0; i < branchIndexBody; i++) {
    //     if (bodyEvolveChain[i] == bodyId) {
    //         branchEvolveBody = true;
    //         console.log("branchEvolveBody is true")
    //     }
    // }

    // //HEAD
    // for (let i = 0; i < branchIndexHead; i++) {
    //     if (headEvolveChain[i] == headId) {
    //         branchEvolveHead = true;
    //         console.log("branchEvolveHead is true")
    //     }
    // }




    //Determining if easier to do alternative evolutions vs level up

    //Body
    // console.log(bodyEvolveChain)
    // console.log(evolveBody)
    for (let i = 0; i < evolveBody.length; i++) {

        //True if not a number
        if (isNaN(evolveBody[i])) {
            // console.log(evolveBody[i])
            // console.log(Number(bodyEvolveChain[i]))

            //Exception for pokemon that evolve at level and item
            if (Number(bodyEvolveChain[i]) == 64 ||
                Number(bodyEvolveChain[i]) == 67 ||
                Number(bodyEvolveChain[i]) == 75 ||
                Number(bodyEvolveChain[i]) == 93 ||
                Number(bodyEvolveChain[i]) == 95 ||
                Number(bodyEvolveChain[i]) == 112 ||
                Number(bodyEvolveChain[i]) == 117 ||
                Number(bodyEvolveChain[i]) == 123 ||
                Number(bodyEvolveChain[i]) == 125 ||
                Number(bodyEvolveChain[i]) == 126 ||
                Number(bodyEvolveChain[i]) == 312 ||
                Number(bodyEvolveChain[i]) == 394 ||
                Number(bodyEvolveChain[i]) == 438) {

                console.log("Exception! - Body Pokemon evolves at level + item")
                //evolveBodyString.push(i);
                evolveBodyString.push("Evolves at Lvl " + evolveBody[i]);
                evolveBody[i] = 0

                if (stageHeadIndex !== undefined) {
                    for (let j = 0; j < stageHeadIndex + 1 && j < 3; j++) {
                        document.getElementsByClassName("b-evolve-2")[j].innerHTML = evolveBodyString[0]
                    }
                }
                for (let j = 0; j < evolveHead.length + 1 && j < 3; j++) {
                    document.getElementsByClassName("b-evolve-2")[j].innerHTML = evolveBodyString[0]
                }
            }
            else {
                //console.log("Check: Evolves by " + evolveBody[i]);
                //evolveBodyString.push(i);
                // if (bodyId == 429 ||
                //     bodyId == 288 ||
                //     bodyId == 199 ||
                //     bodyId == 186 ||
                //     bodyId == 182 ) {
                //     console.log("body id is 288!!!")
                //     evolveBodyString.push("Evolves by " + evolveBody[i]);
                //     evolveBody[i-1] = 0;
                // }
                {
                    evolveBodyString.push("Evolves by " + evolveBody[i]);
                    evolveBody[i] = 0;
                }
            }


        }
    }


    // console.log("evolvebody is now: " + evolveBody)


    //Head
    for (let i = 0; i < evolveHead.length; i++) {


        // console.log(evolveHead)
        //True if not a number
        if (isNaN(evolveHead[i])) {

            //Exception for pokemon that evolve at level and item
            if (headEvolveChain[i] == 64 ||
                headEvolveChain[i] == 67 ||
                headEvolveChain[i] == 75 ||
                headEvolveChain[i] == 93 ||
                headEvolveChain[i] == 95 ||
                headEvolveChain[i] == 112 ||
                headEvolveChain[i] == 117 ||
                headEvolveChain[i] == 123 ||
                headEvolveChain[i] == 125 ||
                headEvolveChain[i] == 126 ||
                headEvolveChain[i] == 312 ||
                headEvolveChain[i] == 394 ||
                headEvolveChain[i] == 438) {

                console.log("Exception! - Head Pokemon evolves at level + item")
                //evolveHeadString.push(i);
                evolveHeadString.push("Evolves at Lvl " + evolveHead[i]);
                evolveHead[i] = 0


                //need seperate one for i = 1 and i = 2 maybe

                if (stageBodyIndex !== undefined) {
                    for (let j = 0; j < stageBodyIndex; j++) {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = evolveHeadString[1]
                    }
                }
                else {
                    for (let j = 0; j < evolveBody.length + 1; j++) {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = evolveHeadString[1]
                    }
                }


            }
            else {
                //console.log("Evolves by " + evolveHead[i]);
                //evolveHeadString.push(i);
                evolveHeadString.push("Evolves by " + evolveHead[i]);
                evolveHead[i] = 0;
            }

        }
    }


    // console.log("")
    // console.log("evolve head")
    // console.log(evolveHead)




    //BODY EVOLUTION - STAGE 1

    if (typeof (evolveBody[0]) !== 'undefined') {
        for (let i = 0; i < evolveHead.length + 1 && i < 3; i++) {

            //WORKS FOR LEVEL UP EVOLUTIONS ONLY
            //where pokemon evolves by requiring a learn-up move.
            if (evolveBody[0] == 0) {
                document.getElementsByClassName("b-evolve-1")[i].innerHTML = evolveBodyString[0]
            }
            else {
                //IF TYRUNT OR AMAURA IS BODY
                if (bodyEvolveChain[0] == 425 || (bodyEvolveChain[0] == 461) || (Number(bodyEvolveChain[0]) == 463)) {
                    document.getElementsByClassName("b-evolve-1")[i].textContent = "Evolves at ≥ Lvl " + evolveBody[0] + " During Daytime";
                }
                else {
                    //modify 3 html divs to say "Evolves at Lvl " + evolveBody[0]
                    document.getElementsByClassName("b-evolve-1")[i].textContent = "Evolves at ≥ Lvl " + evolveBody[0];
                }

            }
                if(evolveHead[0] == undefined){
                console.log("hope not here 6")
                document.getElementsByClassName("hide-h")[(i * 2)].style.display = "none";
            }

        }


    }
    //BODY EVOLUTION - STAGE 2
    if (typeof (evolveBody[1]) !== 'undefined') {
        for (let j = 0; j < evolveHead.length + 1 && j < 3; j++) {
            //where pokemon evolves by requiring a learn-up move.
            if (evolveBody[1] == 0) {
                document.getElementsByClassName("b-evolve-2")[j].innerHTML = evolveBodyString[0]
            }
            else {
                //IF TYRUNT OR AMAURA IS BODY
                if (bodyEvolveChain[0] == 425 || (bodyEvolveChain[0] == 461) || (Number(bodyEvolveChain[0]) == 463)) {
                    document.getElementsByClassName("b-evolve-2")[j].textContent = "Evolves at ≥ Lvl " + evolveBody[1] + " During Daytime";
                }
                else {
                    document.getElementsByClassName("b-evolve-2")[j].textContent = "Evolves at ≥ Lvl " + evolveBody[1];

                }
            }


        }

    }

    //HEAD EVOLUTION - STAGE 1
    if (typeof (evolveHead[0]) !== 'undefined') {
        for (let i = 0; i < evolveBody.length + 1 && (i < 3); i++) {
            //WORKS FOR LEVEL UP EVOLUTIONS ONLY

            //If stage 1 and head evolves at lower level or tyrunt / amaura evolution
            //where you can choose when they evolve. not rockruff as he evolves both night and day
            if (i == 0 && (Number((evolveHead[0]) < Number(evolveBody[0])) || (evolveBody[0] == undefined) || (evolveBody[0] == 0) || (bodyEvolveChain[0] == 425) || (bodyEvolveChain[0] == 461))) {

                //IF HEAD EVOLVES 1 Level Lower than BODY
                if (Number(evolveHead[0]) == Number((evolveBody[0] - 1))) {
                    //IF TYRUNT OR AMAURA IS BODY
                    if (headEvolveChain[0] == 425 || (headEvolveChain[0] == 461 || (Number(headEvolveChain[0]) == 463))) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0] + " only, During Daytime"
                    }
                    else if (bodyEvolveChain[0] == 425 || (bodyEvolveChain[0] == 461) || (Number(bodyEvolveChain[0]) == 463)) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0]
                    }
                    else {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0] + " only"
                    }
                }

                //If HEAD is SPECIAL EVOLUTION
                else if (evolveHead[0] == 0) {
                    console.log(evolveHeadString)
                    console.log(document.getElementsByClassName("h-evolve-1")[i])
                    document.getElementsByClassName("h-evolve-1")[i].innerHTML = evolveHeadString[0]
                }

                //IF BODY IS SPECIAL EVOLUTION
                else if (evolveBody[0] == 0) {
                    //IF TYRUNT OR AMAURA IS BODY
                    if (headEvolveChain[0] == 425 || (headEvolveChain[0] == 461) || (Number(headEvolveChain[0]) == 463)) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0] + " During Daytime"
                    }
                    else {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0]
                    }
                }

                //HEAD STAGE 1 EVOLVES FIRST BUT DOESNT MEET ABOVE  CRITERIA
                else {

                    //If both Amaura and Tyrunt are both evolutions
                    if ((headEvolveChain[0] == 425 && bodyEvolveChain[0] == 461) ||
                        (headEvolveChain[0] == 425 && bodyEvolveChain[0] == 426) ||
                        (headEvolveChain[0] == 461 && bodyEvolveChain[0] == 461) ||
                        (headEvolveChain[0] == 461 && bodyEvolveChain[0] == 425)
                    ) {
                        console.log("BOTH pokemon are either tyrunt or amaura!")
                console.log("hope not here 4")

                        document.getElementsByClassName("hide-h")[2 * i].style.display = "none";

                    }


                    //IF TYRUNT OR AMAURA IS HEAD

                    else if ((headEvolveChain[0] == 425) || (headEvolveChain[0] == 461) || (Number(headEvolveChain[0]) == 463)) {

                        //If head stage 1 evolves before body stage 1
                        if ((evolveBody[0] - 1) > evolveHead[0]) {

                            document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0]
                                + " - Lvl " + (evolveBody[0] - 1) + " During Daytime";
                        }
                        else {
                            document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0] + " During Daytime";
                        }

                    }
                    else {
                        //IF TYRUNT OR AMAURA OR ROCKRUFF IS BODY - and the head pokemon evolves later than 38
                        if (headEvolveChain[0] >= 39 && (bodyEvolveChain[0] == 425) || (bodyEvolveChain[0] == 461) || (Number(bodyEvolveChain[0]) == 463)) {
                console.log("hope not here 3")

                            document.getElementsByClassName("hide-h")[2 * i].style.display = "none";
                        }


                        //IF TYRUNT OR AMAURA OR ROCKRUFF IS BODY
                        else if ((bodyEvolveChain[0] == 425) || (bodyEvolveChain[0] == 461) || (Number(bodyEvolveChain[0]) == 463)) {
                            document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0] +
                                " - Lvl " + (evolveBody[0] - 1) + "<span style='font-size: 0.8em'> During Nighttime:<br>≥ Lvl " + evolveBody[0] + "</span>"
                        }

                        else if (evolveBody[0] !== undefined && Number(evolveBody[0]) > Number(evolveHead[0])) {
                            document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0]
                                + " - Lvl " + (evolveBody[0] - 1);
                        }
                        else {
                console.log("i am expecting this here2")
                            document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0]
                        }

                    }

                }

            }

            //If head stage 1 evolves lower than body stage 2
            else if (i == 1 && (Number(evolveHead[0]) < Number(evolveBody[1]) || evolveBody[1] == 0)) {

                //If head evolves 1 level lower than body
                if (evolveHead[0] == (evolveBody[1] - 1)) {
                    //If head base is amaura, tyrunt or rockruff
                    if (headEvolveChain[0] == 425 || (headEvolveChain[0] == 461) || (Number(headEvolveChain[0]) == 463)) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0] + " only, During Daytime"
                    }
                    else {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0] + " only"
                    }

                }
                //If body evolved by alternative evolution method then display arrow for head
                else if (evolveBody[1] == 0) {

                    //Head evolves by special evolution
                    if (evolveHead[0] == 0) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = evolveHeadString[0]
                    }
                    else if (headEvolveChain[0] == 425 || (headEvolveChain[0] == 461) || (Number(headEvolveChain[0]) == 463)) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0] + " During Daytime";
                    }
                    else {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0]
                    }

                }
                //If head has special evolution and body doesnt
                else if (evolveHead[0] == 0) {
                    document.getElementsByClassName("h-evolve-1")[i].innerHTML = evolveHeadString[0]
                }

                //If non special evolution Body Stage 2 evolution
                else {

                    if (headEvolveChain[0] == 425 || (headEvolveChain[0] == 461) || (Number(headEvolveChain[0]) == 463)) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0] + " - Lvl " + (evolveBody[1] - 1) + " During Daytime";
                    }
                    else if ((Number(bodyEvolveChain[0]) == 463)) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0]
                    }
                    else {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> Lvl " + evolveHead[0]
                            + " - Lvl " + (evolveBody[1] - 1);
                    }
                }

            }
            else if (i == evolveBody.length || (evolveBody.length >= 2 && i == 2) || bodyEvolveChain[0] == 463) {

                if (evolveHead[0] == 0) {
                    document.getElementsByClassName("h-evolve-1")[i].innerHTML = evolveHeadString[0]
                }
                else {
                    if (headEvolveChain[0] == 425 || (headEvolveChain[0] == 461) || (Number(headEvolveChain[0]) == 463)) {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0] + " During Daytime";
                    }
                    else {
                        document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0];
                    }
                }

            }
            else if (i == evolveBodyString[0]) {
                console.log("Don't hide evolveBodyString[0]: " + evolveBodyString)
            }
            // else if ((bodyEvolveChain[0] == 425) || (bodyEvolveChain[0] == 461) || (Number(bodyEvolveChain[0]) == 463)){
            //     document.getElementsByClassName("h-evolve-1")[i].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[0] + " During Daytime";
            // }
            else {
                // console.log()
                // console.log(document.getElementsByClassName("hide-h")[2 * i])
                console.log("hope not here 1")
                document.getElementsByClassName("hide-h")[2 * i].style.display = "none";
            }


        }


    }
    //HEAD EVOLUTION - STAGE 2
    if (typeof (evolveHead[1]) !== 'undefined') {
        for (let j = 0; j < evolveBody.length + 1 && (j < 3); j++) {



            //WORKS FOR LEVEL UP EVOLUTIONS ONLY
            //modify 3 html divs to say "Evolves at Lvl " + evolveHead[1]

            //head stage 2 evolves before body stage 1
            if (j == 0 && Number(evolveHead[1]) < Number(evolveBody[0]) || evolveBody[0] == 0 || (bodyEvolveChain[0] == 425) || (bodyEvolveChain[0] == 461) || (Number(headEvolveChain[0]) == 463)) {

                //If head evolves 1 level before body
                if (evolveHead[1] == (evolveBody[0] - 1)) {
                    document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> Lvl " + evolveHead[1] + " only"
                }

                //if stage 1 body has alternative evolution then head will be able to evolve
                else if (evolveBody[0] == 0) {
                    //If evolveHead[1] is an alternative evolution then adjust the innerHTML
                    //to show.
                    if (evolveHead[1] == 0) {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = evolveHeadString[0]
                    }
                    else {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[1]
                    }

                }
                else {

                    //If evolveHead[1] is an alternative evolution then adjust the innerHTML
                    //to show.
                    if (evolveHead[1] == 0) {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = evolveHeadString[0]
                    }
                    //If head evolves before first body stage
                    else {
                        if (evolveBody[0] > evolveHead[1]) {
                            if (Number(bodyEvolveChain[0]) == 463) {
                                document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> Lvl " + evolveHead[1] +
                                    " - Lvl " + (evolveBody[0] - 1) + "<span style='font-size: 0.8em'> During Nighttime:<br>≥ Lvl " + evolveBody[0] + "</span>"
                            }
                            else {
                                document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> Lvl " + evolveHead[1]
                                    + " - Lvl " + (evolveBody[0] - 1);
                            }

                        }
                        else {
                            document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> Lvl " + evolveHead[1] + " During Nighttime"
                        }

                    }

                }

            }

            //head stage 2 evolves before body stage 2 evolves later
            else if (j == 1 && Number(evolveHead[1]) < Number(evolveBody[1])) {
                if (evolveHead[1] == (evolveBody[1] - 1)) {
                    document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> Lvl " + evolveHead[1] + " only"
                }
                else {

                    //If evolveHead[1] is an alternative evolution then adjust the innerHTML
                    //to show.
                    if (evolveHead[1] == 0) {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = evolveHeadString[0]
                    }
                    else if (bodyEvolveChain[0] == 463) {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[1]
                    }
                    else {
                        document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> Lvl " + evolveHead[1]
                            + " - Lvl " + (evolveBody[1] - 1);
                    }

                }

            }

            //Head is stage 3
            else if (j == evolveBody.length || (evolveBody.length >= 2 && j == 2)) {
                if (evolveHead[1] == 0) {
                    document.getElementsByClassName("h-evolve-2")[j].innerHTML = evolveHeadString[0]
                }
                else {
                    document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[1];
                }

            }
            else if (evolveBody[1] == 0 && evolveHead[1] !== 0 && j == 1 || bodyEvolveChain[0] == 463) {
                document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[1];
            }


            else {

                //If evolveHead[1] is an alternative evolution then adjust the innerHTML
                //to show.
                if (evolveHead[1] == 0) {
                    document.getElementsByClassName("h-evolve-2")[j].innerHTML = evolveHeadString[0]
                }
                else if (evolveBody[0] == 0) {
                    // document.getElementsByClassName("h-evolve-2")[j].innerHTML = "Evolves at <br> ≥ Lvl " + evolveHead[1];
                }
                else {
                console.log("hope not here 2")
                    document.getElementsByClassName("hide-h")[(j * 2 + 1)].style.display = "none";
                }

            }

        }

    }
    // console.log("branch index body: " + branchIndexBody)
    // console.log("evolve body string: " + evolveBodyString)
    // console.log("stage body index: " + stageBodyIndex)

    // console.log("")
    // console.log("evolve body string")
    // console.log(evolveBodyString)
    // console.log("")

    if (branchIndexHead && stageHeadIndex == 2) {
        for (let i = 0; i < branchIndexHead + 1; i++) {
            if (branchIndexHead && evolveHeadString[branchIndexHead - i] !== undefined) {

                // console.log("made it inside")
                // console.log(evolveHeadString)
                // console.log(branchIndexHead - i)

                if (headId == 107 ||
                    headId == 134 ||
                    headId == 135 ||
                    headId == 136 ||
                    headId == 196 ||
                    headId == 197 ||
                    headId == 271 ||
                    headId == 272 ||
                    headId == 339) {
                    document.getElementsByClassName("h-evolve-1")[0].innerHTML = evolveHeadString[branchIndexHead - 1]
                    document.getElementsByClassName("h-evolve-1")[1].innerHTML = evolveHeadString[branchIndexHead - 1]
                    document.getElementsByClassName("h-evolve-1")[2].innerHTML = evolveHeadString[branchIndexHead - 1]
                }
                else {
                    document.getElementsByClassName("h-evolve-1")[0].innerHTML = evolveHeadString[branchIndexHead - i]
                    document.getElementsByClassName("h-evolve-1")[1].innerHTML = evolveHeadString[branchIndexHead - i]
                    document.getElementsByClassName("h-evolve-1")[2].innerHTML = evolveHeadString[branchIndexHead - i]
                }


                break
            }
            else {
                // document.getElementsByClassName("h-evolve-1")[0].innerHTML = evolveHead[0]
                // document.getElementsByClassName("h-evolve-1")[1].innerHTML = evolveHead[0]
                // document.getElementsByClassName("h-evolve-1")[2].innerHTML = evolveHead[0]
            }
        }

    }
    else if (branchIndexHead && stageHeadIndex == 3) {
        for (let i = 0; i < branchIndexHead + 1; i++) {
            if (branchIndexHead && evolveHeadString[branchIndexHead - i] !== undefined) {
                document.getElementsByClassName("h-evolve-2")[0].innerHTML = evolveHeadString[branchIndexHead - i]
                document.getElementsByClassName("h-evolve-2")[1].innerHTML = evolveHeadString[branchIndexHead - i]
                document.getElementsByClassName("h-evolve-2")[2].innerHTML = evolveHeadString[branchIndexHead - i]
                break
            }
            else {
                // document.getElementsByClassName("h-evolve-2")[0].innerHTML = evolveHead[0]
                // document.getElementsByClassName("h-evolve-2")[1].innerHTML = evolveHead[0]
                // document.getElementsByClassName("h-evolve-2")[2].innerHTML = evolveHead[0]
            }

        }

    }

    if (branchIndexBody && stageBodyIndex == 2) {
        for (let i = 0; i < branchIndexBody + 1; i++) {
            if (branchIndexBody && evolveBodyString[branchIndexBody - i] !== undefined) {

                if (bodyId == 107 ||
                    bodyId == 134 ||
                    bodyId == 135 ||
                    bodyId == 136 ||
                    bodyId == 196 ||
                    bodyId == 197 ||
                    bodyId == 271 ||
                    bodyId == 272 ||
                    bodyId == 339) {

                    // console.log(evolveBodyString)
                    // console.log(branchIndexBody - i)

                    document.getElementsByClassName("b-evolve-1")[2].innerHTML = evolveBodyString[branchIndexBody - 1]
                    document.getElementsByClassName("b-evolve-1")[0].innerHTML = evolveBodyString[branchIndexBody - 1]
                    document.getElementsByClassName("b-evolve-1")[1].innerHTML = evolveBodyString[branchIndexBody - 1]
                }
                else {
                    document.getElementsByClassName("b-evolve-1")[2].innerHTML = evolveBodyString[branchIndexBody - i]
                    document.getElementsByClassName("b-evolve-1")[0].innerHTML = evolveBodyString[branchIndexBody - i]
                    document.getElementsByClassName("b-evolve-1")[1].innerHTML = evolveBodyString[branchIndexBody - i]
                }







                break
            }
            else {
                // document.getElementsByClassName("b-evolve-1")[0].innerHTML = evolveBody[0]
                // document.getElementsByClassName("b-evolve-1")[1].innerHTML = evolveBody[0]
                // document.getElementsByClassName("b-evolve-1")[2].innerHTML = evolveBody[0]
            }
        }

    }
    else if (branchIndexBody && stageBodyIndex == 3) {
        for (let i = 0; i < branchIndexBody + 1; i++) {

            if (branchIndexBody && evolveBodyString[branchIndexBody - i] !== undefined) {

                console.log("made it inside")
                console.log(evolveBodyString)
                console.log(branchIndexBody - i)

                document.getElementsByClassName("b-evolve-2")[0].innerHTML = evolveBodyString[branchIndexBody - i]
                document.getElementsByClassName("b-evolve-2")[1].innerHTML = evolveBodyString[branchIndexBody - i]
                document.getElementsByClassName("b-evolve-2")[2].innerHTML = evolveBodyString[branchIndexBody - i]
                break
            }
            else {
                // document.getElementsByClassName("b-evolve-2")[0].innerHTML = evolveBody[0]
                // document.getElementsByClassName("b-evolve-2")[1].innerHTML = evolveBody[0]
                // document.getElementsByClassName("b-evolve-2")[2].innerHTML = evolveBody[0]
            }
        }



    }

}

//Create a function which modifies the html to center the evolution chart when there are 1 or 2 columns only.
function CentreEvolutions(evolveHead, newState) {

    //2 Elements wide - if reloading page.
    if (newState) {

        for (let i = 0; i < document.getElementsByClassName("evolve-align-right").length; i++) {
            document.getElementsByClassName("evolve-align-right")[i].classList.remove("col-2-25")
            document.getElementsByClassName("evolve-align-left")[i].classList.remove("col-2-25")
            document.getElementsByClassName("evolve-align-right")[i].classList.remove("col-3")
            document.getElementsByClassName("evolve-align-left")[i].classList.remove("col-3")
            document.getElementsByClassName("evolve-align-left-2")[i].classList.remove("col-1-5")

        }
    }
    //2 Elements wide // Making exception to keep it two wide for slowpoke, eevee, nincada, snorunt and rockruff
    if (evolveHead.length == 1 || headEvolveChain[0] == 79 || headEvolveChain[0] == 133
        || headEvolveChain[0] == 236 || headEvolveChain[0] == 382
        || headEvolveChain[0] == 427 || Number(headEvolveChain[0]) == 463) {
        for (let i = 0; i < document.getElementsByClassName("evolve-align-right").length; i++) {


            document.getElementsByClassName("evolve-align-right")[i].classList.add("col-2-25")
            document.getElementsByClassName("evolve-align-left")[i].classList.add("col-2-25")

        }
        //To center the evolution chart
        //add a div class of col-1-5 on right side of each of the 5 rows
        //add a div class of col-1-5 on left side of each of the 5 rows
    }
    //1 Element wide
    else if (evolveHead.length == 0) {
        console.log("evolveHead")
        console.log(evolveHead)
        for (let i = 0; i < document.getElementsByClassName("evolve-align-right").length; i++) {
            document.getElementsByClassName("evolve-align-right")[i].classList.add("col-3")
            document.getElementsByClassName("evolve-align-left")[i].classList.add("col-3")
            document.getElementsByClassName("evolve-align-left-2")[i].classList.add("col-1-5")
        }


        //To center the evolution chart
        //add a div class of col-1-5 on right side of each of the 5 rows
        //add a div class of col-1-5 on left side of each of the 5 rows
        //add a div class of col-3 on left side of each of the 5 rows
    }
}

//Setting evolveBody Variable as the relevant data
function SetVariablesFromData(data, moveData, bodyId, headId) {
    //Initialising variables

    bodyEvolveMethod = []
    bodyEvolveFromRef;
    bodyEvolveIntoRef;

    evolveBody = [];
    evolveBodyString = [];
    bodyType1;
    bodyType2;
    bodyCatchRate;
    bodyStats;
    bodyAbilities;
    bodyLearnMoves;
    bodyTmMoves;
    bodyName;
    bodyPartName;

    bodyEvolveChain = [];


    headEvolveMethod;
    headEvolveFromRef;
    headEvolveIntoRef;

    evolveHead = [];
    evolveHeadString = []
    headType1;
    headType2;
    headCatchRate;
    headStats
    headAbilities;
    headLearnMoves;
    headTmMoves;
    headName;
    headPartName;

    headEvolveChain = [];

    //Initialise images
    H0B0img;
    H1B0img;
    H2B0img;
    H0B1img;
    H1B1img;
    H2B1img;
    H0B2img;
    H1B2img;
    H2B2img;

    //On click variables
    clickH0B0;
    clickH1B0;
    clickH2B0;
    clickH0B1;
    clickH1B1;
    clickH2B1;
    clickH0B2;
    clickH1B2;
    clickH2B2;

    fusion = {
        "abilities": [],
        "catchRate": "",
        "name": "",
        "typeEffectiveness": []
    };

    hideList;
    scaledStats = [];
    hideElements = [];
    typeIndex;




    //moveData


    //Body

    bodyEvolveMethod = data[bodyId].evolveMethod;
    bodyEvolveFromRef = data[bodyId].evolveFromRef;
    bodyEvolveIntoRef = data[bodyId].evolveIntoRef;

    bodyType1 = data[bodyId].type1;
    bodyType2 = data[bodyId].type2;
    bodyCatchRate = data[bodyId].catch;
    bodyStats = data[bodyId].stats;
    bodyAbilities = data[bodyId].abilities;
    bodyLearnMoves = data[bodyId].moves;
    bodyTmMoves = data[bodyId].movesTm;
    bodyName = data[bodyId].name;
    bodyPartName = data[bodyId].nameBody;

    //Head
    headEvolveMethod = data[headId].evolveMethod;
    headEvolveFromRef = data[headId].evolveFromRef;
    headEvolveIntoRef = data[headId].evolveIntoRef;


    headType1 = data[headId].type1;
    headType2 = data[headId].type2;
    headCatchRate = data[headId].catch;
    headStats = data[headId].stats;
    headAbilities = data[headId].abilities;
    headLearnMoves = data[headId].moves;
    headTmMoves = data[headId].movesTm;
    headName = data[headId].name;
    headPartName = data[headId].nameHead;
}


//determing fusion type effectiveness
//Returns fusionTypeEffectiveness Array
function TypeEffective(bodyType1, bodyType2, headType1, headType2) {

    DetermineTyping(bodyType1, bodyType2, headType1, headType2)

    var typeCount = 2;

    if (types[1] == "") {
        typeCount = 1
    }


    //NOTE I HAVENT ADDED THIS TO THE CODE YET
    // In the 6.0 version of the game,
    // only the Normal/Flying always passing on the flying type remains true.

    for (let j = 0; j < typeCount; j++) {
        for (let i = 0; i < typeEffective[0].length; i++) {

            //Indexing type of the fusion pokemon for each type
            if (true) {

                if (types[j] == "Normal") {
                    typeIndex = 0;
                }
                else if (types[j] == "Fire") {
                    typeIndex = 1;
                }
                else if (types[j] == "Water") {
                    typeIndex = 2;
                }
                else if (types[j] == "Electric") {
                    typeIndex = 3;
                }
                else if (types[j] == "Grass") {
                    typeIndex = 4;
                }
                else if (types[j] == "Ice") {
                    typeIndex = 5;
                }
                else if (types[j] == "Fighting") {
                    typeIndex = 6;
                }
                else if (types[j] == "Poison") {
                    typeIndex = 7;
                }
                else if (types[j] == "Ground") {
                    typeIndex = 8;
                }
                else if (types[j] == "Flying") {
                    typeIndex = 9;
                }
                else if (types[j] == "Psychic") {
                    typeIndex = 10;
                }
                else if (types[j] == "Bug") {
                    typeIndex = 11;
                }
                else if (types[j] == "Rock") {
                    typeIndex = 12;
                }
                else if (types[j] == "Ghost") {
                    typeIndex = 13;
                }
                else if (types[j] == "Dragon") {
                    typeIndex = 14;
                }
                else if (types[j] == "Dark") {
                    typeIndex = 15;
                }
                else if (types[j] == "Steel") {
                    typeIndex = 16;
                }
                else if (types[j] == "Fairy") {
                    typeIndex = 17;
                }
            }

            if (j == 0) {
                fusion.typeEffectiveness.push(typeEffective[i][typeIndex]);
            }
            else {
                fusion.typeEffectiveness[i] = fusion.typeEffectiveness[i] * typeEffective[i][typeIndex]
            }
        }

    }

    var multList = $(".mult")
    //console.log(fusion.typeEffectiveness)

    //SETTING THE TYPE CHART CLASSES
    for (let i = 0; i < fusion.typeEffectiveness.length; i++) {

        if (fusion.typeEffectiveness[i] == 0) {
            //add html
            //console.log("at i : " + i + " element : " + $(".mult")[i])
            $(".mult")[i].innerHTML = "0"
            document.getElementsByClassName("mult")[i].className = "type mult immune";

        }
        else if (fusion.typeEffectiveness[i] == 0.25) {
            //console.log("at i : " + i + " element : " + $(".mult")[i])
            $(".mult")[i].innerHTML = "¼"
            document.getElementsByClassName("mult")[i].className = "type mult weak025";
        }
        else if (fusion.typeEffectiveness[i] == 0.5) {
            //console.log("at i : " + i + " element : " + $(".mult")[i])
            $(".mult")[i].innerHTML = "½"
            document.getElementsByClassName("mult")[i].className = "type mult weak05";
        }
        else if (fusion.typeEffectiveness[i] == 1) {
            //console.log("at i : " + i + " element : " + $(".mult")[i])
            $(".mult")[i].innerHTML = ""
            document.getElementsByClassName("mult")[i].className = "type mult neutral";
        }
        else if (fusion.typeEffectiveness[i] == 2) {
            //console.log("at i : " + i + " element : " + $(".mult")[i])
            $(".mult")[i].innerHTML = "2"
            document.getElementsByClassName("mult")[i].className = "type mult strong2";
        }
        else if (fusion.typeEffectiveness[i] == 4) {
            //console.log("at i : " + i + " element : " + $(".mult")[i])
            $(".mult")[i].innerHTML = "4"
            document.getElementsByClassName("mult")[i].className = "type mult strong4";
        }

    }

    window.types = types;
    return fusion.typeEffectiveness;

}

//determine fusion catch rate
//Returns fusionCatchRate
function CatchRate(bodyCatchRate, headCatchRate) {
    if (bodyCatchRate >= headCatchRate) {
        return fusion.catchRate = headCatchRate;
    }
    else {
        return fusion.catchRate = bodyCatchRate;
    }
}

//determines fusion stats
//Returns fusionStats
function Stats(bodyStats, headStats) {
    fusion.stats = {
        "hp": Math.round((2 * headStats.hp + bodyStats.hp) / 3),
        "atk": Math.round((headStats.atk + 2 * bodyStats.atk) / 3),
        "def": Math.round((headStats.def + 2 * bodyStats.def) / 3),
        "spdef": Math.round((2 * headStats.spdef + bodyStats.spdef) / 3),
        "spatk": Math.round((2 * headStats.spatk + bodyStats.spatk) / 3),
        "spe": Math.round((headStats.spe + 2 * bodyStats.spe) / 3),
    }
}

//determines fusion ablities
//Returns fusionAblities - leaves 2nd and 5th abilities empty if it is a repeat ability. 
function Abilities(bodyAbilities, headAbilities) {

    //First ability no restrictions
    fusion.abilities[0] = bodyAbilities[0]

    //Second ability cant be same as first ability.
    if (bodyAbilities[0] !== bodyAbilities[1]) {

        fusion.abilities[1] = bodyAbilities[1]
    }

    //cannot be same as other two abilities
    if (headAbilities[0] !== bodyAbilities[1] && (headAbilities[0] !== bodyAbilities[0])) {
        fusion.abilities[2] = headAbilities[0]
    }

    //Seconnd Head Ability cannot be the same as the other three abilities.
    if (headAbilities[1] !== headAbilities[0] && (headAbilities[1] !== bodyAbilities[1]) && (headAbilities[1] !== bodyAbilities[0])) {
        fusion.abilities[3] = headAbilities[1]
    }

    //Hidden Ability 1
    fusion.abilities[4] = bodyAbilities[2]

    //Hidden Ability 2
    if (headAbilities[2] !== bodyAbilities[2]) {
        fusion.abilities[5] = headAbilities[2]
    }

}

//determines learn moveset
//returns fusion learn moveset
function LearnMoves(bodyLearnMoves, headLearnMoves) {

    //Initialising variables for this function only
    elementCount;
    iAtElementCount = -1;
    bodyMoveNameArray = [];
    bodyMoveLevelArray = [];
    headMoveNameArray = [];
    headMoveLevelArray = [];
    $(".learn-move-info").remove();
    $(".learn-move-info2").remove();

    for (let i = 0; i < bodyLearnMoves.length; i++) {

        //Breaks out of for loop before it cycles through TMs.
        if (bodyLearnMoves[i] == "T" && bodyLearnMoves[i + 1] == "M" || (bodyLearnMoves[i] == "P" && bodyLearnMoves[i + 1] == "r" && bodyLearnMoves[i + 2] == "e" && bodyLearnMoves[i + 3] == "v")) {
            break
        }
        if (bodyLearnMoves[i] == "-") {
            elementCount++;


            //If level == "Start", then set "Start" to 1.
            if (bodyLearnMoves.substring(Number(iAtElementCount) + 2, Number(i) - 1) == "tart") {
                bodyMoveLevelArray.push("1")
            }

            //Else use level found on array
            else {
                bodyMoveLevelArray.push(bodyLearnMoves.substring(Number(iAtElementCount) + 2, Number(i) - 1))



                if (-Number(iAtElementCount) - 2 + Number(i) - 1 > 2) {
                }

            }
            iAtElementCount = i;
        }

        if (bodyLearnMoves[i] == "|") {

            elementCount++;
            //Then copy move into an array
            bodyMoveNameArray.push(bodyLearnMoves.substring(Number(iAtElementCount) + 2, Number(i)))

            iAtElementCount = i
        }
    }
    elementCount = 0;
    iAtElementCount = -1;

    //HEAD
    for (let i = 0; i < headLearnMoves.length; i++) {

        //Breaks out of for loop before it cycles through TMs.
        if (headLearnMoves[i] == "T" && headLearnMoves[i + 1] == "M" || (headLearnMoves[i] == "P" && headLearnMoves[i + 1] == "r" && headLearnMoves[i + 2] == "e" && headLearnMoves[i + 3] == "v")) {
            break
        }
        if (headLearnMoves[i] == "-") {
            elementCount++;


            //If level == "Start", then set "Start" to 1.
            if (headLearnMoves.substring(Number(iAtElementCount) + 2, Number(i) - 1) == "tart") {
                headMoveLevelArray.push("1")
            }

            //Else use level found on array
            else {
                headMoveLevelArray.push(headLearnMoves.substring(Number(iAtElementCount) + 2, Number(i) - 1))


                //Console.log

                if (-Number(iAtElementCount) - 2 + Number(i) - 1 > 2) {
                }

            }
            iAtElementCount = i;
        }

        if (headLearnMoves[i] == "|") {

            elementCount++;
            //Then copy move into an array
            headMoveNameArray.push(headLearnMoves.substring(Number(iAtElementCount) + 2, Number(i)))

            iAtElementCount = i
        }
    }

    var bodyMovesAdded = 0;
    var headMovesAdded = 0;
    var check;
    var oddsEvens = 0;

    // console.log(bodyMoveNameArray)
    // console.log(headMoveNameArray)
    // console.log(bodyMoveNameArray.length + headMoveNameArray.length)


    for (let i = 0; i < bodyMoveNameArray.length + headMoveNameArray.length; i++) {
        if (headMoveLevelArray[headMovesAdded] == undefined && bodyMoveLevelArray[bodyMovesAdded] == undefined) {
            break
        }

        // console.log("i = " + i)
        // console.log("next body move is: " + bodyMoveNameArray[bodyMovesAdded])
        if (headMoveNameArray.length > headMovesAdded) {
            // console.log("next head move is : " + headMoveNameArray[headMovesAdded])
        }


        //If body level of move lower than head or doesnt exist.
        if (Number(bodyMoveLevelArray[bodyMovesAdded]) <= Number(headMoveLevelArray[headMovesAdded]) ||
            (headMoveLevelArray[headMovesAdded]) == undefined) {
            //Dont add moves if body move and head move is same with same level
            check = true
            if (headMoveLevelArray[headMovesAdded] == undefined) {
                if (oddsEvens % 2 == 0) {
                    // console.log("head move doesnt exist, add body move to left side")
                    AddLearnMove(bodyMoveLevelArray[bodyMovesAdded], bodyMoveNameArray[bodyMovesAdded], true)
                    bodyMovesAdded++;
                    oddsEvens++
                    continue
                }
                else {
                    // console.log("head move doesnt exist, add body move to right side")
                    AddLearnMove(bodyMoveLevelArray[bodyMovesAdded], bodyMoveNameArray[bodyMovesAdded], false)
                    bodyMovesAdded++;
                    oddsEvens++
                    continue
                }

            }
            else {
                for (let j = 0; j < headMoveLevelArray.length; j++) {
                    if ((bodyMoveLevelArray[bodyMovesAdded] == headMoveLevelArray[j])
                        && (bodyMoveNameArray[bodyMovesAdded] == headMoveNameArray[j])) {

                        check = false
                        // console.log((bodyMoveNameArray[bodyMovesAdded] + " & " + headMoveNameArray[j]) + " are the same")s
                    }
                }
            }
            if (!check) {
                bodyMovesAdded++;
                // console.log("check = " + check)
                continue
                console.log("shouldn't reach behind the continue")
            }


            if (check) {
                if (oddsEvens % 2 == 0) {
                    // console.log("even body add to left side")
                    AddLearnMove(bodyMoveLevelArray[bodyMovesAdded], bodyMoveNameArray[bodyMovesAdded], true)
                    bodyMovesAdded++;
                    oddsEvens++
                }
                else {
                    // console.log("odd body add to right side")
                    AddLearnMove(bodyMoveLevelArray[bodyMovesAdded], bodyMoveNameArray[bodyMovesAdded], false)
                    bodyMovesAdded++;
                    oddsEvens++

                }

            }
        }

        else if (headMoveLevelArray[headMovesAdded] !== undefined) {
            if (oddsEvens % 2 == 0) {
                // console.log("even head add to left side")
                AddLearnMove(headMoveLevelArray[headMovesAdded], headMoveNameArray[headMovesAdded], true)
                headMovesAdded++;
                oddsEvens++

            }
            else {
                // console.log("odd head add to right side")
                AddLearnMove(headMoveLevelArray[headMovesAdded], headMoveNameArray[headMovesAdded], false)
                headMovesAdded++;
                oddsEvens++

            }
        }
    }

    // console.log(
    // ((headMoveLevelArray[headMovesAdded])) == undefined)
    // console.log("bodyNext Level: " + bodyMoveLevelArray[bodyMovesAdded])
    // console.log("head next level: " + headMoveLevelArray[headMovesAdded])

    // console.log("just completed attempt number: " + (i+1))
    // console.log("max attempts: " + (bodyMoveNameArray.length + headMoveNameArray.length) )
}

//adds learnset move to table
function AddLearnMove(level, name, leftTrue) {

    //logging
    // console.log("level : " + level)
    // console.log(name)
    // console.log("Left side? : " + leftTrue)
    if (leftTrue) {
        var moveImg = new Image();
        var tableLearnMoves = $("#learn-moves-tbody");
        tableLearnMoves.append("<tr class='new-row learn-move-info'>")
        var newRow = $(".new-row:last")

        newRow.append("<td class='learn-move-info level'>" + level + "</td>") //lvl
        newRow.append("<td class='learn-move-info moveName'>" + name + "</td>") // movename
        newRow.append("<td class='learn-move-info " + moveData[name].type + "'>" + moveData[name].type + "</td>") // type
        newRow.append("<td class='learn-move-info " + moveData[name].category + "'></td>") // category
        newRow.append("</tr>")

        var categoryLocation = document.getElementsByClassName(moveData[name].category)
        //Adding Category Icon
        if (moveData[name].category == "Status") {


            moveImg.src = '../images/UI/move-status.png'
            moveImg.alt = "status-img"
            categoryLocation[categoryLocation.length - 1].append(moveImg)
        }
        else if (moveData[name].category == "Physical") {

            moveImg.src = '../images/UI/move-physical.png'
            moveImg.alt = "physical-img"
            categoryLocation[categoryLocation.length - 1].append(moveImg)

        }
        else if (moveData[name].category == "Special") {

            moveImg.src = '../images/UI/move-special.png'
            moveImg.alt = "special-img"
            categoryLocation[categoryLocation.length - 1].append(moveImg)

        }
        else {
            //Debugging
            console.log("Category name is undefined for move : " + name)
        }


        newRow.append("<td class='learn-move-info'>" + moveData[name].power + "</td>") // power

        if (moveData[name].accuracy !== "—") {
            newRow.append("<td class='learn-move-info'>" + Math.floor(moveData[name].accuracy * 100) + "%</td>") //accuracy
        }
        else {
            newRow.append("<td class='learn-move-info'>" + moveData[name].accuracy + "</td>") //accuracy
        }

        // tableLearnMoves.append("<tr class='new-row learn-move-info'></tr>")
        // newRow = document.getElementsByClassName("new-row")
        // console.log(newRow)
        // newRow[newRow.length-1].appendChild("<hr class='learn-move-info'>")
        // newRow.append("<hr class='learn-move-info'>")
        // newRow.append("<hr class='learn-move-info'>")
        tableLearnMoves.append("<tr class='break-row learn-move-info'>")
        var breakRow = $(".break-row:last")
        breakRow.append("<hr class='learn-move-info'>")
        tableLearnMoves.append("<tr class='break-row2 learn-move-info'>")
        var breakRow2 = $(".break-row2:last")
        breakRow2.append("<hr class='learn-move-info'>")
    }


    if (!leftTrue) {
        var moveImg2 = new Image();
        var tableLearnMoves2 = $("#learn-moves-tbody2");
        tableLearnMoves2.append("<tr class='new-row2 learn-move-info2'>")
        var newRow2 = $(".new-row2:last")

        newRow2.append("<td class='learn-move-info2 level'>" + level + "</td>") //lvl
        newRow2.append("<td class='learn-move-info2 moveName'>" + name + "</td>") // movename
        newRow2.append("<td class='learn-move-info2 " + moveData[name].type + "'>" + moveData[name].type + "</td>") // type
        newRow2.append("<td class='learn-move-info2 " + moveData[name].category + "2'></td>")// category
        newRow2.append("</tr>")

        var categoryLocation2 = document.getElementsByClassName(moveData[name].category + "2")
        //Adding Category Icon
        if (moveData[name].category == "Status") {


            moveImg2.src = '../images/UI/move-status.png'
            moveImg2.alt = "status-img"
            categoryLocation2[categoryLocation2.length - 1].append(moveImg2)
        }
        else if (moveData[name].category == "Physical") {

            moveImg2.src = '../images/UI/move-physical.png'
            moveImg2.alt = "physical-img"
            categoryLocation2[categoryLocation2.length - 1].append(moveImg2)

        }
        else if (moveData[name].category == "Special") {

            moveImg2.src = '../images/UI/move-special.png'
            moveImg2.alt = "status-img"
            categoryLocation2[categoryLocation2.length - 1].append(moveImg2)

        }
        else {
            //Debugging
            console.log("Category name is undefined for move : " + name)
        }


        newRow2.append("<td class='learn-move-info2'>" + moveData[name].power + "</td>") // power

        if (moveData[name].accuracy !== "—") {
            newRow2.append("<td class='learn-move-info2'>" + Math.floor(moveData[name].accuracy * 100) + "%</td>") //accuracy
        }
        else {
            newRow2.append("<td class='learn-move-info2'>" + moveData[name].accuracy + "</td>") //accuracy
        }

        // tableLearnMoves.append("<tr class='new-row learn-move-info'></tr>")
        // newRow = document.getElementsByClassName("new-row")
        // console.log(newRow)
        // newRow[newRow.length-1].appendChild("<hr class='learn-move-info'>")
        // newRow.append("<hr class='learn-move-info'>")
        // newRow.append("<hr class='learn-move-info'>")
        tableLearnMoves2.append("<tr class='break-row3 learn-move-info2'>")
        var breakRow3 = $(".break-row3:last")
        breakRow3.append("<hr class='learn-move-info2'>")
        tableLearnMoves2.append("<tr class='break-row4 learn-move-info2'>")
        var breakRow4 = $(".break-row4:last")
        breakRow4.append("<hr class='learn-move-info2'>")
    }

}

//determines tm moveset
//returns fusion tm moveset - should be similar code to LearnMoves Function
function TMMoves(bodyTMMoves, headTMMoves) {

}

//Create a function which calculates the pokemon names
function NameEvolutions(bodyPartName, headPartName) {
    //Main fusion pokemon
    $("#pokemon-name").text(headPartName + bodyPartName +
        " #" + headId + "." + bodyId);



    // console.log("bodyEvolveChain")
    // console.log(bodyEvolveChain)
    // console.log("headEvolveChain")
    // console.log(headEvolveChain)
    // console.log(branchIndexBody)
    // console.log("branchEvolveHead & branchEvolveBody")
    // console.log(branchEvolveHead)
    // console.log(branchEvolveBody)

    //BRANCH FOR HEAD
    if (!branchEvolveHead && !branchEvolveBody) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])
        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h2b0").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h2b0-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h2b1").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h2b1-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h0b2").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h0b2-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[2])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h1b2").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h1b2-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[2])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h2b2").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h2b2-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[2])

        }
    }
    else if (branchEvolveHead && stageHeadIndex == 2 && !branchEvolveBody) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody)
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[0])

        }


        if (headEvolveChain[0] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h0b2").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h0b2-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[2])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h1b2").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h1b2-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[2])

        }
    }
    else if (branchEvolveHead && stageHeadIndex == 3 && !branchEvolveBody) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h2b0").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h2b0-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h2b1").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h2b1-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h0b2").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h0b2-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[2])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h1b2").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h1b2-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[2])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[2] !== undefined) {
            $("h4.h2b2").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[2]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[2])

        }
    }

    //BRANCH FOR BODY
    else if (branchEvolveBody && stageBodyIndex == 2 && !branchEvolveHead) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h2b0").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h2b0-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h2b1").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h2b1-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[branchIndexBody])

        }
        console.log("branch for body stage index 2")
        console.log(branchIndexBody)
        console.log(data[bodyEvolveChain[branchIndexBody]].nameBody)
    }
    else if (branchEvolveBody && stageBodyIndex == 3 && !branchEvolveHead) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h2b0").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h2b0-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h2b1").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h2b1-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h0b2").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h0b2-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h1b2").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h1b2-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[2] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h2b2").text(data[headEvolveChain[2]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h2b2-num").text("#" + headEvolveChain[2] + "." + bodyEvolveChain[branchIndexBody])

        }
        console.log("body second evolve branch")
    }

    //good
    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 2 && stageBodyIndex == 2) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[0])

        }


        if (headEvolveChain[0] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[1])

        }

    }

    //good
    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 3 && stageBodyIndex == 2) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody)
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h2b0").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h2b0-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h2b1").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h2b1-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[branchIndexBody])

        }

    }

    //good
    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 2 && stageBodyIndex == 3) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

            if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[0] !== undefined) {
                $("h4.h1b0").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[0]].nameBody);
                $("h5.h1b0-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[0])

            }


            if (headEvolveChain[0] !== undefined && bodyEvolveChain[1] !== undefined) {
                $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[1]].nameBody);
                $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[1])

            }

            if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[1] !== undefined) {
                $("h4.h1b1").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[1]].nameBody);
                $("h5.h1b1-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[1])

            }


            if (headEvolveChain[0] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
                $("h4.h0b2").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
                $("h5.h0b2-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[branchIndexBody])

            }

            if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
                $("h4.h1b2").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
                $("h5.h1b2-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[branchIndexBody])

            }

        }
    }

    //good
    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 3 && stageBodyIndex == 3) {
        if (headEvolveChain[0] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h0b0").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h0b0-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h1b0").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h1b0-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[0] !== undefined) {
            $("h4.h2b0").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[0]].nameBody);
            $("h5.h2b0-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[0])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h0b1").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h0b1-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h1b1").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h1b1-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[1] !== undefined) {
            $("h4.h2b1").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[1]].nameBody);
            $("h5.h2b1-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[1])

        }

        if (headEvolveChain[0] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h0b2").text(data[headEvolveChain[0]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h0b2-num").text("#" + headEvolveChain[0] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[1] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h1b2").text(data[headEvolveChain[1]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h1b2-num").text("#" + headEvolveChain[1] + "." + bodyEvolveChain[branchIndexBody])

        }

        if (headEvolveChain[branchIndexHead] !== undefined && bodyEvolveChain[branchIndexBody] !== undefined) {
            $("h4.h2b2").text(data[headEvolveChain[branchIndexHead]].nameHead + data[bodyEvolveChain[branchIndexBody]].nameBody);
            $("h5.h2b2-num").text("#" + headEvolveChain[branchIndexHead] + "." + bodyEvolveChain[branchIndexBody])

        }
        console.log("body second evolve branch")
    }
}


//Set HTML elemets to match new fusion pokemon details.
function UpdateHTML(bodyId, headId, newState) {

    //stats
    var statsBar = $(".stat-bar")
    var baseStats = $(".base-stat")
    var minStats = $(".td-min-stat")
    var maxStats = $(".td-max-stat")





    //Base Stat Amounts
    baseStats[0].textContent = fusion.stats.hp;
    baseStats[1].textContent = fusion.stats.atk;
    baseStats[2].textContent = fusion.stats.def;
    baseStats[3].textContent = fusion.stats.spatk;
    baseStats[4].textContent = fusion.stats.spdef;
    baseStats[5].textContent = fusion.stats.spe;

    for (let i = 0; i < 6; i++) {

        //Removing classes which determine stat bars colours
        statsBar[i].classList.remove("below-40")
        statsBar[i].classList.remove("above-40")
        statsBar[i].classList.remove("above-70")
        statsBar[i].classList.remove("above-100")
        statsBar[i].classList.remove("above-120")

        //Creating a scaled bar proportion for the base stats
        if (baseStats[i].textContent > 150) {
            scaledStats[i] = Math.pow(baseStats[i].textContent, 0.542) / 0.2015;
        }
        else {
            scaledStats[i] = Math.pow(baseStats[i].textContent, 0.85) / 0.9432;
        }

        //Adding classes for stat bars
        if (baseStats[i].textContent < 40) {
            statsBar[i].classList.add("below-40")
        }
        else if (baseStats[i].textContent >= 40 && baseStats[i].textContent < 70) {
            statsBar[i].classList.add("above-40")
        }
        else if (baseStats[i].textContent >= 70 && baseStats[i].textContent < 100) {
            statsBar[i].classList.add("above-70")
        }
        else if (baseStats[i].textContent >= 100 && baseStats[i].textContent < 120) {
            statsBar[i].classList.add("above-100")
        }
        else if (baseStats[i].textContent >= 120) {
            statsBar[i].classList.add("above-120")
        }
        else {
            console.log("no stat should meet this criteria - THIS IS AN ERROR MESSAGE")
        }

    }

    //Setting Scaled bar proportion
    statsBar[0].style.width = scaledStats[0] + "%";
    statsBar[1].style.width = scaledStats[1] + "%";
    statsBar[2].style.width = scaledStats[2] + "%";
    statsBar[3].style.width = scaledStats[3] + "%";
    statsBar[4].style.width = scaledStats[4] + "%";
    statsBar[5].style.width = scaledStats[5] + "%";

    //Total Stat Value
    baseStats[6].textContent = (fusion.stats.hp + fusion.stats.atk + fusion.stats.def + fusion.stats.spatk + fusion.stats.spdef + fusion.stats.spe)

    minStats[0].textContent = Math.floor((2 * fusion.stats.hp)) + 110;
    minStats[1].textContent = Math.floor((Math.floor(2 * fusion.stats.atk) + 5) * 0.9)
    minStats[2].textContent = Math.floor((Math.floor(2 * fusion.stats.def) + 5) * 0.9)
    minStats[3].textContent = Math.floor((Math.floor(2 * fusion.stats.spatk) + 5) * 0.9)
    minStats[4].textContent = Math.floor((Math.floor(2 * fusion.stats.spdef) + 5) * 0.9)
    minStats[5].textContent = Math.floor((Math.floor(2 * fusion.stats.spe) + 5) * 0.9)

    maxStats[0].textContent = Math.floor((2 * fusion.stats.hp + 31 + 252 / 4)) + 110;
    maxStats[1].textContent = Math.floor((Math.floor(2 * fusion.stats.atk + 31 + 252 / 4) + 5) * 1.1)
    maxStats[2].textContent = Math.floor((Math.floor(2 * fusion.stats.def + 31 + 252 / 4) + 5) * 1.1)
    maxStats[3].textContent = Math.floor((Math.floor(2 * fusion.stats.spatk + 31 + 252 / 4) + 5) * 1.1)
    maxStats[4].textContent = Math.floor((Math.floor(2 * fusion.stats.spdef + 31 + 252 / 4) + 5) * 1.1)
    maxStats[5].textContent = Math.floor((Math.floor(2 * fusion.stats.spe + 31 + 252 / 4) + 5) * 1.1)


    //evolution method
    DeterminePossibleEvolutions(evolveBody, evolveHead);
    HideIrrelevantEvolutions(hideElements, newState);
    EvolveMethod(evolveBody, evolveHead, bodyId, headId);
    CentreEvolutions(evolveHead, newState);
    NameEvolutions(bodyPartName, headPartName);


    //Removing old data.
    if (newState) {
        $(".type-text").remove()
        $(".ability-text").remove()
        $(".catchRate-text").remove()
        $(".image-element-head").remove()
        $(".image-element-body").remove()
        $(".icon").remove()
        $(".icon-text").remove()
        $(".hidden-ability-text").remove()
    }

    //types
    var type1Html = $(".type-1").append("<span class='type-text " + types[0] + "'>" + types[0] + "</span>");

    if (types[1]) {
        var type2Html = $(".type-2").append("<span class='type-text " + types[1] + "'>" + types[1] + "</span>");
    }



    //abilities
    var abilitytxt1 = $(".ability").append("<h5 class='ability-text'>" + fusion.abilities[0] + "</h5>");
    if (fusion.abilities[1]) {
        var abilitytxt2 = $(".ability").append("<h5 class='ability-text'>" + fusion.abilities[1] + "</h5>");
    }

    if (fusion.abilities[2]) {
        var abilitytxt3 = $(".ability").append("<h5 class='ability-text'>" + fusion.abilities[2] + "</h5>");
    }

    if (fusion.abilities[3]) {
        var abilitytxt4 = $(".ability").append("<h5 class='ability-text'>" + fusion.abilities[3] + "</h5>");
    }

    //Hidden Abilities

    if (fusion.abilities[4]) {
        var abilitytxt5 = $(".ability").append("<h5 class='ability-text'>" + fusion.abilities[4] + "</h5>");
        var abilitytxt5 = $(".ability").append("<h5 class='hidden-ability-text'>(Hidden Ability)</h5>");

    }

    if (fusion.abilities[5]) {
        var abilitytxt6 = $(".ability").append("<h5 class='ability-text'>" + fusion.abilities[5] + "</h5>");
        var abilitytxt5 = $(".ability").append("<h5 class='hidden-ability-text'>(Hidden Ability)</h5>");

    }

    //Catch rate
    var catchRateHtml = $(".catch-rate").append("<h5 class='catchRate-text'>" + fusion.catchRate + "</h5>");

    //fusion images

    var frontImg = $("#frontImg").append(LoadImage(bodyId, headId, true));
    document.getElementById("frontImg").height = "400px";

    if (Number(headId) - 1 > 420) {
        $("#prevHeadFusion").append(`<img src="../images/Battlers/` + (headId - 1) + `/` + (headId - 1) + '.png", alt="prev-head: ' + (headId - 1) + '", class="icon icon-small">');

        // console.log("head id too large only have mons < 421, where headid is: " + headId)
    }
    else if (headId == 1) {
        $("#prevHeadFusion").append(`<img src="../images/Icons/icon` + "000" + '.png", alt="prev-head: ???", class="icon">');

    }
    else {
        $("#prevHeadFusion").append(`<img src="../images/Icons/icon` + String(Number(headId) - 1) + '.png", alt="prev-head: ' + (headId - 1) + '", class="icon">');
        // $("#prevHeadFusion").append(`<h5 class="icon-text">#` + String(Number(headId) - 1) + `</h5>`);

    }



    if (Number(headId) + 1 > 462) {
        $("#nextHeadFusion").append(`<img src="../images/Icons/icon` + "000" + '.png", alt="next-head: ???", class="icon">');
    }

    else if (Number(headId) + 1 > 420) {
        $("#nextHeadFusion").append(`<img src="../images/Battlers/` + (headId + 1) + `/` + (headId + 1) + '.png", alt="next-head: ' + (headId + 1) + '", class="icon icon-small">');
        console.log("head id too large only have mons < 421: head id: " + String(Number(headId) + 1))
    }
    else {
        $("#nextHeadFusion").append(`<img src="../images/Icons/icon` + String(Number(headId) + 1) + '.png", alt="next-head: ' + (headId + 1) + '", class="icon">');

        // $("#nextHeadFusion").append(`<h5 class="icon-text">#` + String(Number(headId) + 1) + `</h5>`);

    }


    if (Number(bodyId) - 1 > 420) {
        $("#prevBodyFusion").append(`<img src="../images/Battlers/` + (bodyId - 1) + `/` + (bodyId - 1) + '.png", alt="prev-body: ' + (bodyId - 1) + '", class="icon icon-small">');
        console.log("body id too large only have mons < 421, bodyId: " + bodyId)
    }
    else if (bodyId == 1) {
        $("#prevBodyFusion").append(`<img src="../images/Icons/icon` + "000" + '.png", alt="prev-body: ??? ", class="icon">');

    }
    else {
        $("#prevBodyFusion").append(`<img src="../images/Icons/icon` + String(Number(bodyId) - 1) + '.png", alt="prev-body: ' + (bodyId - 1) + '", class="icon">');

        // $("#prevBodyFusion").append(`<h5 class="icon-text">#` + String(Number(bodyId) - 1) + `</h5>`);

    }



    if (Number(bodyId) + 1 > 462) {
        $("#nextBodyFusion").append(`<img src="../images/Icons/icon` + "000" + '.png", alt="next-body: ???", class="icon">');
    }

    if (Number(bodyId) + 1 > 420) {
        $("#nextBodyFusion").append(`<img src="../images/Battlers/` + (bodyId + 1) + `/` + (bodyId + 1) + '.png", alt="next-body: ' + (bodyId + 1) + '", class="icon icon-small">');

        console.log("body id too large only have mons < 421" + bodyId)
    }
    else {
        $("#nextBodyFusion").append(`<img src="../images/Icons/icon` + String(Number((bodyId)) + 1) + '.png", alt="next-body: ' + (bodyId + 1) + '", class="icon">');
        // $("#nextBodyFusion").append(`<h5 class="icon-text">#` + String(Number((bodyId)) + 1) + `</h5>`);

    }








    //CONSOLE LOGGING
    // console.log(headEvolveChain[branchIndexHead])
    // console.log(branchIndexHead)
    // console.log(stageHeadIndex)
    // console.log(stageBodyIndex)


    //BRANCHING BOTH
    if (!branchEvolveBody && !branchEvolveHead) {

        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            var H2B0img = $("#h2b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[2], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            var H2B1img = $("#h2b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[2], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            var H0B2img = $("#h0b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            var H1B2img = $("#h1b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            var H2B2img = $("#h2b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[2], false));
        }
    }

    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 2 && stageBodyIndex == 2) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[branchIndexHead], false));
        }
    }

    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 3 && stageBodyIndex == 2) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            var H2B0img = $("#h2b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            var H2B1img = $("#h2b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[branchIndexHead], false));
        } false
    }


    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 2 && stageBodyIndex == 3) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            var H0B2img = $("#h0b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            var H1B2img = $("#h1b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[branchIndexHead], false));
        }
    }

    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 3 && stageBodyIndex == 3) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            var H2B0img = $("#h2b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            var H2B1img = $("#h2b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            var H0B2img = $("#h0b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            var H1B2img = $("#h1b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            var H2B2img = $("#h2b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[branchIndexHead], false));
            branchIndexHead
        }
    }

    //BRANCH FOR HEAD
    else if (branchEvolveHead && stageHeadIndex == 2 && !branchEvolveBody) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            var H0B2img = $("#h0b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            var H1B2img = $("#h1b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[branchIndexHead], false));
        }
    }
    else if (branchEvolveHead && stageHeadIndex == 3 && !branchEvolveBody) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            var H2B0img = $("#h2b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            console.log(headEvolveChain[branchIndexHead])
            var H2B1img = $("#h2b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[branchIndexHead], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            var H0B2img = $("#h0b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            var H1B2img = $("#h1b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            var H2B2img = $("#h2b2img").append(LoadImage(bodyEvolveChain[2], headEvolveChain[branchIndexHead], false));
        }
    }

    //BRANCH FOR BODY
    else if (branchEvolveBody && stageBodyIndex == 2 && !branchEvolveHead) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            var H2B0img = $("#h2b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[2], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            var H2B1img = $("#h2b1img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[2], false));
        }
    }
    else if (branchEvolveBody && stageBodyIndex == 3 && !branchEvolveHead) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            var H0B0img = $("#h0b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            var H1B0img = $("#h1b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            var H2B0img = $("#h2b0img").append(LoadImage(bodyEvolveChain[0], headEvolveChain[2], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            var H0B1img = $("#h0b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            var H1B1img = $("#h1b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            var H2B1img = $("#h2b1img").append(LoadImage(bodyEvolveChain[1], headEvolveChain[2], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            var H0B2img = $("#h0b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[0], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            var H1B2img = $("#h1b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[1], false));
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            var H2B2img = $("#h2b2img").append(LoadImage(bodyEvolveChain[branchIndexBody], headEvolveChain[2], false));
        }
    }
    else {

        console.log("oops! nothing found!, shouldl never reach this message")
        console.log("stagebodyindex : " + stageBodyIndex)
    }








    //learn moves
    //tm moves
    //type effectiveness

    //Non-Fusion Images
    var bodyImg = $(".body-image").append('<img src="../images/Battlers/' + bodyId + '/' + bodyId + '.png", alt="body-id: ' + bodyId + '", class="image-element-head">');
    var headImg = $(".head-image").append('<img src="../images/Battlers/' + headId + '/' + headId + '.png", alt="head-id: ' + headId + '", class="image-element-body">');


    //Non-Fusion Names
    var bodyNameHtml = $(".body-name")
    var headNameHtml = $(".head-name")
    bodyNameHtml[0].textContent = bodyName + " #" + bodyId;
    headNameHtml[0].textContent = headName + " #" + headId

    LearnMoves(bodyLearnMoves, headLearnMoves);


    //Adding background colours

    for (let i = 0; i < bodyEvolveChain.length; i++) {

        for (let j = 0; j < headEvolveChain.length; j++) {
            var fusionIndex = "h" + j.toString() + "b" + i.toString();
            var tempBodyType1 = data[bodyEvolveChain[i]].type1
            var tempBodyType2 = data[bodyEvolveChain[i]].type2


            var tempHeadType1 = data[headEvolveChain[j]].type1
            var tempHeadType2 = data[headEvolveChain[j]].type2


            // console.log("four types used for fusion are: ")
            if (tempBodyType2 == undefined) {
                tempBodyType2 = ""
            }

            if (tempHeadType2 == undefined) {
                tempHeadType2 = ""
            }

            // console.log(tempBodyType1)
            // console.log(tempBodyType2)

            // console.log(tempHeadType1)
            // console.log(tempHeadType2)




            var tempFusionType = DetermineTyping(tempBodyType1, tempBodyType2, tempHeadType1, tempHeadType2)
            // console.log(tempFusionType)
            // console.log("fusion index: " + fusionIndex)
            FusionColour(tempFusionType[0], tempFusionType[1], fusionIndex)
        }

    }

    BodySlider();
    HeadSlider();



}



//Create a function which determines the evolution chain
function EvolveChain(chainBodyId, chainHeadId) {
    //Determine what evolutions can occur. add to evolveBody / evolveHead

    //set Evolution Chart references to the relevant evolutions.


    //Evolve chain

    // console.log(chainHeadId)
    //BODY

    //If given pokemon didnt evolve from anything
    if (data[chainBodyId].evolveFromRef == 0) {

        //adding first stage into reference list
        bodyEvolveChain.push(chainBodyId)

        //If the given pokemon can evolve.
        if (!(data[chainBodyId].evolveMethod == "" || data[chainBodyId].evolveMethod == "0")) {
            //Adding first stage evolution method
            evolveBody.push(data[chainBodyId].evolveMethod)
            //Adding second stage into reference list
            bodyEvolveChain.push(data[chainBodyId].evolveIntoRef)


            //If the pokemon can evolve a second time
            if (!(data[chainBodyId].evolveIntoRef.length > 3 || data[data[chainBodyId].evolveIntoRef].evolveMethod == "" || data[data[chainBodyId].evolveIntoRef].evolveMethod == "0")) {
                //Adding Second stage evolution method
                evolveBody.push(data[data[chainBodyId].evolveIntoRef].evolveMethod)
                //Adding Third stage into reference list
                bodyEvolveChain.push(data[data[chainBodyId].evolveIntoRef].evolveIntoRef)

            }

        }

    }
    //IF (Our pokemon only has 1 stage before it)
    else if (data[data[chainBodyId].evolveFromRef].evolveFromRef == 0) {
        //Adding the one stage before in to reference list
        bodyEvolveChain.push(data[chainBodyId].evolveFromRef)

        //Adding the first stage's evolve method
        evolveBody.push(data[data[chainBodyId].evolveFromRef].evolveMethod)

        //Checking if our pokemon can evolve
        if (!(data[chainBodyId].evolveMethod == "" || data[chainBodyId].evolveMethod == "0")) {
            //add second stage reference
            bodyEvolveChain.push(chainBodyId)
            //Adding Second Stage Evolve Method
            evolveBody.push(data[chainBodyId].evolveMethod)
            //add third stage reference
            bodyEvolveChain.push(data[chainBodyId].evolveIntoRef)
        }
        else {
            // add second stage reference
            bodyEvolveChain.push(chainBodyId)
        }


    }
    //IF (Our pokemon has 2 stages before it)
    else {
        //Setting first stage into reference
        bodyEvolveChain.push(data[data[chainBodyId].evolveFromRef].evolveFromRef)
        //Setting the first stage evolution to be 2 evolutions prior the given body pokemon
        evolveBody.push(data[data[data[chainBodyId].evolveFromRef].evolveFromRef].evolveMethod)

        //Setting second stage into reference
        bodyEvolveChain.push(data[chainBodyId].evolveFromRef)
        //Setting second stage evolution method
        evolveBody.push(data[data[chainBodyId].evolveFromRef].evolveMethod)


        //Setting third stage into refrence
        bodyEvolveChain.push(chainBodyId)
    }





    //HEAD

    //If given pokemon didnt evolve from anything
    if (data[chainHeadId].evolveFromRef == 0) {

        //adding first stage into reference list
        headEvolveChain.push(chainHeadId)

        //If the given pokemon can evolve.
        if (!(data[chainHeadId].evolveMethod == "" || data[chainHeadId].evolveMethod == "0")) {
            //Adding first stage evolution method
            evolveHead.push(data[chainHeadId].evolveMethod)
            //Adding second stage into reference list
            headEvolveChain.push(data[chainHeadId].evolveIntoRef)


            //If the pokemon can evolve a second time
            if (!(data[chainHeadId].evolveIntoRef.length > 3 || data[data[chainHeadId].evolveIntoRef].evolveMethod == "" || data[data[chainHeadId].evolveIntoRef].evolveMethod == "0")) {
                //Adding Second stage evolution method
                evolveHead.push(data[data[chainHeadId].evolveIntoRef].evolveMethod)
                //Adding Third stage into reference list
                headEvolveChain.push(data[data[chainHeadId].evolveIntoRef].evolveIntoRef)
            }

        }

    }
    //IF (Our pokemon only has 1 stage before it)
    else if (data[data[chainHeadId].evolveFromRef].evolveFromRef == 0) {
        //Adding the one stage before in to reference list
        headEvolveChain.push(data[chainHeadId].evolveFromRef)

        //Adding the first stage's evolve method
        evolveHead.push(data[data[chainHeadId].evolveFromRef].evolveMethod)

        //Checking if our pokemon can evolve
        if (!(data[chainHeadId].evolveMethod == "" || data[chainHeadId].evolveMethod == "0")) {
            //add second stage reference
            headEvolveChain.push(chainHeadId)
            //Adding Second Stage Evolve Method
            evolveHead.push(data[chainHeadId].evolveMethod)
            //add third stage reference
            headEvolveChain.push(data[chainHeadId].evolveIntoRef)
        }
        else {
            // add second stage reference
            headEvolveChain.push(chainHeadId)
        }


    }
    //IF (Our pokemon has 2 stages before it)
    else {
        //Setting first stage into reference
        headEvolveChain.push(data[data[chainHeadId].evolveFromRef].evolveFromRef)
        //Setting the first stage evolution to be 2 evolutions prior the given head pokemon
        evolveHead.push(data[data[data[chainHeadId].evolveFromRef].evolveFromRef].evolveMethod)

        //Setting second stage into reference
        headEvolveChain.push(data[chainHeadId].evolveFromRef)
        //Setting second stage evolution method
        evolveHead.push(data[data[chainHeadId].evolveFromRef].evolveMethod)


        //Setting third stage into refrence
        headEvolveChain.push(chainHeadId)
    }






    //BODY
    //BRANCH Evolutions
    //console.log(bodyEvolveChain)
    var newBranch1 = [];
    var stopiIndex = 0;
    var stopjIndex = 0;
    var firstBranch = true

    // console.log("original bodyEvolveChain")
    //  console.log(bodyEvolveChain)
    // console.log('')
    for (let i = 0; i < bodyEvolveChain.length; i++) {
        for (let j = 0; j < bodyEvolveChain[i].length; j++) {
            //  console.log("looking inside : " + bodyEvolveChain[i])
            //  console.log("j = " + j + ",  letter = " + bodyEvolveChain[i][j])
            if (bodyEvolveChain[i][j] == ",") {

                if (firstBranch) {
                    newBranch1.push(bodyEvolveChain[i].slice(stopjIndex, j))
                    firstBranch = false;
                }
                else {
                    //console.log("we are trying to branch this evolution")
                    newBranch1.push(bodyEvolveChain[i].slice(stopjIndex + 1, j))
                }

                //newBranch2 = bodyEvolveChain[i].slice(j+1,bodyEvolveChain[i].length)
                stopjIndex = j
                stopiIndex = i



                // console.log("slice indices = " + (j + 1) + "," + bodyEvolveChain[i].length)
                //console.log("newBranch1")
                //console.log(newBranch1)

            }
        }

    }

    if (stopjIndex !== 0) {
        newBranch1.push(bodyEvolveChain[stopiIndex].slice(stopjIndex + 1, bodyEvolveChain[stopiIndex].length))
    }

    if (newBranch1[0] !== undefined) {
        // console.log("")
        // console.log("bodyEvolveChain")
        // console.log(bodyEvolveChain)
        bodyEvolveChain.pop()
        for (let i = 0; i < newBranch1.length; i++) {
            bodyEvolveChain.push(newBranch1[i])
            //console.log(bodyEvolveChain)
        }


    }
    // console.log("bodyEvolveChain = " + bodyEvolveChain)





    //HEAD
    //BRANCH EVOLUTIONS
    //  console.log("original headEvolveChain")
    // console.log(headEvolveChain)
    // console.log('')
    newBranch1 = [];
    firstBranch = true;
    stopjIndex = 0;
    stopiIndex = 0;
    for (let i = 0; i < headEvolveChain.length; i++) {
        for (let j = 0; j < headEvolveChain[i].length; j++) {
            //console.log("looking inside : " + headEvolveChain[i])
            //console.log("j = " + j)
            //console.log(headEvolveChain[i][j])
            if (headEvolveChain[i][j] == ",") {

                if (firstBranch) {
                    newBranch1.push(headEvolveChain[i].slice(stopjIndex, j))
                    firstBranch = false;
                }
                else {
                    //console.log("we are trying to branch this evolution")
                    newBranch1.push(headEvolveChain[i].slice(stopjIndex + 1, j))
                }

                //newBranch2 = headEvolveChain[i].slice(j+1,headEvolveChain[i].length)
                stopjIndex = j
                stopiIndex = i



                //console.log("slice indices = " + (j + 1) + "," + headEvolveChain[i].length)
                // console.log("newBranch1")
                // console.log(newBranch1)

            }
        }

    }

    if (stopjIndex !== 0) {
        newBranch1.push(headEvolveChain[stopiIndex].slice(stopjIndex + 1, headEvolveChain[stopiIndex].length))
    }

    if (newBranch1[0] !== undefined) {
        // console.log("")
        // console.log("headEvolveChain")
        // console.log(headEvolveChain)
        headEvolveChain.pop()
        for (let i = 0; i < newBranch1.length; i++) {
            headEvolveChain.push(newBranch1[i])
            //console.log(headEvolveChain)
        }

    }
    //console.log("headEvolveChain = " + headEvolveChain)


}
let LoadIcon = function (id, newState) {
    console.log("Attempting to load an Icon")
    var image = new Image();


    if (id.length == 1) {
        id = "00" + String(id)
    }
    else if (id.length == 2) {
        id = "0" + String(id)
    }


    var url_image = '../images/Icons/icon' + id + '.png';

    image.src = url_image;

    console.log('../images/Icons/icon' + id + '.png')
    console.log(image.width)



    iconImagesLength = $(".icon").length


    if ((newState == undefined || newState == false) && iconImagesLength > 0) {
        $(".icon").remove()
    }

    if (id > 463 || id == 0) {
        return `<img src='../images/Icons/icon` + "000" + `.png', alt="icon-???", class="icon">`;
    } else {
        return `<img src='../images/Icons/icon` + id + `.png', alt="icon: ` + id + `", class="icon">`;
    }
}


let LoadImage = function (bodyReference, headReference, firstImage) {


    var image = new Image();
    var url_image = `../images/CustomBattlers/indexed/` + headReference + "/" + headReference + "." + bodyReference + `.png`;
    image.src = url_image;
    console.log(firstImage)


    fusionImagesLength = $(".fusion-image").length


    if (firstImage == true && fusionImagesLength > 0) {
        $(".fusion-image").remove()
    }

    console.log("Returning one image")

    return `<img src='../images/CustomBattlers/indexed/` + headReference + "/" + headReference + "." + bodyReference + `.png', alt="custom: ` + headReference + `.` + bodyReference + `", class="fusion-image"
        , onerror="this.src='../images/Battlers/` + headReference + `/` + headReference + `.` + bodyReference + `.png'">`;




    // if (image.width !== 0) {
    //     console.log(image.width + "@: body: " + bodyReference + ", head: " + headReference)
    //     return `<img src='../images/CustomBattlers/indexed/` + headReference + "/" + headReference + "." + bodyReference + `.png', alt="custom: ` + headReference + `.` + bodyReference + `", class="fusion-image">`;
    // } else {
    //     console.log("using default sprite as image width: " + image.width)
    //     console.log(image.width + "@: body: " + bodyReference + ", head: " + headReference)

    //     return `<img src='../images/Battlers/` + headReference + "/" + headReference + "." + bodyReference + `.png', alt="pregen: ` + headReference + `.` + bodyReference + `",  class="fusion-image">`;
    // }




}

//Create a function which loads in the pokemon fusion that was clicked on.
function ClickPokemon() {
    clickH0B0 = document.getElementsByClassName("h0b0")
    clickH1B0 = document.getElementsByClassName("h1b0")
    clickH2B0 = document.getElementsByClassName("h2b0")
    clickH0B1 = document.getElementsByClassName("h0b1")
    clickH1B1 = document.getElementsByClassName("h1b1")
    clickH2B1 = document.getElementsByClassName("h2b1")
    clickH0B2 = document.getElementsByClassName("h0b2")
    clickH1B2 = document.getElementsByClassName("h1b2")
    clickH2B2 = document.getElementsByClassName("h2b2")
    clickHeadPrev = document.getElementById("prevHeadFusion")
    clickHeadNext = document.getElementById("nextHeadFusion")
    clickBodyPrev = document.getElementById("prevBodyFusion")
    clickBodyNext = document.getElementById("nextBodyFusion")
    clickRev = document.getElementById("revFusion")
    clickRand = document.getElementById("randFusion")


    clickIconBody1 = document.getElementsByClassName("iconBody1")
    clickIconBody2 = document.getElementsByClassName("iconBody2")
    clickIconBody3 = document.getElementsByClassName("iconBody3")
    clickIconBody4 = document.getElementsByClassName("iconBody4")
    clickIconBody5 = document.getElementsByClassName("iconBody5")
    clickIconBody6 = document.getElementsByClassName("iconBody6")
    clickIconBody7 = document.getElementsByClassName("iconBody7")
    clickIconBody8 = document.getElementsByClassName("iconBody8")

    clickIconHead1 = document.getElementsByClassName("iconHead1")
    clickIconHead2 = document.getElementsByClassName("iconHead2")
    clickIconHead3 = document.getElementsByClassName("iconHead3")
    clickIconHead4 = document.getElementsByClassName("iconHead4")
    clickIconHead5 = document.getElementsByClassName("iconHead5")
    clickIconHead6 = document.getElementsByClassName("iconHead6")
    clickIconHead7 = document.getElementsByClassName("iconHead7")
    clickIconHead8 = document.getElementsByClassName("iconHead8")







    //BRANCHING NEITHER
    if (!branchEvolveBody && !branchEvolveHead) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            h0b0BodyListen = bodyEvolveChain[0];
            h0b0HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            h1b0BodyListen = bodyEvolveChain[0];
            h1b0HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            h2b0BodyListen = bodyEvolveChain[0];
            h2b0HeadListen = headEvolveChain[2];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            h0b1BodyListen = bodyEvolveChain[1];
            h0b1HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            h1b1BodyListen = bodyEvolveChain[1];
            h1b1HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            h2b1BodyListen = bodyEvolveChain[1];
            h2b1HeadListen = headEvolveChain[2];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            h0b2BodyListen = bodyEvolveChain[2];
            h0b2HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            h1b2BodyListen = bodyEvolveChain[2];
            h1b2HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            h2b2BodyListen = bodyEvolveChain[2];
            h2b2HeadListen = headEvolveChain[2];
        }
    }

    //BRANCHING BOTH
    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 2 && stageBodyIndex == 2) {
        for (let i = 0; i < clickH0B0.length; i++) {
            if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
                h0b0BodyListen = bodyEvolveChain[0];
                h0b0HeadListen = headEvolveChain[0];
            }
            if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
                h1b0BodyListen = bodyEvolveChain[0];
                h1b0HeadListen = headEvolveChain[branchIndexHead];
            }
            if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
                h0b1BodyListen = bodyEvolveChain[branchIndexBody];
                h0b1HeadListen = headEvolveChain[0];
            }
            if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
                h1b1BodyListen = bodyEvolveChain[branchIndexBody];
                h1b1HeadListen = headEvolveChain[branchIndexHead];
            }
        }
    }

    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 3 && stageBodyIndex == 2) {
        for (let i = 0; i < clickH0B0.length; i++) {
            if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
                h0b0BodyListen = bodyEvolveChain[0];
                h0b0HeadListen = headEvolveChain[0];
            }
            if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
                h1b0BodyListen = bodyEvolveChain[0];
                h1b0HeadListen = headEvolveChain[1];
            }
            if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
                h2b0BodyListen = bodyEvolveChain[0];
                h2b0HeadListen = headEvolveChain[branchIndexHead];
            }
            if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
                h0b1BodyListen = bodyEvolveChain[branchIndexBody];
                h0b1HeadListen = headEvolveChain[0];
            }
            if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
                h1b1BodyListen = bodyEvolveChain[branchIndexBody];
                h1b1HeadListen = headEvolveChain[1];
            }
            if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
                h2b1BodyListen = bodyEvolveChain[branchIndexBody];
                h2b1HeadListen = headEvolveChain[branchIndexHead];
            }
        }
    }

    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 2 && stageBodyIndex == 3) {
        for (let i = 0; i < clickH0B0.length; i++) {
            if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
                h0b0BodyListen = bodyEvolveChain[0];
                h0b0HeadListen = headEvolveChain[0];
            }
            if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
                h1b0BodyListen = bodyEvolveChain[0];
                h1b0HeadListen = headEvolveChain[branchIndexHead];
            }
            if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
                h0b1BodyListen = bodyEvolveChain[1];
                h0b1HeadListen = headEvolveChain[0];
            }
            if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
                h1b1BodyListen = bodyEvolveChain[1];
                h1b1HeadListen = headEvolveChain[branchIndexHead];
            }
            if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
                h0b2BodyListen = bodyEvolveChain[branchIndexBody];
                h0b2HeadListen = headEvolveChain[0];
            }
            if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
                h1b2BodyListen = bodyEvolveChain[branchIndexBody];
                h1b2HeadListen = headEvolveChain[branchIndexHead];
            }
        }
    }

    else if (branchEvolveHead && branchEvolveBody &&
        stageHeadIndex == 3 && stageBodyIndex == 3) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            h0b0BodyListen = bodyEvolveChain[0];
            h0b0HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            h1b0BodyListen = bodyEvolveChain[0];
            h1b0HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            h2b0BodyListen = bodyEvolveChain[0];
            h2b0HeadListen = headEvolveChain[branchIndexHead];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            h0b1BodyListen = bodyEvolveChain[1];
            h0b1HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            h1b1BodyListen = bodyEvolveChain[1];
            h1b1HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            h2b1BodyListen = bodyEvolveChain[1];
            h2b1HeadListen = headEvolveChain[branchIndexHead];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            h0b2BodyListen = bodyEvolveChain[branchIndexBody];
            h0b2HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            h1b2BodyListen = bodyEvolveChain[branchIndexBody];
            h1b2HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            h2b2BodyListen = bodyEvolveChain[branchIndexBody];
            h2b2HeadListen = headEvolveChain[branchIndexHead];
        }
    }


    //BRANCH FOR HEAD
    else if (branchEvolveHead && stageHeadIndex == 2 && !branchEvolveBody) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            h0b0BodyListen = bodyEvolveChain[0];
            h0b0HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            h1b0BodyListen = bodyEvolveChain[0];
            h1b0HeadListen = headEvolveChain[branchIndexHead];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            h0b1BodyListen = bodyEvolveChain[1];
            h0b1HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            h1b1BodyListen = bodyEvolveChain[1];
            h1b1HeadListen = headEvolveChain[branchIndexHead];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            h0b2BodyListen = bodyEvolveChain[2];
            h0b2HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            h1b2BodyListen = bodyEvolveChain[2];
            h1b2HeadListen = headEvolveChain[branchIndexHead];
        }
    }

    else if (branchEvolveHead && stageHeadIndex == 3 && !branchEvolveBody) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            h0b0BodyListen = bodyEvolveChain[0];
            h0b0HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            h1b0BodyListen = bodyEvolveChain[0];
            h1b0HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            h2b0BodyListen = bodyEvolveChain[0];
            h2b0HeadListen = headEvolveChain[branchIndexHead];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            h0b1BodyListen = bodyEvolveChain[1];
            h0b1HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            h1b1BodyListen = bodyEvolveChain[1];
            h1b1HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            h2b1BodyListen = bodyEvolveChain[1];
            h2b1HeadListen = headEvolveChain[branchIndexHead];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            h0b2BodyListen = bodyEvolveChain[2];
            h0b2HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            h1b2BodyListen = bodyEvolveChain[2];
            h1b2HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            h2b2BodyListen = bodyEvolveChain[2];
            h2b2HeadListen = headEvolveChain[branchIndexHead];
        }
    }

    //BRANCH FOR BODY
    else if (branchEvolveBody && stageBodyIndex == 2 && !branchEvolveHead) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            h0b0BodyListen = bodyEvolveChain[0];
            h0b0HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            h1b0BodyListen = bodyEvolveChain[0];
            h1b0HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            h2b0BodyListen = bodyEvolveChain[0];
            h2b0HeadListen = headEvolveChain[2];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            h0b1BodyListen = bodyEvolveChain[branchIndexBody];
            h0b1HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            h1b1BodyListen = bodyEvolveChain[branchIndexBody];
            h1b1HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            h2b1BodyListen = bodyEvolveChain[branchIndexBody];
            h2b1HeadListen = headEvolveChain[2];
        }
    }
    else if (branchEvolveBody && stageBodyIndex == 3 && !branchEvolveHead) {
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 0) {
            h0b0BodyListen = bodyEvolveChain[0];
            h0b0HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 1) {
            h1b0BodyListen = bodyEvolveChain[0];
            h1b0HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 0 && headEvolveChain.length > 2) {
            h2b0BodyListen = bodyEvolveChain[0];
            h2b0HeadListen = headEvolveChain[2];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 0) {
            h0b1BodyListen = bodyEvolveChain[1];
            h0b1HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 1) {
            h1b1BodyListen = bodyEvolveChain[1];
            h1b1HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 1 && headEvolveChain.length > 2) {
            h2b1BodyListen = bodyEvolveChain[1];
            h2b1HeadListen = headEvolveChain[2];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 0) {
            h0b2BodyListen = bodyEvolveChain[branchIndexBody];
            h0b2HeadListen = headEvolveChain[0];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 1) {
            h1b2BodyListen = bodyEvolveChain[branchIndexBody];
            h1b2HeadListen = headEvolveChain[1];
        }
        if (bodyEvolveChain.length > 2 && headEvolveChain.length > 2) {
            h2b2BodyListen = bodyEvolveChain[branchIndexBody];
            h2b2HeadListen = headEvolveChain[2];
        }
    }
    else {

        console.log("oops! nothing found!, shouldl never reach this message")
        console.log("stagebodyindex : " + stageBodyIndex)
    }
    // console.log("h0b0BodyListen")
    // console.log("h0b0HeadListen")
    // console.log(h0b0BodyListen)
    // console.log(h0b0HeadListen)




}

function ReloadPage(body, head, newState) {
    console.log("=====================================================================================================")

    randNum1 = Math.floor(Math.random() * 462)
    randNum2 = Math.floor(Math.random() * 462)
    //console.log("random number 1 is: " + randNum1)

    //console.log("Body Id: " + bodyId);
    //console.log("Head Id: " + headId)
    var headId = head
    var bodyId = body
    var chainBodyId;
    var chainHeadId;
    hideElements = [];

    bodyId2 = body
    headId2 = head

    window.headId = headId
    window.bodyId = bodyId

    console.log("for the overall window")
    console.log("window body id: " + window.bodyId)
    console.log("window head id: " + window.headId)
    SetVariablesFromData(data, moveData, bodyId, headId)

    //Console.log
    console.log("Loading Page! . . , New Load? :  " + newState)
    console.log("body Id: " + bodyId)
    console.log("head Id: " + headId)

    //Reset text fields
    document.getElementById("bodySearch").value = ""
    document.getElementById("bodySearch").placeholder = "Body Pokemon..."
    document.getElementById("headSearch").value = ""
    document.getElementById("headSearch").placeholder = "Head Pokemon..."


    //BODY
    //If body id doesnt evolve use body as chain
    if (bodyEvolveFromRef == 0) {
        chainBodyId = bodyId
    }

    //if bodyId is a branch evolution then set chainid to previous evolution

    else if (data[data[bodyId].evolveFromRef].evolveIntoRef !== bodyId) {
        chainBodyId = bodyEvolveFromRef;
    }
    else {
        chainBodyId = bodyId
    }

    //HEAD
    if (data[headId].evolveFromRef == 0) {
        chainHeadId = headId;
    }
    else if (data[headEvolveFromRef].evolveIntoRef !== headId) {
        chainHeadId = headEvolveFromRef;
        // console.log("data[headEvolveFromRef].evolveIntoRef = ")
        // console.log(data[headEvolveFromRef].evolveIntoRef)
    }
    else {
        chainHeadId = headId
    }

    // console.log("chain body id : " + chainBodyId)
    // console.log("chain head id : " + chainHeadId)
    EvolveChain(chainBodyId, chainHeadId)


    //Determining Fusion Information
    CatchRate(bodyCatchRate, headCatchRate)
    TypeEffective(bodyType1, bodyType2, headType1, headType2)
    Abilities(bodyAbilities, headAbilities)
    Stats(bodyStats, headStats)
    CentreEvolutions(evolveHead, newState)

    UpdateHTML(bodyId, headId, newState);
    ClickPokemon();
    Location(bodyId, headId);

    // console.log(fusion)
    Search(body, head)

    //resetting animations
    ResetBackgrounds();
}

var counterTest = 1
counterTest = [1, 43, 44, 45, 182, 60, 61, 62, 186, 79, 80, 199, 133, 134, 135, 136, 196, 197, 271, 272, 339, 236, 106, 107, 237, 285, 286, 287, 288, 289, 356, 382, 463, 464, 465]
var counterTest2 = 0
function RunTest() {
    setTimeout(() => {
        ReloadPage(236, counterTest[0], true);
        counterTest[0]++
        if (counterTest[0] < 469) {
            RunTest()
        }
    }, 300)
    // setTimeout(() => {

    //     console.log("-------------------RUNNING TEST -------------------")
    //     console.log(counterTest)

    //     ReloadPage(counterTest[counterTest2], 7, true);
    //     counterTest2++
    //     RunTest()

    // }, 1000)

}

function EventListener() {
    //EVENT LISTENERS
    for (let i = 0; i < clickH0B0.length; i++) {

        clickH0B0[i].addEventListener("click", () => {
            BallAnimation("h0b0")
            setTimeout(function () {
                UnloadBallAnimation("h0b0")
                ReloadPage(h0b0BodyListen, h0b0HeadListen, true)
            }, 2600);

        });

        clickH1B0[i].addEventListener("click", () => {
            BallAnimation("h1b0")
            setTimeout(function () {
                UnloadBallAnimation("h1b0")
                ReloadPage(h1b0BodyListen, h1b0HeadListen, true)
            }, 2600);

        });

        clickH2B0[i].addEventListener("click", () => {
            BallAnimation("h2b0")
            setTimeout(function () {
                UnloadBallAnimation("h2b0")
                ReloadPage(h2b0BodyListen, h2b0HeadListen, true)
            }, 2600);

        });

        clickH0B1[i].addEventListener("click", () => {
            BallAnimation("h0b1")
            setTimeout(function () {
                UnloadBallAnimation("h0b1")
                ReloadPage(h0b1BodyListen, h0b1HeadListen, true)
            }, 2600);

        });

        clickH1B1[i].addEventListener("click", () => {
            BallAnimation("h1b1")
            setTimeout(function () {
                UnloadBallAnimation("h1b1")
                ReloadPage(h1b1BodyListen, h1b1HeadListen, true)
            }, 2600);

        });

        clickH2B1[i].addEventListener("click", () => {
            BallAnimation("h2b1")
            setTimeout(function () {
                UnloadBallAnimation("h2b1")
                ReloadPage(h2b1BodyListen, h2b1HeadListen, true)
            }, 2600);

        });

        clickH0B2[i].addEventListener("click", () => {
            BallAnimation("h0b2")
            setTimeout(function () {
                UnloadBallAnimation("h0b2")
                ReloadPage(h0b2BodyListen, h0b2HeadListen, true)
            }, 2600);

        });

        clickH1B2[i].addEventListener("click", () => {
            BallAnimation("h1b2")
            setTimeout(function () {
                UnloadBallAnimation("h1b2")
                ReloadPage(h1b2BodyListen, h1b2HeadListen, true)
            }, 2600);

        });

        clickH2B2[i].addEventListener("click", () => {
            BallAnimation("h2b2")
            setTimeout(function () {
                UnloadBallAnimation("h2b2")
                ReloadPage(h2b2BodyListen, h2b2HeadListen, true)
            }, 2600);

        });

        // clickH2B0[i].addEventListener("click", () => ReloadPage(h2b0BodyListen, h2b0HeadListen, true));
        // clickH0B1[i].addEventListener("click", () => ReloadPage(h0b1BodyListen, h0b1HeadListen, true));
        // clickH1B1[i].addEventListener("click", () => ReloadPage(h1b1BodyListen, h1b1HeadListen, true));
        // clickH2B1[i].addEventListener("click", () => ReloadPage(h2b1BodyListen, h2b1HeadListen, true));
        // clickH0B2[i].addEventListener("click", () => ReloadPage(h0b2BodyListen, h0b2HeadListen, true));
        // clickH1B2[i].addEventListener("click", () => ReloadPage(h1b2BodyListen, h1b2HeadListen, true));
        // clickH2B2[i].addEventListener("click", () => ReloadPage(h2b2BodyListen, h2b2HeadListen, true));
    }



    clickIconBody1[0].addEventListener("click", () => ReloadPage(icon1BodyId, headId, true))
    clickIconBody2[0].addEventListener("click", () => ReloadPage(icon2BodyId, headId, true))
    clickIconBody3[0].addEventListener("click", () => ReloadPage(icon3BodyId, headId, true))
    clickIconBody4[0].addEventListener("click", () => ReloadPage(icon4BodyId, headId, true))
    clickIconBody5[0].addEventListener("click", () => ReloadPage(icon5BodyId, headId, true))
    clickIconBody6[0].addEventListener("click", () => ReloadPage(icon6BodyId, headId, true))
    clickIconBody7[0].addEventListener("click", () => ReloadPage(icon7BodyId, headId, true))
    clickIconBody8[0].addEventListener("click", () => ReloadPage(icon8BodyId, headId, true))

    clickIconHead1[0].addEventListener("click", () => ReloadPage(bodyId, icon1HeadId, true))
    clickIconHead2[0].addEventListener("click", () => ReloadPage(bodyId, icon2HeadId, true))
    clickIconHead3[0].addEventListener("click", () => ReloadPage(bodyId, icon3HeadId, true))
    clickIconHead4[0].addEventListener("click", () => ReloadPage(bodyId, icon4HeadId, true))
    clickIconHead5[0].addEventListener("click", () => ReloadPage(bodyId, icon5HeadId, true))
    clickIconHead6[0].addEventListener("click", () => ReloadPage(bodyId, icon6HeadId, true))
    clickIconHead7[0].addEventListener("click", () => ReloadPage(bodyId, icon7HeadId, true))
    clickIconHead8[0].addEventListener("click", () => ReloadPage(bodyId, icon8HeadId, true))

    //BODY
    //Previous Fusion
    clickBodyPrev.addEventListener("click", () => {
        if (Number(bodyId) - 1 > 0) {
            ReloadPage(Number(bodyId) - 1, headId, true)
        }
    }
    );

    //Next Fusion
    clickBodyNext.addEventListener("click", () => {
        if (Number(bodyId) + 1 < 463)
            ReloadPage(Number(bodyId) + 1, headId, true)
    }
    );

    //HEAD   
    //Previous Fusion
    clickHeadPrev.addEventListener("click", () => {
        if (Number(headId) - 1 > 0) {
            ReloadPage(bodyId, (Number(headId) - 1), true)
        }
    }
    );

    //Next Fusion
    clickHeadNext.addEventListener("click", () => {
        if (Number(headId + 1) < 463) {
            ReloadPage(bodyId, (Number(headId) + 1), true)
        }
    }
    );

    //Reverse Fusion
    clickRev.addEventListener("click", () => ReloadPage(headId, bodyId, true));
    //Random Fusion
    clickRand.addEventListener("click", () => ReloadPage(randNum1, randNum2, true));
}

function BodySlider() {

    //NEW STATE REMOVE ALL ADDED CLASSES
    // document.getElementsByClassName("body-slider")[0].classList.add("top-body-slider")
    // document.getElementsByClassName("head-slider")[0].classList.add("top-head-slider")
    // document.getElementsByClassName("top-body-slider")[0].classList.remove("body-slider")
    // document.getElementsByClassName("top-head-slider")[0].classList.remove("head-slider")


    document.getElementsByClassName("between-body")[0].classList.remove("col-3")
    document.getElementsByClassName("icon-body-outer-container")[0].classList.remove("col-1")
    document.getElementsByClassName("icon-body-outer-container")[1].classList.remove("col-1")

    document.getElementsByClassName("body-left-slider")[0].classList.remove("col-3-5")
    document.getElementsByClassName("body-right-slider")[0].classList.remove("col-3-5")

    for (let i = 1; i < 7; i++) {
        document.getElementsByClassName("between-body")[i].classList.remove("col-0")
        document.getElementsByClassName("icon-body-outer-container")[i + 1].classList.remove("col-0")
    }

    //removing icons
    $(".iconBody1").empty()
    $(".iconBody2").empty()
    $(".iconBody3").empty()
    $(".iconBody4").empty()
    $(".iconBody5").empty()
    $(".iconBody6").empty()
    $(".iconBody7").empty()
    $(".iconBody8").empty()

    document.getElementsByClassName("between-body")[0].classList.remove("col-1-5")
    document.getElementsByClassName("between-body")[1].classList.remove("col-1-5")
    document.getElementsByClassName("between-body")[0].classList.remove("col-2")
    document.getElementsByClassName("between-body")[1].classList.remove("col-2")
    document.getElementsByClassName("between-body")[0].classList.remove("col-3")
    document.getElementsByClassName("between-body")[1].classList.remove("col-3")
    document.getElementsByClassName("between-body")[0].classList.remove("col-0")
    document.getElementsByClassName("between-body")[1].classList.remove("col-0")

    $(".icon-body-outer-container")[0].classList.remove("col-1")
    $(".icon-body-outer-container")[1].classList.remove("col-1")
    $(".icon-body-outer-container")[2].classList.remove("col-1")

    $(".body-left-slider")[0].classList.remove("col-2-5")
    $(".body-left-slider")[0].classList.remove("col-2")
    $(".body-left-slider")[0].classList.remove("col-3")
    $(".body-right-slider")[0].classList.remove("col-2-5")
    $(".body-right-slider")[0].classList.remove("col-2")
    $(".body-right-slider")[0].classList.remove("col-3")

    $(".icon-body-outer-container")[0].classList.remove("col-0")
    $(".icon-body-outer-container")[1].classList.remove("col-0")
    $(".icon-body-outer-container")[2].classList.remove("col-0")

    $(".body-left-slider")[0].classList.remove("col-0")
    $(".body-right-slider")[0].classList.remove("col-0")


    for (let i = 1; i < 6; i++) {
        document.getElementsByClassName("between-body")[1 + i].classList.remove("col-0")
        document.getElementsByClassName("icon-body-outer-container")[2 + i].classList.remove("col-0")
    }

    for (let i = 0; i < 7; i++) {
        document.getElementsByClassName("between-body")[i].classList.remove("col-0-5")
    }

    for (let i = 0; i < 8; i++) {
        $(".icon-body-outer-container")[i].classList.remove("col-1-5")
    }









    if ([43, 60, 79, 285, 382, 463].includes(bodyEvolveChain[0])) {
        console.log("slowpoke body")
        //2 Width content
        document.getElementsByClassName("between-body")[0].classList.add("col-3")
        // document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
        // document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
        // document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
        // document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")

        //ICON OUTER CONTAINER
        $(".icon-body-outer-container")[0].classList.add("col-1-5")
        $(".icon-body-outer-container")[1].classList.add("col-1-5")

        //OUTER SLIDERS
        $(".body-left-slider")[0].classList.add("col-3")
        $(".body-right-slider")[0].classList.add("col-3")

        //ADD ICONS
        console.log($(".iconBody1"))
        console.log(bodyEvolveChain[bodyEvolveChain.length - 2])

        icon1BodyId = bodyEvolveChain[bodyEvolveChain.length - 2]
        icon2BodyId = bodyEvolveChain[bodyEvolveChain.length - 1]
        $(".iconBody1").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 2] + '.png", alt="branched-1", class="icon2">')
        $(".iconBody2").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 1] + '.png", alt="branched 2", class="icon2">')

        for (let i = 1; i < 7; i++) {
            document.getElementsByClassName("between-body")[i].classList.add("col-0")
            document.getElementsByClassName("icon-body-outer-container")[i + 1].classList.add("col-0")
        }


    }

    else if ([236].includes(bodyEvolveChain[0])) {

        //3 Width content
        document.getElementsByClassName("between-body")[0].classList.add("col-1-5")
        document.getElementsByClassName("between-body")[1].classList.add("col-1-5")
        // document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
        // document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
        // document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
        // document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")

        // //3 Width content
        // document.getElementsByClassName("between-body")[0].classList.add("col-1-5")
        // document.getElementsByClassName("between-body")[1].classList.add("col-1-5")
        // console.log($(".icon-container"))

        //ICON OUTER CONTAINER
        $(".icon-body-outer-container")[0].classList.add("col-1-5")
        $(".icon-body-outer-container")[1].classList.add("col-1-5")
        $(".icon-body-outer-container")[2].classList.add("col-1-5")

        //OUTER SLIDERS
        $(".body-left-slider")[0].classList.add("col-2")
        $(".body-right-slider")[0].classList.add("col-2-5")

        //ADD ICONS
        icon1BodyId = bodyEvolveChain[bodyEvolveChain.length - 3]
        icon2BodyId = bodyEvolveChain[bodyEvolveChain.length - 2]
        icon3BodyId = bodyEvolveChain[bodyEvolveChain.length - 1]

        $(".iconBody1").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 3] + '.png", alt="hitmonlee" class="icon2">')
        $(".iconBody2").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 2] + '.png", alt="hitmonchan" class="icon2">')
        $(".iconBody3").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 1] + '.png", alt="hitmontop" class="icon2">')

        for (let i = 1; i < 6; i++) {
            document.getElementsByClassName("between-body")[1 + i].classList.add("col-0")
            document.getElementsByClassName("icon-body-outer-container")[2 + i].classList.add("col-0")
        }

    }

    else if ([133].includes(bodyEvolveChain[0])) {
        //8 Width Content
        // for (let i = 0; i < 7; i++) {
        //     document.getElementsByClassName("between-body")[i].classList.add("col-0-5")
        // }

        // document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
        // document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
        // document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
        // document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")



        //ICON OUTER CONTAINER
        for (let i = 0; i < 8; i++) {
            $(".icon-body-outer-container")[i].classList.add("col-1-5")
            if ($(".between-body")[i]) {
                $(".between-body")[i].classList.add("col-0")
            }

        }


        //OUTER SLIDERS
        $(".body-left-slider")[0].classList.add("col-0")
        $(".body-right-slider")[0].classList.add("col-0")

        icon1BodyId = bodyEvolveChain[bodyEvolveChain.length - 8]
        icon2BodyId = bodyEvolveChain[bodyEvolveChain.length - 7]
        icon3BodyId = bodyEvolveChain[bodyEvolveChain.length - 6]
        icon4BodyId = bodyEvolveChain[bodyEvolveChain.length - 5]
        icon5BodyId = bodyEvolveChain[bodyEvolveChain.length - 4]
        icon6BodyId = bodyEvolveChain[bodyEvolveChain.length - 3]
        icon7BodyId = bodyEvolveChain[bodyEvolveChain.length - 2]
        icon8BodyId = bodyEvolveChain[bodyEvolveChain.length - 1]

        $(".iconBody1").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 8] + '.png", alt="vaporeon", class="icon2">')
        $(".iconBody2").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 7] + '.png", alt="jolteon", class="icon2">')
        $(".iconBody3").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 6] + '.png", alt="flareon", class="icon2">')
        $(".iconBody4").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 5] + '.png", alt="espeon", class="icon2">')
        $(".iconBody5").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 4] + '.png", alt="umbreon", class="icon2">')
        $(".iconBody6").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 3] + '.png", alt="leafeon", class="icon2">')
        $(".iconBody7").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 2] + '.png", alt="glaceon", class="icon2">')
        $(".iconBody8").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 1] + '.png", alt="sylveon", class="icon2">')
    }
    else {

        //Setting to 0 size
        for (let i = 0; i < document.getElementsByClassName("between-body").length; i++) {
            document.getElementsByClassName("between-body")[i].classList.add("col-0")
        }
        for (let i = 0; i < document.getElementsByClassName("icon-body-outer-container").length; i++) {
            document.getElementsByClassName("icon-body-outer-container")[i].classList.add("col-0")
        }
        $(".body-left-slider")[0].classList.add("col-0")
        $(".body-right-slider")[0].classList.add("col-0")
    }

}

//2nd Body Slider
// function BodySlider() {

//     //NEW STATE REMOVE ALL ADDED CLASSES
//     document.getElementsByClassName("body-slider")[0].classList.add("top-body-slider")
//     document.getElementsByClassName("head-slider")[0].classList.add("top-head-slider")
//     document.getElementsByClassName("top-body-slider")[0].classList.remove("body-slider")
//     document.getElementsByClassName("top-head-slider")[0].classList.remove("head-slider")


//     document.getElementsByClassName("between-body")[0].classList.remove("col-3")
//     document.getElementsByClassName("icon-body-outer-container")[0].classList.remove("col-1")
//     document.getElementsByClassName("icon-body-outer-container")[1].classList.remove("col-1")

//     document.getElementsByClassName("body-left-slider")[0].classList.remove("col-3-5")
//     document.getElementsByClassName("body-right-slider")[0].classList.remove("col-3-5")

//     for (let i = 1; i < 7; i++) {
//         document.getElementsByClassName("between-body")[i].classList.remove("col-0")
//         document.getElementsByClassName("icon-body-outer-container")[i + 1].classList.remove("col-0")
//     }

//     //removing icons
//     $(".iconBody1").empty()
//     $(".iconBody2").empty()
//     $(".iconBody3").empty()
//     $(".iconBody4").empty()
//     $(".iconBody5").empty()
//     $(".iconBody6").empty()
//     $(".iconBody7").empty()
//     $(".iconBody8").empty()

//     document.getElementsByClassName("between-body")[0].classList.remove("col-1-5")
//     document.getElementsByClassName("between-body")[1].classList.remove("col-1-5")
//     document.getElementsByClassName("between-body")[0].classList.remove("col-2")
//     document.getElementsByClassName("between-body")[1].classList.remove("col-2")
//     document.getElementsByClassName("between-body")[0].classList.remove("col-3")
//     document.getElementsByClassName("between-body")[1].classList.remove("col-3")
//     document.getElementsByClassName("between-body")[0].classList.remove("col-0")
//     document.getElementsByClassName("between-body")[1].classList.remove("col-0")

//     $(".icon-body-outer-container")[0].classList.remove("col-1")
//     $(".icon-body-outer-container")[1].classList.remove("col-1")
//     $(".icon-body-outer-container")[2].classList.remove("col-1")

//     $(".body-left-slider")[0].classList.remove("col-2-5")
//     $(".body-left-slider")[0].classList.remove("col-2")
//     $(".body-left-slider")[0].classList.remove("col-3")
//     $(".body-right-slider")[0].classList.remove("col-2-5")
//     $(".body-right-slider")[0].classList.remove("col-2")
//     $(".body-right-slider")[0].classList.remove("col-3")

//     $(".icon-body-outer-container")[0].classList.remove("col-0")
//     $(".icon-body-outer-container")[1].classList.remove("col-0")
//     $(".icon-body-outer-container")[2].classList.remove("col-0")

//     $(".body-left-slider")[0].classList.remove("col-0")
//     $(".body-right-slider")[0].classList.remove("col-0")


//     for (let i = 1; i < 6; i++) {
//         document.getElementsByClassName("between-body")[1 + i].classList.remove("col-0")
//         document.getElementsByClassName("icon-body-outer-container")[2 + i].classList.remove("col-0")
//     }

//     for (let i = 0; i < 7; i++) {
//         document.getElementsByClassName("between-body")[i].classList.remove("col-0-5")
//     }

//     for (let i = 0; i < 8; i++) {
//         $(".icon-body-outer-container")[i].classList.remove("col-1-5")
//     }









//     if ([43, 60, 79, 285, 382, 463].includes(bodyEvolveChain[0])) {
//         console.log("LOUDLOUDLODUYLOUD")
//         //2 Width content
//         document.getElementsByClassName("between-body")[0].classList.add("col-3")
//         document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
//         document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
//         document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
//         document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")

//         //ICON OUTER CONTAINER
//         $(".icon-body-outer-container")[0].classList.add("col-1-5")
//         $(".icon-body-outer-container")[1].classList.add("col-1-5")

//         //OUTER SLIDERS
//         $(".body-left-slider")[0].classList.add("col-3")
//         $(".body-right-slider")[0].classList.add("col-3")

//         //ADD ICONS
//         // console.log($(".iconBody1;
//         console.log(bodyEvolveChain[bodyEvolveChain.length - 2])

//         icon1BodyId = bodyEvolveChain[bodyEvolveChain.length - 2]
//         icon2BodyId = bodyEvolveChain[bodyEvolveChain.length - 1]
//         $(".iconBody1").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 2] + '.png", class="icon2">')
//         $(".iconBody2").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 1] + '.png", class="icon2">')

//         for (let i = 1; i < 7; i++) {
//             document.getElementsByClassName("between-body")[i].classList.add("col-0")
//             document.getElementsByClassName("icon-body-outer-container")[i + 1].classList.add("col-0")
//         }


//     }

//     else if ([236].includes(bodyEvolveChain[0])) {
//         //3 Width content
//         document.getElementsByClassName("between-body")[0].classList.add("col-1-5")
//         document.getElementsByClassName("between-body")[1].classList.add("col-1-5")
//         document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
//         document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
//         document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
//         document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")
//         console.log($(".icon-container"))

//         //ICON OUTER CONTAINER
//         $(".icon-body-outer-container")[0].classList.add("col-1-5")
//         $(".icon-body-outer-container")[1].classList.add("col-1-5")
//         $(".icon-body-outer-container")[2].classList.add("col-1-5")

//         //OUTER SLIDERS
//         $(".body-left-slider")[0].classList.add("col-2")
//         $(".body-right-slider")[0].classList.add("col-2-5")

//         //ADD ICONS
//         icon1BodyId = bodyEvolveChain[bodyEvolveChain.length - 3]
//         icon2BodyId = bodyEvolveChain[bodyEvolveChain.length - 2]
//         icon3BodyId = bodyEvolveChain[bodyEvolveChain.length - 1]

//         $(".iconBody1").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 3] + '.png", class="icon2">')
//         $(".iconBody2").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 2] + '.png", class="icon2">')
//         $(".iconBody3").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 1] + '.png", class="icon2">')

//         for (let i = 1; i < 6; i++) {
//             document.getElementsByClassName("between-body")[1 + i].classList.add("col-0")
//             document.getElementsByClassName("icon-body-outer-container")[2 + i].classList.add("col-0")
//         }

//     }

//     else if ([133].includes(bodyEvolveChain[0])) {
//         //8 Width Content
//         // for (let i = 0; i < 7; i++) {
//         //     document.getElementsByClassName("between-body")[i].classList.add("col-0-5")
//         // }
//         document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
//         document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
//         document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
//         document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")

//         //ICON OUTER CONTAINER
//         for (let i = 0; i < 8; i++) {
//             $(".icon-body-outer-container")[i].classList.add("col-1-5")
//             if ($(".between-body")[i]) {
//                 $(".between-body")[i].classList.add("col-0")
//             }

//         }


//         //OUTER SLIDERS
//         $(".body-left-slider")[0].classList.add("col-0")
//         $(".body-right-slider")[0].classList.add("col-0")

//         icon1BodyId = bodyEvolveChain[bodyEvolveChain.length - 8]
//         icon2BodyId = bodyEvolveChain[bodyEvolveChain.length - 7]
//         icon3BodyId = bodyEvolveChain[bodyEvolveChain.length - 6]
//         icon4BodyId = bodyEvolveChain[bodyEvolveChain.length - 5]
//         icon5BodyId = bodyEvolveChain[bodyEvolveChain.length - 4]
//         icon6BodyId = bodyEvolveChain[bodyEvolveChain.length - 3]
//         icon7BodyId = bodyEvolveChain[bodyEvolveChain.length - 2]
//         icon8BodyId = bodyEvolveChain[bodyEvolveChain.length - 1]

//         $(".iconBody1").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 8] + '.png", class="icon2">')
//         $(".iconBody2").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 7] + '.png", class="icon2">')
//         $(".iconBody3").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 6] + '.png", class="icon2">')
//         $(".iconBody4").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 5] + '.png", class="icon2">')
//         $(".iconBody5").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 4] + '.png", class="icon2">')
//         $(".iconBody6").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 3] + '.png", class="icon2">')
//         $(".iconBody7").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 2] + '.png", class="icon2">')
//         $(".iconBody8").append(`<img src="../images/Icons/icon` + bodyEvolveChain[bodyEvolveChain.length - 1] + '.png", class="icon2">')
//         //Setting to 0 size
//         for (let i = 0; i < document.getElementsByClassName("between-body").length; i++) {
//             document.getElementsByClassName("between-body")[i].classList.add("col-0")
//         }
//         for (let i = 0; i < document.getElementsByClassName("icon-body-outer-container").length; i++) {
//             document.getElementsByClassName("icon-body-outer-container")[i].classList.add("col-0")
//         }
//         $(".body-left-slider")[0].classList.add("col-0")
//         $(".body-right-slider")[0].classList.add("col-0")
//     }
// }

function HeadSlider() {

    //NEW STATE REMOVE ALL ADDED CLASSES
    // document.getElementsByClassName("body-slider")[0].classList.add("top-body-slider")
    // document.getElementsByClassName("head-slider")[0].classList.add("top-head-slider")
    // document.getElementsByClassName("top-body-slider")[0].classList.remove("body-slider")
    // document.getElementsByClassName("top-head-slider")[0].classList.remove("head-slider")


    document.getElementsByClassName("between-head")[0].classList.remove("col-3")
    document.getElementsByClassName("icon-head-outer-container")[0].classList.remove("col-1")
    document.getElementsByClassName("icon-head-outer-container")[1].classList.remove("col-1")

    document.getElementsByClassName("head-left-slider")[0].classList.remove("col-3-5")
    document.getElementsByClassName("head-right-slider")[0].classList.remove("col-3-5")

    for (let i = 1; i < 7; i++) {
        document.getElementsByClassName("between-head")[i].classList.remove("col-0")
        document.getElementsByClassName("icon-head-outer-container")[i + 1].classList.remove("col-0")
    }

    //removing icons
    $(".iconHead1").empty()
    $(".iconHead2").empty()
    $(".iconHead3").empty()
    $(".iconHead4").empty()
    $(".iconHead5").empty()
    $(".iconHead6").empty()
    $(".iconHead7").empty()
    $(".iconHead8").empty()

    document.getElementsByClassName("between-head")[0].classList.remove("col-1-5")
    document.getElementsByClassName("between-head")[1].classList.remove("col-1-5")
    document.getElementsByClassName("between-head")[0].classList.remove("col-2")
    document.getElementsByClassName("between-head")[1].classList.remove("col-2")
    document.getElementsByClassName("between-head")[0].classList.remove("col-3")
    document.getElementsByClassName("between-head")[1].classList.remove("col-3")
    document.getElementsByClassName("between-head")[0].classList.remove("col-0")
    document.getElementsByClassName("between-head")[1].classList.remove("col-0")

    $(".icon-head-outer-container")[0].classList.remove("col-1")
    $(".icon-head-outer-container")[1].classList.remove("col-1")
    $(".icon-head-outer-container")[2].classList.remove("col-1")

    $(".head-left-slider")[0].classList.remove("col-2-5")
    $(".head-left-slider")[0].classList.remove("col-2")
    $(".head-left-slider")[0].classList.remove("col-3")
    $(".head-right-slider")[0].classList.remove("col-2-5")
    $(".head-right-slider")[0].classList.remove("col-2")
    $(".head-right-slider")[0].classList.remove("col-3")

    $(".icon-head-outer-container")[0].classList.remove("col-0")
    $(".icon-head-outer-container")[1].classList.remove("col-0")
    $(".icon-head-outer-container")[2].classList.remove("col-0")

    $(".head-left-slider")[0].classList.remove("col-0")
    $(".head-right-slider")[0].classList.remove("col-0")


    for (let i = 1; i < 6; i++) {
        document.getElementsByClassName("between-head")[1 + i].classList.remove("col-0")
        document.getElementsByClassName("icon-head-outer-container")[2 + i].classList.remove("col-0")
    }

    for (let i = 0; i < 7; i++) {
        document.getElementsByClassName("between-head")[i].classList.remove("col-0-5")
    }

    for (let i = 0; i < 8; i++) {
        $(".icon-head-outer-container")[i].classList.remove("col-1-5")
    }









    if ([43, 60, 79, 285, 382, 463].includes(headEvolveChain[0])) {
        console.log("LOUDLOUDLODUYLOUD")
        //2 Width content
        document.getElementsByClassName("between-head")[0].classList.add("col-3")
        // document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
        // document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
        // document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
        // document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")

        //ICON OUTER CONTAINER
        $(".icon-head-outer-container")[0].classList.add("col-1-5")
        $(".icon-head-outer-container")[1].classList.add("col-1-5")

        //OUTER SLIDERS
        $(".head-left-slider")[0].classList.add("col-3")
        $(".head-right-slider")[0].classList.add("col-3")

        //ADD ICONS
        console.log($(".iconHead1"))
        console.log(headEvolveChain[headEvolveChain.length - 2])

        icon1HeadId = headEvolveChain[headEvolveChain.length - 2]
        icon2HeadId = headEvolveChain[headEvolveChain.length - 1]
        $(".iconHead1").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 2] + '.png", alt="branched-1", class="icon2">')
        $(".iconHead2").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 1] + '.png", alt="branched-2", class="icon2">')

        for (let i = 1; i < 7; i++) {
            document.getElementsByClassName("between-head")[i].classList.add("col-0")
            document.getElementsByClassName("icon-head-outer-container")[i + 1].classList.add("col-0")
        }


    }

    else if ([236].includes(headEvolveChain[0])) {
        //3 Width content
        document.getElementsByClassName("between-head")[0].classList.add("col-1-5")
        document.getElementsByClassName("between-head")[1].classList.add("col-1-5")
        // document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
        // document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
        // document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
        // document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")
        console.log($(".icon-container"))

        //ICON OUTER CONTAINER
        $(".icon-head-outer-container")[0].classList.add("col-1-5")
        $(".icon-head-outer-container")[1].classList.add("col-1-5")
        $(".icon-head-outer-container")[2].classList.add("col-1-5")

        //OUTER SLIDERS
        $(".head-left-slider")[0].classList.add("col-2")
        $(".head-right-slider")[0].classList.add("col-2-5")

        //ADD ICONS
        icon1HeadId = headEvolveChain[headEvolveChain.length - 3]
        icon2HeadId = headEvolveChain[headEvolveChain.length - 2]
        icon3HeadId = headEvolveChain[headEvolveChain.length - 1]

        $(".iconHead1").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 3] + '.png", alt="hitmonlee", class="icon2">')
        $(".iconHead2").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 2] + '.png", alt="hitmonchan", class="icon2">')
        $(".iconHead3").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 1] + '.png", alt="hitmontop", class="icon2">')

        for (let i = 1; i < 6; i++) {
            document.getElementsByClassName("between-head")[1 + i].classList.add("col-0")
            document.getElementsByClassName("icon-head-outer-container")[2 + i].classList.add("col-0")
        }

    }

    else if ([133].includes(headEvolveChain[0])) {
        //8 Width Content
        // for (let i = 0; i < 7; i++) {
        //     document.getElementsByClassName("between-head")[i].classList.add("col-0-5")
        // }
        // document.getElementsByClassName("top-body-slider")[0].classList.add("body-slider")
        // document.getElementsByClassName("top-head-slider")[0].classList.add("head-slider")
        // document.getElementsByClassName("body-slider")[0].classList.remove("top-body-slider")
        // document.getElementsByClassName("head-slider")[0].classList.remove("top-head-slider")

        //ICON OUTER CONTAINER
        for (let i = 0; i < 8; i++) {
            $(".icon-head-outer-container")[i].classList.add("col-1-5")
            if ($(".between-head")[i]) {
                $(".between-head")[i].classList.add("col-0")
            }

        }


        //OUTER SLIDERS
        $(".head-left-slider")[0].classList.add("col-0")
        $(".head-right-slider")[0].classList.add("col-0")

        icon1HeadId = headEvolveChain[headEvolveChain.length - 8]
        icon2HeadId = headEvolveChain[headEvolveChain.length - 7]
        icon3HeadId = headEvolveChain[headEvolveChain.length - 6]
        icon4HeadId = headEvolveChain[headEvolveChain.length - 5]
        icon5HeadId = headEvolveChain[headEvolveChain.length - 4]
        icon6HeadId = headEvolveChain[headEvolveChain.length - 3]
        icon7HeadId = headEvolveChain[headEvolveChain.length - 2]
        icon8HeadId = headEvolveChain[headEvolveChain.length - 1]

        $(".iconHead1").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 8] + '.png", alt="vaporeon", class="icon2">')
        $(".iconHead2").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 7] + '.png", alt="jolteon", class="icon2">')
        $(".iconHead3").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 6] + '.png", alt="flareon", class="icon2">')
        $(".iconHead4").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 5] + '.png", alt="espeon", class="icon2">')
        $(".iconHead5").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 4] + '.png", alt="umbreon", class="icon2">')
        $(".iconHead6").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 3] + '.png", alt="leafeon", class="icon2">')
        $(".iconHead7").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 2] + '.png", alt="glaceon", class="icon2">')
        $(".iconHead8").append(`<img src="../images/Icons/icon` + headEvolveChain[headEvolveChain.length - 1] + '.png", alt="sylveon", class="icon2">')
    }
    else {
        //Setting to 0 size
        for (let i = 0; i < document.getElementsByClassName("between-head").length; i++) {
            document.getElementsByClassName("between-head")[i].classList.add("col-0")
        }
        for (let i = 0; i < document.getElementsByClassName("icon-head-outer-container").length; i++) {
            document.getElementsByClassName("icon-head-outer-container")[i].classList.add("col-0")
        }
        $(".head-left-slider")[0].classList.add("col-0")
        $(".head-right-slider")[0].classList.add("col-0")
    }
}

function ResetBackgrounds(){
    
    RestartBackgroundAnimation($(".evolve-cells.h0b0")[0], "h0b0")

    RestartBackgroundAnimation($(".evolve-cells.h1b0")[0], "h1b0")

    RestartBackgroundAnimation($(".evolve-cells.h2b0")[0] , "h2b0")

    RestartBackgroundAnimation($(".evolve-cells.h0b1")[0] , "h0b1")

    RestartBackgroundAnimation($(".evolve-cells.h1b1")[0] , "h1b1")

    RestartBackgroundAnimation($(".evolve-cells.h2b1")[0] , "h2b1")

    RestartBackgroundAnimation($(".evolve-cells.h0b2")[0] , "h0b2")

    RestartBackgroundAnimation($(".evolve-cells.h1b2")[0] , "h1b2")

    RestartBackgroundAnimation($(".evolve-cells.h2b2")[0] , "h2b2")

}

function RestartBackgroundAnimation(element, index){
    var fusionBackgroundString = "fusion-background-" + index
    element.classList.remove(fusionBackgroundString)
    element.offsetWidth
    element.style.animation = null;
    element.classList.add(fusionBackgroundString)
}
function BallAnimation(clickId) {
    //Non specific to the general animation - ball container x needs to be modified to be in the right position
    console.log("BallAnimation being played at: " + clickId)

    //determine correct distance left.
    // console.log(Math.round(document.getElementById(clickId + "img").firstChild.getBoundingClientRect().left + 315)+"px")

    //determine distance up
    var scrollTop = $(window).scrollTop();
    var elementOffset = document.getElementById(clickId + "img").firstChild.getBoundingClientRect().top
    var distance = elementOffset + scrollTop + 230
    console.log("distance: " + distance)

    //changing css variable
    // console.log(Math.round(document.getElementById(clickId + "img").firstChild.getBoundingClientRect().left)+"px")
    // console.log("old ball-top value: " + getComputedStyle(document.documentElement).getPropertyValue("--ball-top"))


    document.documentElement.style.setProperty("--ball-end", Math.round(document.getElementById(clickId + "img").firstChild.getBoundingClientRect().left + 323) + "px")
    document.documentElement.style.setProperty("--ball-top", Math.round(distance) - 23 + "px")
    // console.log("top value from image: " + Math.round(document.getElementById(clickId + "img").firstChild.getBoundingClientRect().top + 0))

    // console.log("new ball-top value: " + getComputedStyle(document.documentElement).getPropertyValue("--ball-top"))


    //needs to be all removed on page load
    document.getElementsByClassName("ball-container-x")[0].classList.add("animation-ball-container-x")
    document.getElementsByClassName("ball-container-x")[0].style.display = "block"
    document.getElementsByClassName("ball-container-y")[0].classList.add("animation-ball-container-y")
    document.getElementsByClassName("pokeball-image")[0].classList.add("animation-pokeball-image")

    // console.log(document.getElementById(clickId + "img").firstChild)
    document.getElementById(clickId + "img").firstChild.classList.add("animation-pokemon-capture")


}

function UnloadBallAnimation(clickId) {
    //needs to be all removed on page load
    document.getElementsByClassName("ball-container-x")[0].classList.remove("animation-ball-container-x")
    document.getElementsByClassName("ball-container-x")[0].style.display = "none"
    document.getElementsByClassName("ball-container-y")[0].classList.remove("animation-ball-container-y")
    document.getElementsByClassName("pokeball-image")[0].classList.remove("animation-pokeball-image")
    document.getElementById(clickId + "img").firstChild.classList.remove("animation-pokemon-capture")

}


//Determing fusion type
function DetermineTyping(bodyType1, bodyType2, headType1, headType2) {

    var typeCount = 2;

    if(bodyType1 == "Normal" && bodyType2 == "Flying" || bodyType1 == "Flying" && bodyType2 == "Normal")
    {
        bodyType1 = "Flying"
        bodyType2 = ""
    }

    if(headType1 == "Normal" && bodyType2 == "Flying" || headType1 == "Normal" && headType2 == "Flying")
    {
        headType1 = "Flying"
        headType2 = ""
    }

    console.log(bodyType1)
    console.log(bodyType2)


    console.log(headType1)
    console.log(headType2)


    //Head type = primary type
    types[0] = headType1;
    //Body type = secondary type
    types[1] = bodyType2;


    //If the body doesnt have a second type then set it's type to be body primary type.
    if (bodyType2 == "none" || bodyType2 == "") {
        types[1] = bodyType1;
        if (headType1 == bodyType1) {
            types[1] = ""
            typeCount = 1
        }
    }
    if (headType1 == bodyType2) {
        types[1] = bodyType1
        typeCount = 1
    }
    return types
}

function FusionColour(type1, type2, fusionIndex) {
    //TYPE 1
    // console.log("type1 is: " + type1)
    // console.log("type2 is: " + type2)
    console.log("fusionIndex is: " + fusionIndex)


    {
        if (type1 == "Normal") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(169, 169, 121)");
        }

        else if (type1 == "Fire") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(240, 129, 44)");
        }

        else if (type1 == "Water") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(104, 145, 240)");
        }

        else if (type1 == "Grass") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(121, 201, 79)");
        }

        else if (type1 == "Electric") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(248, 209, 44)");
        }

        else if (type1 == "Ice") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(153, 217, 217)");
        }

        else if (type1 == "Fighting") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(193, 44, 35)");
        }

        else if (type1 == "Poison") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(161, 62, 161)");
        }

        else if (type1 == "Ground") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(225, 193, 104)");
        }

        else if (type1 == "Flying") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(169, 145, 240)");
        }

        else if (type1 == "Psychic") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(248, 87, 137)");
        }

        else if (type1 == "Bug") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(169, 185, 26)");
        }

        else if (type1 == "Rock") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(185, 161, 53)");
        }

        else if (type1 == "Ghost") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(112, 87, 153)");
        }

        else if (type1 == "Dragon") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(112, 53, 248)");
        }

        else if (type1 == "Dark") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(112, 87, 70)");
        }

        else if (type1 == "Steel") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(185, 185, 209)");
            console.log("should be set 6 times lol")
            console.log("--" + fusionIndex + "background-type1")
        }

        else if (type1 == "Fairy") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type1", "rgb(239, 154, 174)");
        }
    }

    //TYPE 2
    {
        if (type2 == "Normal") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(169, 169, 121)");
        }

        else if (type2 == "Fire") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(240, 129, 44)");
        }

        else if (type2 == "Water") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(104, 145, 240)");
        }

        else if (type2 == "Grass") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(121, 201, 79)");
        }

        else if (type2 == "Electric") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(248, 209, 44)");
        }

        else if (type2 == "Ice") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(153, 217, 217)");
        }

        else if (type2 == "Fighting") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(193, 44, 35)");
        }

        else if (type2 == "Poison") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(161, 62, 161)");
        }

        else if (type2 == "Ground") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(225, 193, 104)");
        }

        else if (type2 == "Flying") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(169, 145, 240)");
        }

        else if (type2 == "Psychic") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(248, 87, 137)");
        }

        else if (type2 == "Bug") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(169, 185, 26)");
        }

        else if (type2 == "Rock") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(185, 161, 53)");
        }

        else if (type2 == "Ghost") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(112, 87, 153)");
        }

        else if (type2 == "Dragon") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(112, 53, 248)");
        }

        else if (type2 == "Dark") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(112, 87, 70)");
        }

        else if (type2 == "Steel") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(185, 185, 209)");
        }

        else if (type2 == "Fairy") {
            document.documentElement.style.setProperty("--" + fusionIndex + "-background-type2", "rgb(239, 154, 174)");
        }
    }

}


function Search(bodyId, headId) {

    //On enter Text fields
    var bodySearchField = document.getElementById("bodySearch")
    var headSearchField = document.getElementById("headSearch")
    var newBodyId = -1
    var newHeadId = -1

    //enter clicked in bodySearchField
    bodySearchField.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            console.log("NEW BODY SEARCH")

            var newBodyId = -1
            var newHeadId = -1


            // //logging
            // console.log("new body id: " + newBodyId)
            // console.log("new head id: " + newHeadId)
            // console.log("bodySearchField: " + bodySearchField.textContent)
            // console.log("headSearchField: " + headSearchField.textContent)




            console.log("i heard you say enter...")
            for (let i = 1; i < 463; i++) {
                // console.log(data[i].name.toLowerCase())
                if (bodySearchField !== undefined) {
                    console.log(bodySearchField.value)
                }

                //if body matches a pokemon name
                if (bodySearchField !== undefined && bodySearchField.value.toLowerCase() == data[i].name.toLowerCase()) {

                    newBodyId = i;
                    bodySearchField = undefined

                }
                //if body matches a pokemon number
                else if (bodySearchField !== undefined && bodySearchField.value.toLowerCase() == i) {
                    newBodyId = i;
                    bodySearchField = undefined

                }


                //If head entered and matches a pokemon name as well 
                if (headSearchField !== undefined && headSearchField.value.toLowerCase() == data[i].name.toLowerCase()) {
                    newHeadId = i
                    headSearchField = undefined


                }

                //if head matches a pokemon number
                else if (headSearchField !== undefined && headSearchField.value.toLowerCase() == i) {
                    newHeadId = i
                    headSearchField = undefined
                }
            }

            //If body matches an id
            if (newBodyId > 0) {

                //If head also matches an id
                if (newHeadId > 0) {
                    ReloadPage(newBodyId, newHeadId, true)
                }

                //if only body matches an id
                else {
                    ReloadPage(newBodyId, headId2, true)
                }

            }

            //if only head matches an id
            else if (newHeadId > 0) {

                ReloadPage(bodyId2, newHeadId, true)
            }



        }
    })

    headSearchField.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            // console.log("NEW HEAD SEARCH")

            // console.log("bodyid check 4001000: " + bodyId2)
            // console.log("headId check 4002000: " + headId2)

            var newBodyId = -1
            var newHeadId = -1


            // //logging
            // console.log("0new body id: " + newBodyId)
            // console.log("0new head id: " + newHeadId)
            // console.log(bodySearchField)
            // console.log(headSearchField)


            for (let i = 1; i < 463; i++) {
                //if body matches a pokemon name
                if (bodySearchField !== undefined && bodySearchField.value.toLowerCase() == data[i].name.toLowerCase()) {
                    newBodyId = i;
                    // console.log("1new body id: " + newBodyId)
                    bodySearchField = undefined

                }

                //if body matches a pokemon number
                else if (bodySearchField !== undefined && bodySearchField.value.toLowerCase() == i) {
                    newBodyId = i;
                    bodySearchField = undefined

                }

                //If head entered and matches a pokemon name as well 
                if (headSearchField !== undefined && headSearchField.value.toLowerCase() == data[i].name.toLowerCase()) {
                    newHeadId = i
                    // console.log("1new head id: " + newHeadId)

                    headSearchField = undefined


                }

                //if head matches a pokemon number
                else if (headSearchField !== undefined && headSearchField.value.toLowerCase() == i) {
                    newHeadId = i
                    headSearchField = undefined
                }
            }

            //If body matches an id
            if (newBodyId > 0) {




                //If head also matches an id
                if (newHeadId > 0) {

                    // console.log("1new body id: " + newBodyId)
                    // console.log("1new head id: " + newHeadId)

                    ReloadPage(newBodyId, newHeadId, true)
                }

                //if only body matches an id
                else {

                    // console.log("2new body id: " + newBodyId)
                    // console.log("2 headid2: " + headId2)

                    ReloadPage(newBodyId, headId2, true)
                }

            }

            //if only head matches an id
            else if (newHeadId > 0) {
                // console.log("bodyid2 check 766001000: " + bodyId2)
                // console.log("headId2 check 766002000: " + headId2)


                // console.log("3 body id2: " + bodyId2)
                // console.log("3new head id: " + newHeadId)
                ReloadPage(bodyId2, newHeadId, true)
            }



        }
    })

}

//Create a function which adds the location data for the body head and fusion.

function Location(bodyId, headId) {

    var bodyLocation = data[bodyId].location
    var headLocation = data[headId].location

    var bodyLocationArray = [];
    var headLocationArray = [];

    var iAtSlash = 0


    document.getElementById("body-location").innerHTML = "";
    document.getElementById("head-location").innerHTML = "";

    //body - CREATING BODY LOCATION ARRAY
    for (let i = 0; i < bodyLocation.length; i++) {
        if (bodyLocation[i] == "/" && iAtSlash == 0) {
            bodyLocationArray.push(bodyLocation.substring(Number(iAtSlash), Number(i)))
            console.log(bodyLocation.substring(Number(iAtSlash), Number(i)))

            iAtSlash = i
        }
        else if (bodyLocation[i] == "/") {
            console.log(bodyLocation.substring(Number(iAtSlash) + 2, Number(i)))
            bodyLocationArray.push(bodyLocation.substring(Number(iAtSlash) + 2, Number(i)))
            iAtSlash = i
        }
        else if (i == (bodyLocation.length - 1) && iAtSlash == 0) {
            bodyLocationArray.push(bodyLocation.substring(Number(iAtSlash), Number(i) + 1))
            console.log(bodyLocation.substring(Number(iAtSlash), Number(i) + 1))

            console.log("iAtSlash = " + iAtSlash)

            iAtSlash = i
        }

        else if (i == (bodyLocation.length - 1)) {
            bodyLocationArray.push(bodyLocation.substring(Number(iAtSlash) + 2, Number(i) + 1))
            console.log(bodyLocation.substring(Number(iAtSlash) + 2, Number(i) + 1))

            console.log("iAtSlash = " + iAtSlash)

            iAtSlash = i
        }

    }

    iAtSlash = 0

    //head - CREATING HEAD LOCATION ARRAY
    for (let i = 0; i < headLocation.length; i++) {
        if (headLocation[i] == "/" && iAtSlash == 0) {
            headLocationArray.push(headLocation.substring(Number(iAtSlash), Number(i)))
            console.log(headLocation.substring(Number(iAtSlash), Number(i)))

            iAtSlash = i
        }
        else if (headLocation[i] == "/") {
            console.log(headLocation.substring(Number(iAtSlash) + 2, Number(i)))
            headLocationArray.push(headLocation.substring(Number(iAtSlash) + 2, Number(i)))
            iAtSlash = i
        }
        else if (i == (headLocation.length - 1) && iAtSlash == 0) {
            headLocationArray.push(headLocation.substring(Number(iAtSlash), Number(i) + 1))
            console.log(headLocation.substring(Number(iAtSlash), Number(i) + 1))

            console.log("iAtSlash = " + iAtSlash)

            iAtSlash = i
        }

        else if (i == (headLocation.length - 1)) {
            headLocationArray.push(headLocation.substring(Number(iAtSlash) + 2, Number(i) + 1))
            console.log(headLocation.substring(Number(iAtSlash) + 2, Number(i) + 1))

            console.log("iAtSlash = " + iAtSlash)

            iAtSlash = i
        }

    }


    //ADDING NAMES FOR BODY AND HEAD
    document.getElementById("body-location-name").innerHTML = bodyName;
    document.getElementById("head-location-name").innerHTML = headName;



    //REMOVING AND ADDING ICONS FOR HEAD AND BODY
    $(".icon-location").remove()

    if (Number(headId) > 420) {
        $(".location-head-icon-container").append(`<img src="../images/Battlers/` + headId + `/` + headId + '.png", alt="head-icon: ' + headId + '", class="icon icon-small">');
    }
    else {
        $(".location-head-icon-container").append(`<img src="../images/Icons/icon` + headId + '.png", alt="head-icon", class="icon-location">')
    }

    if (Number(bodyId) > 420) {
        $(".location-body-icon-container").append(`<img src="../images/Battlers/` + bodyId + `/` + bodyId + '.png", alt="body-icon: ' + bodyId + '", class="icon icon-small">');
    }
    else {
        $(".location-body-icon-container").append(`<img src="../images/Icons/icon` + bodyId + '.png", alt="body-icon", class="icon-location">')
    }


    //ADDING ROWS FOR BODY ARRAY
    for (let i = 0; i < bodyLocationArray.length; i++) {
        // document.getElementById("body-location").innerHTML += bodyLocationArray[i];
        // document.getElementById("body-location").innerHTML += "<hr>"
        $("#body-location").append("<div class='row body-location-row'></div>")

        $(".body-location-row:last").append("<img src='../images/UI/pokeball.png' class='small-pokeball-icon col-1'>")
        $(".body-location-row:last").append("<h4 class='body-location-text col-10'>" + bodyLocationArray[i] + "</h4>")
        $("#body-location").append("<hr class='hr-no-margin'>")

    }

    //ADDING ROWS FOR HEAD ARRAy
    for (let i = 0; i < headLocationArray.length; i++) {
        // document.getElementById("body-location").innerHTML += headLocationArray[i];
        // document.getElementById("body-location").innerHTML += "<hr>"
        $("#head-location").append("<div class='row head-location-row'></div>")

        $(".head-location-row:last").append("<img src='../images/UI/pokeball.png' class='small-pokeball-icon col-1'>")
        $(".head-location-row:last").append("<h4 class='head-location-text col-10'>" + headLocationArray[i] + "</h4>")
        $("#head-location").append("<hr class='hr-no-margin'>")

    }

    //IF NO LOCATION DATA FOR BODY OR HEAD ARRAYS
    if (bodyLocationArray.length == 0) {
        // document.getElementById("body-location").innerHTML += bodyLocationArray[i];
        // document.getElementById("body-location").innerHTML += "<hr>"
        $("#body-location").append("<div class='row body-location-row'></div>")

        $(".body-location-row:last").append("<img src='../images/UI/pokeball.png' class='small-pokeball-icon col-1'>")
        $(".body-location-row:last").append("<h4 class='body-location-text col-10'>" + "No Location Data" + "</h4>")
        $("#body-location").append("<hr class='hr-no-margin'>")

    }

    if (headLocationArray.length == 0) {
        // document.getElementById("body-location").innerHTML += headLocationArray[i];
        // document.getElementById("body-location").innerHTML += "<hr>"
        $("#head-location").append("<div class='row head-location-row'></div>")

        $(".head-location-row:last").append("<img src='../images/UI/pokeball.png' class='small-pokeball-icon col-1'>")
        $(".head-location-row:last").append("<h4 class='head-location-text col-10'>" + "No Location Data" + "</h4>")
        $("#head-location").append("<hr class='hr-no-margin'>")

    }

}

//Receives json data as data
import data from '../json/data.json' with { type: 'json' };
import moveData from '../json/move.json' with { type: 'json' };


//RUNNING FUNCTIONS INITIALLY
$(window).on('load', function () {


    //SetVariablesFromData(data, bodyRef, headRef)


    ReloadPage(7, 4, false);
    EventListener();
    //RunTest()
})


{//CHECK ALL EEVEES TYROGUE< NINCADA




    //Console log for testing

    // console.log(fusion)
    // console.log("Head Evolve Method: " + evolveHead)
    // console.log("Body Evolve Method: " + evolveBody)
}
{
    //43 - oddish - stage index = 3 good
    //44 - gloom - stage index = 3 good
    //45 - vileplume - stage index = 3 good
    //182 - bellossum - stage index = 3 good

    //60 - poliwag - stage index = 3
    //61 - poliwhirl - stage index = 3
    //62 - poliwrath - stage index = 3
    //186 - politoed - stage index = 3


    //79 - slowpoke - stage index = 2 good
    //80 - slowbro - stage index = 2 good
    //199 - slowking - stage index = 2 good

    //133 - eevee - stage index = 2
    //"134,135,136,196,197,271,272,339" bad


    //106 - hitmonlee - stage index = 2 good
    //107 - hitmonchan - stage index = 2 good
    //236 - tyrogue - stage index = 2 good
    //237 - hitmontop - stage index = 2 good


    //285 - ralts - stage index = 3 good
    //286 - kirlia - stage index = 3 good
    //287 - gardevoir - stage index = 3 good
    //288 - gallade - stage index = 3 good


    //289 - shedinja - stage index = 2
    //356 - ninjask - stage index = 2
    //382 - nincada - stage index = 2


    //463 - rockruff - stage index = 2
    //464 - lycanroc midday - stage index = 2
    //465 - lycanroc midnight - stage index = 2 bad

    // Issues that wont be resolved
    //Missing icon pics idk if they can be gotten
    //ROCKRUFF EVOLUTION CHART BAD //465
    //Dont have pokemon past 463
    //NO LYCANROC ICON PIC - change for small image of same pokemon
    //lickitung 108 Rollout, tangela 114 Ancient Power, aipom 190 Double Hit, yanma 193 Double Hit, 
    //piloswine 221 Ancient Power , Bonsly 257 Mimic, Mime Jr 258 Mimic, This is all the evolve by move pokemon
    //Lycanroc not any good lol 464, 465
    //pokemon with different forms? - ie; aegislash, necrozma, giratina, arceus, 
    //Rockruff 25 Daytime, 25 Nighttime (These are all the day and night exceptions)
    //




}
//GROUNDDON location







