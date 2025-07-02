const planted = [
    {
        location: p1c13,
        item: "Chocolate Mint",
        planted: "",
        harvest: "AN"
    },
    {
        location: p1c12,
        item: "Chotolate Mint",
        planted: "",
        harvest: "AN"
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
}

function showPlot2() {
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "contents";
    notesSection.style.display = "none";
}

function showNotes() {
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "none";
    notesSection.style.display = "contents";
//    displayNotes();
}

/*
function displayNotes() {
    for () {
        gardenNotes.innerText += planted[i].item + " was planted on " + planted[i].planted + " in " + planted[i].location;
        gardenNotes.innerText += "Estimated harvest is " + planted[i].harvest;
    }
}
*/