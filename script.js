// this is pulled from another file. edit with caution.
var planted = window.gardenData;
var harvestable = window.harvestTable;

// constants for non-garden spaces
const gardenNotes = document.querySelector("#gardenNotes");
const plot1Log = document.querySelector("#plot1Log");
const plot2Log = document.querySelector("#plot2Log");

// constants for plot 1 garden spaces
const p1c1 = document.querySelector("#p1c1");
const p1c2 = document.querySelector("#p1c2");
const p1c3 = document.querySelector("#p1c3");
const p1c4 = document.querySelector("#p1c4");
const p1c5 = document.querySelector("#p1c5");
const p1c6 = document.querySelector("#p1c6");
const p1c7 = document.querySelector("#p1c7");
const p1c8 = document.querySelector("#p1c8");
const p1c9 = document.querySelector("#p1c9");
const p1c10 = document.querySelector("#p1c10");
const p1c11 = document.querySelector("#p1c11");
const p1c12 = document.querySelector("#p1c12");
const p1c13 = document.querySelector("#p1c13");
const p1c14 = document.querySelector("#p1c14");
const p1c15 = document.querySelector("#p1c15");
const p1c16 = document.querySelector("#p1c16");
const p1c17 = document.querySelector("#p1c17");
const p1c18 = document.querySelector("#p1c18");
const p1c19 = document.querySelector("#p1c19");
const p1c20 = document.querySelector("#p1c20");
const p1c21 = document.querySelector("#p1c21");
const p1c22 = document.querySelector("#p1c22");
const p1c23 = document.querySelector("#p1c23");
const p1c24 = document.querySelector("#p1c24");
const p1s1 = document.querySelector("#p1s1");
const p1s2 = document.querySelector("#p1s2");
const p1s3 = document.querySelector("#p1s3");
const p1s4 = document.querySelector("#p1s4");
const p1s5 = document.querySelector("#p1s5");
const p1s6 = document.querySelector("#p1s6");
const p1s7 = document.querySelector("#p1s7");
const p1s8 = document.querySelector("#p1s8");
const p1s9 = document.querySelector("#p1s9");

// set testing to true to display console logs for troubleshooting. set testing to false if you do not wish to generate the console logs. 
let testing = true;

let text = "";
let pFilter = [];
let pLen = pFilter.length;
let page = "";

// triggered by a button, shows only the content first visable upon page (DOM?) loading. 
function showHome() {
    if (testing) {
        console.log("home button clicked");
    };
    page = "home";
    homeSection.style.display = "contents";
    plot1Section.style.display = "none";
    plot2Section.style.display = "none";
    notesSection.style.display = "none";
}

// triggered by a button. shows only the content related to plot 1.
function showPlot1() {
    if (testing) {
        console.log("plot 1 button clicked");
    };
    page = "plot1";
    homeSection.style.display = "none";
    plot1Section.style.display = "contents";
    plot2Section.style.display = "none";
    notesSection.style.display = "none";
//    displayPlot1Notes();
    filterSwitchtrack()
    noteText();
    plantedColor()
}

// triggered by a button. shows only the content related to plot 2.
function showPlot2() {
    if (testing) {
        console.log("plot 2 button clicked");
    };
    page = "plot2";
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "contents";
    notesSection.style.display = "none";
 //   displayPlot2Notes();
    filterSwitchtrack()
    noteText();
    plantedColor()
}

// triggered by a button, shows only the content in the Notes section.
function showNotes() {
    if (testing) {
        console.log("all notes button clicked");
    };
    page = "notes";
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "none";
    notesSection.style.display = "contents";
//    displayNotes();
    filterSwitchtrack()
    noteText();
}

/*
// displayNotes shows all entries of the planted array in a more reader friendly format. 
function displayNotes() {
    let len = planted.length;
    let text = "";
    for (let i = 0; i < len; i++) {
        if (planted[i].removed !== "") {
            text += "* " + planted[i].item + " was removed on " + planted[i].removed + " from Plot " + planted[i].plot + ", " + planted[i].location + 
            ". \n \n";
        } else {
            text += "* " + planted[i].item + " was planted on " + planted[i].planted + " in Plot " + planted[i].plot + ", " + planted[i].location + 
            ". \n --> Estimated harvest is " + planted[i].harvest + ". \n \n";
        };
    };
    gardenNotes.innerText = text;
    if (testing) {
        console.log("all garden notes");
    };
}

// displayPlot1Notes is filtering only the entries that occur in plot 1 of the planted array and displaying those on the plot 1 section when the button is clicked.
function displayPlot1Notes() {
    let pFilter = planted.filter(function(item) {
        return item.plot === "1";
    });
    let p1Len = p1Filter.length;
    let text = ""; 
    for (let i = 0; i < p1Len; i++) {
        if (p1Filter[i].removed !== "") {
            text += "* " + p1Filter[i].item + " was removed on " + p1Filter[i].removed + " from " + p1Filter[i].location + 
            ". \n \n";
        } else {
            text += "* " + p1Filter[i].item + " was planted on " + p1Filter[i].planted + " in " + p1Filter[i].location + 
            ". \n --> Estimated harvest is " + p1Filter[i].harvest + ". \n \n";
        };
    };
    plot1Log.innerText = text;
    if (testing) {
        console.log("plot 1 notes");
    };
}

// displayPlot2Notes is filtering only the entries that occur in plot 2 of the planted array and displaying those on the plot 2 section when the button is clicked. 
function displayPlot2Notes() {
    let p2Filter = planted.filter(function(item) {
        return item.plot === "2";
    });
    let p2Len = p2Filter.length;
    let text = ""; 
    for (let i = 0; i < p2Len; i++) {
        if (p2Filter[i].removed !== "") {
            text += "* " + p2Filter[i].item + " was removed on " + p2Filter[i].removed + " from " + p2Filter[i].location + 
            ". \n \n";
        } else {
            text += "* " + p2Filter[i].item + " was planted on " + p2Filter[i].planted + " in " + p2Filter[i].location + 
            ". \n --> Estimated harvest is " + p2Filter[i].harvest + ". \n \n";
        };
    };
    plot2Log.innerText = text;
    if (testing) {
        console.log("plot 2 notes");
    };
}
*/

function filterSwitchtrack() {
    if (testing) {
        console.log("filter switchtrack triggered");
    };
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
        console.log(pFilter);
        console.log(pLen);
    };
    for (let i = 0; i < pLen; i++) {
        if (pFilter[i].removed !== "") {
            text += "* " + pFilter[i].item + " was removed on " + pFilter[i].removed + " from " + pFilter[i].location + 
            ". \n \n";
        } else {
            text += "* " + pFilter[i].item + " was planted on " + pFilter[i].planted + " in " + pFilter[i].location + 
            ". \n --> Estimated harvest is " + pFilter[i].harvest + ". \n \n";
        };
    };
    if (page === "plot1") {
        plot1Log.innerText = text;
    } else if (page === "plot2") {
        plot2Log.innerText = text;
    } else if (page === "notes") {
        gardenNotes.innerText = text;
    } else {
        console.log("note text failed");
    };
}

/* this function commented out for troubleshooting the noteText function in isolation
function plantedColor() {
    if (testing) {
        console.log("planted color triggered");
    };
    for (let i = 0; i < pLen; i++) {
        let locationName = "p" + pFilter[i].plot + pFilter[i].location;
        if (pFilter[i].removed !== "") {
            document.getElementById(locationName).style.backgroundColor = "var(--colorEmpty)";
        } else {
            document.getElementById(locationName).style.backgroundColor = "var(--colorPlanted)";
        };
    };
}
*/

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
