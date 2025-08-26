const p1c1 = document.getElementById(p1c1);
const p1c12 = document.getElementById(p1c12);
const p1c13 = document.getElementById(p1c13);

const planted = [
    {
        plot: 1,
        location: "C13",
        item: "Chocolate Mint",
        planted: "unknown",
        harvest: "AN"
    },
    {
        plot: 1,
        location: "C12",
        item: "Chotolate Mint",
        planted: "unknown",
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

function displayPlot1Notes() {
    console.log("plot 1 notes");
}

function displayPlot2Notes() {
    console.log("plot 2 notes");
}

function displayNotes() {
    console.log("garden notes");
    /* for (let i=0; i<planted.length; i++) {
        gardenNotes.innerHTML += <p>${planted[i].item} was planted on ${planted[i].planted} in Plot ${planted[i].plot}, ${planted[i].location}<br />   Estimated harvest is ${planted[i].harvest}<br /><br /></p>;
    };*/
}
