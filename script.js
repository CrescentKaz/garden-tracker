const gardenNotes = document.querySelector("#gardenNotes");
const plot1Log = document.querySelector("#plot1Log");
const plot2Log = document.querySelector("#plot2Log");

const planted = [
    {
        plot: 1,
        location: "C13",
        item: "Chocolate Mint",
        planted: "unknown date",
        harvest: "as needed"
    },
    {
        plot: 1,
        location: "C12",
        item: "Chotolate Mint",
        planted: "unknown date",
        harvest: "as needed"
    },
    {
        plot: 2,
        location: "S23?",
        item: "corn",
        planted: "unknown date",
        harvest: "NA... ants killed the whole plant"
    }
];

function showHome() {
    homeSection.style.display = "contents";
    plot1Section.style.display = "none";
    plot2Section.style.display = "none";
    notesSection.style.display = "none";
}

function showPlot1() {
    homeSection.style.display = "none";
    plot1Section.style.display = "contents";
    plot2Section.style.display = "none";
    notesSection.style.display = "none";
    displayPlot1Notes();
}

function showPlot2() {
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "contents";
    notesSection.style.display = "none";
    displayPlot2Notes();
}

function showNotes() {
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "none";
    notesSection.style.display = "contents";
    displayNotes();
}

function filterByP1(item) {
    if (item.plot = 1) {
        return true;
    };
    return false;
}

function filterByP2(item) {
    if (item.plot = 2) {
        return true;
    };
    return false;
}

function displayPlot1Notes() {
    console.log("plot 1 notes");
    let p1Len = planted.filter(filterByP1);
    let text = ""; 
    for (let i = 0; i < p1Len; i++) {
        text += "* " + p1Len[i].item + " was planted on " + p1Len[i].planted + " in " + p1Len[i].location + 
        ". \n Estimated harvest is " + p1Len[i].harvest + ". \n \n";
    };
    plot1Log.innerText = text;
}

function displayPlot2Notes() {
    console.log("plot 2 notes");
    let p2Len = planted.filter(filterByP2);
    let text = ""; 
    for (let i = 0; i < p2Len; i++) {
        text += "* "+ p2Len[i].item + " was planted on " + p2Len[i].planted + " in " + p2Len[i].location + 
        ". \n Estimated harvest is " + p2Len[i].harvest + ". \n \n";
    };
    plot2Log.innerText = text;
}

function displayNotes() {
    console.log("garden notes");
    let len = planted.length;
    let text = "";
    for (let i = 0; i < len; i++) {
        text += "* " + planted[i].item + " was planted on " + planted[i].planted + " in Plot " + planted[i].plot + ", " + planted[i].location + 
        ". \n Estimated harvest is " + planted[i].harvest + ". \n \n";
    };
    gardenNotes.innerText = text;
}
