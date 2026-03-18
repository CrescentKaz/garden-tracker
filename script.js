// this is pulled from another file. edit with caution.
var planted = window.gardenData;
var harvestable = window.harvestTable;
const rootStyles = getComputedStyle(document.documentElement);
const colorEmpty = rootStyles.getPropertyValue('--colorEmpty').trim();
const colorPlanted = rootStyles.getPropertyValue('--colorPlanted').trim();

// constants for non-garden spaces
const plotTitle = document.querySelector("#plotTitle");
const plotLogTitle = document.querySelector("#plotLogTitle");
const plotLog = document.querySelector("#plotLog");
const gardenNotes = document.querySelector("#gardenNotes");

// constants for plot 1 garden spaces
const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");
const c4 = document.querySelector("#c4");
const c5 = document.querySelector("#c5");
const c6 = document.querySelector("#c6");
const c7 = document.querySelector("#c7");
const c8 = document.querySelector("#c8");
const c9 = document.querySelector("#c9");
const c10 = document.querySelector("#c10");
const c11 = document.querySelector("#c11");
const c12 = document.querySelector("#c12");
const c13 = document.querySelector("#c13");
const c14 = document.querySelector("#c14");
const c15 = document.querySelector("#c15");
const c16 = document.querySelector("#c16");
const c17 = document.querySelector("#c17");
const c18 = document.querySelector("#c18");
const c19 = document.querySelector("#c19");
const c20 = document.querySelector("#c20");
const c21 = document.querySelector("#c21");
const c22 = document.querySelector("#c22");
const c23 = document.querySelector("#c23");
const c24 = document.querySelector("#c24");
const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const s3 = document.querySelector("#s3");
const s4 = document.querySelector("#s4");
const s5 = document.querySelector("#s5");
const s6 = document.querySelector("#s6");
const s7 = document.querySelector("#s7");
const s8 = document.querySelector("#s8");
const s9 = document.querySelector("#s9");

// set testing to true to display console logs for troubleshooting. set testing to false if you do not wish to generate the console logs. 
let testing = true;

let text = "";
let pFilter = [];
let page = "";

// triggered by a button, shows only the content first visable upon page (DOM?) loading. 
function showHome() {
    if (testing) {
        console.log("home button clicked");
    };
    page = "home";
    homeSection.style.display = "contents";
    plotSection.style.display = "none";
    notesSection.style.display = "none";
}

// triggered by a button. shows only the content related to plot 1.
function showPlot1() {
    if (testing) {
        console.log("plot 1 button clicked");
    };
    page = "plot1";
    homeSection.style.display = "none";
    plotSection.style.display = "contents";
    notesSection.style.display = "none";
    plotTitle.innerText = "Garden Plot 1";
    plotLogTitle.innerText = "Plot 1 Log";
    filterSwitchtrack();
    noteText();
    plantedColor();
}

// triggered by a button. shows only the content related to plot 2.
function showPlot2() {
    if (testing) {
        console.log("plot 2 button clicked");
    };
    page = "plot2";
    homeSection.style.display = "none";
    plotSection.style.display = "contents";
    notesSection.style.display = "none";
    plotTitle.innerText = "Garden Plot 2";
    plotLogTitle.innerText = "Plot 2 Log";
    filterSwitchtrack();
    noteText();
    plantedColor();
}

// triggered by a button. shows only the content related to plot 3.
function showPlot3() {
    if (testing) {
        console.log("plot 3 button clicked");
    };
    page = "plot3";
    homeSection.style.display = "none";
    plotSection.style.display = "contents";
    notesSection.style.display = "none";
    plotTitle.innerText = "Garden Plot 3";
    plotLogTitle.innerText = "Plot 3 Log";
    filterSwitchtrack();
    noteText();
    plantedColor();
}

// triggered by a button, shows only the content in the Notes section.
function showNotes() {
    if (testing) {
        console.log("all notes button clicked");
    };
    page = "notes";
    homeSection.style.display = "none";
    plotSection.style.display = "none";
    notesSection.style.display = "contents";
    filterSwitchtrack();
    noteText();
}

function filterSwitchtrack() {
    if (testing) {
        console.log("filter switchtrack triggered");
    };
    pFilter = planted.sort((a, b) => a.location - b.location);
    if (page === "plot1") {
        pFilter = planted.filter(function(item) {
        return item.plot === "1";
        });
        if (testing) {
            console.log("filter switched to plot 1");
        };
    } else if (page === "plot2") {
        pFilter = planted.filter(function(item) {
        return item.plot === "2";
        });
        if (testing) {
            console.log("filter switched to plot 2");
        };
    } else if (page === "plot3") {
        pFilter = planted.filter(function(item) {
        return item.plot === "3";
        });
        if (testing) {
            console.log("filter switched to plot 3");
        };
    } else if (page === "notes") {
        pFilter = planted;
        if (testing) {
            console.log("filter switched to all notes");
        };
    } else if (page === "home") {
        if (testing) {
            console.log("filter switched to home");
        };
    } else {
        console.log("switchtrack failed");
    };
}

function noteText() {
    if (testing) {
        console.log("note text triggered");
    };
    let pLen = pFilter.length;
    text = "";
    for (let i = 0; i < pLen; i++) {
        if (pFilter[i].removed !== "") {
            text += "* " + pFilter[i].item + " was removed on " + pFilter[i].removed + " from p" + pFilter[i].plot + pFilter[i].location + 
            ". \n \n";
        } else {
            text += "* " + pFilter[i].item + " was planted on " + pFilter[i].planted + " in p" + pFilter[i].plot + pFilter[i].location + 
            ". \n --> Estimated harvest is " + pFilter[i].harvest + ". \n \n";
        };
    };
    if (testing) {
        console.log("# of log entries is " + pLen);
    }
    if (page === "notes") {
        gardenNotes.innerText = text;
    } else if (page = 1 || 2 || 3) {
        plotLog.innerText = text;
    } else {
        console.log("note text failed");
    };
}

function plantedColor() {
    if (testing) {
        console.log("planted color triggered");
    };
    let pLen = pFilter.length;
    for (let i = 0; i < pLen; i++) {
        let locationName = pFilter[i].location;
        if (pFilter[i].removed !== "") {
            document.getElementById(locationName).style.backgroundColor = colorEmpty;
        } else {
            document.getElementById(locationName).style.backgroundColor = colorPlanted;
            document.getElementById(locationName).style.color = black;
            locationName.innerText = pFilter[i].name; 
        };
    };
}

/* this function needs double checking before live testing
function calcHarvest() {
    for (let i = 0; i < plen; i++) {
        if (pFilter[i].removed === "") {
            const harvestDate = new Date(pFilter[i].planted);
            let item = pFilter[i].item;
            let EOT = "";
            for (let o = 0; o < harvestTable.length; o++) {
                if (item = harvestTable[o].name) {
                    EOT = harvestTable[o].EOT;
                } else {};
            };
            harvestDate.setDate(harvestDate.getDate() + EOT);
            text += "--> " + planted[i].item + " has an estimated harvest date of " + harvestDate + ". \n \n";
        } else {
            console.log("error found with calcHarvest for p" + pFilter[i].plot + pFilter[i].location)
        };
    };
    gardenNotes.innerText = text;
    if (testing) {
        console.log("calculating harvest dates");
    };
}
*/
