const p1c1 = document.getElementById(p1c1);

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
    displayNotes();
}


function displayNotes() {
    for (let i=0; i<planted.length; i++) {
        gardenNotes.innerHTML += <p>${planted[i].item} was planted on ${planted[i].planted} in ${planted[i].location}</p><br>
        <p>Estimated harvest is ${planted[i].harvest}</p><br><br>;
    }
}
