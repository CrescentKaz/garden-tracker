const gardenNotes = document.querySelector("#gardenNotes");
const plot1Log = document.querySelector("#plot1Log");
const plot2Log = document.querySelector("#plot2Log");

// set testing to true to display console logs for troubleshoot. set testing to false if you do not wish to generate the console logs. 
let testing = true;

// the planted array houses all gardening updates. 
const planted = [
    {
        plot: "1",
        location: "C13",
        item: "Chocolate Mint",
        planted: "unknown date",
        harvest: "as needed",
        removed: ""
    },
    {
        plot: "1",
        location: "C12",
        item: "Chotolate Mint",
        planted: "unknown date",
        harvest: "as needed",
        removed: ""
    },
    {
        plot: "2",
        location: "S23?",
        item: "corn",
        planted: "unknown date",
        harvest: "NA... ants killed the whole plant",
        removed: ""
    }
];

// triggered by a button, shows only the content first visable upon page (DOM?) loading. 
function showHome() {
    homeSection.style.display = "contents";
    plot1Section.style.display = "none";
    plot2Section.style.display = "none";
    notesSection.style.display = "none";
}

// triggered by a button. shows only the content related to plot 1.
function showPlot1() {
    homeSection.style.display = "none";
    plot1Section.style.display = "contents";
    plot2Section.style.display = "none";
    notesSection.style.display = "none";
    displayPlot1Notes();
}

// triggered by a button. shows only the content related to plot 2.
function showPlot2() {
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "contents";
    notesSection.style.display = "none";
    displayPlot2Notes();
}

// triggered by a button, shows only the content in the Notes section.
function showNotes() {
    homeSection.style.display = "none";
    plot1Section.style.display = "none";
    plot2Section.style.display = "none";
    notesSection.style.display = "contents";
    displayNotes();
}

// displayNotes shows all entries of the planted array in a more reader friendly format. 
function displayNotes() {
    if (testing) {
        console.log("garden notes");
    };
    let len = planted.length;
    let text = "";
    for (let i = 0; i < len; i++) {
        text += "* " + planted[i].item + " was planted on " + planted[i].planted + " in Plot " + planted[i].plot + ", " + planted[i].location + 
        ". \n Estimated harvest is " + planted[i].harvest + ". \n \n";
    };
    gardenNotes.innerText = text;
}

// displayPlot1Notes is filtering only the entries that occur in plot 1 of the planted array and displaying those on the plot 1 section when the button is clicked.
function displayPlot1Notes() {
    let p1Filter = planted.filter(function(item) {
        return item.plot === "1";
    });
    let p1Len = p1Filter.length;
    let text = ""; 
    for (let i = 0; i < p1Len; i++) {
        text += "* " + p1Filter[i].item + " was planted on " + p1Filter[i].planted + " in " + p1Filter[i].location + 
        ". \n Estimated harvest is " + p1Filter[i].harvest + ". \n \n";
    };
    plot1Log.innerText = text;
    if (testing) {
        console.log("plot 1 notes");
        console.log(text);
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
        text += "* " + p2Filter[i].item + " was planted on " + p2Filter[i].planted + " in " + p2Filter[i].location + 
        ". \n Estimated harvest is " + p2Filter[i].harvest + ". \n \n";
    };
    plot2Log.innerText = text;
    if (testing) {
        console.log("plot 2 notes");
        console.log(text);
    };
}
